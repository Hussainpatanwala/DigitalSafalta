import { ServicePage } from '../../components/ServicePage';
import type { Lang } from '../../lib/constants';

const COPY = {
  metaTitle: "Excel & VBA Automation Services in Pune | Digital Safalta",
  metaDescription:
    "Custom Excel dashboards, VBA macros, and workflow automation for Pune small businesses. Stop repeating the same manual spreadsheet work every week — we build tools that do it for you.",
  category: "Excel & VBA Automation",
  heroHeadline: "Excel & VBA Automation",
  heroSubheading:
    "If your team spends hours every week copy-pasting data, formatting reports, or repeating the same spreadsheet steps, that's time (and money) you don't need to lose. We build custom Excel tools and VBA automation that do the repetitive work for you — reliably, every time.",
  whatItIs:
    "Excel & VBA Automation means building custom spreadsheet tools, macros, and dashboards tailored to how your business actually works — not generic templates. This can be as simple as a one-click report generator, or as involved as an automated workflow that pulls data, formats it, and emails it out on a schedule, with no manual steps.",
  whyItMatters:
    "Manual spreadsheet work doesn't just cost time — it's also where errors creep in: a wrong formula dragged too far, a missed row, a report sent with last month's numbers. Automating the repetitive parts means your team spends less time on busywork and fewer mistakes make it into reports that matter.",
  includes: [
    "Custom VBA macros for repetitive tasks (data entry, formatting, calculations)",
    "Automated report generation (one-click or scheduled)",
    "Interactive Excel dashboards for tracking business metrics",
    "Data cleanup and formatting automation",
    "Multi-sheet/multi-file consolidation tools",
    "Email automation from Excel (auto-send reports)",
    "Custom formulas and calculation tools for your specific business",
    "Training so your team can actually use what we build",
  ],
  benefits: [
    {
      title: "Get Hours Back Every Week",
      description:
        "Tasks that take your team 2-3 hours manually can often run in seconds once automated. That time goes back into actually running your business.",
    },
    {
      title: "Fewer Costly Mistakes",
      description:
        "Manual spreadsheet work is where small errors hide — a dragged formula, a missed update. Automation does the same steps the same way, every single time.",
    },
    {
      title: "Built Around How You Actually Work",
      description:
        "No generic templates. We build around your existing spreadsheets and workflow, so your team doesn't have to change how they work to benefit from it.",
    },
    {
      title: "Modern Tools, Practical Results",
      description:
        "We build using current AI-assisted development tools to move faster and reduce bugs — the same practical, no-nonsense approach we bring to every other service.",
    },
  ],
  faqs: [
    {
      question: "I don't know anything about VBA or macros — is that a problem?",
      answer:
        "Not at all — that's exactly the point. You describe the repetitive task you're stuck doing manually, and we build the tool. You'll get simple instructions (or a one-click button) to run it, no technical knowledge needed on your end.",
    },
    {
      question: "What kind of tasks can actually be automated?",
      answer:
        "Common examples: consolidating data from multiple sheets or files, generating the same report every week/month, cleaning up messy exported data, sending automated email reports, and building dashboards that update automatically. If you're doing the same spreadsheet steps repeatedly, it's usually automatable.",
    },
    {
      question: "How is this priced?",
      answer:
        "This is project-based, priced according to the complexity of what you need — a simple macro is very different from a multi-file automated reporting system. We'll give you a clear quote after a short call about what you're trying to solve.",
    },
    {
      question: "Will my team need training to use the tool?",
      answer:
        "We build these to be as simple as possible to use — often a single button click — and include basic training so your team is comfortable using it from day one.",
    },
    {
      question: "Can you fix an existing broken macro or spreadsheet instead of building new?",
      answer:
        "Yes — we regularly get asked to fix or improve an existing spreadsheet or macro that someone else built (or that's grown messy over time) rather than starting from scratch.",
    },
  ],
  ctaHeadline: "Ready to stop doing the same spreadsheet work by hand?",
  price: "Custom quote",
  priceNote: "Priced per project based on complexity — tell us what you're stuck doing manually and we'll quote it.",
};

export function ExcelVbaAutomationPage({ lang = 'en' }: { lang?: Lang }) {
  // English only for now — this is a newly added service; translations can follow later.
  return <ServicePage lang={lang} {...COPY} />;
}
