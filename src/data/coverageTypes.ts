// Life insurance coverage types shown on the homepage grid.
// Each maps to a dedicated page built in Phase 4. Descriptions are
// deliberately educational and non-promissory (no "best," no guaranteed
// approval language) per the site's compliance rules.

export type CoverageType = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
};

export const coverageTypes: CoverageType[] = [
  {
    title: 'Term Life Insurance',
    eyebrow: 'Temporary',
    description:
      'Affordable, temporary coverage designed to provide protection for a specific period, such as 10, 20, or 30 years.',
    href: '/term-life-insurance/',
  },
  {
    title: 'Whole Life Insurance',
    eyebrow: 'Permanent',
    description:
      'Permanent life insurance designed to provide lifelong coverage and potentially build cash value over time.',
    href: '/whole-life-insurance/',
  },
  {
    title: 'Universal Life Insurance',
    eyebrow: 'Permanent',
    description:
      'Flexible permanent life insurance with adjustable premiums and death benefit options.',
    href: '/universal-life-insurance/',
  },
  {
    title: 'Final Expense Insurance',
    eyebrow: 'Seniors',
    description:
      'Coverage designed to help with funeral, burial, cremation, and other final expenses.',
    href: '/final-expense-insurance/',
  },
  {
    title: 'Guaranteed Issue Life Insurance',
    eyebrow: 'Simplified',
    description:
      'Life insurance that may be available without traditional medical underwriting, subject to product-specific terms and eligibility.',
    href: '/guaranteed-issue-life-insurance/',
  },
  {
    title: 'No Medical Exam Life Insurance',
    eyebrow: 'Simplified',
    description:
      'Products that may allow applicants to obtain coverage without a traditional medical exam.',
    href: '/no-medical-exam-life-insurance/',
  },
  {
    title: 'Senior Life Insurance',
    eyebrow: 'Seniors',
    description:
      'Life insurance options designed for older adults, including simplified and guaranteed-issue products.',
    href: '/senior-life-insurance/',
  },
  {
    title: 'Burial Insurance',
    eyebrow: 'Seniors',
    description:
      'Coverage commonly used to help pay funeral and burial-related expenses.',
    href: '/burial-insurance/',
  },
];
