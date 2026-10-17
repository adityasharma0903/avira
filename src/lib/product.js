export const plans = [
  {
    name: 'Starter',
    displayName: 'AVIRA STARTER',
    price: 2999,
    description: 'For brands starting their post-purchase journey.',
    cardsIncluded: '250 cards / month',
    effectiveCost: 'Effective: ₹12/order',
    ctaText: 'Start with AVIRA →',
    ctaLink: '/start-free',
    features: [
      'Custom-branded QR experience',
      'Premium card design',
      'Reviews and UGC flows',
      'Rewards, offers and referrals',
      'Campaign analytics',
      'Brand links and social engagement'
    ]
  },
  {
    name: 'Growth',
    displayName: 'AVIRA GROWTH',
    price: 4999,
    description: 'For brands ready to turn orders into growth.',
    cardsIncluded: '750 cards / month',
    effectiveCost: 'Effective: ₹6.7/order',
    ctaText: 'Start Growing →',
    ctaLink: '/start-free',
    popular: true,
    features: [
      'Everything in Starter',
      'Multiple campaign variations',
      'Customer journey reporting',
      'Shopify integration, where supported',
      'Priority onboarding and support'
    ]
  },
  {
    name: 'Scale',
    displayName: 'AVIRA SCALE',
    price: 9999,
    description: 'For brands with thousands of orders.',
    cardsIncluded: '2,000 cards / month',
    effectiveCost: 'Effective: ₹5/order',
    ctaText: 'Talk to AVIRA →',
    ctaLink: '/contact',
    features: [
      'Everything in Growth',
      'Advanced campaign workflows',
      'Customer segmentation and attribution',
      'API/webhooks, where supported',
      'Dedicated onboarding and priority support'
    ]
  }
];

export const pricingNote = {
  title: 'PRICING NOTE',
  text: 'Prices shown are proposed and subject to final confirmation. Printing, packaging, shipping, taxes, reward funding, card quantities, integrations and support costs are confirmed before launch. Rewards and discounts are funded by the brand unless agreed otherwise.',
  tagline: 'EVERY ORDER A LASTING CONNECTION',
  brandLine: 'AVIRA • AVIRAD2C.APP'
};

export const cardAddonPricing = [
  { quantity: '250 cards', price: '₹999', note: 'Single batch reorder' },
  { quantity: '500 cards', price: '₹1,899', note: 'Growing fulfillment runs' },
  { quantity: '1,000 cards', price: '₹3,499', note: 'High volume dispatch' },
  { quantity: '2,500+ cards', price: 'Custom', note: 'Tailored enterprise rates' }
];

export const reward = { amount: 150, code: 'LIVIQUE150', validDays: 30 };
export const isRewardEligible = (action) => ['ugc', 'referral'].includes(action);
export const demoSteps = ['Order placed', 'Package delivered', 'QR card revealed', 'QR scanned', 'Choose your experience', 'UGC submitted', 'Reward unlocked', 'Referral generated', 'Repeat order placed', 'Growth, measured'];
export function demoMetrics(step, action = 'ugc') {
  return {
    orders: 5000 + (step >= 8 ? 1 : 0),
    scans: 2184 + (step >= 3 ? 1 : 0),
    ugc: 312 + (step >= 5 && action === 'ugc' ? 1 : 0),
    referrals: 187 + (step >= 7 ? 1 : 0),
    repeats: 143 + (step >= 8 ? 1 : 0),
    revenue: 286400 + (step >= 8 ? (isRewardEligible(action) ? 1149 : 1299) : 0)
  };
}
