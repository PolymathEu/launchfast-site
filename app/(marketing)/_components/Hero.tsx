
import Link from 'next/link';
import {
    ArrowRight,
    Check,
    Layers3,
} from 'lucide-react';

import {
    Card,
    CardContent,
    CardHeader,
} from '@/components/ui/card';

const HEADLINE = 'Skip the setup. Ship this week.';

const SUBHEAD =
    'Auth, payments, database, and email, already wired up and production ready. Stop rebuilding the same boilerplate and focus on what matters.';

const STACK = ['Next.js', 'Supabase', 'Stripe', 'Tailwind'] as const;

const FEATURES = [
    {
        title: 'Authentication',
        description: 'Secure user accounts',
    },
    {
        title: 'Payments',
        description: 'Checkout and subscriptions',
    },
    {
        title: 'Database',
        description: 'Ready-to-use data layer',
    },
    {
        title: 'Email',
        description: 'Transactional email setup',
    },
] as const;

export default function Hero() {
    const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL;

    return (
        <section className="relative">
            <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 md:pb-20 md:pt-14 lg:px-8">
                {/* Hero copy */}
                <div className="mx-auto max-w-3xl text-center">

                    <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        {HEADLINE}
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-muted-foreground sm:mt-6 sm:text-base sm:leading-7">
                        {SUBHEAD}
                    </p>

                    <div className="mt-6 flex justify-center sm:mt-7">
                        <Link
                            href={checkoutUrl || '#'}
                            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                            Get LaunchFast
                            <ArrowRight className="size-4" aria-hidden="true" />
                        </Link>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
                        {STACK.map((item) => (
                            <span key={item} className="inline-flex items-center gap-2">
                                <Check className="size-3.5" aria-hidden="true" />
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Product preview */}
                <div className="mx-auto mt-9 w-full max-w-5xl sm:mt-12 md:mt-14">
                    <Card className="overflow-hidden rounded-xl border-border bg-card shadow-none sm:rounded-2xl">
                        <CardHeader className="flex flex-row items-center justify-between gap-3 space-y-0 border-b border-border px-4 py-3.5 sm:px-6 sm:py-4">
                            <div className="flex min-w-0 items-center gap-3">
                                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                                    <Layers3 className="size-4" aria-hidden="true" />
                                </div>

                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold">
                                        LaunchFast
                                    </p>
                                    <p className="mt-0.5 text-xs text-muted-foreground">
                                        Project overview
                                    </p>
                                </div>
                            </div>

                            <div className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                                <span className="size-1.5 rounded-full bg-foreground" />
                                Ready to ship
                            </div>
                        </CardHeader>

                        <CardContent className="p-3 sm:p-5 md:p-6">
                            <div className="grid gap-4 md:grid-cols-[1fr_0.85fr] md:gap-5">
                                {/* Main panel */}
                                <div className="flex flex-col items-start justify-center rounded-lg border border-border bg-background p-5 sm:p-7 md:p-8">
                                    <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-card">
                                        <Layers3 className="size-5" aria-hidden="true" />
                                    </div>

                                    <p className="mt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                        Everything connected
                                    </p>

                                    <h2 className="mt-3 max-w-md text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                                        Your next idea deserves a head start.
                                    </h2>

                                    <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                                        Skip repetitive setup. Start with a solid foundation and
                                        focus on building the product your customers need.
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {STACK.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-muted-foreground"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Feature list */}
                                <div className="flex flex-col gap-3">
                                    <div className="pb-1">
                                        <h3 className="text-sm font-semibold">
                                            Included in the starter
                                        </h3>
                                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                            Essential infrastructure, ready to customize.
                                        </p>
                                    </div>

                                    {FEATURES.map((feature) => (
                                        <div
                                            key={feature.title}
                                            className="flex items-center gap-3 rounded-lg border border-border bg-background p-3.5 sm:p-4"
                                        >
                                            <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-card">
                                                <Check
                                                    className="size-4"
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-medium">
                                                    {feature.title}
                                                </p>
                                                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
