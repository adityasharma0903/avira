import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Send,
  Building2,
  Mail,
  User,
  Phone,
  MessageSquare,
  HelpCircle,
  Package,
  Layers,
  ChevronRight,
  Check,
  ShieldCheck,
} from 'lucide-react';
import { Button, Header, Footer } from './elements';

const orderVolumeOptions = [
  { id: 'starter', label: '100 – 500 / mo', sub: 'Starter Pilot' },
  { id: 'growth', label: '500 – 2,500 / mo', sub: 'Growing DTC' },
  { id: 'scale', label: '2,500 – 10,000 / mo', sub: 'High Volume' },
  { id: 'enterprise', label: '10,000+ / mo', sub: 'Enterprise' },
];

const interestOptions = [
  'Gift Box QR Inserts',
  'Customer UGC & Reviews',
  'Friend Referral Rewards',
  'Repeat Order Discounts',
  'Custom Card Printing & Packaging',
  'Other / General Query',
];

// Configure your FormSubmit.co recipient email:
const FORMSUBMIT_EMAIL = 'avira.d2c@gmail.com';

export default function StartFreePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    brandName: '',
    website: '',
    monthlyOrders: 'growth',
    interests: ['Gift Box QR Inserts', 'Customer UGC & Reviews'],
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const toggleInterest = (interest) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter((i) => i !== interest) };
      }
      return { ...prev, interests: [...prev.interests, interest] };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.brandName) {
      alert('Please fill in your name, email, and brand name.');
      return;
    }

    setIsSubmitting(true);

    const generatedTicket = `AVR-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);

    const volumeLabel =
      orderVolumeOptions.find((o) => o.id === formData.monthlyOrders)?.label ||
      formData.monthlyOrders;

    const payload = {
      'Ticket ID': generatedTicket,
      'Full Name': formData.fullName,
      'Work Email': formData.email,
      'Phone / WhatsApp': formData.phone || 'Not provided',
      'Brand / Store': formData.brandName,
      'Website / Social': formData.website || 'Not provided',
      'Monthly Delivered Orders': volumeLabel,
      'Interests / Requirements': formData.interests.join(', ') || 'General Pilot',
      'Query / Message': formData.message || 'No additional message provided',
      _subject: `New AVIRA Pilot Request: ${formData.brandName} (${formData.fullName}) [#${generatedTicket}]`,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      // Send real email via FormSubmit.co AJAX endpoint
      await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn('FormSubmit notification (saved locally as backup):', err);
    }

    // Persist inquiry in browser localStorage as backup
    try {
      const existing = JSON.parse(localStorage.getItem('avira_inquiries') || '[]');
      existing.push({
        ...formData,
        ticketId: generatedTicket,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('avira_inquiries', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage save error:', err);
    }

    setIsSubmitting(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-shell start-free-shell">
      <Header dark={false} />

      <main className="start-free-main">
        <section className="start-free-hero">
          <div className="start-free-hero-copy">
            <span className="eyebrow">START FREE PILOT · INQUIRY & ONBOARDING</span>
            <h1>
              Bring every package<br />
              to life with <i>AVIRA.</i>
            </h1>
            <p>
              Have a question or ready to launch your brand pilot? Tell us about your
              packaging and requirements. Our brand onboarding team will reach out with
              sample designs, QR card templates, and pilot access within 24 hours.
            </p>

            <div className="hero-trust-pills">
              <span className="trust-pill"><ShieldCheck size={14} /> 14-day free pilot access</span>
              <span className="trust-pill"><Check size={14} /> Sample QR cards provided</span>
              <span className="trust-pill"><Sparkles size={14} /> No developer setup required</span>
            </div>
          </div>
        </section>

        <section className="start-free-content-grid">
          {/* Left Column: Context & Brand Support Info */}
          <div className="start-free-sidebar">
            <div className="info-card highlight-card">
              <span className="info-card-tag">WHAT HAPPENS NEXT</span>
              <h3>Quick & seamless onboarding</h3>
              <ol className="onboarding-steps-list">
                <li>
                  <strong>1. Review & consultation</strong>
                  <span>We evaluate your brand, current unboxing setup, and customer volume.</span>
                </li>
                <li>
                  <strong>2. Card template customization</strong>
                  <span>Receive custom packaging insert designs tailored to your gift boxes.</span>
                </li>
                <li>
                  <strong>3. Live pilot deployment</strong>
                  <span>Track scans, customer UGC, and repeat orders in real time.</span>
                </li>
              </ol>
            </div>

            <div className="info-card">
              <span className="info-card-tag">DIRECT ASSISTANCE</span>
              <h4>Prefer direct contact?</h4>
              <p>Our team is available for brand partnerships and bespoke packaging design requests.</p>
              <div className="contact-meta-row">
                <Mail size={16} />
                <span>avira.d2c@gmail.com</span>
              </div>
              <div className="contact-meta-row">
                <Building2 size={16} />
                <span>Available Mon – Sat, 9:00 AM – 7:00 PM IST</span>
              </div>
            </div>

            <div className="info-card sample-preview-card">
              <span className="info-card-tag">EXPLORE IN THE MEANTIME</span>
              <h4>Explore our packaging library</h4>
              <p>Browse ready-to-use gift box insert cards with pre-configured rewards and QR codes.</p>
              <Button variant="lightOutline" size="sm" asChild className="mt-3">
                <Link to="/templates">
                  Browse Insert Templates <ArrowRight size={13} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Interactive Query & Pilot Form */}
          <div className="start-free-form-container">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="inquiry-success-card"
                >
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={54} />
                  </div>
                  <span className="eyebrow">INQUIRY RECEIVED</span>
                  <h2>Thank you, {formData.fullName.split(' ')[0]}!</h2>
                  <p className="success-lead">
                    Your details and query for <strong>{formData.brandName}</strong> have been
                    successfully submitted to our team.
                  </p>

                  <div className="ticket-badge-box">
                    <div>
                      <small>REFERENCE TICKET</small>
                      <strong>#{ticketId}</strong>
                    </div>
                    <div>
                      <small>REPLY SENT TO</small>
                      <span>{formData.email}</span>
                    </div>
                  </div>

                  <div className="success-checklist">
                    <div className="checklist-item">
                      <Check size={16} className="text-forest" />
                      <span>Our packaging team will review your requirements.</span>
                    </div>
                    <div className="checklist-item">
                      <Check size={16} className="text-forest" />
                      <span>You will receive custom QR card mockups within 24 hours.</span>
                    </div>
                    <div className="checklist-item">
                      <Check size={16} className="text-forest" />
                      <span>Free pilot account credentials will be emailed directly.</span>
                    </div>
                  </div>

                  <div className="success-actions">
                    <Button variant="default" asChild>
                      <Link to="/templates">
                        Browse Gift Box Templates <ArrowUpRight />
                      </Link>
                    </Button>
                    <Button
                      variant="lightOutline"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          brandName: '',
                          website: '',
                          monthlyOrders: 'growth',
                          interests: ['Gift Box QR Inserts'],
                          message: '',
                        });
                      }}
                    >
                      Submit Another Query
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="inquiry-form"
                >
                  <div className="form-header">
                    <h3>Get in touch & start pilot</h3>
                    <p>Fill out the form below. We read and respond to every inquiry.</p>
                  </div>

                  {/* Personal & Brand Information */}
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="fullName">
                        <User size={13} /> Your Name <i>*</i>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        placeholder="e.g. Aditya Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        <Mail size={13} /> Work Email <i>*</i>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="name@yourbrand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="brandName">
                        <Building2 size={13} /> Brand / Store Name <i>*</i>
                      </label>
                      <input
                        id="brandName"
                        type="text"
                        required
                        placeholder="e.g. Livique Botanicals"
                        value={formData.brandName}
                        onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="website">
                        Website / Instagram URL <small>(Optional)</small>
                      </label>
                      <input
                        id="website"
                        type="text"
                        placeholder="e.g. www.yourbrand.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <Phone size={13} /> Phone / WhatsApp <small>(Optional for quick updates)</small>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Monthly Volume Selection */}
                  <div className="form-group">
                    <label>
                      <Package size={13} /> Estimated Monthly Delivered Orders
                    </label>
                    <div className="volume-options-grid">
                      {orderVolumeOptions.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          className={`volume-pill-btn ${formData.monthlyOrders === opt.id ? 'is-selected' : ''}`}
                          onClick={() => setFormData({ ...formData, monthlyOrders: opt.id })}
                        >
                          <strong>{opt.label}</strong>
                          <small>{opt.sub}</small>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Areas of Interest */}
                  <div className="form-group">
                    <label>
                      <Layers size={13} /> What are you interested in? <small>(Select all that apply)</small>
                    </label>
                    <div className="interests-checkbox-grid">
                      {interestOptions.map((item) => {
                        const checked = formData.interests.includes(item);
                        return (
                          <button
                            key={item}
                            type="button"
                            className={`interest-tag-btn ${checked ? 'is-checked' : ''}`}
                            onClick={() => toggleInterest(item)}
                          >
                            <span className="checkbox-indicator">{checked ? '✓' : ''}</span>
                            <span>{item}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Query / Message */}
                  <div className="form-group">
                    <label htmlFor="message">
                      <MessageSquare size={13} /> Your Query / Packaging Requirements
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us what you sell, your packaging inserts wishlist, or any specific questions you have..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div className="form-submit-row">
                    <Button type="submit" variant="default" size="lg" disabled={isSubmitting} className="w-full submit-cta-btn">
                      {isSubmitting ? (
                        'Submitting Query...'
                      ) : (
                        <>
                          Submit Inquiry & Start Free Pilot <Send size={15} />
                        </>
                      )}
                    </Button>
                    <span className="privacy-reassurance">
                      <ShieldCheck size={13} /> No spam. We respond within 24 business hours.
                    </span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
