/**
 * Contact & WhatsApp configuration for 51 Rainbow.
 * Official WhatsApp Number: +91 96248 00051 (international digits-only: 919624800051)
 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '') || '919624800051';

export const FIELD_LIMITS = {
  firstName: 50,
  lastName: 50,
  phone: 20,
  email: 80,
  subject: 100,
  description: 600,
  address: 250,
} as const;

export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  subject: string;
  description: string;
  address: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
