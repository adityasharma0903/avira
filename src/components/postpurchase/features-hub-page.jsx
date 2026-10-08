import { Link } from '@tanstack/react-router';
import { Header, Footer, Reveal, Button, ArrowUpRight, ArrowRight, Camera, Users, Gift, Star, ScanLine, Repeat, Layers, BarChart3, Heart } from './elements';

const featuresList = [
  { slug: 'ugc', title: 'User-Generated Content', icon: Camera, desc: 'Capture authentic unboxing clips, photos, and customer videos directly at delivery with verified usage rights.' },
  { slug: 'referrals', title: 'Customer Referrals', icon: Users, desc: 'Equip buyers to share tailored discount vouchers and peer invitations via WhatsApp, SMS, and Instagram.' },
  { slug: 'rewards', title: 'Dynamic Rewards', icon: Gift, desc: 'Time-sensitive store credits and tailored rewards that convert first-time buyers into loyal brand champions.' },
  { slug: 'reviews', title: 'Verified Reviews', icon: Star, desc: 'Collect honest star ratings and rich photo feedback from verified unboxers, ready for Google Shopping.' },
  { slug: 'post-purchase-engagement', title: 'Post-Purchase Engagement', icon: Layers, desc: 'Interactive unboxing rituals, styling lookbooks, founder stories, and step-by-step product education.' },
  { slug: 'customer-retention', title: 'Customer Retention', icon: Heart, desc: 'LTV acceleration mechanics built directly into packaging to systematically lower blended acquisition costs.' },
  { slug: 'repeat-purchases', title: 'Repeat Purchase Engine', icon: Repeat, desc: 'Basket-aware cross-sells, replenishment timers, and time-decay incentives to shorten reorder latency.' },
  { slug: 'qr-experiences', title: 'Smart QR Packaging', icon: ScanLine, desc: 'Design-forward, luxury-grade insert cards and high-speed dynamic mobile web unboxing destinations.' },
  { slug: 'post-purchase-analytics', title: 'Post-Purchase Analytics', icon: BarChart3, desc: 'Attributed revenue tracking, scan heatmaps, cohort LTV analysis, and packaging ROI intelligence.' }
];

export default function FeaturesHubPage() {
  return (
    <div className="site-shell">
      <Header />
      
      {/* Hero */}
      <section className="section py-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="eyebrow tracking-widest text-xs font-semibold text-primary uppercase block mb-4">
            POST-PURCHASE GROWTH SUITE
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground leading-tight tracking-tight mb-6">
            The Complete Platform for Post-Purchase Growth.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            AVIRA turns packaging inserts into measurable customer engagement, UGC, referrals, and repeat purchases. Explore every capability below.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" asChild size="lg">
              <Link to="/start-free">Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/demo">Explore Interactive Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Grid of 9 features */}
      <section className="section py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {featuresList.map((f) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.slug} className="p-8 rounded-lg border border-border bg-paper/60 flex flex-col justify-between hover:border-primary/40 transition-all">
                  <div>
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-display font-medium text-foreground mb-3">
                      {f.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">
                      {f.desc}
                    </p>
                  </div>
                  <Link to={`/features/${f.slug}`} className="text-xs uppercase tracking-wider font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Explore {f.title} <ArrowRight className="h-3 w-3" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta py-24 text-center">
        <span className="eyebrow block mb-3">THERE’S MORE INSIDE</span>
        <h2 className="text-3xl sm:text-5xl font-display font-medium mb-6">
          Your packaging is your next marketing channel.
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8 font-sans">
          Connect every delivery to your next customer with AVIRA.
        </p>
        <Button variant="ivory" asChild size="lg">
          <Link to="/start-free">Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
}
