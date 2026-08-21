export type FaqItem = {
  question: string;
  answer: string;
};

export const homepageFaq: FaqItem[] = [
  {
    question: 'Can I really get life insurance online in Florida?',
    answer:
      'Yes. You can request a personalized quote online, compare available coverage options, and in many cases complete your application online as well. Some products may be issued quickly depending on your eligibility and carrier underwriting, while others may require additional review.',
  },
  {
    question: 'How do I get a life insurance quote?',
    answer:
      'Use the "Get a Free Quote" button to share some basic information, such as your age, coverage amount, and the type of policy you\'re interested in. You\'ll then be able to review available options based on what you provide.',
  },
  {
    question: 'Will I qualify for coverage?',
    answer:
      'Eligibility depends on the specific product, carrier, and your individual circumstances, including age and health history. Some products, like guaranteed issue or simplified issue policies, are designed for applicants who may not qualify for fully underwritten coverage.',
  },
  {
    question: "What's the difference between term and whole life insurance?",
    answer:
      'Term life insurance provides coverage for a specific period, such as 10, 20, or 30 years, and is generally more affordable. Whole life insurance is permanent coverage that lasts your lifetime and may build cash value. Which one fits depends on your goals and budget.',
  },
  {
    question: 'Do I need a medical exam to get life insurance?',
    answer:
      'Not always. Some policies require a medical exam as part of underwriting, while others — including many no-medical-exam and guaranteed issue products — do not. Availability depends on the product and carrier.',
  },
  {
    question: 'How long does it take to get approved?',
    answer:
      'Timelines vary by product and carrier. Some simplified or guaranteed-issue policies can be issued quickly, while fully underwritten policies that require a medical exam typically take longer to review.',
  },
];

export const quotePageFaq: FaqItem[] = [
  {
    question: 'Is requesting a quote free?',
    answer:
      'Yes. Requesting a quote is free and does not obligate you to apply for coverage.',
  },
  {
    question: 'What information do I need to get a quote?',
    answer:
      'Basic details like your age, ZIP code, the coverage amount you’re considering, and the type of policy you’re interested in. Some products may ask general health questions as part of the process.',
  },
  {
    question: 'Will requesting a quote affect my credit?',
    answer:
      'Requesting an initial quote typically does not involve a credit check. Specific underwriting requirements vary by carrier and product once you move forward with an application.',
  },
  {
    question: 'What happens after I submit my information?',
    answer:
      'You’ll be able to review available coverage options based on what you provided, and, if you choose, continue on to a full application online.',
  },
];
