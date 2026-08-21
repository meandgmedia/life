// Central site configuration.
// Keep business facts here so they're defined once and reused everywhere
// (header, footer, SEO defaults, structured data, legal pages).

export const SITE = {
  name: 'Florida Life Insurance',
  shortName: 'FL Life Insurance',
  domain: 'https://florida-life-insurance.com',
  tagline: 'Life Insurance Made Simple.',
  description:
    'Compare life insurance options available in Florida and get your personalized quote online.',
  locale: 'en-US',
  legalBusinessName: 'Florida Life Insurance',
  // Individual agent operating this site.
  agentName: 'Matt Saffian',
  agentLicense: 'Florida Resident License #G273626',
  floridaLicenseNumber: 'G273626',
  phoneDisplay: '(772) 226-0875',
  phoneHref: 'tel:+17722260875',
  // TODO: Replace with a real support/contact email if different from below.
  email: 'info@florida-life-insurance.com',
  social: {
    // TODO: Add real social profile URLs when available, or remove.
    facebook: '',
    linkedin: '',
  },
} as const;

export const RELATED_SITES = {
  finalExpense: {
    name: 'Florida Final Expense',
    url: 'https://floridafinalexpense.com',
  },
} as const;
