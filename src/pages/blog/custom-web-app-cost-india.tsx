import { Link } from 'react-router-dom';
import { BlogPost } from '../../components/BlogPost';
import { WHATSAPP_NUMBER } from '../../lib/constants';

const COPY = {
  title: 'How Much Does a Custom Web App Cost in India? (2026 Guide)',
  description:
    'Custom web app prices in India range from ₹50,000 to several lakhs. Here is what drives the cost, what each tier typically includes, and the running costs nobody mentions.',
  date: 'October 2, 2026',
  readTime: '7 min',
  category: 'Pricing Guide',
};

const FAQS = [
  {
    question: 'What is the cheapest a custom web app can cost?',
    answer:
      'For a genuinely custom, database-backed app with an admin panel and logins, our starting price is ₹50,000. Anything far below that is usually a template, a no-code tool with monthly fees, or a very limited prototype. Those can be fine, as long as you know that is what you are buying.',
  },
  {
    question: 'Do I pay every month after the app is built?',
    answer:
      'It depends on how it is built. Small apps can often run on free hosting and database tiers, so running costs can be close to zero. Costs appear as you grow, or when you add things like WhatsApp, SMS or email notifications, which are charged by usage. A good provider explains these before you sign.',
  },
  {
    question: 'Who should own the code and the accounts?',
    answer:
      'You should. Hosting, database and domain accounts should be in your name, and you should receive the source code on completion. If a provider keeps these, you cannot move your app to anyone else.',
  },
  {
    question: 'How long does a custom web app take?',
    answer:
      'A simple one-workflow app can take a few weeks. Apps with multiple user roles, payments or integrations take longer. The timeline should be agreed in writing after a discovery call, not guessed in advance.',
  },
  {
    question: 'Is no-code (Bubble, Glide and similar) cheaper than custom development?',
    answer:
      'Upfront, often yes. Over two or three years, monthly platform fees can add up to more than a custom build, and you are limited to what the platform allows. No-code is a good way to test an idea. Custom suits a workflow you will run for years.',
  },
];

