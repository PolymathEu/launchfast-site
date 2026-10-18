"use client";

import { motion, type Easing } from "framer-motion";
import Link from "next/link";
import {
    InstagramLogo,
    LinkedinLogo,
    ThreadsLogo,
    YoutubeLogo,
} from "@phosphor-icons/react";

const smoothEase: Easing = [0.22, 1, 0.36, 1];

const socialLinks = [
    {
        name: "Threads",
        href: "https://www.threads.com/@iamzeiyn",
        icon: ThreadsLogo,
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@iamzeiyn",
        icon: YoutubeLogo,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/zeiyn/",
        icon: LinkedinLogo,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/iamzeiyn",
        icon: InstagramLogo,
    },
] as const;

const legalLinks = [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
] as const;

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden bg-background pt-12 pb-8 font-sans">
            <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 60 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.5,
                    delay: 0.2,
                    ease: smoothEase,
                }}
                className="relative flex w-full items-center justify-center"
            >
                <h2
                    aria-hidden="true"
                    className="
            bg-gradient-to-b
            from-foreground/10
            via-foreground/5
            to-transparent
            bg-clip-text
            text-[25vw]
            leading-[0.8]
            font-black
            tracking-[-0.08em]
            text-transparent
          "
                >
                    SCALE
                </h2>

                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
                />
            </motion.div>

            <div className="relative z-20 mt-10 flex flex-col items-center gap-5 px-6">
                <nav aria-label="Social links" className="flex items-center gap-2">
                    {socialLinks.map(({ name, href, icon: Icon }) => (
                        <Link
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            title={name}
                            className="
                group relative flex size-10 items-center justify-center
                overflow-hidden rounded-full
                border border-foreground/[0.08]
                bg-foreground/[0.025]
                text-muted-foreground
                backdrop-blur-xl
                transition-all duration-300 ease-out
                hover:-translate-y-0.5
                hover:border-foreground/[0.14]
                hover:bg-foreground/[0.06]
                hover:text-foreground
                active:translate-y-0
                active:scale-95
              "
                        >
                            <span
                                aria-hidden="true"
                                className="
                  pointer-events-none absolute inset-x-2 top-px h-px
                  bg-gradient-to-r
                  from-transparent
                  via-foreground/15
                  to-transparent
                "
                            />

                            <Icon
                                aria-hidden="true"
                                size={18}
                                weight="regular"
                                className="relative z-10 transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>
                    ))}
                </nav>

                <nav
                    aria-label="Legal links"
                    className="flex items-center gap-4 text-xs font-medium tracking-wide text-muted-foreground/70 md:text-sm"
                >
                    {legalLinks.map(({ name, href }, index) => (
                        <span key={name} className="flex items-center gap-4">
                            <Link
                                href={href}
                                className="transition-colors duration-200 hover:text-foreground"
                            >
                                {name}
                            </Link>
                            {index < legalLinks.length - 1 && (
                                <span aria-hidden="true" className="text-muted-foreground/30">
                                    ·
                                </span>
                            )}
                        </span>
                    ))}
                </nav>

                <p className="text-xs font-medium tracking-wide text-muted-foreground/70 md:text-sm">
                    © {new Date().getFullYear()} Launch Fast. All rights reserved.
                </p>
            </div>
        </footer>
    );
}