import type { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy',
  description:
    'Read the privacy policy of Pause & Hold. We are committed to protecting your personal information and treating your wedding memories with utmost confidentiality.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 2026';

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div>
          <span className="text-[11px] font-semibold tracking-widest text-[#53664B] uppercase block mb-2">
            LEGAL & COMPLIANCE
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-[#292C25] leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#575A51] mt-2">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-[#575A51] font-light leading-relaxed border-t border-[#E4E2D8] pt-8">
          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[#292C25]">
              1. Our Commitment to Your Privacy
            </h2>
            <p>
              At {SITE_CONFIG.name}, we hold the privacy and trust of our couples and visitors in the highest regard. This Privacy Policy outlines what information we collect when you browse our website or submit an enquiry, how that information is used, and how your personal data is protected.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[#292C25]">
              2. Information We Collect
            </h2>
            <p>
              When you submit an enquiry through our contact form, we collect personal details you voluntarily provide, such as your name, email address, telephone number, estimated wedding date, and wedding location.
            </p>
            <p>
              We do not harvest unsolicited personal data, nor do we sell, rent, or trade your contact details with any third parties or marketing brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[#292C25]">
              3. How Your Information is Used
            </h2>
            <p>We use the details provided exclusively to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Respond directly to your booking enquiry and check our calendar availability.</li>
              <li>Provide personalized price quotes and service guides.</li>
              <li>Coordinate creative details and logistics for confirmed commissions.</li>
              <li>Deliver your private online gallery and client deliverables.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[#292C25]">
              4. Media, Galleries & Image Rights
            </h2>
            <p>
              Photographs and films displayed across this website are featured with client permission or as representative portfolio samples. We treat your personal images with the utmost respect. If you require complete privacy or a non-disclosure agreement for your celebration, please inform us during your initial consultation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[#292C25]">
              5. Cookies & Analytics
            </h2>
            <p>
              We use minimal, privacy-conscious analytics to understand website performance and improve user experience. These tools do not record personally identifying information. You may configure your browser to block or alert you to cookies at any time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-medium text-[#292C25]">
              6. Contacting Us
            </h2>
            <p>
              If you have any questions or concerns regarding our privacy practices, please contact us through our{' '}
              <Link
                href="/contact/"
                className="text-[#53664B] underline underline-offset-4 hover:text-[#3F4F39]"
              >
                contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
