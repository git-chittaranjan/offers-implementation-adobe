// Where offers come from. Later, replace the placeholder with an Adobe Web SDK call:
//
//   const result = await window.alloy('sendEvent', {
//     decisionScopes: ['<your-decision-scope>'],
//   })
//   return result.propositions  // map these to { id, title, description, imageUrl, ctaText, ctaUrl }

const PLACEHOLDER_OFFERS = [
  {
    id: 'banking',
    title: 'Zero-Balance Savings Account',
    description: 'Open a digital savings account in minutes. No minimum balance.',
    imageUrl: '/images/banking.svg',
    ctaText: 'Open Account',
    ctaUrl: '#',
  },
  {
    id: 'credit-card',
    title: 'Platinum Rewards Credit Card',
    description: 'Earn 5X reward points on online spends and zero joining fee.',
    imageUrl: '/images/credit-card.svg',
    ctaText: 'Apply Now',
    ctaUrl: '#',
  },
  {
    id: 'personal-loan',
    title: 'Pre-Approved Personal Loan',
    description: 'Get up to ₹25 lakh with instant disbursal and minimal paperwork.',
    imageUrl: '/images/personal-loan.svg',
    ctaText: 'Check Eligibility',
    ctaUrl: '#',
  },
]

export async function getOffers() {
  return PLACEHOLDER_OFFERS
}
