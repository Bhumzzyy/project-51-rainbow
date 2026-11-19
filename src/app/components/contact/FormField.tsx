import React, { forwardRef } from 'react';
import styles from './ContactPage.module.css';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel';
  isTextArea?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  placeholder?: string;
  maxLength?: number;
  autoComplete?: string;
  rows?: number;
  required?: boolean;
}

export const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  (
    {
      id,
      name,
      label,
      type = 'text',
      isTextArea = false,
      value,
      onChange,
      error,
      placeholder,
      maxLength,
      autoComplete,
      rows = 4,
      required = true,
    },
    ref
  ) => {
    const errorId = `${id}-error`;

    return (
      <div className={styles.fieldWrapper}>
        <div className={styles.labelRow}>
          <label htmlFor={id} className={styles.fieldLabel}>
            {label}
            {required && <span className={styles.requiredStar} aria-hidden="true"> *</span>}
          </label>
          {maxLength && (
            <span className={styles.charCount} aria-hidden="true">
              {value.length}/{maxLength}
            </span>
          )}
        </div>

        {isTextArea ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            rows={rows}
            required={required}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={`${styles.input} ${styles.textarea} ${error ? styles.inputError : ''}`}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            maxLength={maxLength}
            autoComplete={autoComplete}
            required={required}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            className={`${styles.input} ${error ? styles.inputError : ''}`}
          />
        )}

        {error && (
          <p id={errorId} className={styles.fieldError} role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
