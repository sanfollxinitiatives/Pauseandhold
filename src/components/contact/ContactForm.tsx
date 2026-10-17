'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Please share your name (at least 2 characters)'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  weddingDate: z.string().optional(),
  weddingLocation: z.string().optional(),
  service: z.enum(
    [
      'wedding-photography',
      'wedding-films',
      'photography-and-films',
      'pre-wedding',
      'other',
    ],
    {
      message: 'Please select a service option',
    }
  ),
  message: z.string().min(10, 'Please write a brief note (at least 10 characters)'),
  honeypot: z.string().max(0, 'Spam detected').optional(), // Anti-spam bot field
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [submissionState, setSubmissionState] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      weddingDate: '',
      weddingLocation: '',
      service: 'wedding-photography',
      message: '',
      honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // If bot filled the honeypot field, stop silently
    if (data.honeypot && data.honeypot.length > 0) {
      return;
    }

    setSubmissionState('submitting');

    // Simulate reliable network request in demo mode without fabricating fake mail dispatch
    await new Promise((resolve) => setTimeout(resolve, 900));

    // Clearly track the demo submission state ready for future API route / server action
    setSubmittedData(data);
    setSubmissionState('success');
  };

  const handleResetForm = () => {
    reset();
    setSubmittedData(null);
    setSubmissionState('idle');
  };

  return (
    <div className="bg-[#F8F6EF] rounded-3xl border border-[#E4E2D8] p-6 sm:p-10 lg:p-12 shadow-sm">
      {/* Demo mode status notice */}
      <div className="mb-8 p-4 rounded-2xl bg-[#EEEDE5]/70 border border-[#E4E2D8] flex items-start gap-3 text-xs text-[#575A51]">
        <span className="w-2 h-2 rounded-full bg-[#53664B] mt-1.5 shrink-0" />
        <p>
          <strong className="font-semibold text-[#292C25]">Local Demo Mode:</strong> Forms validate fully and demonstrate client success states. No external email server is connected until you configure your production email credentials.
        </p>
      </div>

      {submissionState === 'success' ? (
        <div
          role="status"
          aria-live="polite"
          className="text-center py-10 space-y-5 animate-in fade-in duration-500"
        >
          <div className="w-16 h-16 rounded-full bg-[#53664B]/10 text-[#53664B] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-light text-[#292C25]">
            Thank You, {submittedData?.name}
          </h3>
          <p className="text-sm sm:text-base text-[#575A51] font-light max-w-md mx-auto leading-relaxed">
            Your enquiry demonstration was successful. When connected to your email backend, an alert will be sent immediately to Pause & Hold.
          </p>
          <div className="p-4 rounded-2xl bg-[#EEEDE5]/60 border border-[#E4E2D8] max-w-sm mx-auto text-left text-xs text-[#575A51] space-y-1">
            <p><strong>Service:</strong> {submittedData?.service}</p>
            {submittedData?.weddingDate && <p><strong>Date:</strong> {submittedData?.weddingDate}</p>}
            {submittedData?.weddingLocation && <p><strong>Location:</strong> {submittedData?.weddingLocation}</p>}
          </div>
          <div className="pt-4">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleResetForm}
            >
              Send Another Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-6"
          aria-label="Enquiry Form"
        >
          {/* Honeypot field for bot protection (visually hidden) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_field">Leave this empty</label>
            <input
              id="hp_field"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register('honeypot')}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs font-semibold tracking-wider text-[#292C25] uppercase"
              >
                Your Names <span className="text-[#53664B]">*</span>
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="e.g. Sarah & Oliver"
                {...register('name')}
                className={`w-full px-4 py-3.5 rounded-2xl bg-[#EEEDE5]/50 border text-sm text-[#292C25] placeholder:text-[#575A51]/50 focus:outline-none focus:ring-2 focus:ring-[#53664B] transition-all ${
                  errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E4E2D8]'
                }`}
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-xs font-semibold tracking-wider text-[#292C25] uppercase"
              >
                Email Address <span className="text-[#53664B]">*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                placeholder="you@domain.com"
                {...register('email')}
                className={`w-full px-4 py-3.5 rounded-2xl bg-[#EEEDE5]/50 border text-sm text-[#292C25] placeholder:text-[#575A51]/50 focus:outline-none focus:ring-2 focus:ring-[#53664B] transition-all ${
                  errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E4E2D8]'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Phone (optional) */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-xs font-semibold tracking-wider text-[#292C25] uppercase"
              >
                Phone Number <span className="text-[#575A51] font-normal text-[11px]">(Optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+1 (555) 000-0000"
                {...register('phone')}
                className="w-full px-4 py-3.5 rounded-2xl bg-[#EEEDE5]/50 border border-[#E4E2D8] text-sm text-[#292C25] placeholder:text-[#575A51]/50 focus:outline-none focus:ring-2 focus:ring-[#53664B] transition-all"
              />
            </div>

            {/* Wedding Date (optional) */}
            <div className="space-y-2">
              <label
                htmlFor="weddingDate"
                className="block text-xs font-semibold tracking-wider text-[#292C25] uppercase"
              >
                Estimated Wedding Date <span className="text-[#575A51] font-normal text-[11px]">(Optional)</span>
              </label>
              <input
                id="weddingDate"
                type="text"
                placeholder="e.g. Autumn 2026 or Oct 14, 2026"
                {...register('weddingDate')}
                className="w-full px-4 py-3.5 rounded-2xl bg-[#EEEDE5]/50 border border-[#E4E2D8] text-sm text-[#292C25] placeholder:text-[#575A51]/50 focus:outline-none focus:ring-2 focus:ring-[#53664B] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Wedding Location (optional) */}
            <div className="space-y-2">
              <label
                htmlFor="weddingLocation"
                className="block text-xs font-semibold tracking-wider text-[#292C25] uppercase"
              >
                Venue or Destination <span className="text-[#575A51] font-normal text-[11px]">(Optional)</span>
              </label>
              <input
                id="weddingLocation"
                type="text"
                placeholder="City, Country, or Venue name"
                {...register('weddingLocation')}
                className="w-full px-4 py-3.5 rounded-2xl bg-[#EEEDE5]/50 border border-[#E4E2D8] text-sm text-[#292C25] placeholder:text-[#575A51]/50 focus:outline-none focus:ring-2 focus:ring-[#53664B] transition-all"
              />
            </div>

            {/* Service Choice */}
            <div className="space-y-2">
              <label
                htmlFor="service"
                className="block text-xs font-semibold tracking-wider text-[#292C25] uppercase"
              >
                Service Desired <span className="text-[#53664B]">*</span>
              </label>
              <select
                id="service"
                {...register('service')}
                className="w-full px-4 py-3.5 rounded-2xl bg-[#EEEDE5]/50 border border-[#E4E2D8] text-sm text-[#292C25] focus:outline-none focus:ring-2 focus:ring-[#53664B] transition-all"
              >
                <option value="wedding-photography">Wedding Photography</option>
                <option value="wedding-films">Wedding Films</option>
                <option value="photography-and-films">Both Photography & Cinema</option>
                <option value="pre-wedding">Pre-Wedding / Engagement Session</option>
                <option value="other">Other Bespoke Enquiry</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-xs font-semibold tracking-wider text-[#292C25] uppercase"
            >
              Tell Us About Your Celebration <span className="text-[#53664B]">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              placeholder="Tell us what you are envisioning, what matters most to you, and any details you would love to share..."
              {...register('message')}
              className={`w-full px-4 py-3.5 rounded-2xl bg-[#EEEDE5]/50 border text-sm text-[#292C25] placeholder:text-[#575A51]/50 focus:outline-none focus:ring-2 focus:ring-[#53664B] transition-all resize-y ${
                errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#E4E2D8]'
              }`}
            />
            {errors.message && (
              <p id="message-error" className="text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <Button
              type="submit"
              size="lg"
              variant="primary"
              disabled={submissionState === 'submitting'}
              className="w-full sm:w-auto"
            >
              {submissionState === 'submitting' ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending Enquiry...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Your Enquiry
                  <Send className="w-3.5 h-3.5" />
                </span>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
