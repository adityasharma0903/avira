import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Header, Footer, Reveal, Button, ArrowUpRight, Check } from './elements';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', brand: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <Header />
      
      {/* Hero */}
      <section className="section py-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="eyebrow tracking-widest text-xs font-semibold text-primary uppercase block mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground leading-tight tracking-tight mb-6">
            Speak With The AVIRA Team.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            Whether you have questions about packaging inserts, custom API integrations, or enterprise pilots, we’re here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Information */}
      <section className="section py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Form */}
          <Reveal className="p-8 rounded-lg border border-border bg-paper/60">
            {submitted ? (
              <div className="text-center py-12">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-medium text-foreground mb-2">Message Received</h3>
                <p className="text-sm text-muted-foreground font-sans">
                  Thank you for reaching out. A post-purchase growth specialist will respond within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 font-sans">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Aditya Sharma"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 font-sans">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="aditya@brand.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 font-sans">
                    Brand / Store Website
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="https://yourbrand.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 font-sans">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-border bg-background text-foreground text-sm font-sans focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Tell us about your order volume and post-purchase goals..."
                  />
                </div>
                <Button variant="default" type="submit" className="w-full">
                  Send Message <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </Reveal>

          {/* Details */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <span className="text-xs uppercase text-primary font-semibold tracking-wider block mb-2">OFFICIAL DOMAIN</span>
              <p className="text-lg font-display text-foreground">avirad2c.app</p>
              <p className="text-sm text-muted-foreground font-sans">The official online presence of AVIRA D2C.</p>
            </div>

            <div>
              <span className="text-xs uppercase text-primary font-semibold tracking-wider block mb-2">DIRECT INQUIRIES</span>
              <p className="text-sm text-muted-foreground font-sans">
                For partnerships, enterprise packaging consults, and technical integrations:
              </p>
              <p className="text-base font-semibold text-foreground mt-1">support@avirad2c.app</p>
            </div>

            <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
              <h4 className="font-display text-lg text-foreground mb-2">Explore the Demo</h4>
              <p className="text-xs text-muted-foreground font-sans mb-4">
                Want to see the customer unboxing experience and merchant analytics before reaching out?
              </p>
              <Button variant="outline" asChild size="sm">
                <Link to="/demo">Try Interactive Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
