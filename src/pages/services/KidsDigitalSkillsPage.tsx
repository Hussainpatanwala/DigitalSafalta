import { ServicePage } from '../../components/ServicePage';
import type { Lang } from '../../lib/constants';

const COPY = {
  metaTitle: "Digital Skills Course for Kids in Pune | Digital Safalta",
  metaDescription:
    "1-month live online program for kids (8 sessions, Sat & Sun, 1 hr/day) taught by Hussain — safe internet practices, graphic design basics, digital identity, website basics, and productivity tools. Fixed price ₹15,000.",
  category: "Digital Skills Course for Kids",
  heroHeadline: "Digital Skills Course for Kids",
  heroSubheading:
    "A 1-month live online program that gives kids the practical digital skills schools often skip — how to stay safe online, the basics of design, what a website actually is, and how to use everyday productivity tools. Taught live by Hussain, 8 sessions over 4 weekends.",
  whatItIs:
    "An 8-session live online course (Saturdays and Sundays, 1 hour a day, over 1 month) covering safe internet practices, graphic design principles, digital identity, website basics, and productivity tools — taught directly by Hussain, not pre-recorded videos.",
  whyItMatters:
    "Kids are online constantly, but rarely taught how to navigate it safely, present themselves well digitally, or use the tools that are becoming second nature for school and future work. This course builds that foundation early, in a structured way, with a real teacher guiding them.",
  includes: [
    "8 live sessions, 1 hour each, over 1 month (Saturdays & Sundays)",
    "Safe internet practices — recognising risks, staying secure, healthy online habits",
    "Graphic design principles — the basics of what makes design work",
    "Digital identity — how kids present and protect themselves online",
    "Website basics — understanding how websites work and are built",
    "Productivity tools — practical skills for school and everyday use",
    "Taught live by Hussain, not a pre-recorded video series",
  ],
  benefits: [
    {
      title: "Real Teacher, Live Sessions",
      description: "Every session is taught live by Hussain — kids can ask questions and get real answers, not just watch a video.",
    },
    {
      title: "Practical Skills Schools Often Skip",
      description: "Safe internet habits, digital identity, and basic productivity tools are rarely taught formally — this course fills that gap directly.",
    },
    {
      title: "Structured, Not Overwhelming",
      description: "8 short sessions over a month, weekends only, 1 hour a day — enough to build real understanding without eating into the rest of the week.",
    },
    {
      title: "A Foundation for What's Next",
      description: "Understanding website basics and design principles early gives kids a head start if they want to explore building or design further later.",
    },
  ],
  faqs: [
    {
      question: "What age group is this course for?",
      answer:
        "Tell us your child's age on the first call and we'll confirm it's a good fit — the course is designed to be accessible for kids while covering genuinely useful, practical material.",
    },
    {
      question: "Is this fully online?",
      answer:
        "Yes — it's a live online program, 1 hour a day on Saturdays and Sundays, over 1 month (8 sessions total).",
    },
    {
      question: "Does my child need any prior experience with computers?",
      answer:
        "No prior experience is needed — the course starts from practical fundamentals and builds from there.",
    },
    {
      question: "Who teaches the sessions?",
      answer:
        "Hussain teaches every session live — this isn't outsourced to pre-recorded content or a rotating set of instructors.",
    },
    {
      question: "What will my child be able to do after the course?",
      answer:
        "They'll understand how to stay safer online, grasp basic design principles, understand what a website actually is, and be comfortable with everyday productivity tools — a genuinely useful digital foundation.",
    },
  ],
  ctaHeadline: "Give your child a real digital skills foundation — live, in 1 month.",
  price: "₹15,000",
  priceNote: "Fixed price for the full 1-month, 8-session program.",
};

export function KidsDigitalSkillsPage({ lang = 'en' }: { lang?: Lang }) {
  // English only for now — this is a newly added service; translations can follow later.
  return <ServicePage lang={lang} {...COPY} />;
}
