import { Link } from '@tanstack/react-router';
import { Header, Footer, Reveal, Button, ArrowUpRight, ArrowRight } from './elements';

export default function ResourceTemplate({ resource }) {
  if (!resource) return null;

  return (
    <div className="site-shell">
      <Header />
      
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="eyebrow tracking-widest text-xs font-semibold text-primary uppercase block mb-4">
            {resource.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground leading-tight tracking-tight mb-6">
            {resource.heroH1}
          </h1>
          <div className="flex items-center justify-center gap-6 text-xs uppercase tracking-wider text-muted-foreground font-sans">
            <span>By {resource.author}</span>
            <span>•</span>
            <span>{resource.publishedDate}</span>
            <span>•</span>
            <span>{resource.readTime}</span>
          </div>
        </div>

        {/* Lead In */}
        <div className="p-8 rounded-lg bg-primary/5 border border-primary/20 mb-12">
          <p className="text-base sm:text-lg text-foreground font-sans leading-relaxed italic">
            "{resource.intro}"
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {resource.sections.map((section, idx) => (
            <Reveal key={idx} className="space-y-4">
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground">
                {section.heading}
              </h2>
              <div className="text-base text-muted-foreground leading-relaxed font-sans whitespace-pre-line space-y-4">
                {section.content}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contextual AVIRA CTA Box inside the article */}
        <div className="mt-16 p-8 rounded-lg bg-paper border border-border text-center">
          <span className="eyebrow text-xs tracking-widest uppercase text-primary font-semibold mb-2 block">
            PUT THIS INTO PRACTICE WITH AVIRA
          </span>
          <h3 className="text-2xl font-display font-medium text-foreground mb-4">
            Turn every delivered order into your next customer.
          </h3>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto mb-6 font-sans">
            AVIRA helps D2C, e-commerce, and gifting brands turn delivered orders into UGC, referrals, rewards, and repeat purchases.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" asChild>
              <Link to="/start-free">Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/demo">Explore Interactive Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Recommended Guides */}
      <section className="py-16 bg-background/50 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-2xl font-display font-medium text-foreground mb-8 text-center">
            Related Growth Resources
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link to="/resources/post-purchase-experience" className="p-6 rounded-lg border border-border bg-paper/60 hover:border-primary/50 transition-colors block">
              <span className="text-xs uppercase text-primary font-semibold block mb-1">STRATEGY GUIDE</span>
              <h4 className="text-lg font-display font-medium text-foreground mb-2">The Post-Purchase Experience Guide</h4>
              <p className="text-xs text-muted-foreground font-sans">Master the definitive unboxing playbook for modern e-commerce brands.</p>
            </Link>
            <Link to="/resources/d2c-customer-retention" className="p-6 rounded-lg border border-border bg-paper/60 hover:border-primary/50 transition-colors block">
              <span className="text-xs uppercase text-primary font-semibold block mb-1">RETENTION & LTV</span>
              <h4 className="text-lg font-display font-medium text-foreground mb-2">D2C Customer Retention Strategy</h4>
              <p className="text-xs text-muted-foreground font-sans">How to compress replenishment intervals and elevate 90-day repeat rates.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
