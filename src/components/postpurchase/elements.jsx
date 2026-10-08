import { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Menu, X, ScanLine, Check, Gift, Copy, Camera, Users, Star, Package, Layers, Repeat, BarChart3, Heart, Shield } from 'lucide-react';
import QRCode from 'qrcode';
import { Button } from '@/components/ui/button';
import packageImage from '@/assets/final_product.png';
import customerImage from '@/assets/customer.jpg';
import logoWhite from '@/assets/avira-logo-white.png';
import logoDark from '@/assets/avira-logo-dark.png';
import { reward } from '@/lib/product';

export { Button, packageImage, customerImage, ArrowUpRight, ArrowRight, ScanLine, Check, Gift, Copy, Camera, Users, Star, Package, Layers, Repeat, BarChart3, Heart, Shield };

export function Brand({ dark = false }) {
  return (
    <Link to="/" className="brand" aria-label="AVIRA — Post-Purchase Growth Platform">
      <img src={dark ? logoWhite : logoDark} alt="AVIRA — Every Order A Lasting Connection" className="brand-logo-img" />
    </Link>
  );
}

export function Header({ dark = false }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header ${dark ? 'header-dark' : ''}`}>
      <Brand dark={dark} />
      <nav className={open ? 'navigation is-open' : 'navigation'}>
        <Link to="/features" onClick={() => setOpen(false)}>Features</Link>
        <Link to="/industries/d2c" onClick={() => setOpen(false)}>D2C</Link>
        <Link to="/industries/gifting" onClick={() => setOpen(false)}>Gifting</Link>
        <Link to="/how-it-works" onClick={() => setOpen(false)}>How it works</Link>
        <Link to="/templates" onClick={() => setOpen(false)}>Box Templates</Link>
        <Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
        <Link to="/case-studies" onClick={() => setOpen(false)}>Case Studies</Link>
        <Link to="/resources" onClick={() => setOpen(false)}>Resources</Link>
      </nav>
      <div className="nav-actions">
        <Link to="/demo" className="login-link">Explore demo</Link>
        <Button variant={dark ? 'ivory' : 'default'} asChild>
          <Link to="/start-free">Start Free <ArrowUpRight className="h-3.5 w-3.5 ml-1" /></Link>
        </Button>
        <Button className="mobile-menu" variant="ghost" size="icon" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
    </header>
  );
}

export function Reveal({ children, className = '' }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

export function QR({ className = '' }) {
  const [src, setSrc] = useState('');
  useEffect(() => {
    QRCode.toDataURL(`${window.location.origin}/demo`, { margin: 0, width: 180, color: { dark: '#304A3A', light: '#F4EFE6' } }).then(setSrc);
  }, []);
  return (
    <div className={`qr-code ${className}`}>
      {src ? <img src={src} width="180" height="180" alt="Scan to explore AVIRA post-purchase demo" /> : <ScanLine size={80} />}
    </div>
  );
}

export function QRCard({ flip = false }) {
  const [back, setBack] = useState(true);
  return (
    <div className={`physical-card ${flip ? 'interactive-card' : ''}`}>
      <span className="eyebrow">AVIRA / A LITTLE SOMETHING EXTRA</span>
      <h3>{back ? 'Your order unlocked a reward.' : 'Thank you for shopping with us.'}</h3>
      {back ? <QR /> : <Gift size={70} />}
      <span className="card-foot">SCAN · PARTICIPATE · UNLOCK</span>
      {flip && <Button variant="link" onClick={() => setBack(!back)}>Turn card over <ArrowRight className="h-3.5 w-3.5 ml-1" /></Button>}
    </div>
  );
}

export function RewardCard() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(reward.code);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }
  return (
    <div className="reward-card">
      <span className="reward-seal"><Gift size={24} /></span>
      <span className="eyebrow">A LITTLE THANK YOU</span>
      <h3>Reward unlocked.</h3>
      <div className="reward-amount">₹{reward.amount} <i>off</i></div>
      <div className="coupon">
        <span>{reward.code}</span>
        <Button variant="ghost" size="icon" aria-label="Copy reward code" onClick={copy}>
          {copied ? <Check /> : <Copy />}
        </Button>
      </div>
      <span className="reward-valid">{copied ? 'Code copied.' : `Yours to enjoy. Valid for ${reward.validDays} days.`}</span>
    </div>
  );
}

export function Phone({ onChoose, selected }) {
  return (
    <div className="phone">
      <div className="phone-notch" />
      <div className="phone-brand">LIVIQUE <span>YOUR EVERYDAY, ELEVATED.</span></div>
      <img src={customerImage} alt="Customer sharing their botanical skincare ritual" width="768" height="1024" loading="lazy" />
      <div className="phone-content">
        <span className="eyebrow">GOOD THINGS DON'T END HERE</span>
        <h3>Make it<br />a little more yours.</h3>
        <p>Choose how you'd like to engage.</p>
        {[
          { icon: Camera, name: 'Share your experience', detail: 'Earn loyalty points', action: 'ugc' },
          { icon: Users, name: 'Refer a friend', detail: 'Earn a reward', action: 'referral' },
          { icon: Star, name: 'Leave an honest review', detail: 'Help other shoppers', action: 'review' }
        ].map(({ icon: Icon, name, detail, action }) => (
          <Button key={action} variant="experience" onClick={() => onChoose?.(action)} className={selected === action ? 'selected' : ''}>
            <Icon />
            <span>{name}<small>{detail}</small></span>
            <ArrowUpRight />
          </Button>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper/80 pt-16 pb-12 text-foreground font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1: Brand Entity */}
          <div className="lg:col-span-1 space-y-4">
            <Brand />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>AVIRA D2C</strong> is a premium post-purchase growth platform for D2C, e-commerce, and gifting brands.
            </p>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold">
              EVERY ORDER A LASTING CONNECTION.
            </p>
            <div className="pt-2 text-xs text-foreground/80">
              Official Website:<br />
              <a href="https://avirad2c.app/" className="text-primary hover:underline font-medium">https://avirad2c.app/</a>
            </div>
          </div>

          {/* Col 2: Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Features</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/features/ugc" className="hover:text-primary transition-colors">UGC Collection</Link></li>
              <li><Link to="/features/referrals" className="hover:text-primary transition-colors">Customer Referrals</Link></li>
              <li><Link to="/features/rewards" className="hover:text-primary transition-colors">Dynamic Rewards</Link></li>
              <li><Link to="/features/reviews" className="hover:text-primary transition-colors">Verified Reviews</Link></li>
              <li><Link to="/features/post-purchase-engagement" className="hover:text-primary transition-colors">Post-Purchase Engagement</Link></li>
              <li><Link to="/features/customer-retention" className="hover:text-primary transition-colors">Customer Retention</Link></li>
              <li><Link to="/features/repeat-purchases" className="hover:text-primary transition-colors">Repeat Purchases</Link></li>
              <li><Link to="/features/qr-experiences" className="hover:text-primary transition-colors">Smart QR Packaging</Link></li>
              <li><Link to="/features/post-purchase-analytics" className="hover:text-primary transition-colors">Attributed Analytics</Link></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Industries</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/industries/d2c" className="hover:text-primary transition-colors">D2C Brands</Link></li>
              <li><Link to="/industries/gifting" className="hover:text-primary transition-colors">Gifting & Hampers</Link></li>
              <li><Link to="/industries/beauty" className="hover:text-primary transition-colors">Beauty & Skincare</Link></li>
              <li><Link to="/industries/fashion" className="hover:text-primary transition-colors">Fashion & Apparel</Link></li>
              <li><Link to="/industries" className="hover:text-primary transition-colors font-medium text-foreground/80">All Industries →</Link></li>
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Resources</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/resources/post-purchase-experience" className="hover:text-primary transition-colors">Post-Purchase Guide</Link></li>
              <li><Link to="/resources/d2c-customer-retention" className="hover:text-primary transition-colors">D2C Retention Playbook</Link></li>
              <li><Link to="/resources/post-purchase-strategy-for-gifting-brands" className="hover:text-primary transition-colors">Gifting Brand Strategy</Link></li>
              <li><Link to="/resources/how-to-get-more-ugc" className="hover:text-primary transition-colors">How to Get More UGC</Link></li>
              <li><Link to="/templates" className="hover:text-primary transition-colors">Box Insert Templates</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies & Attribution</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors font-medium text-foreground/80">All Resources →</Link></li>
            </ul>
          </div>

          {/* Col 5: Company & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Company & Trust</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About AVIRA</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing Plans</Link></li>
              <li><Link to="/demo" className="hover:text-primary transition-colors">Interactive Demo</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Team</Link></li>
              <li><Link to="/security" className="hover:text-primary transition-colors">Security Architecture</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 AVIRA (AVIRA D2C). All rights reserved. Operating globally at avirad2c.app.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-primary">Privacy</Link>
            <Link to="/terms" className="hover:text-primary">Terms</Link>
            <Link to="/security" className="hover:text-primary">Security</Link>
            <a href="https://avirad2c.app/sitemap.xml" className="hover:text-primary">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Counter({ value }) {
  const [n, setN] = useState(0);
  const reduce = useReducedMotion();
  return (
    <motion.span
      onViewportEnter={() => {
        if (reduce) {
          setN(value);
          return;
        }
        let start;
        const tick = (time) => {
          start ??= time;
          const p = Math.min((time - start) / 1000, 1);
          setN(Math.round(value * (1 - (1 - p) ** 3)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }}
      viewport={{ once: true }}
    >
      {n.toLocaleString('en-IN')}
    </motion.span>
  );
}
