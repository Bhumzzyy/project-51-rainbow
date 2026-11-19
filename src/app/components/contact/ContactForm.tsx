'use client';

import React, { useState, useRef } from 'react';
import { ContactFormData, ContactFormErrors, FIELD_LIMITS } from './contact.config';
import { validateContactForm, buildWhatsAppUrl, openWhatsApp } from './whatsapp';
import { FormField } from './FormField';
import styles from './ContactPage.module.css';

const INITIAL_DATA: ContactFormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  subject: '',
  description: '',
  address: '',
};

type FormState = 'idle' | 'redirecting' | 'done' | 'error';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [formState, setFormState] = useState<FormState>('idle');
  const [whatsAppUrl, setWhatsAppUrl] = useState<string>('');
  const [statusMessage, setStatusMessage] = useState<string>('');

  // Field refs for focus management on validation failure
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const addressRef = useRef<HTMLTextAreaElement>(null);

  const fieldRefMap: Record<keyof ContactFormData, React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>> = {
    firstName: firstNameRef,
    lastName: lastNameRef,
    phone: phoneRef,
    email: emailRef,
    subject: subjectRef,
    description: descriptionRef,
    address: addressRef,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error as user edits
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Client-side validation
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    const errorKeys = Object.keys(validationErrors) as (keyof ContactFormData)[];
    if (errorKeys.length > 0) {
      const firstErrorKey = errorKeys[0];
      const targetRef = fieldRefMap[firstErrorKey]?.current;
      targetRef?.focus();
      setStatusMessage('Please fix the highlighted errors before sending.');
      return;
    }

    // 2. Build URL
    let url = '';
    try {
      url = buildWhatsAppUrl(formData);
      setWhatsAppUrl(url);
    } catch {
      setFormState('error');
      setStatusMessage('Unable to build the message. Please check your details and try again.');
      return;
    }

    // 3. Open WhatsApp synchronously from user event (prevents popup blocker)
    setFormState('redirecting');
    setStatusMessage('Opening WhatsApp...');

    const { opened, isMobile } = openWhatsApp(url);

    // Provide friendly confirmation state
    setTimeout(() => {
      setFormState('done');
      if (opened) {
        setStatusMessage(
          isMobile
            ? 'Redirecting to WhatsApp...'
            : 'WhatsApp is opening in a new tab with your message. Tap Send there to finish.'
        );
      } else {
        setStatusMessage(
          'Your browser may have blocked the new tab. Please click the button below to open WhatsApp.'
        );
      }
    }, 800);
  };

  const handleEdit = () => {
    setFormState('idle');
    setStatusMessage('');
  };

  const handleReset = () => {
    setFormData(INITIAL_DATA);
    setErrors({});
    setWhatsAppUrl('');
    setFormState('idle');
    setStatusMessage('');
  };

  return (
    <div className={styles.formCard}>
      {/* Live Region for Screen Readers */}
      <div className="sr-only" aria-live="polite" role="status">
        {statusMessage}
      </div>

      {formState === 'done' ? (
        <div className={styles.doneContainer}>
          <div className={styles.doneIconWrap}>
            <svg
              className={styles.doneIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h2 className={styles.doneTitle}>Almost There!</h2>
          <p className={styles.doneText}>
            WhatsApp is opening with your formatted message ready. <strong>Tap &quot;Send&quot;</strong> in WhatsApp to finish your enquiry.
          </p>

          <div className={styles.doneActions}>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              Open WhatsApp Now
              <span className={styles.buttonArrow} aria-hidden="true">→</span>
            </a>

            <button
              type="button"
              onClick={handleEdit}
              className={styles.secondaryButton}
            >
              Edit Details
            </button>

            <button
              type="button"
              onClick={handleReset}
              className={styles.textButton}
            >
              Start a new message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className={styles.formElement}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Send an Enquiry</h2>
            <p className={styles.formSubtitle}>
              Fill in your details below. We will format everything and open WhatsApp with your message ready to send.
            </p>
          </div>

          {formState === 'error' && (
            <div className={styles.errorBanner} role="alert">
              <p>{statusMessage}</p>
              {whatsAppUrl && (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.fallbackLink}
                >
                  Click here to open WhatsApp directly →
                </a>
              )}
            </div>
          )}

          <div className={styles.formGrid}>
            <div className={styles.gridRowTwo}>
              <FormField
                ref={firstNameRef}
                id="firstName"
                name="firstName"
                label="First Name"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                placeholder="e.g. Aarav"
                maxLength={FIELD_LIMITS.firstName}
                autoComplete="given-name"
                required
              />

              <FormField
                ref={lastNameRef}
                id="lastName"
                name="lastName"
                label="Last Name"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                placeholder="e.g. Patel"
                maxLength={FIELD_LIMITS.lastName}
                autoComplete="family-name"
                required
              />
            </div>

            <div className={styles.gridRowTwo}>
              <FormField
                ref={phoneRef}
                id="phone"
                name="phone"
                label="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                placeholder="+91 98765 43210"
                maxLength={FIELD_LIMITS.phone}
                autoComplete="tel"
                required
              />

              <FormField
                ref={emailRef}
                id="email"
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="name@example.com"
                maxLength={FIELD_LIMITS.email}
                autoComplete="email"
                required
              />
            </div>

            <FormField
              ref={subjectRef}
              id="subject"
              name="subject"
              label="Subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
              placeholder="e.g. Catering Enquiry / Bulk Order / General Feedback"
              maxLength={FIELD_LIMITS.subject}
              required
            />

            <FormField
              ref={descriptionRef}
              id="description"
              name="description"
              label="Message Description"
              isTextArea
              rows={4}
              value={formData.description}
              onChange={handleChange}
              error={errors.description}
              placeholder="Tell us about your occasion, event date, dessert preferences, or questions..."
              maxLength={FIELD_LIMITS.description}
              required
            />

            <FormField
              ref={addressRef}
              id="address"
              name="address"
              label="Your Location / Address"
              isTextArea
              rows={2}
              value={formData.address}
              onChange={handleChange}
              error={errors.address}
              placeholder="Area / City (e.g. Adajan, Surat, Gujarat)"
              maxLength={FIELD_LIMITS.address}
              autoComplete="street-address"
              required
            />
          </div>

          <div className={styles.submitSection}>
            <button
              type="submit"
              disabled={formState === 'redirecting'}
              className={styles.submitButton}
            >
              <span>{formState === 'redirecting' ? 'Opening WhatsApp...' : 'Continue to WhatsApp'}</span>
              <svg
                className={styles.submitArrowIcon}
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </button>

          
          </div>
        </form>
      )}
    </div>
  );
}
