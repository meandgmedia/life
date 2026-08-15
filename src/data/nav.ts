// Navigation architecture for the site.
// NOTE: Several of these routes are not built yet — they are created in
// later phases (Phase 4 core product pages, Phase 5 blog, Phase 6 about/contact).
// Defining the full information architecture now keeps the header/footer
// stable as pages are added, instead of rebuilding nav each phase.

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: 'Life Insurance', href: '/life-insurance/' },
  { label: 'Term Life', href: '/term-life-insurance/' },
  { label: 'Whole Life', href: '/whole-life-insurance/' },
  { label: 'Final Expense', href: '/final-expense-insurance/' },
  { label: 'Senior Life', href: '/senior-life-insurance/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
];

export const footerColumns: { heading: string; links: NavItem[] }[] = [
  {
    heading: 'Coverage',
    links: [
      { label: 'Life Insurance', href: '/life-insurance/' },
      { label: 'Term Life', href: '/term-life-insurance/' },
      { label: 'Whole Life', href: '/whole-life-insurance/' },
      { label: 'Universal Life', href: '/universal-life-insurance/' },
      { label: 'Final Expense', href: '/final-expense-insurance/' },
      { label: 'Burial Insurance', href: '/burial-insurance/' },
      { label: 'Senior Life', href: '/senior-life-insurance/' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Get a Quote', href: '/get-a-quote/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'About', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
];

export const footerLegal: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Use', href: '/terms-of-use/' },
  { label: 'Insurance Disclosures', href: '/disclosures/' },
];
