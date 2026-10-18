// app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How LaunchFast collects, uses, and protects your data.",
};

const EFFECTIVE_DATE = "January 1, 2026"; // update sebelum publish
const CONTACT_EMAIL = "z3eiyn@gmail.com"; // ganti dengan email asli

export default function PrivacyPage() {
    return (
        <div className="mx-auto max-w-2xl px-6 py-20">
            <h1 className="text-3xl font-semibold">Privacy Policy</h1>
            <p className="mt-2 text-sm text-muted-foreground">
                Effective date: {EFFECTIVE_DATE}
            </p>

            <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90">
                <section>
                    <h2 className="text-lg font-medium">1. Information We Collect</h2>
                    <p className="mt-2">
                        When you purchase LaunchFast, we collect your name, email address,
                        and payment information. Payment processing is handled entirely
                        by our payment provider (Polar); we do not store your card details.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">2. How We Use Your Information</h2>
                    <p className="mt-2">
                        We use your information to deliver access to the product, send
                        order confirmations and important updates, and provide customer
                        support. We may send occasional product emails, which you can
                        unsubscribe from at any time.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">3. Data Sharing</h2>
                    <p className="mt-2">
                        We do not sell your personal data. We share data only with
                        service providers necessary to operate LaunchFast (payment
                        processing, email delivery, hosting), each bound by their own
                        privacy obligations.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">4. Data Retention</h2>
                    <p className="mt-2">
                        We retain your information for as long as needed to provide the
                        product and comply with legal obligations.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">5. Your Rights</h2>
                    <p className="mt-2">
                        You may request access to, correction of, or deletion of your
                        personal data by contacting us at{" "}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                            {CONTACT_EMAIL}
                        </a>
                        .
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">6. Cookies</h2>
                    <p className="mt-2">
                        Our website may use cookies or similar technologies for basic
                        analytics and to improve your browsing experience.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">7. Changes to This Policy</h2>
                    <p className="mt-2">
                        We may update this policy from time to time. Continued use of the
                        site after changes constitutes acceptance of the updated policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">8. Contact</h2>
                    <p className="mt-2">
                        Questions about this policy? Email us at{" "}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                            {CONTACT_EMAIL}
                        </a>
                        .
                    </p>
                </section>
            </div>
        </div>
    );
}