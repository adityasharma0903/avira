import { describe, it, expect } from 'vitest';
import { plans, reward, isRewardEligible, demoMetrics } from '../lib/product';

describe('AVIRA product rules', () => {
  it('Starter costs ₹2,999 per month', () => expect(plans.find(p => p.name === 'Starter').price).toBe(2999));
  it('Growth costs ₹6,999 per month', () => expect(plans.find(p => p.name === 'Growth').price).toBe(6999));
  it('Scale costs ₹14,999 per month', () => expect(plans.find(p => p.name === 'Scale').price).toBe(14999));
  it('reward is ₹150 off', () => expect(reward.amount).toBe(150));
  it('reward code is LIVIQUE150', () => expect(reward.code).toBe('LIVIQUE150'));
  it('reward is valid 30 days', () => expect(reward.validDays).toBe(30));
  it('UGC is eligible for rewards', () => expect(isRewardEligible('ugc')).toBe(true));
  it('referrals are eligible for rewards', () => expect(isRewardEligible('referral')).toBe(true));
  it('honest reviews are not eligible for rewards', () => expect(isRewardEligible('review')).toBe(false));
  it('Google reviews are not eligible for rewards', () => expect(isRewardEligible('google-review')).toBe(false));
  it('merchant scans update only after scanning', () => {
    expect(demoMetrics(2).scans).toBe(2184);
    expect(demoMetrics(3).scans).toBe(2185);
  });
  it('reviews never increment UGC', () => expect(demoMetrics(6, 'review').ugc).toBe(312));
  it('reward redemption subtracts ₹150 from ₹1299', () => expect(demoMetrics(9, 'ugc').revenue).toBe(287549));
  it('review checkout has no reward discount', () => expect(demoMetrics(9, 'review').revenue).toBe(287699));
  it('repeat orders update after repeat purchase', () => {
    expect(demoMetrics(7).repeats).toBe(143);
    expect(demoMetrics(8).repeats).toBe(144);
  });
});
