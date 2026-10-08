import { Link } from '@tanstack/react-router';
import { Header, Footer, Reveal, Button, ArrowUpRight, ArrowRight, Check } from './elements';

export default function FeatureTemplate({ feature }) {
  if (!feature) return null;

  return (
    <div className="site-shell">
      <Header />
      
      {/* Hero Section */}
      <section className="section py-20 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="eyebrow tracking-widest text-xs font-semibold text-primary uppercase block mb-4">
            {feature.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-medium text-foreground leading-tight tracking-tight mb-6">
            {feature.heroH1}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            {feature.summary}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="default" asChild size="lg">
              <Link to="/start-free">
                Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/demo">
                Explore Interactive Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution Comparison */}
      <section className="section py-20 bg-background/50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <Reveal className="p-8 rounded-lg border border-border bg-paper/60 backdrop-blur-sm">
            <span className="eyebrow text-xs tracking-widest uppercase text-destructive font-semibold mb-3 block">
              THE STATUS QUO
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground mb-4">
              {feature.problem.headline}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
              {feature.problem.description}
            </p>
          </Reveal>

          <Reveal className="p-8 rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <span className="eyebrow text-xs tracking-widest uppercase text-primary font-semibold mb-3 block">
              THE AVIRA APPROACH
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground mb-4">
              {feature.solution.headline}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
              {feature.solution.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4-Step Workflow */}
      <section className="section py-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow text-xs tracking-widest uppercase text-primary font-semibold mb-3 block">
              HOW IT OPERATES
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-foreground">
              Built directly into the physical unboxing workflow.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {feature.workflow.map((item) => (
              <Reveal key={item.step} className="p-6 rounded-lg border border-border bg-paper/40">
                <span className="text-3xl font-display text-primary/60 font-semibold block mb-3">
                  {item.step}
                </span>
                <h3 className="text-xl font-display font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                  {item.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section py-20 bg-background/50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow text-xs tracking-widest uppercase text-primary font-semibold mb-3 block">
              MEASURABLE ADVANTAGES
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-foreground">
              Engineered for revenue velocity and customer connection.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {feature.benefits.map((benefit, idx) => (
              <Reveal key={idx} className="flex gap-4 p-6 rounded-lg border border-border bg-paper/60">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-medium text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    {benefit.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {feature.faqs && feature.faqs.length > 0 && (
        <section className="section py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow text-xs tracking-widest uppercase text-primary font-semibold mb-3 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-foreground">
                Everything you need to know.
              </h2>
            </div>

            <div className="space-y-6">
              {feature.faqs.map((faq, idx) => (
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
        <span className="eyebrow block mb-3">THERE’S MORE INSIDE</span>
        <h2 className="text-3xl sm:text-5xl font-display font-medium mb-6">
          Ready to turn delivered packages into lasting growth?
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8 font-sans">
          Deploy AVIRA across your customer orders with zero developer friction.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="ivory" asChild size="lg">
            <Link to="/start-free">Start Free Pilot <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button variant="lightOutline" asChild size="lg">
            <Link to="/demo">Explore The Merchant View <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
