import { ContactFormData, ContactFormErrors, FIELD_LIMITS, WHATSAPP_NUMBER } from './contact.config';

/**
 * Strips ASCII control characters (excluding tab and newline) from user input.
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  // Remove control characters from \x00-\x08, \x0B, \x0C, \x0E-\x1F, \x7F
  return input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '').trim();
}

/**
 * Validates Indian & international phone numbers.
 * Disallows letters, requires at least 10 digits, allows +, -, spaces, parentheses.
 */
export function validatePhone(phone: string): boolean {
  const trimmed = phone.trim();
  // Reject letters or invalid characters
  if (/[a-zA-Z]/.test(trimmed)) return false;
  if (!/^[+]?[\d\s\-()]+$/.test(trimmed)) return false;
  const digitsOnly = trimmed.replace(/\D/g, '');
  // Standard Indian mobile is 10 digits, or with 91 prefix (12 digits), or international 10-15 digits
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

/**
 * Validates standard email address format.
 */
export function validateEmail(email: string): boolean {
  const trimmed = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed);
}

/**
 * Validates all fields of the contact form.
 */
export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  // First Name
  const firstName = data.firstName.trim();
  if (!firstName) {
    errors.firstName = 'First name is required.';
  } else if (firstName.length > FIELD_LIMITS.firstName) {
    errors.firstName = `First name can be up to ${FIELD_LIMITS.firstName} characters.`;
  }

  // Last Name
  const lastName = data.lastName.trim();
  if (!lastName) {
    errors.lastName = 'Last name is required.';
  } else if (lastName.length > FIELD_LIMITS.lastName) {
    errors.lastName = `Last name can be up to ${FIELD_LIMITS.lastName} characters.`;
  }

  // Phone
  const phone = data.phone.trim();
  if (!phone) {
    errors.phone = 'Phone number is required.';
  } else if (phone.length > FIELD_LIMITS.phone) {
    errors.phone = `Phone number can be up to ${FIELD_LIMITS.phone} characters.`;
  } else if (!validatePhone(phone)) {
    errors.phone = 'Please enter a valid phone number (e.g. +91 98765 43210 or 10 digits).';
  }

  // Email
  const email = data.email.trim();
  if (!email) {
    errors.email = 'Email address is required.';
  } else if (email.length > FIELD_LIMITS.email) {
    errors.email = `Email address can be up to ${FIELD_LIMITS.email} characters.`;
  } else if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  // Subject
  const subject = data.subject.trim();
  if (!subject) {
    errors.subject = 'Subject is required.';
  } else if (subject.length > FIELD_LIMITS.subject) {
    errors.subject = `Subject can be up to ${FIELD_LIMITS.subject} characters.`;
  }

  // Description / Message
  const description = data.description.trim();
  if (!description) {
    errors.description = 'Message description is required.';
  } else if (description.length > FIELD_LIMITS.description) {
    errors.description = `Message description can be up to ${FIELD_LIMITS.description} characters.`;
  }

  // Address
  const address = data.address.trim();
  if (!address) {
    errors.address = 'Address is required.';
  } else if (address.length > FIELD_LIMITS.address) {
    errors.address = `Address can be up to ${FIELD_LIMITS.address} characters.`;
  }

  return errors;
}

/**
 * Builds the plain-text WhatsApp formatted message string.
 */
export function buildWhatsAppMessage(data: ContactFormData): string {
  const fName = sanitizeInput(data.firstName);
  const lName = sanitizeInput(data.lastName);
  const phone = sanitizeInput(data.phone);
  const email = sanitizeInput(data.email);
  const subject = sanitizeInput(data.subject);
  const description = sanitizeInput(data.description);
  const address = sanitizeInput(data.address);

  return [
    "Hello 51 Rainbow! I'd like to get in touch.",
    '',
    `*Name:* ${fName} ${lName}`,
    `*Phone:* ${phone}`,
    `*Email:* ${email}`,
    `*Subject:* ${subject}`,
    '',
    '*Message:*',
    description,
    '',
    '*Address:*',
    address,
  ].join('\n');
}

/**
 * Builds the complete https://wa.me URL with encoded message text.
 */
export function buildWhatsAppUrl(data: ContactFormData, numberOverride?: string): string {
  const cleanNumber = (numberOverride || WHATSAPP_NUMBER).replace(/\D/g, '');
  const message = buildWhatsAppMessage(data);
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Synchronously navigates or opens WhatsApp without async delays.
 * Returns true if window opening succeeded, false if popup blocked or unavailable.
 */
export function openWhatsApp(url: string): { opened: boolean; isMobile: boolean } {
  if (typeof window === 'undefined') {
    return { opened: false, isMobile: false };
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  if (isMobile) {
    window.location.href = url;
    return { opened: true, isMobile: true };
  }

  try {
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    const opened = !!(win && !win.closed);
    return { opened, isMobile: false };
  } catch {
    return { opened: false, isMobile: false };
  }
}
