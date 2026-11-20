import { FormConfig } from './ContactForm';

/**
 * Configuration for the Investor Enquiry form on /investors.
 */
export const INVESTOR_FORM_CONFIG: FormConfig = {
  idPrefix: 'investor',
  title: 'Investor Enquiries',
  subtitle:
    'Connect with our leadership team regarding investment partnerships, franchise expansion, and growth initiatives.',
  whatsAppGreeting: "Hello 51 Rainbow! I'm interested in investment opportunities.",
  subjectPlaceholder: 'e.g. Equity Partnership / Expansion Funding / Store Portfolio',
  descriptionPlaceholder: 'Tell us about your investment background, proposed scope, or questions...',
  addressPlaceholder: 'City / State / Country (e.g. Mumbai, Maharashtra)',
  submitButtonText: 'Continue to WhatsApp',
  doneTitle: 'Almost There!',
  doneSubtitle:
    'WhatsApp is opening with your formatted investor enquiry. Tap "Send" in WhatsApp to finish.',
};

/**
 * Configuration for the Career Application form on /career.
 */
export const CAREER_FORM_CONFIG: FormConfig = {
  idPrefix: 'career',
  title: 'Careers at 51 Rainbow',
  subtitle:
    'Submit your details below to connect with our talent team directly on WhatsApp.',
  whatsAppGreeting: "Hello 51 Rainbow! I'd like to apply for a career opportunity.",
  subjectPlaceholder: 'e.g. Store Manager / Artisan Chef / Marketing Specialist',
  descriptionPlaceholder: 'Briefly describe your experience, skills, and why you would like to join 51 Rainbow...',
  addressPlaceholder: 'Your Current Location (e.g. Surat, Gujarat)',
  submitButtonText: 'Apply via WhatsApp',
  doneTitle: 'Almost There!',
  doneSubtitle:
    'WhatsApp is opening with your application details. Open WhatsApp and attach your CV there before sending.',
  extraNotice: 'Open WhatsApp and attach your CV there before sending.',
};
