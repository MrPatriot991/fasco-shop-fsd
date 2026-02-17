export const CONTENT_MAP = {
  faq: {
    title: "Frequently Asked Questions",
    description: "Quick answers to the questions we hear most.",
    items: [
      {
        q: "How do I get started?",
        a: "Sign up for a free account, complete onboarding in under 5 minutes, and you're ready to go. No credit card required for the trial period.",
      },
      {
        q: "What payment methods are accepted?",
        a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, bank transfers, and invoiced billing for Enterprise plans.",
      },
      {
        q: "Can I cancel my subscription anytime?",
        a: "Absolutely. You can cancel from your account settings at any time. Your access continues until the end of the billing period.",
      },
      {
        q: "Is my data secure?",
        a: "Yes. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II certified and GDPR compliant.",
      },
      {
        q: "Do you offer a free trial?",
        a: "Yes, a 14-day full-feature trial is available with no commitment. After the trial, choose a plan that fits your team.",
      },
      {
        q: "How do I invite team members?",
        a: "Go to Settings → Team → Invite Members, enter email addresses, and assign roles. Invites expire after 7 days.",
      },
    ],
  },
  support: {
    title: "Support Center",
    description: "Everything you need to solve problems fast.",
    items: [
      {
        q: "How do I reset my password?",
        a: "Click 'Forgot Password' on the login screen. You'll receive a reset link within 2 minutes. Check your spam folder if it doesn't arrive.",
      },
      {
        q: "My dashboard is not loading.",
        a: "Try a hard refresh (Ctrl+Shift+R / Cmd+Shift+R). If the issue persists, clear your browser cache or try an incognito window.",
      },
      {
        q: "How do I export my data?",
        a: "Navigate to Settings → Data → Export. Choose JSON or CSV format. Exports are prepared within 10 minutes and emailed to you.",
      },
      {
        q: "Can I switch between plans?",
        a: "Yes. Upgrades take effect immediately; downgrades take effect at the next billing cycle. Prorated credits are applied automatically.",
      },
      {
        q: "Where can I find API documentation?",
        a: "Full API docs are at docs.example.com. You'll need an API key from Settings → Developer → API Keys.",
      },
    ],
  },
  invoicing: {
    title: "Invoicing",
    description: "Transparent billing, no surprises.",
    sections: [
      {
        heading: "1. Billing Cycles",
        body: "All subscriptions are billed monthly or annually in advance. The billing date is set to the day you first subscribe and remains consistent each period. Annual plans receive a 20% discount applied at checkout.",
      },
      {
        heading: "2. Invoice Generation",
        body: "Invoices are automatically generated on your billing date and sent to your registered email. They are also available in Settings → Billing → Invoices in PDF format for download at any time.",
      },
      {
        heading: "3. Taxes & VAT",
        body: "Applicable taxes (VAT, GST, sales tax) are calculated based on your billing address and added at checkout. EU customers with a valid VAT ID can enter it in Settings → Billing to receive reverse-charge invoices.",
      },
      {
        heading: "4. Payment Failures",
        body: "If a payment fails, we retry automatically after 3 and 7 days. After three failed attempts, your account is paused. You will receive email notifications at each stage with instructions to update your payment method.",
      },
      {
        heading: "5. Refund Policy",
        body: "Monthly plans are non-refundable after the billing date. Annual plans may receive a prorated refund within 30 days of purchase. Contact billing support to initiate a refund request.",
      },
    ],
  },
  contract: {
    title: "Terms of Contract",
    description: "Our mutual obligations, stated plainly.",
    sections: [
      {
        heading: "1. Service Agreement",
        body: "By accessing this platform you agree to be bound by these terms. This agreement constitutes the entire contract between the parties and supersedes any prior oral or written negotiations.",
      },
      {
        heading: "2. Intellectual Property",
        body: "All platform code, designs, trademarks, and proprietary data remain the exclusive property of the Company. Customers retain full ownership of their own data uploaded or generated through the service.",
      },
      {
        heading: "3. Liability Limitations",
        body: "The Company's total liability for any claim shall not exceed the fees paid by the Customer in the 12 months preceding the claim. Neither party shall be liable for indirect, incidental, or consequential damages.",
      },
      {
        heading: "4. Termination",
        body: "Either party may terminate this agreement with 30 days written notice. The Company may terminate immediately for material breach, illegal activity, or non-payment following a cure period of 10 business days.",
      },
      {
        heading: "5. Governing Law",
        body: "This agreement is governed by the laws of the State of Delaware, USA. Any disputes shall be resolved by binding arbitration under the AAA Commercial Rules, conducted in English.",
      },
    ],
  },
  careers: {
    title: "Careers",
    description: "Join a team building something that matters.",
    jobs: [
      {
        title: "Senior Frontend Engineer",
        type: "Remote · Full-time",
        location: "Worldwide",
        desc: "Own the UI layer of our flagship product. React, TypeScript, and a sharp eye for detail required. You'll work directly with design and ship features used by thousands daily.",
      },
      {
        title: "Product Designer",
        type: "Hybrid · Full-time",
        location: "New York / Remote",
        desc: "Shape end-to-end user experiences from research to high-fidelity prototypes. Figma expert with a portfolio demonstrating systems thinking.",
      },
      {
        title: "Backend Engineer (Go)",
        type: "Remote · Full-time",
        location: "Worldwide",
        desc: "Build and scale our core API and data pipelines. Strong Go background, PostgreSQL, and experience with high-throughput systems.",
      },
      {
        title: "DevOps / Platform Eng.",
        type: "Remote · Full-time",
        location: "Worldwide",
        desc: "Own infrastructure as code, CI/CD, observability, and uptime. Terraform, Kubernetes, AWS, and an on-call rotation you'll actually enjoy.",
      },
      {
        title: "Growth Marketing Manager",
        type: "On-site · Full-time",
        location: "San Francisco",
        desc: "Drive acquisition and retention strategies. Proven track record with B2B SaaS, comfortable with data, and a creative experimenter at heart.",
      },
    ],
  },
  blog: {
    title: "Blog",
    description: "Insights, updates, and deep dives from our team.",
    posts: [
      {
        img: "https://picsum.photos/seed/blog1/600/340",
        date: "Jan 28, 2026",
        tag: "Product",
        title: "Redesigning Our Dashboard: Lessons from 200 User Sessions",
      },
      {
        img: "https://picsum.photos/seed/blog2/600/340",
        date: "Jan 14, 2026",
        tag: "Engineering",
        title: "How We Cut API Latency by 60% Without Rewriting Everything",
      },
      {
        img: "https://picsum.photos/seed/blog3/600/340",
        date: "Dec 30, 2025",
        tag: "Culture",
        title: "Building a Remote-First Culture That Actually Works",
      },
      {
        img: "https://picsum.photos/seed/blog4/600/340",
        date: "Dec 15, 2025",
        tag: "Tutorials",
        title: "A Practical Guide to Webhook Security in 2026",
      },
      {
        img: "https://picsum.photos/seed/blog5/600/340",
        date: "Dec 02, 2025",
        tag: "Product",
        title: "Announcing Advanced Analytics: See What's Really Happening",
      },
      {
        img: "https://picsum.photos/seed/blog6/600/340",
        date: "Nov 18, 2025",
        tag: "Engineering",
        title: "Zero-Downtime Migrations with PostgreSQL and pglogical",
      },
    ],
  },
};
