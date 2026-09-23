import { ServicePage } from '../../components/ServicePage';
import type { Lang } from '../../lib/constants';

const COPY = {
  metaTitle: "AI-Powered Web & Android App Development Mentorship in Pune | Digital Safalta",
  metaDescription:
    "1-on-1 personal mentorship with Hussain — learn to build websites, web apps, and native Android apps end-to-end using modern AI development tools. Fixed price ₹1,00,000.",
  category: "AI-Powered Web & Android App Development Mentorship",
  heroHeadline: "AI-Powered Web & Android App Development Mentorship",
  heroSubheading:
    "A 1-on-1 personal training program with Hussain — learn to build real websites, web applications, and native Android apps from scratch, using the same AI-assisted tools and modern tech stack we use for client work every day. Not a generic course; a mentorship built around what you're trying to learn.",
  whatItIs:
    "This is hands-on, one-on-one mentorship in end-to-end development — websites, web applications, and native Android apps — using cutting-edge AI development tools alongside modern frameworks. You learn by building real projects with direct guidance, not by watching pre-recorded videos.",
  whyItMatters:
    "AI tools have changed how software actually gets built — but most courses still teach the old way, or treat AI as an afterthought. This mentorship teaches you to build with AI as a core part of your workflow from day one, the same way working developers do it now, so what you learn is immediately useful.",
  includes: [
    "1-on-1 sessions directly with Hussain (no batches, no pre-recorded content)",
    "End-to-end website development — from setup to deployment",
    "Web application development (database-backed, not just static pages)",
    "Native Android app development fundamentals",
    "Practical use of AI coding tools as part of your everyday workflow",
    "Modern tech stack matching real, current industry practice",
    "Guidance shaped around your goals — job-ready skills, a specific project, or a business idea you want to build",
    "Direct access to ask questions as you build",
  ],
  benefits: [
    {
      title: "Learn the Way Developers Actually Work Now",
      description: "AI-assisted development isn't optional anymore in the industry — this mentorship teaches you to build with it from the start, not as an afterthought bolted onto old-fashioned teaching.",
    },
    {
      title: "1-on-1, Not a Crowded Batch",
      description: "Every session is with Hussain directly. No competing for attention in a large cohort — the pace and focus adapt to you.",
    },
    {
      title: "Build Real Things, Not Just Follow Along",
      description: "You come away having actually built a website, a web app, and an Android app — not just watched someone else build one.",
    },
    {
      title: "Modern, Practical, Current",
      description: "The tools and stack taught are the same ones used for real client projects — not a syllabus that's years out of date.",
    },
  ],
  faqs: [
    {
      question: "Do I need any prior coding experience?",
      answer:
        "It helps but isn't required — we'll assess where you're starting from on the first call and shape the mentorship accordingly, whether that's from the basics or from an intermediate level.",
    },
    {
      question: "How long does the mentorship run?",
      answer:
        "Duration is scoped based on your starting point and goals — discussed and agreed before we begin, so you know exactly what to expect.",
    },
    {
      question: "Will I actually be able to build my own app or website after this?",
      answer:
        "Yes — the mentorship is built around you building real, working projects (a website, a web application, and a native Android app) with direct guidance, not just watching demonstrations.",
    },
    {
      question: "What makes this different from an online course?",
      answer:
        "It's 1-on-1, live, and shaped around your pace and goals — not a fixed batch schedule or pre-recorded video series. You get direct access to ask questions as you build.",
    },
    {
      question: "Is this suitable for someone wanting to start freelancing or a career switch?",
      answer:
        "Yes — many people join specifically to build practical, current, job-ready or freelance-ready skills. Tell us your goal on the first call and the mentorship is shaped around it.",
    },
  ],
  ctaHeadline: "Ready to learn to build with AI-powered development, 1-on-1?",
  price: "₹1,00,000",
  priceNote: "Fixed price for the full 1-on-1 mentorship program.",
};

export function AiDevMentorshipPage({ lang = 'en' }: { lang?: Lang }) {
  // English only for now — this is a newly added service; translations can follow later.
  return <ServicePage lang={lang} {...COPY} />;
}
