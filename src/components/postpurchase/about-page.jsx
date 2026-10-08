import { Link } from '@tanstack/react-router';
import { Header, Footer, Reveal, Button, ArrowUpRight } from './elements';

export default function AboutPage() {
  return (
    <div className="site-shell">
      <Header />
      
      {/* Hero */}
      <section className="section py-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="eyebrow tracking-widest text-xs font-semibold text-primary uppercase block mb-4">
            OUR ENTITY & MISSION
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground leading-tight tracking-tight mb-6">
            Every Order A Lasting Connection.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            AVIRA is the post-purchase growth platform engineered to turn physical package deliveries into ongoing customer relationships.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <Reveal className="p-8 rounded-lg border border-border bg-paper/60">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground mb-4">
              Who We Are
            </h2>
            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              AVIRA (operating digitally at <strong>avirad2c.app</strong>) was founded on a simple observation: modern e-commerce companies invest immense resources, creativity, and ad spend to acquire a customer, only to treat the delivery moment as the end of the line.
            </p>
          </Reveal>

          <Reveal className="p-8 rounded-lg border border-border bg-paper/60">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground mb-4">
              What We Build
            </h2>
            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              We build specialized post-purchase growth technology. AVIRA bridges physical packaging with instant digital experiences, enabling direct-to-consumer (D2C), gifting, beauty, and consumer brands to capture authentic unboxing UGC, collect verified customer feedback, empower word-of-mouth referrals, and accelerate repeat purchase velocity.
            </p>
          </Reveal>

          <Reveal className="p-8 rounded-lg border border-border bg-paper/60">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground mb-4">
              What AVIRA Is Not
            </h2>
            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              AVIRA is not merely a generic QR generator. AVIRA is not a review aggregation widget. AVIRA is not a consumer gifting storefront. <strong>AVIRA is an integrated post-purchase growth platform</strong> designed to give modern consumer brands an accountable, compounding channel beyond the ad auction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Entity Details */}
      <section className="section py-16 bg-primary/5 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-2 gap-8 text-sm font-sans">
          <div>
            <h3 className="font-semibold text-foreground uppercase tracking-wider text-xs mb-2">Primary Entity</h3>
            <p className="text-muted-foreground">AVIRA (AVIRA D2C)</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground uppercase tracking-wider text-xs mb-2">Official Domain</h3>
            <p className="text-muted-foreground"><a href="https://avirad2c.app/" className="underline hover:text-primary">https://avirad2c.app/</a></p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground uppercase tracking-wider text-xs mb-2">Category</h3>
            <p className="text-muted-foreground">Post-Purchase Growth Platform</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground uppercase tracking-wider text-xs mb-2">Core Sectors</h3>
            <p className="text-muted-foreground">D2C Brands, Gifting Companies, E-commerce Retailers</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta py-24 text-center">
        <span className="eyebrow block mb-3">EXPERIENCE THE PLATFORM</span>
        <h2 className="text-3xl sm:text-5xl font-display font-medium mb-6">
          Ready to join the post-purchase revolution?
        </h2>
        <Button variant="ivory" asChild size="lg">
          <Link to="/start-free">Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
}
