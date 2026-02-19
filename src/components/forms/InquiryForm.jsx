import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import CTAButton from '../primitives/CTAButton';
import { makeFadeUp } from '../../utils/motion';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  eventDate: '',
  guestCount: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9()\-\s]{7,}$/;

function InquiryForm({ id = 'inquiry-form' }) {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fieldDefs = useMemo(
    () => [
      { key: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
      { key: 'email', label: 'Email', type: 'email', placeholder: 'name@email.com' },
      { key: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 (000) 000-0000' },
      { key: 'eventDate', label: 'Event Date', type: 'date', placeholder: '' },
      { key: 'guestCount', label: 'Guest Count', type: 'number', placeholder: '120', min: 1 },
    ],
    [],
  );

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter at least 2 characters.';
    }

    if (!emailPattern.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!phonePattern.test(formData.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.eventDate) {
      nextErrors.eventDate = 'Please select an event date.';
    }

    if (!formData.guestCount || Number(formData.guestCount) < 1) {
      nextErrors.guestCount = 'Guest count must be at least 1.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 20) {
      nextErrors.message = 'Please write at least 20 characters.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setErrors({});
    setFormData(initialState);
  };

  return (
    <motion.form
      id={id}
      className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2"
      onSubmit={handleSubmit}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      noValidate
    >
      {fieldDefs.map((field) => (
        <label key={field.key} className="text-left text-sm text-textBody">
          <span className="mb-3 block text-[13px] uppercase tracking-[0.16em] text-textMuted">{field.label}</span>
          <input
            className="input-line transition-all duration-300"
            type={field.type}
            name={field.key}
            value={formData[field.key]}
            onChange={handleChange}
            placeholder={field.placeholder}
            min={field.min}
            aria-invalid={errors[field.key] ? 'true' : 'false'}
            aria-describedby={errors[field.key] ? `${field.key}-error` : undefined}
          />
          {errors[field.key] ? (
            <span id={`${field.key}-error`} className="mt-2 block text-xs text-[#a35f4d]">
              {errors[field.key]}
            </span>
          ) : null}
        </label>
      ))}

      <label className="text-left text-sm text-textBody md:col-span-2">
        <span className="mb-3 block text-[13px] uppercase tracking-[0.16em] text-textMuted">Message</span>
        <textarea
          className="input-line min-h-28 resize-none transition-all duration-300"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us your atmosphere, cuisine, and guest experience vision."
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message ? (
          <span id="message-error" className="mt-2 block text-xs text-[#a35f4d]">
            {errors.message}
          </span>
        ) : null}
      </label>

      <div className="md:col-span-2 text-center">
        <button
          type="submit"
          className="rounded-full bg-accent px-10 py-3 text-[12px] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-accentDark"
        >
          Send Message
        </button>
      </div>

      {isSubmitted ? (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
          className="md:col-span-2 text-center text-[14px] uppercase tracking-[0.18em] text-accent"
        >
          Inquiry sent. Our concierge team will contact you shortly.
        </motion.p>
      ) : null}

      <div className="md:col-span-2 text-center">
        <CTAButton to="/venue" variant="ghost" className="mt-2">
          Explore Venue Spaces
        </CTAButton>
      </div>
    </motion.form>
  );
}

export default InquiryForm;
