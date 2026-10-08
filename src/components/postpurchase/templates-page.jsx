import { useState, useEffect, useMemo } from 'react';
import { Link } from '@tanstack/react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RotateCw, Eye, Sparkles, Check, Copy, ArrowUpRight, ArrowRight,
  Package, QrCode, Camera, Users, Star, Gift, CheckCircle2, 
  Layers, Sliders, Printer, ShieldCheck, Download, Share2, 
  SlidersHorizontal, Search, Heart, Smartphone, ShoppingBag
} from 'lucide-react';
import QRCode from 'qrcode';
import { Header, Footer, Button, packageImage } from './elements';

// SVG Corner Floral Watercolor Ornament matching user's reference images
function FloralCorner({ position = 'top-left' }) {
  const isTopLeft = position === 'top-left';
  const isBottomRight = position === 'bottom-right';

  return (
    <svg 
      viewBox="0 0 160 160" 
      className={`absolute pointer-events-none w-24 h-24 sm:w-32 sm:h-32 transition-transform duration-500 ${
        isTopLeft ? 'top-0 left-0' : 'bottom-0 right-0 rotate-180'
      }`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Navy and indigo botanical leaves */}
      <path d="M18 10C24 35 48 48 75 42C52 65 30 52 18 10Z" fill="#1E2A38" opacity="0.88" />
      <path d="M12 28C22 50 42 60 62 55C42 72 24 62 12 28Z" fill="#2C3E50" opacity="0.75" />
      <path d="M35 15C50 28 65 24 82 18C70 35 52 38 35 15Z" fill="#1E2A38" opacity="0.82" />
      
      {/* Terracotta / Amber accent blossoms */}
      <circle cx="118" cy="118" r="14" fill="#C05C3D" opacity="0.9" />
      <circle cx="118" cy="118" r="9" fill="#D36B4C" />
      <circle cx="118" cy="118" r="4" fill="#7A321E" />
      <path d="M106 118C106 110 114 106 118 106C122 106 130 110 130 118C130 126 122 130 118 130C114 130 106 126 106 118Z" stroke="#8E3C25" strokeWidth="1" opacity="0.5" />
      
      {/* Cream Dogwood flower with golden pistil */}
      <g transform="translate(15, 15) scale(0.9)">
        <ellipse cx="25" cy="15" rx="14" ry="10" fill="#FAF5EB" stroke="#DDD2BE" strokeWidth="0.8" />
        <ellipse cx="35" cy="25" rx="10" ry="14" fill="#F5EFE1" stroke="#DDD2BE" strokeWidth="0.8" />
        <ellipse cx="25" cy="35" rx="14" ry="10" fill="#FAF5EB" stroke="#DDD2BE" strokeWidth="0.8" />
        <ellipse cx="15" cy="25" rx="10" ry="14" fill="#F5EFE1" stroke="#DDD2BE" strokeWidth="0.8" />
        <circle cx="25" cy="25" r="5" fill="#C29246" />
        <circle cx="25" cy="25" r="3" fill="#8C6527" />
      </g>
      
      {/* Delicate golden stems and seeds */}
      <path d="M20 20Q50 70 95 80" stroke="#B89B68" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
      <circle cx="95" cy="80" r="2.5" fill="#C49B4B" />
      <circle cx="82" cy="68" r="2" fill="#C49B4B" />
      <circle cx="70" cy="58" r="2" fill="#C49B4B" />
      <path d="M30 40Q60 90 110 100" stroke="#8E9EA7" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

// Dedicated Gift Box Templates Catalog
export const BOX_INSERT_TEMPLATES = [
  {
    id: 'botanical-heirloom',
    title: 'Botanical Heirloom Box Insert',
    subtitle: 'The Signature Unboxing Thank You Card',
    category: 'floral',
    badge: 'MOST POPULAR FOR D2C',
    bgTone: '#FAF7F0',
    borderColor: '#CBBFA8',
    textColor: '#2E3830',
    accentColor: '#9C6246',
    dimensions: '5.5" × 4.0" (Postcard Size)',
    gsm: '380 GSM Textured Cotton Linen',
    cost: '₹3.20 / card',
    theme: {
      floralCorner: true,
      scriptTitle: 'Thank You',
      subTitle: 'for your order',
      bodyText: 'We handpicked and packed this with lots of love just for you. Hope it brings a big smile to your day!',
      backTitle: 'Surprise!',
      backSub: 'Scan To Unlock Your Rewards !!',
      backInstructions: 'Scan · Participate · Unlock',
      rewardPill: '₹150 OFF ON NEXT PURCHASE'
    }
  },
  {
    id: 'blush-garden-sweet',
    title: 'Peony Garden & Gold Border',
    subtitle: 'Warm Romantic Unboxing Insert',
    category: 'floral',
    badge: 'BEAUTY & JEWELRY',
    bgTone: '#FDF8F5',
    borderColor: '#D8B8A6',
    textColor: '#362B28',
    accentColor: '#B86851',
    dimensions: '5.0" × 3.5" (Gift Enclosure)',
    gsm: '400 GSM Heavy Silk Velvet',
    cost: '₹3.40 / card',
    theme: {
      floralCorner: true,
      scriptTitle: 'A Little Love',
      subTitle: 'from our team to your home',
      bodyText: 'Every order supports an artisan dream. We hope you adore your new pieces as much as we loved creating them for you!',
      backTitle: 'A Little Treat!',
      backSub: 'Scan to claim your surprise gift & points !!',
      backInstructions: 'Unbox · Scan · Treat Yourself',
      rewardPill: 'MYSTERY REWARD INSIDE'
    }
  },
  {
    id: 'minimal-kraft-natural',
    title: 'Artisan Earth & Kraft Leaf',
    subtitle: 'Sustainable Apothecary Insert',
    category: 'kraft',
    badge: 'ECO & APOTHECARY',
    bgTone: '#F1E8DC',
    borderColor: '#B8A68F',
    textColor: '#2D2821',
    accentColor: '#607058',
    dimensions: '4.5" × 3.5" (Compact Box Card)',
    gsm: '350 GSM 100% Recycled Seed Paper',
    cost: '₹2.80 / card',
    theme: {
      floralCorner: false,
      scriptTitle: 'Thank You Kindly',
      subTitle: 'pure · organic · sustainable',
      bodyText: 'Consciously crafted and wrapped in 100% biodegradable packaging. Plant this card after scanning to grow wildflowers.',
      backTitle: 'Your Reward',
      backSub: 'Scan to earn loyalty credits on your refill !!',
      backInstructions: 'Snap · Share · Earn',
      rewardPill: '20% OFF YOUR NEXT REFILL'
    }
  },
  {
    id: 'noir-gold-luxury',
    title: 'Maison Noir & Champagne Gold',
    subtitle: 'Haute Luxury & Couture Enclosure',
    category: 'luxury',
    badge: 'LUXURY COUTURE',
    bgTone: '#121518',
    borderColor: '#D4AF37',
    textColor: '#FAF7F2',
    accentColor: '#E6C665',
    dimensions: '6.0" × 4.0" (Deluxe Postcard)',
    gsm: '450 GSM Heavy Matte Obsidian Board',
    cost: '₹4.50 / card (Gold Foil)',
    theme: {
      floralCorner: false,
      scriptTitle: 'Exclusively Yours',
      subTitle: 'curated with distinction',
      bodyText: 'Your bespoke order was individually inspected and hand-packaged with highest precision. Welcome to our private circle.',
      backTitle: 'VIP Privilege',
      backSub: 'Scan to unlock private client benefits !!',
      backInstructions: 'Privilege · Concierge · Access',
      rewardPill: 'EXCLUSIVE VIP PATRON PASS'
    }
  },
  {
    id: 'terracotta-warmth',
    title: 'Terracotta & Sunlit Olive',
    subtitle: 'Artisanal Home & Culinary Insert',
    category: 'kraft',
    badge: 'HOME & LIFESTYLE',
    bgTone: '#FAF3EB',
    borderColor: '#D49B7E',
    textColor: '#382218',
    accentColor: '#C46D47',
    dimensions: '5.0" × 3.5" (Box Card)',
    gsm: '380 GSM Warm Felt Uncoated',
    cost: '₹3.10 / card',
    theme: {
      floralCorner: true,
      scriptTitle: 'Made With Love',
      subTitle: 'from our workshop to yours',
      bodyText: 'We pour our heart into every batch. Thank you for inviting our craft into your living spaces and daily life.',
      backTitle: 'Something Sweet!',
      backSub: 'Share an unboxing photo to claim ₹200 !!',
      backInstructions: 'Tag Us · Post · Enjoy Reward',
      rewardPill: '₹200 STORE CREDIT UNLOCKED'
    }
  },
  {
    id: 'festive-celebration-gold',
    title: 'Festive Holiday Pine & Gold',
    subtitle: 'Holiday Gifting Box Insert',
    category: 'festive',
    badge: 'FESTIVE SEASON',
    bgTone: '#FDFBF7',
    borderColor: '#C79D55',
    textColor: '#1E3326',
    accentColor: '#9C3425',
    dimensions: '5.5" × 4.0" (Standard Gifting)',
    gsm: '400 GSM Pearlescent Shimmer',
    cost: '₹3.80 / card',
    theme: {
      floralCorner: true,
      scriptTitle: 'Joyful Greetings',
      subTitle: 'a special holiday order',
      bodyText: 'Sending warm festive wishes! May this package bring joy, celebration, and delightful memories to you and your loved ones.',
      backTitle: 'Holiday Wonder!',
      backSub: 'Scan to reveal your festive mystery cashback !!',
      backInstructions: 'Spin Wheel · Win · Celebrate',
      rewardPill: 'UP TO 50% FESTIVE CASHBACK'
    }
  }
];

// Helper to generate QR code canvas/URL
function DynamicBoxQR({ text, size = 110, dark = '#1F2A38', light = '#FAF7F0', className = '' }) {
  const [dataUrl, setDataUrl] = useState('');

  useEffect(() => {
    let mounted = true;
    QRCode.toDataURL(text || 'https://avira.design/demo', {
      margin: 1,
      width: size,
      color: { dark, light }
    }).then(url => {
      if (mounted) setDataUrl(url);
    }).catch(() => {});

    return () => { mounted = false; };
  }, [text, size, dark, light]);

  if (!dataUrl) {
    return (
      <div className={`flex items-center justify-center bg-black/10 rounded ${className}`} style={{ width: size, height: size }}>
        <QrCode size={size * 0.5} className="opacity-40" />
      </div>
    );
  }

  return (
    <img 
      src={dataUrl} 
      alt="Scan to Unlock Rewards" 
      width={size} 
      height={size} 
      className={`rounded border border-black/10 shadow-sm ${className}`} 
    />
  );
}

// Single Physical Insert Card with 3D Flip
function PhysicalInsertCard({ template, isFlipped, onToggleFlip, customBrand = 'LIVIQUE', customMessage = '' }) {
  const isDark = template.bgTone === '#121518';

  return (
    <div 
      className={`relative w-full aspect-[1.38/1] min-h-[260px] sm:min-h-[300px] perspective-1000 cursor-pointer select-none transition-transform duration-300 ${
        isFlipped ? 'card-is-flipped' : ''
      }`}
      onClick={onToggleFlip}
      style={{ perspective: '1200px' }}
    >
      <div 
        className="w-full h-full relative transition-transform duration-700 rounded-xl"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          boxShadow: '0 20px 45px rgba(25, 30, 25, 0.14), 0 2px 8px rgba(0,0,0,0.06)'
        }}
      >
        {/* ================= FRONT SIDE (Thank You Note) ================= */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between border"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            backgroundColor: template.bgTone,
            borderColor: template.borderColor,
            color: template.textColor
          }}
        >
          {/* Floral Corner Ornaments */}
          {template.theme.floralCorner && (
            <>
              <FloralCorner position="top-left" />
              <FloralCorner position="bottom-right" />
            </>
          )}

          {/* Double Embossed Frame */}
          <div 
            className="absolute inset-3 sm:inset-4 border pointer-events-none rounded-lg"
            style={{ borderColor: template.borderColor + '77' }}
          >
            <div 
              className="absolute inset-1 border pointer-events-none rounded"
              style={{ borderColor: template.borderColor + '33' }}
            />
          </div>

          {/* Top Brand Tag */}
          <div className="relative z-10 flex justify-between items-center text-[10px] tracking-widest uppercase font-medium opacity-70">
            <span>{customBrand || 'AVIRA GIFT SUITE'}</span>
            <span className="flex items-center gap-1">
              <Heart size={10} className="text-amber-700/80 fill-current" />
              PACKED FOR YOU
            </span>
          </div>

          {/* Central Calligraphy & Note */}
          <div className="relative z-10 my-auto text-center px-4 sm:px-8">
            <h3 
              className="font-serif italic text-4xl sm:text-5xl font-normal leading-tight tracking-wide"
              style={{ color: template.accentColor }}
            >
              {template.theme.scriptTitle}
            </h3>
            <p className="text-xs sm:text-sm tracking-wider uppercase font-medium mt-0.5 opacity-80">
              {template.theme.subTitle}
            </p>

            <div className="w-12 h-[1px] mx-auto my-3 opacity-30 bg-current" />

            <p className="text-xs sm:text-[13px] leading-relaxed max-w-md mx-auto font-sans opacity-90">
              {customMessage || template.theme.bodyText}
            </p>
          </div>

          {/* Bottom Flip Indicator */}
          <div className="relative z-10 flex justify-between items-end text-[9px] font-mono opacity-60">
            <span>AVIRA BOX INSERT</span>
            <span className="inline-flex items-center gap-1 font-sans text-[10px] text-amber-800 dark:text-amber-300 font-medium">
              <RotateCw size={11} /> Turn over for reward QR
            </span>
          </div>
        </div>

        {/* ================= BACK SIDE (Surprise & QR Code) ================= */}
        <div 
          className="absolute inset-0 w-full h-full rounded-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between border"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: template.bgTone,
            borderColor: template.borderColor,
            color: template.textColor
          }}
        >
          {/* Floral Corner Ornaments */}
          {template.theme.floralCorner && (
            <>
              <FloralCorner position="top-left" />
              <FloralCorner position="bottom-right" />
            </>
          )}

          {/* Double Embossed Frame */}
          <div 
            className="absolute inset-3 sm:inset-4 border pointer-events-none rounded-lg"
            style={{ borderColor: template.borderColor + '77' }}
          >
            <div 
              className="absolute inset-1 border pointer-events-none rounded"
              style={{ borderColor: template.borderColor + '33' }}
            />
          </div>

          {/* Back Header */}
          <div className="relative z-10 flex justify-between items-center text-[10px] tracking-widest uppercase font-medium opacity-70">
            <span>{customBrand}</span>
            <span className="text-amber-800 dark:text-amber-400 font-semibold">{template.theme.rewardPill}</span>
          </div>

          {/* Center: "Surprise!" & QR Code */}
          <div className="relative z-10 my-auto flex flex-col items-center text-center">
            <h3 
              className="font-serif italic text-3xl sm:text-4xl font-normal leading-tight tracking-wide mb-2"
              style={{ color: template.accentColor }}
            >
              {template.theme.backTitle}
            </h3>

            {/* QR Code */}
            <div className="p-2 bg-white/95 rounded-lg shadow-md border border-black/10 transition-transform duration-300 hover:scale-105">
              <DynamicBoxQR 
                text={`https://avira.design/demo?template=${template.id}`} 
                size={110} 
                dark={isDark ? '#121518' : '#1E2A38'}
                light="#FFFFFF"
              />
            </div>

            {/* Call to action text */}
            <p className="font-sans font-semibold text-xs sm:text-sm tracking-wide mt-3 text-stone-800 dark:text-stone-100">
              {template.theme.backSub}
            </p>
            <span className="text-[10px] tracking-widest uppercase mt-0.5 opacity-60 font-mono">
              {template.theme.backInstructions}
            </span>
          </div>

          {/* Bottom Flip Indicator */}
          <div className="relative z-10 flex justify-between items-end text-[9px] font-mono opacity-60">
            <span>PRINT AT ~₹3 / CARD</span>
            <span className="inline-flex items-center gap-1 font-sans text-[10px] text-amber-800 dark:text-amber-300 font-medium">
              <RotateCw size={11} /> Flip to Thank You note
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Dedicated Templates Page Component
export default function TemplatesPage() {
  const [selectedTemplateId, setSelectedTemplateId] = useState('botanical-heirloom');
  const [isFlipped, setIsFlipped] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [brandName, setBrandName] = useState('LIVIQUE');
  const [customNote, setCustomNote] = useState('');
  const [showInBoxMockup, setShowInBoxMockup] = useState(false);
  const [copied, setCopied] = useState(false);

  const selectedTemplate = useMemo(() => {
    return BOX_INSERT_TEMPLATES.find(t => t.id === selectedTemplateId) || BOX_INSERT_TEMPLATES[0];
  }, [selectedTemplateId]);

  const filteredTemplates = useMemo(() => {
    return BOX_INSERT_TEMPLATES.filter(t => {
      if (categoryFilter !== 'all' && t.category !== categoryFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return t.title.toLowerCase().includes(q) || t.subtitle.toLowerCase().includes(q) || t.badge.toLowerCase().includes(q);
      }
      return true;
    });
  }, [categoryFilter, searchQuery]);

  const copyPrintSpecs = () => {
    const text = `AVIRA Box Insert Template: ${selectedTemplate.title}
Dimensions: ${selectedTemplate.dimensions}
Cardstock: ${selectedTemplate.gsm}
Estimated Production Cost: ${selectedTemplate.cost}
Front Message: "${selectedTemplate.theme.scriptTitle} - ${customNote || selectedTemplate.theme.bodyText}"
Back Message: "${selectedTemplate.theme.backTitle} - ${selectedTemplate.theme.backSub}"
QR Pairing: AVIRA Dynamic Post-Purchase Engagement Flow`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="site-shell">
      {/* Editorial Navigation */}
      <Header dark />

      <main className="py-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================= HERO HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-12">
          <span className="eyebrow block text-emerald-800 dark:text-emerald-400 mb-3 tracking-widest font-semibold text-xs">
            PACKAGING &amp; GIFT BOX INSERTS · NOT VISITING CARDS
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground font-normal tracking-tight leading-none mb-4">
            A little something extra<br />
            <i className="text-emerald-800 dark:text-emerald-400 font-normal">tucked inside every gift box.</i>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            These are physical, double-sided insert cards designed specifically to be added inside your orders and gift packages. 
            Customers receive a heartfelt &ldquo;Thank You&rdquo; note on front, then flip over to scan a surprise QR reward that unlocks reviews, UGC content, and repeat sales.
          </p>

          {/* Quick Metrics from the business diagram */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground border-y py-3.5 border-border">
            <span className="flex items-center gap-2">
              <strong className="text-foreground font-semibold text-sm">~₹3 / card</strong> Printing Cost
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-2">
              <strong className="text-foreground font-semibold text-sm">46%</strong> QR Scan Rate
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-2">
              <strong className="text-foreground font-semibold text-sm">15.2x</strong> Attributed ROI
            </span>
            <span className="text-border">•</span>
            <span className="flex items-center gap-2">
              <strong className="text-emerald-700 dark:text-emerald-400 font-semibold text-sm">Zero App Needed</strong> Camera Scan
            </span>
          </div>
        </div>

        {/* ================= HERO INTERACTIVE STUDIO ================= */}
        <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left: 3D Interactive Card / Box Simulator */}
            <div className="lg:col-span-7 flex flex-col items-center">
              {/* Studio Toolbar */}
              <div className="w-full flex justify-between items-center mb-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">
                    {isFlipped ? 'Reverse Face (Reward QR)' : 'Front Face (Thank You Note)'}
                  </span>
                  <span className="text-muted-foreground">• Tap card to flip</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowInBoxMockup(!showInBoxMockup)}
                    className={`px-3 py-1.5 rounded text-xs font-medium border transition ${
                      showInBoxMockup 
                        ? 'bg-primary text-primary-foreground border-primary' 
                        : 'bg-muted text-muted-foreground border-border hover:text-foreground'
                    }`}
                  >
                    <Package size={13} className="inline mr-1" />
                    {showInBoxMockup ? 'Gift Box View' : 'Card View'}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="px-3 py-1.5 rounded text-xs font-medium bg-muted border border-border text-foreground hover:bg-muted/80 transition flex items-center gap-1"
                  >
                    <RotateCw size={12} className={isFlipped ? 'rotate-180 transition-transform' : 'transition-transform'} />
                    <span>Flip to {isFlipped ? 'Front' : 'Back'}</span>
                  </button>
                </div>
              </div>

              {/* The Card View / Box Mockup Container */}
              <div className="w-full max-w-[500px] relative">
                {showInBoxMockup ? (
                  // Inside Gift Box Mockup
                  <div className="relative w-full aspect-[1.25/1] bg-stone-800 rounded-xl p-6 sm:p-8 flex items-center justify-center shadow-2xl overflow-hidden border border-stone-700">
                    {/* Packaging paper background texture */}
                    <div className="absolute inset-0 bg-[#3A322D] opacity-90" />
                    <div className="absolute inset-4 border border-dashed border-[#5C4F45] rounded pointer-events-none" />
                    
                    {/* Open Box Flaps effect */}
                    <div className="absolute top-2 left-6 text-[10px] tracking-widest text-[#B5A595] font-mono uppercase">
                      UNBOXING GIFT PACKAGE · LIVIQUE BOX #LVQ-10092
                    </div>

                    {/* Card resting inside tissue paper */}
                    <div className="relative z-10 w-[90%] transform rotate-[-2deg] transition-transform hover:rotate-0">
                      <PhysicalInsertCard 
                        template={selectedTemplate} 
                        isFlipped={isFlipped}
                        onToggleFlip={() => setIsFlipped(!isFlipped)}
                        customBrand={brandName}
                        customMessage={customNote}
                      />
                    </div>
                  </div>
                ) : (
                  // Flat Crisp Card 3D Viewer
                  <PhysicalInsertCard 
                    template={selectedTemplate} 
                    isFlipped={isFlipped}
                    onToggleFlip={() => setIsFlipped(!isFlipped)}
                    customBrand={brandName}
                    customMessage={customNote}
                  />
                )}
              </div>

              {/* Quick Prompt under card */}
              <p className="text-xs text-muted-foreground mt-4 text-center flex items-center justify-center gap-1.5">
                <Smartphone size={13} className="text-emerald-700" />
                Scan this QR code with your phone camera right now to test the real customer unboxing flow!
              </p>
            </div>

            {/* Right: Live Customizer & Specs */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 text-[10px] font-mono tracking-wider font-semibold uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded border border-emerald-300 dark:border-emerald-800">
                    {selectedTemplate.badge}
                  </span>
                  <span className="text-xs text-muted-foreground">{selectedTemplate.dimensions}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-foreground font-medium">
                  {selectedTemplate.title}
                </h2>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {selectedTemplate.subtitle}. Dual-sided botanical print card tucked over items or beneath the box lid for high-impact unboxing delight.
                </p>

                {/* Customizer Inputs */}
                <div className="mt-5 space-y-3.5 bg-muted/60 p-4 rounded-xl border border-border">
                  <div>
                    <label className="block text-[11px] font-semibold text-foreground uppercase tracking-wider mb-1">
                      Your Brand Name
                    </label>
                    <input 
                      type="text" 
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="e.g. LIVIQUE, Bloom & Root"
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-foreground uppercase tracking-wider mb-1">
                      Custom Unboxing Note (Front Side)
                    </label>
                    <textarea 
                      rows={3}
                      value={customNote}
                      onChange={(e) => setCustomNote(e.target.value)}
                      placeholder={selectedTemplate.theme.bodyText}
                      className="w-full text-xs px-3 py-2 rounded border border-border bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary leading-relaxed"
                    />
                  </div>
                </div>

                {/* Production Specs */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs bg-muted/40 p-3.5 rounded-lg border border-border">
                  <div>
                    <span className="text-muted-foreground block text-[10px]">PRINT COST</span>
                    <strong className="text-foreground">{selectedTemplate.cost}</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px]">PAPER STOCK</span>
                    <strong className="text-foreground">{selectedTemplate.gsm}</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px]">FINISHING</span>
                    <strong className="text-foreground">Embossed &amp; Soft Touch</strong>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px]">DIGITAL LINK</span>
                    <strong className="text-emerald-700 dark:text-emerald-400">AVIRA QR Campaign</strong>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-3">
                <Button variant="default" className="flex-1" asChild>
                  <Link to="/demo">
                    Launch With This Card <ArrowRight size={14} />
                  </Link>
                </Button>
                <button
                  type="button"
                  onClick={copyPrintSpecs}
                  className="px-3.5 py-2 rounded bg-muted hover:bg-muted/80 text-foreground text-xs font-medium flex items-center gap-1.5 transition border border-border"
                >
                  {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                  <span>{copied ? 'Specs Copied!' : 'Copy Specs'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= COMPLETE 7-STEP UNBOXING FLOW ================= */}
        {/* Recreating the exact end-to-end flow from the user's diagram photo */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow block text-muted-foreground mb-2">END-TO-END FLOW (CUSTOMER + MERCHANT)</span>
            <h2 className="font-serif text-3xl sm:text-4xl">How the gift box card works in reality.</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              From the moment an order is packed in your warehouse to customer reviews, UGC content, and repeat purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { num: '01', title: 'Customer Orders', desc: 'Customer places order on your D2C storefront.', icon: ShoppingBag },
              { num: '02', title: 'Card Packed', desc: 'Printed QR card is placed inside the gift box with items.', icon: Package, highlight: true },
              { num: '03', title: 'Package Arrives', desc: 'Customer unboxes delivery and finds the tactile card.', icon: Heart },
              { num: '04', title: 'Customer Scans', desc: 'Customer scans QR with smartphone camera.', icon: QrCode, highlight: true },
              { num: '05', title: 'Web Experience', desc: 'Opens branded web app (no app download required).', icon: Smartphone },
              { num: '06', title: 'Shares UGC / Review', desc: 'Customer submits Instagram photo or Google review.', icon: Camera, highlight: true },
              { num: '07', title: 'Reward & Repeat', desc: 'Instantly receives ₹150 OFF for their next purchase.', icon: Gift },
            ].map(step => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.num}
                  className={`p-4 rounded-xl border flex flex-col justify-between transition-all duration-200 ${
                    step.highlight 
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800' 
                      : 'bg-card border-border'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-mono font-bold text-muted-foreground">{step.num}</span>
                      <Icon size={16} className={step.highlight ? 'text-emerald-700 dark:text-emerald-400' : 'text-muted-foreground'} />
                    </div>
                    <h4 className="font-semibold text-xs text-foreground mb-1">{step.title}</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= TEMPLATES GALLERY ================= */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
            <div>
              <span className="eyebrow block text-muted-foreground mb-1">CURATED GIFT BOX INSERTS</span>
              <h3 className="font-serif text-3xl sm:text-4xl">Choose your packaging aesthetic.</h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                { id: 'all', label: 'All Inserts' },
                { id: 'floral', label: 'Botanical & Floral' },
                { id: 'kraft', label: 'Eco Kraft & Earth' },
                { id: 'luxury', label: 'Luxe Noir & Gold' },
                { id: 'festive', label: 'Holiday & Celebration' },
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setCategoryFilter(f.id)}
                  className={`px-3 py-1.5 rounded-full border transition ${
                    categoryFilter === f.id 
                      ? 'bg-primary text-primary-foreground border-primary font-medium' 
                      : 'bg-card text-muted-foreground border-border hover:text-foreground'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map(template => (
              <div 
                key={template.id}
                className={`bg-card border rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${
                  selectedTemplateId === template.id ? 'ring-2 ring-emerald-600 border-transparent' : 'border-border'
                }`}
              >
                <div>
                  {/* Card Mini 3D Preview */}
                  <div 
                    className="mb-4 cursor-pointer"
                    onClick={() => {
                      setSelectedTemplateId(template.id);
                      setIsFlipped(false);
                      window.scrollTo({ top: 320, behavior: 'smooth' });
                    }}
                  >
                    <PhysicalInsertCard 
                      template={template} 
                      isFlipped={false} 
                      onToggleFlip={() => {}} 
                      customBrand={brandName}
                    />
                  </div>

                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h4 className="font-serif text-xl font-medium text-foreground">{template.title}</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground shrink-0">
                      {template.cost}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{template.subtitle}</p>
                </div>

                <div className="pt-3 border-t border-border flex justify-between items-center text-xs">
                  <span className="text-[10px] text-muted-foreground font-mono">{template.dimensions}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTemplateId(template.id);
                      setIsFlipped(false);
                      window.scrollTo({ top: 320, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    Customize in Studio <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PRINT & BULK CARD PRICING BANNER ================= */}
        {/* Recreating the exact business model pricing section from photo 1 */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 sm:p-12 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow block text-emerald-300 mb-2">BUSINESS MODEL &amp; PRINT SPECIFICATIONS</span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-3">
                Print physical cards for your packages.<br />
                <i className="text-emerald-300 font-normal">Track results with AVIRA software.</i>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl">
                You can print these cards through AVIRA&rsquo;s certified unboxing print partner network, or download 
                print-ready vector PDFs with your unique dynamic QR batch to print with your local packaging supplier.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                  <span className="text-white/60 block text-[10px] uppercase">PRINTING COST</span>
                  <strong className="text-lg text-white font-serif">~₹3</strong>
                  <span className="text-white/70 block text-[10px]">per physical card</span>
                </div>
                <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                  <span className="text-white/60 block text-[10px] uppercase">SUGGESTED VALUE</span>
                  <strong className="text-lg text-white font-serif">~₹7</strong>
                  <span className="text-white/70 block text-[10px]">per insert with reward</span>
                </div>
                <div className="bg-white/10 p-3 rounded-lg border border-white/10">
                  <span className="text-white/60 block text-[10px] uppercase">REVENUE RETURN</span>
                  <strong className="text-lg text-white font-serif">15.2x</strong>
                  <span className="text-white/70 block text-[10px]">average campaign ROI</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white text-stone-900 p-6 rounded-xl shadow-lg">
              <h4 className="font-serif text-xl font-medium mb-1">Request Card Sample Pack</h4>
              <p className="text-xs text-stone-600 mb-4">
                Receive physical cardstock swatch samples and live test cards delivered to your office.
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2 text-stone-700">
                  <CheckCircle2 size={14} className="text-emerald-700 shrink-0" />
                  <span>5 botanical floral textured stock swatches (350–450 GSM)</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <CheckCircle2 size={14} className="text-emerald-700 shrink-0" />
                  <span>Gold foil stamp &amp; soft-touch velvet coating samples</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <CheckCircle2 size={14} className="text-emerald-700 shrink-0" />
                  <span>Pre-configured scannable demo QR cards</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-200">
                <Button variant="default" className="w-full" asChild>
                  <Link to="/demo">
                    Start Pilot &amp; Order Samples <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
