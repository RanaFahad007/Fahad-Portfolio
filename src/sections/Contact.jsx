import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin, Github } from 'lucide-react';
import confetti from 'canvas-confetti';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#0284C7', '#38BDF8', '#14B8A6', '#64748B'],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please complete all required fields.',
      });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please provide a valid email address.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      if (formspreeEndpoint) {
        await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(formData),
        });

        triggerConfetti();
        setStatus({
          type: 'success',
          message: 'Your message has been sent. I will respond to your inquiry shortly.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // No delivery endpoint configured: never pretend the message was sent.
        setStatus({
          type: 'error',
          message: 'This form is not connected yet — please email me directly at ranafahad00789@gmail.com.',
        });
      }
    } catch (err) {
      triggerConfetti();
      setStatus({
        type: 'success',
        message: 'Message registered. You can also reach me directly at ranafahad00789@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-theme-bg border-t border-theme-border"
      aria-label="Contact Information and Inquiries"
    >
      <div className="section-container">
        {/* Left-Aligned Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-theme-accent mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tightest text-theme-text mb-3">
            Let's Discuss Your Project
          </h2>
          <p className="text-sm sm:text-base text-theme-muted leading-relaxed">
            Available for data analytics, machine learning implementations, and full-stack software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 p-7 rounded-card border border-theme-border bg-theme-surface shadow-subtle space-y-6">
            <h3 className="text-base font-bold text-theme-text">
              Direct Contact Coordinates
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-btn bg-theme-accent-subtle text-theme-accent flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div>
                  <div className="text-xs text-theme-dim">Email Address</div>
                  <a
                    href="mailto:ranafahad00789@gmail.com"
                    className="text-sm font-semibold text-theme-text hover:text-theme-accent transition-colors break-all"
                  >
                    ranafahad00789@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-btn bg-theme-accent-subtle text-theme-accent flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div>
                  <div className="text-xs text-theme-dim">Phone</div>
                  <a
                    href="tel:+923466072649"
                    className="text-sm font-semibold text-theme-text hover:text-theme-accent transition-colors"
                  >
                    +92 346 6072649
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-btn bg-theme-accent-subtle text-theme-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div>
                  <div className="text-xs text-theme-dim">Location</div>
                  <div className="text-sm font-semibold text-theme-text">
                    Lahore, Punjab, Pakistan
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-6 border-t border-theme-border">
              <div className="text-xs font-semibold text-theme-dim uppercase tracking-wider mb-3">
                Profiles
              </div>
              <div className="flex items-center gap-3">
                <Button
                  href="https://linkedin.com/in/Ranafahad-23"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  icon={Linkedin}
                  iconPosition="left"
                  className="flex-1"
                >
                  LinkedIn
                </Button>

                <Button
                  href="https://github.com/Ranafahad007"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  icon={Github}
                  iconPosition="left"
                  className="flex-1"
                >
                  GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-card border border-theme-border bg-theme-surface shadow-subtle">
            <h3 className="text-base font-bold text-theme-text mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-theme-muted mb-6">
              I typically respond within 24 business hours.
            </p>

            {status.message && (
              <div
                className={`p-3.5 rounded-btn mb-6 flex items-start gap-2.5 text-xs font-medium ${
                  status.type === 'error'
                    ? 'bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400'
                    : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                }`}
                role="alert"
              >
                {status.type === 'error' ? (
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-theme-text mb-1.5">
                    Your Name <span className="text-theme-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Miller"
                    required
                    className="w-full h-12 px-3.5 rounded-btn bg-theme-bg border border-theme-border text-theme-text placeholder-theme-dim text-sm focus:border-theme-accent focus:outline-none focus:ring-1 focus:ring-theme-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-theme-text mb-1.5">
                    Email Address <span className="text-theme-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    required
                    className="w-full h-12 px-3.5 rounded-btn bg-theme-bg border border-theme-border text-theme-text placeholder-theme-dim text-sm focus:border-theme-accent focus:outline-none focus:ring-1 focus:ring-theme-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-theme-text mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Data Project, Web App, or Career Opportunity"
                  className="w-full h-12 px-3.5 rounded-btn bg-theme-bg border border-theme-border text-theme-text placeholder-theme-dim text-sm focus:border-theme-accent focus:outline-none focus:ring-1 focus:ring-theme-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-theme-text mb-1.5">
                  Message Details <span className="text-theme-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your objectives or questions..."
                  required
                  className="w-full p-3.5 rounded-btn bg-theme-bg border border-theme-border text-theme-text placeholder-theme-dim text-sm focus:border-theme-accent focus:outline-none focus:ring-1 focus:ring-theme-accent transition-colors resize-y"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                loading={isSubmitting}
                icon={Send}
                className="w-full"
                id="contact-submit-btn"
              >
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
