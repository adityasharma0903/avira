import { Link } from '@tanstack/react-router';
import { Header, Footer, Reveal, Button, ArrowUpRight, Check } from './elements';
import { plans } from '@/lib/product';

const featuresByPlan = {
  Starter: [
    'Up to 1,000 monthly orders',
    'Custom dynamic QR generator',
    'Basic UGC video & photo collection',
    'Standard peer-to-peer referral links',
    'Email support'
  ],
  Growth: [
    'Up to 5,000 monthly orders',
    'Dynamic multi-action unboxing portal',
    'Automated commercial rights clearance',
    'Two-sided WhatsApp & SMS referral loops',
    'Shopify & WooCommerce real-time coupon sync',
    'Attributed revenue & scan analytics',
    'Priority customer support'
  ],
  Pro: [
    'Up to 25,000 monthly orders',
    'All Growth features included',
    'Bespoke insert card design assistance',
    'Custom webhook & Klaviyo/Omnisend sync',
    'Dedicated account manager',
    'Custom SLA & onboarding call'
  ]
};

export default function PricingPage() {
  return (
    <div className="site-shell">
      <Header />
      
      {/* Hero */}
      <section className="section py-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="eyebrow tracking-widest text-xs font-semibold text-primary uppercase block mb-4">
            TRANSPARENT VALUE-BASED PRICING
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground leading-tight tracking-tight mb-6">
            Invest in Connections That Compound.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            Start with our risk-free pilot. Upgrade as your delivered order volume and attributed post-purchase revenue scale.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="section py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} className={`p-8 rounded-lg border bg-paper/60 flex flex-col justify-between ${i === 1 ? 'border-primary ring-1 ring-primary relative' : 'border-border'}`}>
                <div>
                  {i === 1 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-full font-semibold">
                      MOST POPULAR
                    </span>
                  )}
                  <span className="text-xs uppercase font-semibold text-primary tracking-wider block mb-2">{plan.name}</span>
                  <div className="text-4xl font-display font-bold text-foreground mb-2">
                    ₹{plan.price.toLocaleString('en-IN')} <span className="text-xs font-sans text-muted-foreground font-normal">/ month</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-sans mb-6">{plan.description}</p>
                  
                  <div className="space-y-3 mb-8 pt-4 border-t border-border">
                    {featuresByPlan[plan.name]?.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-foreground/90 font-sans">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant={i === 1 ? 'default' : 'outline'} asChild className="w-full">
                  <Link to="/start-free">Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </Reveal>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8 font-sans">
            Physical QR insert printing cards available separately or export vector files to print with your existing supplier.
          </p>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="section py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-foreground">
              Pricing FAQs
            </h2>
          </div>

          <div className="space-y-6">
            <Reveal className="p-6 rounded-lg border border-border bg-paper/50">
              <h3 className="text-lg font-sans font-semibold text-foreground mb-2">
                Can I cancel or switch plans anytime?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Yes. There are no lock-in contracts. You can upgrade, downgrade, or cancel your subscription at any time directly in your account settings.
              </p>
            </Reveal>
            <Reveal className="p-6 rounded-lg border border-border bg-paper/50">
              <h3 className="text-lg font-sans font-semibold text-foreground mb-2">
                What happens if my order volume exceeds my monthly plan?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Your QR unboxing experiences will never get interrupted or blocked. If you exceed your tier's order limit, our team will notify you with the option to transition seamlessly to the next tier.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
