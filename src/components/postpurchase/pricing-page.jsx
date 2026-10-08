import { Link } from '@tanstack/react-router';
import { Header, Footer, Reveal, Button, ArrowUpRight, ArrowRight, Check, Package } from './elements';
import { plans, cardAddonPricing } from '@/lib/product';

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
            Room for your<br /><i>next stage of growth.</i>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            From your first hundred orders to your next thousand. Every plan includes physical cards, digital unboxing portals, and verified customer growth.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="section py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <Reveal
                key={plan.name}
                className={`p-8 rounded-lg border bg-paper/60 flex flex-col justify-between transition-all ${
                  plan.popular ? 'border-primary ring-2 ring-primary relative bg-primary/5' : 'border-border'
                }`}
              >
                <div>
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-semibold shadow-sm">
                      MOST POPULAR ⭐
                    </span>
                  )}
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-semibold text-primary tracking-widest">{plan.name}</span>
                    <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-background border border-border text-muted-foreground">
                      {plan.cardsIncluded}
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-display font-medium text-foreground mb-1">
                    ₹{plan.price.toLocaleString('en-IN')}
                    <span className="text-xs font-sans text-muted-foreground font-normal"> / month</span>
                  </div>

                  {plan.effectiveCost && (
                    <span className="inline-block text-[11px] font-semibold text-primary/90 font-sans mb-3">
                      {plan.effectiveCost}
                    </span>
                  )}

                  <p className="text-xs text-muted-foreground font-sans leading-relaxed mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-border">
                    <span className="text-[10px] uppercase font-semibold text-foreground/70 tracking-wider block mb-3">
                      Includes:
                    </span>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-foreground/90 font-sans">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant={plan.popular ? 'default' : 'outline'}
                  asChild
                  className="w-full mt-4"
                >
                  <Link to={plan.ctaLink}>
                    {plan.ctaText}
                  </Link>
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Cards Section */}
      <section className="section py-20 bg-background/50 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow text-xs tracking-widest uppercase text-primary font-semibold mb-3 block">
              FLEXIBLE SCALE & FULFILLMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-foreground mb-4">
              Additional Cards Pricing
            </h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Scaling faster than expected or gearing up for a festive surge? Order additional premium cards anytime without upgrading your monthly software tier.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-paper shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-foreground font-sans">
                    Quantity
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-foreground font-sans">
                    Price
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground font-sans hidden sm:table-cell">
                    Fulfillment Note
                  </th>
                  <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-right text-foreground font-sans">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {cardAddonPricing.map((tier) => (
                  <tr key={tier.quantity} className="hover:bg-muted/20 transition-colors">
                    <td className="py-4 px-6 font-display text-base sm:text-lg font-medium text-foreground">
                      {tier.quantity}
                    </td>
                    <td className="py-4 px-6 text-base font-semibold text-primary font-sans">
                      {tier.price}
                    </td>
                    <td className="py-4 px-6 text-xs text-muted-foreground font-sans hidden sm:table-cell">
                      {tier.note}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/start-free">
                          Order <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20 text-xs text-muted-foreground font-sans leading-relaxed">
            <strong>Note on physical card economics:</strong> Every card batch includes premium double-sided artboard stock, verified scannable vector matrices, custom brand copy, and door-to-door shipment tracking to your warehouse.
          </div>
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
                Can I switch or cancel my plan anytime?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Yes. There are no lock-in contracts. You can upgrade, downgrade, or cancel your monthly subscription directly in your merchant dashboard.
              </p>
            </Reveal>
            <Reveal className="p-6 rounded-lg border border-border bg-paper/50">
              <h3 className="text-lg font-sans font-semibold text-foreground mb-2">
                What if our monthly order volume spikes during a festival?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Your QR scans and customer unboxing portals never stop working. If you experience an influx of orders, simply order extra card batches from the Additional Cards catalog.
              </p>
            </Reveal>
            <Reveal className="p-6 rounded-lg border border-border bg-paper/50">
              <h3 className="text-lg font-sans font-semibold text-foreground mb-2">
                Do I need a separate developer to integrate Shopify or WooCommerce?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                No. AVIRA connects in under 2 minutes with automated webhooks and app-level discount code generation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta py-24 text-center">
        <span className="eyebrow block mb-3">START YOUR TRANSFORMATION</span>
        <h2 className="text-3xl sm:text-5xl font-display font-medium mb-6">
          Turn your next 100 packages into your next 100 relationships.
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="ivory" asChild size="lg">
            <Link to="/start-free">Start with AVIRA <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button variant="lightOutline" asChild size="lg">
            <Link to="/demo">Explore The Interactive Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
