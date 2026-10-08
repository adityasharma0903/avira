import { Link } from '@tanstack/react-router';
import { Header, Footer, Reveal, Button, ArrowUpRight, ArrowRight, Check } from './elements';

const steps = [
  { step: '01', title: 'Connect Your Store', desc: 'Sync your Shopify or WooCommerce store in 2 minutes. No custom development or API keys required.' },
  { step: '02', title: 'Design Your Unboxing Card', desc: 'Select from high-converting editorial templates that match your brand typography, colors, and tone.' },
  { step: '03', title: 'Insert Cards Into Shipments', desc: 'Add the lightweight insert cards to your outgoing mailers, gift hampers, or parcel boxes.' },
  { step: '04', title: 'Customer Unboxes & Scans', desc: 'Your customer opens their package and scans the QR code with their native phone camera—no app needed.' },
  { step: '05', title: 'Engage, Review or Refer', desc: 'Shopper selects how to participate: record an unboxing video, refer a friend, or complete a product review.' },
  { step: '06', title: 'Unlock Dynamic Rewards', desc: 'Upon completion, a single-use coupon or store credit is delivered instantly to drive a second purchase.' },
  { step: '07', title: 'Measure Attributed Growth', desc: 'Track scans, submissions, referral trees, and exact attributed repeat revenue in your merchant dashboard.' }
];

export default function HowItWorksPage() {
  return (
    <div className="site-shell">
      <Header />
      
      {/* Hero */}
      <section className="section py-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="eyebrow tracking-widest text-xs font-semibold text-primary uppercase block mb-4">
            THE ARCHITECTURE
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground leading-tight tracking-tight mb-6">
            How AVIRA Powers Growth Beyond Delivery.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            A frictionless bridge between physical package delivery and digital customer retention.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" asChild size="lg">
              <Link to="/start-free">Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/demo">Try The Interactive Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 7-Step Progression */}
      <section className="section py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {steps.map((s) => (
            <Reveal key={s.step} className="p-8 rounded-lg border border-border bg-paper/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <span className="text-4xl font-display font-bold text-primary/70">{s.step}</span>
                <div>
                  <h3 className="text-xl font-display font-medium text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans max-w-xl">{s.desc}</p>
                </div>
              </div>
              <Check className="h-5 w-5 text-primary shrink-0 hidden sm:block" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta py-24 text-center">
        <span className="eyebrow block mb-3">SEAMLESS INTEGRATION</span>
        <h2 className="text-3xl sm:text-5xl font-display font-medium mb-6">
          Deploy your first unboxing campaign in 24 hours.
        </h2>
        <Button variant="ivory" asChild size="lg">
          <Link to="/start-free">Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
}
