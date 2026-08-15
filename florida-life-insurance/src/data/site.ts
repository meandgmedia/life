// Central site configuration.
// Keep business facts here so they're defined once and reused everywhere
// (header, footer, SEO defaults, structured data in a later phase).

export const SITE = {
  name: 'Florida Life Insurance',
  shortName: 'FL Life Insurance',
  domain: 'https://florida-life-insurance.com',
  tagline: 'Life Insurance Made Simple.',
  description:
    'Compare life insurance options available in Florida and get your personalized quote online.',
  locale: 'en-US',
  // TODO: Replace with the real licensed business/agency name before launch.
  legalBusinessName: '[Legal Business Name Placeholder]',
  // TODO: Replace with the real Florida agency/agent license number(s).
  floridaLicenseNumber: '[Florida License # Placeholder]',
  // TODO: Replace with a real support phone number.
  phoneDisplay: '(000) 000-0000',
  phoneHref: 'tel:+10000000000',
  // TODO: Replace with a real support/contact email.
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