export function CustomWebAppCostIndia() {
  const c = COPY;
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I want a rough quote for a custom web app.')}`;

  return (
    <BlogPost
      title={c.title}
      description={c.description}
      date={c.date}
      readTime={c.readTime}
      category={c.category}
      faqs={FAQS}
      relatedSlugs={['website-vs-web-app', 'website-cost-pune']}
    >
      <p>
        Ask three developers what a custom web app costs and you may hear ₹30,000, ₹3,00,000 and ₹15,00,000. They are not
        all lying. They are quoting for different things. This guide explains what actually moves the price, so you can
        compare quotes sensibly.
      </p>

      <p><strong>Key takeaways:</strong></p>
      <ul>
        <li>A simple, one-workflow custom web app starts around ₹50,000. Apps with several user roles, payments and integrations cost more.</li>
        <li>The price is driven by scope: number of user types, integrations, reports and how much is truly custom.</li>
        <li>Running costs (hosting, notifications, maintenance) are separate from the build price. Ask about them before you sign.</li>
        <li>You should own the code, the domain and the hosting accounts. Make this a condition of any quote.</li>
      </ul>

      <p>
        <strong>A note on the numbers:</strong> the ranges below are rough ballparks, not quotes. Real prices depend on
        your exact requirements, and every provider prices differently.
      </p>

      <h2>First, is it a web app or a website?</h2>
      <p>
        A website shows information. A web app stores data, has logins and lets people do work. If you are not sure which
        you need, read{' '}
        <Link to="/blog/website-vs-web-app">website vs web app: which does your business need?</Link> first. Websites
        cost far less, as covered in our{' '}
        <Link to="/blog/website-cost-pune">website cost guide</Link>.
      </p>

      <h2>Typical price tiers</h2>
      <h3>Simple workflow app: from ₹50,000</h3>
      <p>
        One main workflow, one or two user types, an admin panel, a database and a simple dashboard. Think a booking
        tracker, a small inventory system or a lead manager for a single team. This is where we start.
      </p>
      <h3>Mid-complexity app: roughly ₹1,50,000 to ₹5,00,000</h3>
      <p>
        Several user roles with different permissions, payment collection, integrations with other tools, reporting and
        more detailed design. Customer portals and multi-branch systems usually land here.
      </p>
      <h3>Complex platform: ₹5,00,000 and above</h3>
      <p>
        Marketplaces, subscription products, apps with heavy integrations or strict security and compliance needs. At
        this scale, expect a team, a longer timeline and a phased delivery plan.
      </p>

      <h2>What drives the price up</h2>
      <ul>
        <li><strong>Number of user types.</strong> Customer, staff, manager and admin each need their own screens and permissions.</li>
        <li><strong>Integrations.</strong> Payments, WhatsApp, accounting software, courier or CRM connections all add work.</li>
        <li><strong>Custom design.</strong> A fully designed interface costs more than a clean standard one.</li>
        <li><strong>Reports and dashboards.</strong> Simple totals are cheap. Custom filters, exports and charts are not.</li>
        <li><strong>Moving existing data.</strong> Importing years of records from spreadsheets takes careful work.</li>
        <li><strong>Changing requirements.</strong> The most common reason a project goes over budget. Write the process down first.</li>
      </ul>

      <h2>The running costs people forget</h2>
      <p>The build price is not the whole story. Ask about each of these:</p>
      <ul>
        <li><strong>Domain:</strong> usually ₹800 to ₹1,500 a year.</li>
        <li><strong>Hosting and database:</strong> small apps can often run on free tiers; costs rise with usage.</li>
        <li><strong>Notifications:</strong> email, WhatsApp and SMS messages are charged by usage, so they are not part of a build price.</li>
        <li><strong>Maintenance and changes:</strong> agree in advance what is included and what is charged.</li>
      </ul>

      <h2>Freelancer, agency or no-code?</h2>
      <p>
        A <strong>freelancer</strong> is usually the cheapest, with the risk that one person is your single point of
        failure. A <strong>small agency</strong> costs more but gives you a team, a written scope and support after launch.
        <strong> No-code platforms</strong> are quick for testing an idea, but monthly fees and platform limits can make
        them costlier over several years. None is always right. Match the choice to how long you will run the app.
      </p>

      <h2>What our ₹50,000 starting price includes</h2>
      <p>
        Our web application package covers a custom-built app for your workflow with forms, records and dashboards, an
        admin panel, database-backed storage, user login and roles if needed, mobile-responsive design and an SSL
        certificate. We build on Cloudflare using its free-tier storage and database where that is enough, and use
        Supabase for public portals with sign-up and login. Email, WhatsApp or SMS notifications are charged at actual
        cost and are not part of the build price. The timeline is agreed after a free discovery call. See the{' '}
        <Link to="/services/web-app-development">web app development page</Link> for details.
      </p>

      <h2>How to get a fair quote</h2>
      <ul>
        <li>Write down the process you want to replace: who does what, in what order.</li>
        <li>Ask who will own the code, the domain and the hosting accounts.</li>
        <li>Ask what is included after launch, and what each change request costs.</li>
        <li>Ask for a written scope and a timeline with milestones.</li>
        <li>Be wary of a price given without a single question about your business.</li>
      </ul>

      <h2>How to keep the cost down</h2>
      <p>
        Start with the one workflow that hurts most and build only that. Reuse standard features instead of redesigning
        them. Send your content and decisions on time, because delays and changes are what inflate budgets. You can add
        more once the first version is working and earning its keep.
      </p>

      <h2>Frequently asked questions</h2>
      {FAQS.map((f) => (
        <div key={f.question}>
          <h3>{f.question}</h3>
          <p>{f.answer}</p>
        </div>
      ))}

      <h2>Bottom line</h2>
      <p>
        A custom web app is an investment in how your business runs. For a simple workflow, expect to start around
        ₹50,000, and treat any quote that skips questions about your process with caution. If you would like an honest
        view on what your idea would cost, you can{' '}
        <a href={waLink} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a> and describe it in a few
        lines.
      </p>
    </BlogPost>
  );
}
