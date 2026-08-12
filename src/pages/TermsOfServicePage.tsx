import { SEO } from '../components/SEO';

export function TermsOfServicePage() {
  return (
    <>
      <SEO
        title="Terms of Service | Digital Safalta"
        description="The terms governing your use of Digital Safalta's website and services."
      />
      <div className="pt-28 lg:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black mb-2">Terms of Service</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: [DATE]</p>

          <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
            <p>
              These Terms of Service ("Terms") govern your use of digitalsafalta.in and any
              services you engage Digital Safalta for. By using our website or engaging our
              services, you agree to these Terms.
            </p>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">1. Our Services</h2>
              <p>
                Digital Safalta provides digital marketing services including website
                design, SEO, Google Ads and Meta Ads management, social media management,
                Google Business Profile setup, and Excel/VBA automation. Specific scope,
                deliverables, and pricing for any engagement are agreed separately in
                writing (via proposal, invoice, or contract) before work begins — these
                Terms cover general use of our website and the baseline relationship, not
                the specifics of any one project.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">2. Using Our Website</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>You agree to provide accurate information when using our contact form</li>
                <li>You agree not to use our website to send spam, attempt unauthorized access, or interfere with its normal operation</li>
                <li>Our free Marketing Audit tool is provided for informational purposes — results are automated and not a substitute for a full professional audit</li>
              </ul>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">3. Payments</h2>
              <p>
                Pricing for our packages is listed on our Pricing page and is subject to
                change. Specific payment terms (amount, schedule, method) for any engagement
                are confirmed directly with you before work begins.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">4. Ownership of Work</h2>
              <p>
                Unless otherwise agreed in writing, once an engagement is paid in full, you
                own the deliverables created specifically for you (e.g., your website code,
                ad account access, content created for your business). We retain the right
                to showcase completed work in our own portfolio and marketing, unless you
                request otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">5. No Guaranteed Results</h2>
              <p>
                Digital marketing outcomes (rankings, ad performance, conversions) depend on
                many factors outside our direct control, including platform algorithm
                changes, market competition, and your own business factors. We do not
                guarantee specific rankings, traffic, or revenue outcomes, and are wary of
                any claim (from us or anyone else) that does.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">6. Limitation of Liability</h2>
              <p>
                Our website and free tools (like the Marketing Audit) are provided "as is."
                To the maximum extent permitted by law, Digital Safalta is not liable for
                indirect, incidental, or consequential damages arising from your use of our
                website or free tools. Liability related to a specific paid engagement is
                governed by that engagement's written agreement.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">7. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. We'll update the "Last updated"
                date above when we do.
              </p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">8. Governing Law</h2>
              <p>These Terms are governed by the laws of India.</p>
            </section>

            <section>
              <h2 className="text-white font-bold text-lg mb-3">9. Contact</h2>
              <p>
                Questions about these Terms? Contact us at{' '}
                <a href="mailto:hello@digitalsafalta.in" className="text-teal-400 hover:underline">
                  hello@digitalsafalta.in
                </a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
