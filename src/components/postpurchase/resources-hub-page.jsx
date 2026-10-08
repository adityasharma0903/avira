import { Link } from '@tanstack/react-router';
import { Header, Footer, Reveal, Button, ArrowUpRight, ArrowRight } from './elements';

const guidesList = [
  {
    slug: 'post-purchase-experience',
    category: 'DEFINITIVE STRATEGY GUIDE',
    title: 'The Post-Purchase Experience: Turning Delivered Orders Into Long-Term Brand Equity',
    desc: 'Why the unboxing moment outperforms digital remarketing, the 5 core pillars of a post-purchase loop, and how to measure attributed revenue.',
    readTime: '8 min read'
  },
  {
    slug: 'd2c-customer-retention',
    category: 'RETENTION & UNIT ECONOMICS',
    title: 'D2C Customer Retention Strategy: How to Boost Repeat Purchases Post-Delivery',
    desc: 'The 72-hour post-delivery rule, actionable ways to compress the second-purchase interval, and strategies to increase 90-day LTV.',
    readTime: '7 min read'
  },
  {
    slug: 'post-purchase-strategy-for-gifting-brands',
    category: 'GIFTING VERTICAL PLAYBOOK',
    title: 'Post-Purchase Strategy for Gifting Brands: Turning Gift Recipients into Repeat Buyers',
    desc: 'Solving the anonymous recipient blind spot, reciprocal gifting dynamics, and automated corporate holiday reorder triggers.',
    readTime: '9 min read'
  },
  {
    slug: 'how-to-get-more-ugc',
    category: 'CREATOR & COMMUNITY ENGINE',
    title: 'How to Get More UGC: Transforming Packaging Inserts into Creator Flywheels',
    desc: 'Why post-purchase emails underperform, zero-friction mobile capture workflows, and automating commercial rights clearance.',
    readTime: '6 min read'
  }
];

export default function ResourcesHubPage() {
  return (
    <div className="site-shell">
      <Header />
      
      {/* Hero */}
      <section className="section py-20 border-b border-border text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="eyebrow tracking-widest text-xs font-semibold text-primary uppercase block mb-4">
            AVIRA KNOWLEDGE BASE & STRATEGY
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground leading-tight tracking-tight mb-6">
            Post-Purchase Strategy & Retention Guides.
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            Actionable playbooks, research reports, and technical guides designed to help direct-to-consumer and gifting brands maximize customer lifetime value.
          </p>
        </div>
      </section>

      {/* Grid of Articles */}
      <section className="section py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {guidesList.map((guide) => (
              <Reveal key={guide.slug} className="p-8 rounded-lg border border-border bg-paper/60 flex flex-col justify-between hover:border-primary/40 transition-all">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold tracking-wider text-primary uppercase mb-3">
                    <span>{guide.category}</span>
                    <span className="text-muted-foreground">{guide.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-display font-medium text-foreground mb-3 leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">
                    {guide.desc}
                  </p>
                </div>
                <Link to={`/resources/${guide.slug}`} className="text-xs uppercase tracking-wider font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Read Guide <ArrowRight className="h-3 w-3" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta py-24 text-center">
        <span className="eyebrow block mb-3">PUT STRATEGY INTO PRACTICE</span>
        <h2 className="text-3xl sm:text-5xl font-display font-medium mb-6">
          Start your pilot with AVIRA today.
        </h2>
        <Button variant="ivory" asChild size="lg">
          <Link to="/start-free">Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>

      <Footer />
    </div>
  );
}
