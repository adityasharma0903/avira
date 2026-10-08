export const plans = [{ name: 'Starter', price: 999, description: 'For early D2C brands.' }, { name: 'Growth', price: 2499, description: 'For brands finding their next gear.' }, { name: 'Pro', price: 5999, description: 'For growing brands.' }];
export const reward = { amount: 150, code: 'LIVIQUE150', validDays: 30 };
export const isRewardEligible = (action) => ['ugc', 'referral'].includes(action);
export const demoSteps = ['Order placed', 'Package delivered', 'QR card revealed', 'QR scanned', 'Choose your experience', 'UGC submitted', 'Reward unlocked', 'Referral generated', 'Repeat order placed', 'Growth, measured'];
export function demoMetrics(step, action = 'ugc') { return { orders: 5000 + (step >= 8 ? 1 : 0), scans: 2184 + (step >= 3 ? 1 : 0), ugc: 312 + (step >= 5 && action === 'ugc' ? 1 : 0), referrals: 187 + (step >= 7 ? 1 : 0), repeats: 143 + (step >= 8 ? 1 : 0), revenue: 286400 + (step >= 8 ? (isRewardEligible(action) ? 1149 : 1299) : 0) }; }
