import type { InfoContent } from "./types";
import type { InfoType } from "./sections";

export const CONTENT_MAP = {
  faq: {
    type: "faq",
    title: "Frequently Asked Questions",
    description: "Everything you need to know about shopping with FASCO.",
    items: [
      {
        q: "How long does shipping take?",
        a: "Standard delivery takes 3-5 business days within the US. Express shipping (1-2 days) is available at checkout. International orders arrive in 7-14 business days depending on your location.",
      },
      {
        q: "What is your return policy?",
        a: "We offer free returns within 30 days of delivery. Items must be unworn, unwashed, and have original tags attached. Refunds are processed within 5-7 business days after we receive your return.",
      },
      {
        q: "How do I find my size?",
        a: "Use our size guide on each product page. Measurements are provided in inches and centimeters. If you're between sizes, we recommend sizing up for a relaxed fit or down for a fitted look.",
      },
      {
        q: "Do you offer gift cards?",
        a: "Yes! Digital gift cards are available in values from $25 to $500. They're delivered instantly via email and never expire. Perfect for any occasion.",
      },
      {
        q: "Can I track my order?",
        a: "Absolutely. Once your order ships, you'll receive a tracking number via email. You can also view real-time updates in your account under Orders.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, and Klarna for buy-now-pay-later options.",
      },
    ],
  },
  support: {
    type: "support",
    title: "Support Center",
    description: "We're here to help with orders, returns, and everything in between.",
    items: [
      {
        q: "My order arrived damaged. What should I do?",
        a: "We're sorry to hear that! Contact us within 48 hours with photos of the damage. We'll arrange a free return and send a replacement or issue a full refund immediately.",
      },
      {
        q: "How do I start a return or exchange?",
        a: "Log into your account, go to Orders, and select the item you'd like to return. Print the prepaid shipping label and drop it off at any carrier location. Exchanges are processed first for faster delivery.",
      },
      {
        q: "Can I cancel or modify my order?",
        a: "Orders can be canceled or modified within 1 hour of purchase. After that, items move to our warehouse for packing. Contact support immediately if you need urgent changes.",
      },
      {
        q: "I haven't received my order. What now?",
        a: "Check your tracking link first—sometimes carriers mark packages as delayed. If it's been more than 2 days past the expected delivery date, reach out and we'll investigate or send a replacement.",
      },
      {
        q: "How do I care for my FASCO pieces?",
        a: "Care instructions are on the label inside each garment. Most items are machine washable in cold water. Delicate fabrics like silk and cashmere should be hand washed or dry cleaned.",
      },
    ],
  },
  invoicing: {
    type: "invoicing",
    title: "Orders & Billing",
    description: "Clear information about payments, invoices, and charges.",
    sections: [
      {
        heading: "1. Payment Processing",
        body: "All payments are processed securely at checkout. Your card is charged immediately upon order confirmation. For Klarna or Afterpay purchases, payment plans are managed directly through their platforms.",
      },
      {
        heading: "2. Invoices & Receipts",
        body: "A digital receipt is emailed to you within minutes of placing your order. You can also download invoices anytime from your account under Orders → View Details → Download Invoice.",
      },
      {
        heading: "3. Sales Tax & Duties",
        body: "Sales tax is calculated based on your shipping address and applied at checkout. International customers are responsible for any customs duties or import taxes imposed by their country.",
      },
      {
        heading: "4. Failed Payments",
        body: "If your payment doesn't go through, your order is automatically canceled and inventory is released. You'll receive an email with instructions to retry checkout or update your payment method.",
      },
      {
        heading: "5. Refunds",
        body: "Refunds are issued to the original payment method within 5-7 business days after we receive your return. Store credit refunds are instant and come with a 10% bonus for future purchases.",
      },
    ],
  },
  contract: {
    type: "contract",
    title: "Terms & Conditions",
    description: "The legal stuff, explained simply.",
    sections: [
      {
        heading: "1. Agreement to Terms",
        body: "By shopping on FASCO.com, you agree to these terms. This includes all purchases, account creation, and use of our website. These terms may be updated periodically—continued use means you accept any changes.",
      },
      {
        heading: "2. Intellectual Property",
        body: "All images, designs, logos, and content on this site are owned by FASCO. You may not reproduce, distribute, or use our materials for commercial purposes without written permission.",
      },
      {
        heading: "3. Limitation of Liability",
        body: "FASCO is not liable for any indirect, incidental, or consequential damages arising from product use, website access, or order fulfillment delays beyond our control (e.g., carrier issues, natural disasters).",
      },
      {
        heading: "4. Returns & Cancellations",
        body: "Our return policy is outlined in the Support Center. Final sale items (marked as such at checkout) cannot be returned. We reserve the right to refuse returns that don't meet our policy requirements.",
      },
      {
        heading: "5. Governing Law",
        body: "These terms are governed by the laws of the State of California, USA. Any disputes will be resolved through binding arbitration under the American Arbitration Association rules.",
      },
    ],
  },
  careers: {
    type: "careers",
    title: "Careers at FASCO",
    description: "Join a team that's redefining fashion for the modern wardrobe.",
    jobs: [
      {
        title: "Visual Merchandiser",
        type: "On-site · Full-time",
        location: "New York, NY",
        desc: "Create compelling in-store displays and seasonal campaigns. You'll style mannequins, design window installations, and ensure every corner of our flagship reflects the FASCO aesthetic.",
      },
      {
        title: "E-Commerce Product Stylist",
        type: "Hybrid · Full-time",
        location: "Los Angeles / Remote",
        desc: "Style and art-direct product photography for our website and campaigns. Collaborate with photographers, models, and the creative team to bring collections to life.",
      },
      {
        title: "Customer Experience Lead",
        type: "Remote · Full-time",
        location: "Worldwide",
        desc: "Own the post-purchase journey. Manage support operations, train the team, and find creative ways to turn customer issues into moments of delight.",
      },
      {
        title: "Supply Chain Coordinator",
        type: "On-site · Full-time",
        location: "Dallas, TX",
        desc: "Keep inventory flowing smoothly from manufacturers to customers. Manage logistics, track shipments, and solve fulfillment challenges with speed and precision.",
      },
      {
        title: "Social Media Manager",
        type: "Remote · Full-time",
        location: "Worldwide",
        desc: "Build our presence on Instagram, TikTok, and Pinterest. Create scroll-stopping content, engage with our community, and turn followers into loyal customers.",
      },
    ],
  },
  blog: {
    type: "blog",
    title: "The FASCO Edit",
    description: "Style guides, trend reports, and stories from our world.",
    posts: [
      {
        img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=340&fit=crop",
        date: "Feb 10, 2026",
        tag: "Style Guide",
        title: "5 Ways to Style Oversized Blazers This Season",
      },
      {
        img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=340&fit=crop",
        date: "Feb 03, 2026",
        tag: "Behind the Seams",
        title: "How We Source Sustainable Fabrics for Our Spring Collection",
      },
      {
        img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=340&fit=crop",
        date: "Jan 27, 2026",
        tag: "Trend Report",
        title: "The Return of Y2K: Low-Rise Denim and Micro Bags Are Back",
      },
      {
        img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=340&fit=crop",
        date: "Jan 18, 2026",
        tag: "How-To",
        title: "The Ultimate Guide to Building a Capsule Wardrobe in 2026",
      },
      {
        img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=340&fit=crop",
        date: "Jan 09, 2026",
        tag: "Style Guide",
        title: "Winter Layering Essentials: Look Chic, Stay Warm",
      },
      {
        img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=340&fit=crop",
        date: "Dec 28, 2025",
        tag: "Behind the Seams",
        title: "Meet the Designers: Inside FASCO's Creative Studio",
      },
    ],
  },
} satisfies Record<InfoType, InfoContent>;
