import { Link } from '@tanstack/react-router';
import { Header, Footer, Reveal, Button, ArrowUpRight, ArrowRight, Check } from './elements';

export default function ForBrandsPage() {
  return (
    <div className="site-shell">
      <Header />
      
      {/* Hero */}
      <section className="section py-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="eyebrow tracking-widest text-xs font-semibold text-primary uppercase block mb-4">
            FOR FAST-GROWING BRANDS
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground leading-tight tracking-tight mb-6">
            Make Every Delivered Package A High-Margin Growth Channel.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            Built for modern D2C founders, CMOs, and e-commerce directors tired of watching ad networks eat their operating margins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" asChild size="lg">
              <Link to="/start-free">Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/templates">Browse Box Card Templates <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="section py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <Reveal className="p-8 rounded-lg border border-border bg-paper/60">
            <span className="text-xs uppercase text-primary font-semibold tracking-wider block mb-2">01 / RETENTION</span>
            <h3 className="text-2xl font-display font-medium text-foreground mb-3">Turn Single Buyers Into Repeat Loyalists</h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Don’t let 65% of your buyers vanish forever. An unboxing incentive locks in their second order while enthusiasm is fresh.
            </p>
          </Reveal>
          <Reveal className="p-8 rounded-lg border border-border bg-paper/60">
            <span className="text-xs uppercase text-primary font-semibold tracking-wider block mb-2">02 / ACQUISITION</span>
            <h3 className="text-2xl font-display font-medium text-foreground mb-3">Acquire New Customers Organically</h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Happy customers who refer friends bypass rising Meta ad auctions, delivering peer-referred buyers with 37% higher LTV.
            </p>
          </Reveal>
          <Reveal className="p-8 rounded-lg border border-border bg-paper/60">
            <span className="text-xs uppercase text-primary font-semibold tracking-wider block mb-2">03 / CREATIVE</span>
            <h3 className="text-2xl font-display font-medium text-foreground mb-3">Endless Authentic UGC Pipeline</h3>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Gather genuine unboxing videos, photos, and reviews directly from real verified customers to fuel your paid ad creatives.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="section py-16 bg-primary/5 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs uppercase text-primary font-semibold tracking-wider block mb-3">
            COMPATIBILITY & ECOSYSTEM
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground mb-6">
            Works with your existing e-commerce storefront.
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-foreground/80 font-sans">
            <span className="px-4 py-2 rounded bg-paper border border-border">Shopify & Shopify Plus</span>
            <span className="px-4 py-2 rounded bg-paper border border-border">WooCommerce</span>
            <span className="px-4 py-2 rounded bg-paper border border-border">Custom Headless Stores</span>
            <span className="px-4 py-2 rounded bg-paper border border-border">Klaviyo & Omnisend</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta py-24 text-center">
        <span className="eyebrow block mb-3">THERE’S MORE INSIDE</span>
        <h2 className="text-3xl sm:text-5xl font-display font-medium mb-6">
          Start turning deliveries into growth today.
        </h2>
        <Button variant="ivory" asChild size="lg">
          <Link to="/start-free">Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
}
