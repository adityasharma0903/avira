import { Link } from '@tanstack/react-router';
import { Header, Footer, Reveal, Button, ArrowUpRight, ArrowRight } from './elements';

const industriesList = [
  { slug: 'd2c', title: 'Direct-to-Consumer (D2C)', desc: 'Combat escalating paid acquisition costs by turning delivered packaging into peer referrals, viral unboxing UGC, and accelerated repeat purchases.' },
  { slug: 'gifting', title: 'Gifting & Hamper Brands', desc: 'Turn anonymous gift recipients into long-term paying customers with bespoke digital greetings and recipient welcome perks.' },
  { slug: 'beauty', title: 'Beauty, Skincare & Wellness', desc: 'Transform the delivery moment into an elevated skincare ritual with video tutorials, skin journals, and replenishment timers.' },
  { slug: 'fashion', title: 'Fashion & Apparel', desc: 'Incentivize real-world try-on styling hauls, capture actionable fit feedback, and drive fast companion cross-sells.' }
];

export default function IndustriesHubPage() {
  return (
    <div className="site-shell">
      <Header />
      
      {/* Hero */}
      <section className="section py-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="eyebrow tracking-widest text-xs font-semibold text-primary uppercase block mb-4">
            INDUSTRY-SPECIFIC ARCHITECTURE
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground leading-tight tracking-tight mb-6">
            Tailored Post-Purchase Growth for Every Category.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            Whether you operate an omnichannel D2C brand, a luxury gifting house, or a beauty label, AVIRA adapts to your specific customer journey.
          </p>
        </div>
      </section>

      {/* Grid of Industries */}
      <section className="section py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {industriesList.map((ind) => (
              <Reveal key={ind.slug} className="p-8 rounded-lg border border-border bg-paper/60 flex flex-col justify-between hover:border-primary/40 transition-all">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-primary uppercase block mb-2">INDUSTRY SOLUTION</span>
                  <h3 className="text-2xl font-display font-medium text-foreground mb-3">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>
                <Link to={`/industries/${ind.slug}`} className="text-xs uppercase tracking-wider font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Explore {ind.title} <ArrowRight className="h-3 w-3" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta py-24 text-center">
        <span className="eyebrow block mb-3">BUILT FOR MODERN BRANDS</span>
        <h2 className="text-3xl sm:text-5xl font-display font-medium mb-6">
          Ready to turn delivered packages into lasting growth?
        </h2>
        <Button variant="ivory" asChild size="lg">
          <Link to="/start-free">Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
}
