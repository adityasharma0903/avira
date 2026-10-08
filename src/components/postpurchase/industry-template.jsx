import { Link } from '@tanstack/react-router';
import { Header, Footer, Reveal, Button, ArrowUpRight, ArrowRight, Check } from './elements';

export default function IndustryTemplate({ industry }) {
  if (!industry) return null;

  return (
    <div className="site-shell">
      <Header />
      
      {/* Hero Section */}
      <section className="section py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="eyebrow tracking-widest text-xs font-semibold text-primary uppercase block mb-4">
            {industry.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground leading-tight tracking-tight mb-6">
            {industry.heroH1}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            {industry.summary}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="default" asChild size="lg">
              <Link to="/start-free">
                Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/demo">
                Explore The Experience <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Market Context Notice */}
      {industry.marketContext && (
        <section className="py-12 bg-primary/5 border-b border-border">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm sm:text-base font-sans text-foreground/80 italic leading-relaxed">
              "{industry.marketContext}"
            </p>
          </div>
        </section>
      )}

      {/* Metrics Banner */}
      {industry.metrics && (
        <section className="py-12 border-b border-border bg-paper/60">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {industry.metrics.map((metric, idx) => (
              <div key={idx} className="p-4">
                <span className="text-4xl sm:text-5xl font-display font-semibold text-primary block mb-1">
                  {metric.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-sans">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Core Loop Progression */}
      {industry.coreLoop && (
        <section className="section py-20 border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow text-xs tracking-widest uppercase text-primary font-semibold mb-3 block">
                THE POST-PURCHASE GROWTH LOOP
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-foreground">
                How one delivered package compounds into predictable growth.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {industry.coreLoop.map((item, idx) => (
                <Reveal key={idx} className="p-6 rounded-lg border border-border bg-paper/40 relative">
                  <span className="text-xs font-semibold tracking-wider text-primary block mb-2">
                    PHASE 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-display font-medium text-foreground mb-2">
                    {item.step}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industry Challenges & Tailored Solutions */}
      <section className="section py-20 bg-background/50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow text-xs tracking-widest uppercase text-primary font-semibold mb-3 block">
              CHALLENGES & ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-foreground">
              Designed specifically for your commercial realities.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-display font-medium text-foreground mb-6">
                Key Industry Friction Points
              </h3>
              <div className="space-y-6">
                {industry.challenges.map((c, i) => (
                  <Reveal key={i} className="p-6 rounded-lg border border-border bg-paper/50">
                    <h4 className="text-base font-sans font-semibold text-foreground mb-2">
                      {c.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                      {c.desc}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-medium text-foreground mb-6">
                The AVIRA Solution Engine
              </h3>
              <div className="space-y-6">
                {industry.solutions.map((s, i) => (
                  <Reveal key={i} className="p-6 rounded-lg border border-primary/20 bg-primary/5">
                    <h4 className="text-base font-sans font-semibold text-primary mb-2">
                      {s.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                      {s.desc}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {industry.faqs && industry.faqs.length > 0 && (
        <section className="section py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow text-xs tracking-widest uppercase text-primary font-semibold mb-3 block">
                COMMON QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-foreground">
                Built with operational excellence in mind.
              </h2>
            </div>

            <div className="space-y-6">
              {industry.faqs.map((faq, idx) => (
                <Reveal key={idx} className="p-6 rounded-lg border border-border bg-paper/50">
                  <h3 className="text-lg font-sans font-semibold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    {faq.a}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Call to Action */}
      <section className="final-cta py-24 text-center">
        <span className="eyebrow block mb-3">EVERY ORDER A LASTING CONNECTION</span>
        <h2 className="text-3xl sm:text-5xl font-display font-medium mb-6">
          Turn your packaging into your highest-ROI growth channel.
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8 font-sans">
          Deploy customized unboxing experiences in days, not months.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="ivory" asChild size="lg">
            <Link to="/start-free">Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button variant="lightOutline" asChild size="lg">
            <Link to="/demo">Try The Interactive Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
