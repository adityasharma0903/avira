import { Link } from '@tanstack/react-router';
import { Header, Footer, Reveal, Button, ArrowUpRight } from './elements';

export function PrivacyPage() {
  return (
    <div className="site-shell">
      <Header />
      <article className="max-w-4xl mx-auto px-6 py-20">
        <span className="eyebrow text-xs uppercase font-semibold text-primary tracking-widest block mb-4">
          LEGAL & DATA PRIVACY
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground mb-6">
          Privacy Policy
        </h1>
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-sans mb-12">
          Effective Date: October 2026 • AVIRA (avirad2c.app)
        </p>

        <div className="space-y-8 text-sm text-muted-foreground font-sans leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-medium text-foreground mb-3">1. Overview</h2>
            <p>
              AVIRA ("AVIRA D2C", "we", "us", or "our") operates the web platform at avirad2c.app. We provide post-purchase customer engagement, UGC collection, review aggregation, and referral software for direct-to-consumer and e-commerce merchants. This Privacy Policy outlines how data is handled across our marketing properties and merchant platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-medium text-foreground mb-3">2. Merchant & Customer Data Security</h2>
            <p>
              We prioritize strict data isolation. AVIRA processes customer order identifiers and redemption tokens solely to validate eligibility for unboxing rewards and attributed purchases. We do not sell or monetize consumer data to third-party data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-medium text-foreground mb-3">3. Customer QR Experience & No PII Exposure</h2>
            <p>
              Individual QR scan URLs (such as /q/[token]) are cryptographically signed, single-use sessions designed for unboxing engagement. Personal identifiable information (PII) such as customer full names, phone numbers, and physical addresses are never publicly exposed or rendered in searchable web indexes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-medium text-foreground mb-3">4. Cookies & Analytics</h2>
            <p>
              We utilize first-party cookies and privacy-respecting analytics to gauge website performance, optimize page loading speed, and measure marketing attribution.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
}

export function TermsPage() {
  return (
    <div className="site-shell">
      <Header />
      <article className="max-w-4xl mx-auto px-6 py-20">
        <span className="eyebrow text-xs uppercase font-semibold text-primary tracking-widest block mb-4">
          TERMS OF SERVICE
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground mb-6">
          Terms of Service
        </h1>
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-sans mb-12">
          Effective Date: October 2026 • AVIRA (avirad2c.app)
        </p>

        <div className="space-y-8 text-sm text-muted-foreground font-sans leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-medium text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using avirad2c.app and AVIRA post-purchase growth services, you agree to comply with and be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-medium text-foreground mb-3">2. Service Scope</h2>
            <p>
              AVIRA provides software solutions enabling consumer brands to deploy smart QR packaging inserts, collect user-generated content, orchestrate peer referrals, and measure attributed post-purchase repeat revenue.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-medium text-foreground mb-3">3. Intellectual Property & Commercial Rights</h2>
            <p>
              Merchants retain ownership of their brand assets. Customers submitting photos, videos, or reviews through the AVIRA portal grant clear, opt-in commercial display rights to the sponsoring brand in exchange for disclosed rewards.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
}

export function SecurityPage() {
  return (
    <div className="site-shell">
      <Header />
      <article className="max-w-4xl mx-auto px-6 py-20">
        <span className="eyebrow text-xs uppercase font-semibold text-primary tracking-widest block mb-4">
          INFRASTRUCTURE & COMPLIANCE
        </span>
        <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground mb-6">
          Security Architecture
        </h1>
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-sans mb-12">
          Enterprise Security Standards • AVIRA
        </p>

        <div className="space-y-8 text-sm text-muted-foreground font-sans leading-relaxed">
          <section>
            <h2 className="text-xl font-display font-medium text-foreground mb-3">1. Encryption in Transit & Rest</h2>
            <p>
              All traffic to avirad2c.app and customer unboxing portals is encrypted using TLS 1.3. Merchant database entries and authentication keys are protected using AES-256 encryption.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-medium text-foreground mb-3">2. Tokenized QR Architecture</h2>
            <p>
              QR codes utilize cryptographic hashes rather than sequential database IDs. This prevents enumeration attacks, brute-force voucher redemption, and unauthorized access to order data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-display font-medium text-foreground mb-3">3. Fraud Prevention Engine</h2>
            <p>
              Our multi-factor validation cross-references device fingerprints, IP location signals, and Shopify/WooCommerce fulfillment webhooks to ensure coupons and referral bonuses are awarded only on verified deliveries.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </div>
  );
}
