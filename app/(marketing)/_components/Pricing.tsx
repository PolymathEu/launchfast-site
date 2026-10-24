
"use client";

import { useRef } from "react";
import Script from "next/script";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, ShieldCheck, Rocket } from "lucide-react";

const features = [
    "Production-ready Next.js setup",
    "Authentication & database",
    "Polar payments integration",
    "Email infrastructure",
    "Responsive UI components",
    "Deployment-ready foundation",
];

const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;

export default function Pricing() {
    const sectionRef = useRef<HTMLElement>(null);

    const isInView = useInView(sectionRef, {
        once: true,
        amount: 0.2,
    });

    const shouldReduceMotion = useReducedMotion();

    const reveal = (delay = 0) => ({
        initial: {
            opacity: 0,
            y: shouldReduceMotion ? 0 : 18,
        },
        animate: isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
        transition: {
            duration: shouldReduceMotion ? 0 : 0.55,
            delay: shouldReduceMotion ? 0 : delay,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    });

    return (
        <section
            ref={sectionRef}
            id="pricing"
            className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32"
        >
            <Script
                src="https://cdn.jsdelivr.net/npm/@polar-sh/checkout@0.1/dist/embed.global.js"
                strategy="afterInteractive"
                data-auto-init
            />

            <div className="mx-auto max-w-6xl px-5 sm:px-6">
                {/* Section heading */}
                <motion.div
                    {...reveal()}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
                        Less setup.
                        <br />
                        <span className="text-white/45">More shipping.</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                        Start with the foundation your SaaS needs. Spend less
                        time wiring things together and more time building your product.
                    </p>
                </motion.div>

                {/* Pricing card */}
                <div className="mx-auto mt-14 max-w-4xl sm:mt-16">
                    <motion.div
                        {...reveal(0.12)}
                        className="group relative rounded-3xl border border-white/20 bg-[#151515] p-1.5 transition-colors duration-300 hover:border-white/35 sm:p-2"
                    >
                        <div className="grid md:grid-cols-[1fr_0.9fr]">
                            {/* Price and checkout */}
                            <div className="flex flex-col p-6 sm:p-9 md:p-10">
                                <div className="flex items-center gap-2.5">
                                    <span className="flex size-7 items-center justify-center rounded-lg border border-white/15 bg-white/[0.05]">
                                        <Rocket className="size-4 text-white" strokeWidth={1.8} />
                                    </span>

                                    <span className="text-sm font-medium text-white">
                                        LaunchFast
                                    </span>
                                </div>

                                <div className="mt-9">
                                    <p className="text-sm text-white/55">
                                        One payment. Your starting point.
                                    </p>

                                    <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                        <span className="text-6xl font-semibold tracking-[-0.06em] text-white sm:text-7xl">
                                            <span className="mr-3 text-3xl text-white/40 line-through">$149</span>
                                            $99
                                        </span>

                                        <span className="text-sm text-white/50">
                                            USD · one-time
                                        </span>
                                    </div>

                                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
                                        No recurring subscription for the starter kit.
                                        Get your foundation in place and build from there.
                                    </p>
                                </div>

                                <div className="mt-8">
                                    {checkoutUrl ? (
                                        <motion.a
                                            href={checkoutUrl}
                                            data-polar-checkout
                                            data-polar-checkout-theme="dark"
                                            whileHover={
                                                shouldReduceMotion ? undefined : { y: -2 }
                                            }
                                            whileTap={
                                                shouldReduceMotion ? undefined : { scale: 0.985 }
                                            }
                                            transition={{ duration: 0.18 }}
                                            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-black transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#151515] sm:w-auto sm:min-w-52"
                                        >
                                            Get LaunchFast
                                            <ArrowUpRight className="size-4" />
                                        </motion.a>
                                    ) : (
                                        <button
                                            type="button"
                                            disabled
                                            className="inline-flex h-12 w-full cursor-not-allowed items-center justify-center rounded-xl bg-white/10 px-5 text-sm font-medium text-white/40 sm:w-auto sm:min-w-52"
                                        >
                                            Checkout unavailable
                                        </button>
                                    )}

                                    <div className="mt-4 flex items-center gap-2 text-xs text-white/45">
                                        <ShieldCheck className="size-4" />
                                        <span>Secure checkout powered by Polar</span>
                                    </div>
                                </div>
                            </div>

                            {/* Included features */}
                            <div className="border-t border-white/10 p-6 sm:p-9 md:border-l md:border-t-0 md:p-10">
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                                    What&apos;s included
                                </p>

                                <ul className="mt-6 space-y-5">
                                    {features.map((feature, index) => (
                                        <motion.li
                                            key={feature}
                                            initial={{
                                                opacity: 0,
                                                x: shouldReduceMotion ? 0 : 10,
                                            }}
                                            animate={
                                                isInView
                                                    ? { opacity: 1, x: 0 }
                                                    : {
                                                        opacity: 0,
                                                        x: shouldReduceMotion ? 0 : 10,
                                                    }
                                            }
                                            transition={{
                                                duration: shouldReduceMotion ? 0 : 0.4,
                                                delay: shouldReduceMotion
                                                    ? 0
                                                    : 0.2 + index * 0.07,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="flex items-start gap-3 text-sm text-white/75"
                                        >
                                            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-black">
                                                <Check
                                                    className="size-3"
                                                    strokeWidth={2.5}
                                                />
                                            </span>

                                            <span className="leading-6">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                                    <p className="text-sm font-medium text-white/85">
                                        Built to get you moving.
                                    </p>

                                    <p className="mt-1.5 text-xs leading-5 text-white/50">
                                        Start with the essentials, then shape the product around
                                        your own ideas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.p
                        {...reveal(0.28)}
                        className="mt-5 text-center text-xs text-white/40"
                    >
                        One clear price. No monthly plan for the starter kit.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
