import { Link } from 'react-router-dom';
import { BlogPost } from '../../components/BlogPost';
import { WHATSAPP_NUMBER } from '../../lib/constants';

const COPY = {
  title: 'Website vs Web App: Which Does Your Business Need?',
  description:
    "Not sure whether you need a website or a web app? Here's the plain-English difference, five quick questions to decide, and what each one costs for a Pune business.",
  date: 'October 2, 2026',
  readTime: '6 min',
  category: 'Web Development',
};

const FAQS = [
  {
    question: 'Is a web app the same as a mobile app?',
    answer:
      'No. A web app runs in the browser, on a phone, tablet or computer, and nothing needs to be downloaded from an app store. A mobile app is installed from the Play Store or App Store. For most small business workflows, a mobile-friendly web app is quicker and cheaper to build and does the job.',
  },
  {
    question: 'Can I start with a website and add a web app later?',
    answer:
      'Yes, and for many businesses that is the sensible order. A website gets you found and trusted. When a manual process starts costing you time, you add a web app for that one process. Planning for it early (same domain, same hosting account in your name) keeps the move simple.',
  },
  {
    question: 'Do I need a web app for online appointment booking?',
    answer:
      'Not always. If you only need people to request a call or a slot, a contact form on a normal website may be enough. If you need live availability, automatic reminders and a way to manage bookings, that is a web app.',
  },
  {
    question: 'When is Google Sheets and Google Forms enough?',
    answer:
      'If one or two people use it, volumes are small and nobody outside your team needs a login, a spreadsheet is often the honest answer. Consider a web app when the sheet keeps breaking, several people edit at once, or customers need to see their own records.',
  },
];

export function WebsiteVsWebApp() {
  const c = COPY;
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I want to know whether I need a website or a web app.')}`;

  return (
    <BlogPost
      title={c.title}
      description={c.description}
      date={c.date}
      readTime={c.readTime}
      category={c.category}
      faqs={FAQS}
      relatedSlugs={['custom-web-app-cost-india', 'website-cost-pune', 'what-is-a-website']}
    >
      <p>
        “Do I need a website or an app?” is one of the first questions we hear from Pune business owners, and the honest
        answer is that it depends on what you want the thing to do. Pick wrongly and you either overpay for software you
        don’t need, or you end up running your business on a brochure that can’t keep up.
      </p>

      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li>A website shows information to visitors. A web app lets people and your team do work: log in, enter data, track records.</li>
        <li>If you need logins, a database or an admin panel, you need a web app. If you only need to be found and contacted, a website is enough.</li>
        <li>Most small businesses should start with a website and add a web app only when a manual process is costing real time.</li>
        <li>A website starts around ₹15,000. A custom web app starts from ₹50,000 with us, because there is far more to design and build.</li>
      </ul>

      <h2>The short answer</h2>
      <p>
        A <strong>website</strong> is mainly for reading. Visitors learn who you are, what you offer and how to reach you.
        A <strong>web app</strong> is for doing. It stores information in a database, knows who is logged in, and lets you
        add, change and track records. Both open in a browser. The difference is what happens behind the page.
      </p>

      <h2>What a website is good at</h2>
      <p>
        A website builds trust and gets you found on Google. A clinic’s timings and doctors, a restaurant’s menu and
        location, a contractor’s past projects and contact form: these are all jobs for a website. If your goal is “people
        should find us and get in touch,” you do not need anything more.
      </p>
      <p>
        You can read what a good one should include in our guides on{' '}
        <Link to="/blog/what-is-a-website">what a website is and why you need one</Link> and{' '}
        <Link to="/blog/website-cost-pune">how much a website costs in Pune</Link>.
      </p>

      <h2>What a web app is good at</h2>
      <p>
        A web app replaces a process that currently lives in WhatsApp messages, paper registers or a tangle of
        spreadsheets. Some examples:
      </p>
      <ul>
        <li>A booking system where customers pick a slot and get a reminder</li>
        <li>A customer portal where people log in to see their own orders or invoices</li>
        <li>An inventory or stock tracker with different access for staff and owners</li>
        <li>A lead tracker that shows who was contacted, who replied and what happens next</li>
        <li>A quotation or job-card tool that does the calculations for you</li>
      </ul>

      <h2>Five questions to decide</h2>
      <p>Answer these honestly for the thing you want built:</p>
      <ol>
        <li><strong>Do people need to log in?</strong> Customers, staff or both.</li>
        <li><strong>Do you need to store and edit records?</strong> Orders, appointments, clients, stock.</li>
        <li><strong>Is there a repeated manual process?</strong> The same copy-paste or follow-up done again and again.</li>
        <li><strong>Do different people need different views?</strong> The owner sees everything, staff see only their own tasks.</li>
        <li><strong>Do you need automatic actions?</strong> Reminders, calculations, status changes.</li>
      </ol>
      <p>
        If you answered yes to none, a website is what you need. If you answered yes to one, a website with a smart form
        may be enough. If you answered yes to two or more, you are describing a web app.
      </p>

      <h2>Do you really need a custom build?</h2>
      <p>
        Sometimes the right answer is neither. If only one or two people will use the system and volumes are small, a
        well-organised Google Sheet with a Google Form can run a business for a long time at no cost. We would rather tell
        you that on a call than quote you for software you don’t need. Custom makes sense when the sheet keeps breaking,
        several people edit at once, or your customers need their own login.
      </p>

      <h2>What each one costs</h2>
      <p>
        Our standard website package is <strong>₹15,000</strong> and is built in about a week. A custom web app starts
        from <strong>₹50,000</strong>, and the final price depends on how many roles, integrations and reports you need.
        Our full breakdown is in{' '}
        <Link to="/blog/custom-web-app-cost-india">how much a custom web app costs in India</Link>.
      </p>

      <h2>Three mistakes we see often</h2>
      <ul>
        <li><strong>Building an app when a website would do.</strong> You pay more and maintain more, for no extra customers.</li>
        <li><strong>Running a process on a website.</strong> A contact form that sends emails you copy into a spreadsheet is a web app waiting to happen.</li>
        <li><strong>Trying to build everything at once.</strong> Start with the one workflow that hurts most, then grow from there.</li>
      </ul>

      <h2>Frequently asked questions</h2>
      {FAQS.map((f) => (
        <div key={f.question}>
          <h3>{f.question}</h3>
          <p>{f.answer}</p>
        </div>
      ))}

      <h2>Bottom line</h2>
      <p>
        Need to be found and trusted? Get a website. Need to run something, with logins, records and a dashboard? Get a
        web app. Not sure which? Describe what you are trying to do, and we will tell you honestly, even if the answer is
        “you don’t need us yet.”
      </p>
      <p>
        You can read more about what we build on our{' '}
        <Link to="/services/web-app-development">web app development page</Link>, or{' '}
        <a href={waLink} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a> with what you have in mind.
      </p>
    </BlogPost>
  );
}
