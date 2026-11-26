// Decision scope of the IP_NLI_PAGE_RECOMMENDED_OFFERS placement.
// Copy it from AJO: Decisions > your decision > Decision scopes > Copy (the long base64 string).
const DECISION_SCOPE = 'PASTE_YOUR_DECISION_SCOPE_HERE'

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

// Step 1: request offers from Adobe Offer Decisioning and print the response.
export async function getOffers() {
  const response = await window.alloy('sendEvent', {
    decisionScopes: [DECISION_SCOPE],
  })

  console.log('Offer Decisioning response:', response)

  return PLACEHOLDER_OFFERS
}
