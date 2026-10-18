
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Pricing", href: "#pricing" },
    { label: "Documentation", href: "/docs" },
];

export default function Navbar() {
    const pathname = usePathname();

    const handleHomeClick = (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        if (pathname !== "/") return;

        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        if (window.location.hash) {
            window.history.replaceState(
                null,
                "",
                window.location.pathname
            );
        }
    };

    const handlePricingClick = (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        if (pathname !== "/") return;

        const pricingSection = document.getElementById("pricing");

        if (!pricingSection) return;

        e.preventDefault();

        pricingSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        window.history.replaceState(null, "", "#pricing");
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
            <motion.nav
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                }}
                aria-label="Main navigation"
                className="flex h-11 max-w-full items-center gap-1 rounded-full border border-white/25 bg-[#111111]/95 px-1.5 shadow-sm shadow-white/5 backdrop-blur-md"
            >
                <Link
                    href="/"
                    onClick={handleHomeClick}
                    aria-label="Home"
                    className="flex size-8 shrink-0 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                    <Image
                        src="/icon.svg"
                        alt="LaunchFast"
                        width={18}
                        height={18}
                        priority
                        className="size-[18px] object-contain"
                    />
                </Link>

                <span
                    aria-hidden="true"
                    className="mx-1 h-4 w-px shrink-0 bg-white/25"
                />

                <div className="flex items-center">
                    {navLinks.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            onClick={
                                label === "Pricing"
                                    ? handlePricingClick
                                    : undefined
                            }
                            className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-white/65 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-3.5"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </motion.nav>
        </header>
    );
}