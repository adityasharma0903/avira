export const plans = [
  {
    name: 'Starter',
    displayName: 'STARTER',
    price: 2999,
    description: 'For brands starting their post-purchase journey.',
    cardsIncluded: '100 premium AVIRA cards/month',
    effectiveCost: 'Effective: ₹30/order',
    ctaText: 'Start with AVIRA →',
    ctaLink: '/start-free',
    features: [
      '100 premium AVIRA cards/month',
      'Custom QR experience',
      'UGC collection',
      'Honest review collection',
      'Referral campaigns',
      'Basic rewards',
      'Basic analytics',
      'AVIRA-branded experience',
      'Campaign setup',
      'Email support'
    ]
  },
  {
    name: 'Growth',
    displayName: 'GROWTH',
    price: 4999,
    description: 'For brands ready to turn orders into growth.',
    cardsIncluded: '500 premium cards/month',
    effectiveCost: 'Effective: ₹10/order',
    ctaText: 'Start Growing →',
    ctaLink: '/start-free',
    popular: true,
    features: [
      '500 premium cards/month',
      'Everything in Starter',
      'Custom branding',
      'Multiple campaigns',
      'Advanced UGC campaigns',
      'Referral rewards',
      'Store-credit / coupon rewards',
      'Advanced analytics',
      'Customer journey tracking',
      'Shopify integration',
      'Remove AVIRA branding',
      'Priority support'
    ]
  },
  {
    name: 'Scale',
    displayName: 'SCALE',
    price: 9999,
    description: 'For brands with thousands of orders.',
    cardsIncluded: '2,000 premium cards/month',
    effectiveCost: 'High-volume scale',
    ctaText: 'Talk to AVIRA →',
    ctaLink: '/contact',
    features: [
      '2,000 premium cards/month',
      'Everything in Growth',
      'Unlimited campaigns',
      'Advanced segmentation',
      'Automated reward flows',
      'Advanced attribution',
      'Shopify + WooCommerce',
      'API / webhooks',
      'Custom domain',
      'Dedicated onboarding',
      'Priority support'
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
