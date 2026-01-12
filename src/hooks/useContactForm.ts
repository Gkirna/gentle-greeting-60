import { useState } from 'react';
import type { ContactFormData } from '@/types/marketing';

const SUPABASE_URL = 'https://scfgwjnhhfdmvezhkipt.supabase.co';

interface UseContactFormResult {
  submitForm: (data: ContactFormData) => Promise<{ success: boolean; id?: string; error?: string }>;
  isSubmitting: boolean;
  error: string | null;
}

export function useContactForm(): UseContactFormResult {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (
    data: ContactFormData
  ): Promise<{ success: boolean; id?: string; error?: string }> => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/submit-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = result.error || 'Failed to submit form';
        setError(errorMessage);
        return { success: false, error: errorMessage };
      }

      return { success: true, id: result.id };
    } catch (err) {
      const errorMessage = 'Network error. Please try again.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
    error,
  };
}
