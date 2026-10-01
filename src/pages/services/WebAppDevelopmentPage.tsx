import { ServicePage } from '../../components/ServicePage';
import type { Lang } from '../../lib/constants';

const COPY = {
  metaTitle: "Custom Web App Development in Pune | Digital Safalta",
  metaDescription:
    "Custom web application development in Pune: admin panels, databases, user logins and dashboards for workflows a normal website can't handle. Starting from ₹50,000.",
  category: "Web App Development",
  heroHeadline: "Custom Web Application Development in Pune",
  heroSubheading:
    "When a brochure website isn't enough, we build the tool your business actually needs: forms that store records, dashboards that show your numbers, and admin panels that let you manage everything without a spreadsheet. Built for how your team really works.",
  whatItIs:
    "A web application is a website that does work, not just displays information. It stores data in a database, lets people log in, and lets you add, edit and track records. Think booking systems, customer portals, inventory trackers, internal dashboards and lead-management tools.",
  whyItMatters:
    "If your team still runs on WhatsApp messages, scattered spreadsheets and manual follow-ups, things get lost and time gets wasted. A purpose-built web app puts your process in one place, so nothing falls through the cracks and you can see what is happening at a glance.",
  includes: [
    "Custom-built forms, records and dashboards for your workflow",
    "Admin panel to manage your data",
    "Database-backed storage, not just a contact form",
    "User login and roles, if your app needs them",
    "Mobile-responsive design that works on any screen",
    "SSL certificate (HTTPS) included",
    "Hosted on Cloudflare, using free-tier storage and database where it fits",
    "Supabase for public portals that need user sign-up and login",
    "Timeline scoped together on a free discovery call",
  ],
  benefits: [
    {
      title: "Built Around Your Workflow",
      description:
        "We start by understanding how your team works today, then build only what you need. No bloated software with features you'll never use.",
    },
    {
      title: "A Modern, Fast Stack",
      description:
        "We build with React and TypeScript on Cloudflare, with Supabase when you need user accounts. It is the same approach behind digitalsafalta.in, which is pre-rendered for speed and search visibility.",
    },
    {
      title: "Careful With Your Data",
      description:
        "Our own contact form records each enquiry together with a timestamped consent record. We bring the same care to how your app collects and stores customer information.",
    },
    {
      title: "Work You Can Check",
      description:
        "You can look at what we have built. rgcind.com is a website we delivered for Royal Glazing & Cladding, a Bengaluru facade and cladding contractor, and you are looking at our own site right now.",
    },
  ],
  faqs: [
    {
      question: "What is the difference between a website and a web app?",
      answer:
        "A website mostly shows information to visitors. A web app lets people do things: log in, submit data, see their own records, and let your team manage everything from an admin panel. If you need a database and logins, you need a web app.",
    },
    {
      question: "What does the ₹50,000 price include?",
      answer:
        "It covers a custom-built app for your workflow with forms, records and dashboards, an admin panel, database storage, user login and roles if needed, mobile-responsive design and an SSL certificate. The timeline is agreed with you on a discovery call once we understand the scope.",
    },
    {
      question: "What costs are not included?",
      answer:
        "Email, WhatsApp or SMS notifications, if your app needs them, are charged at actual cost and are not part of the build price. We always explain any running costs before we start.",
    },
    {
      question: "What technology do you use?",
      answer:
        "We build on Cloudflare using its free-tier storage and database where that is enough. If your app is a public portal where people sign up and log in, we use Supabase instead. The front end is built with React and TypeScript.",
    },
    {
      question: "Can you build something for a business outside Pune?",
      answer:
        "Yes. We work remotely and serve clients across India. Everything from the first discovery call to delivery can happen online.",
    },
    {
      question: "How do I know if I need a web app or just a website?",
      answer:
        "Book a free discovery call and describe what you are trying to do. If a simple website will do the job, we will tell you honestly and quote for that instead.",
    },
  ],
  ctaHeadline: "Have a workflow a normal website can't handle?",
  price: "₹50,000",
  priceNote:
    "Starting price for a custom, database-backed web app. Final scope and timeline are agreed on a free discovery call.",
};

export function WebAppDevelopmentPage({ lang = 'en' }: { lang?: Lang }) {
  // English only for now, like the Excel & VBA page; translations can follow later.
  return <ServicePage lang={lang} {...COPY} />;
}
