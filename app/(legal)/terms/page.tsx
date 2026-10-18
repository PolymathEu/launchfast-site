// app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "The terms governing your use and license of LaunchFast.",
};

const EFFECTIVE_DATE = "January 1, 2026"; // update sebelum publish
const CONTACT_EMAIL = "z3eiyn@gmail.com"; // ganti dengan email asli

export default function TermsPage() {
    return (
        <div className="mx-auto max-w-2xl px-6 py-20">
            <h1 className="text-3xl font-semibold">Terms of Service</h1>
            <p className="mt-2 text-sm text-muted-foreground">
                Effective date: {EFFECTIVE_DATE}
            </p>

            <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/90">
                <section>
                    <h2 className="text-lg font-medium">1. Overview</h2>
                    <p className="mt-2">
                        LaunchFast is a Next.js starter kit sold as a digital product.
                        By purchasing, you agree to the terms below.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">2. License</h2>
                    <p className="mt-2">
                        Upon purchase, you receive a non-exclusive, non-transferable
                        license to use the LaunchFast codebase to build and ship your own
                        projects, including commercial products, for an unlimited number
                        of end products.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">3. Restrictions</h2>
                    <p className="mt-2">
                        You may not resell, redistribute, or repackage the LaunchFast
                        source code as a competing boilerplate or template product. You
                        may not share your repository access with people who have not
                        purchased a license.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">4. Payment &amp; Access</h2>
                    <p className="mt-2">
                        Payments are processed by Polar. Upon successful payment, you
                        will receive an invitation to a private GitHub repository
                        containing the codebase.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">5. Refunds</h2>
                    <p className="mt-2">
                        Because LaunchFast is a digital product delivered instantly via
                        repository access, all sales are final once access has been
                        granted, except where required by law.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">6. No Warranty</h2>
                    <p className="mt-2">
                        LaunchFast is provided &quot;as is&quot; without warranty of any
                        kind. We do not guarantee the code will be error-free or fit for
                        every specific use case.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">7. Limitation of Liability</h2>
                    <p className="mt-2">
                        We are not liable for any indirect, incidental, or consequential
                        damages arising from your use of LaunchFast.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">8. Changes to These Terms</h2>
                    <p className="mt-2">
                        We may update these terms from time to time. Continued use of
                        LaunchFast after changes constitutes acceptance.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-medium">9. Contact</h2>
                    <p className="mt-2">
                        Questions about these terms? Email us at{" "}
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