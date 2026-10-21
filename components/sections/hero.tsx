
import Image from "next/image";
import Link from "next/link";
import {
    ArrowDown,
    ArrowRight,
    Download,
} from "lucide-react";

const technologies = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
];

export default function Hero() {
    return (
        <section
            id="home"
            className="overflow-clip bg-background"
        >
            <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-8 px-5 py-6 sm:px-8 sm:py-10 md:gap-10 lg:min-h-[calc(100svh-76px)] lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-8">
                {/* Hero copy */}
                <div className="relative z-10 min-w-0">
                    <div className="mb-7 inline-flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.08em] text-accent sm:text-xs">
                        <span className="relative flex size-2.5 items-center justify-center">
                            <span className="absolute size-full rounded-full border border-accent/50" />
                            <span className="size-1.5 rounded-full bg-accent" />
                        </span>
                        THE THOUGHTFUL BUILDER
                    </div>

                    <h1 className="max-w-[760px] font-serif text-[clamp(3.2rem,7.2vw,6.25rem)] font-normal leading-[0.98] tracking-[-0.065em] text-foreground">
                        I build practical
                        <br className="hidden sm:block" /> things for the web.
                    </h1>

                    <p className="mt-7 max-w-[540px] text-[15px] leading-8 text-muted sm:text-base sm:leading-8">
                        I&apos;m Saurabh, a full-stack developer who enjoys
                        turning ideas into reliable products. I care about
                        clean architecture, thoughtful user experiences, and
                        the details that make software better.
                    </p>

                    {/* Actions */}
                    <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                        <Link
                            href="#work"
                            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-accent bg-accent px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-accent-hover hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                            View My Work
                            <ArrowRight size={17} />
                        </Link>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View resume PDF in a new tab"
                            className="inline-flex min-h-12 items-center gap-2 rounded-md px-2 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        >
                            <Download size={16} />
                            View Resume
                        </a>
                    </div>

                    {/* Technology list */}
                    <div className="mt-11 sm:mt-14">
                        <p className="font-mono text-[10px] font-medium tracking-[0.08em] text-foreground sm:text-[11px]">
                            TECHNOLOGIES I WORK WITH
                        </p>

                        <ul
                            aria-label="Selected technologies"
                            className="mt-4 flex max-w-[530px] flex-wrap gap-x-5 gap-y-3 font-mono text-xs text-muted sm:gap-x-6 sm:text-[13px]"
                        >
                            {technologies.map((technology) => (
                                <li key={technology}>{technology}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Scroll cue */}
                    <Link
                        href="#work"
                        className="mt-8 inline-flex items-center gap-2 text-xs text-muted transition-colors hover:text-accent sm:mt-9"
                    >
                        <ArrowDown size={14} />
                        Explore selected work
                    </Link>
                </div>

                {/* Portrait composition */}
                <div className="relative mx-auto w-full max-w-[540px] lg:ml-auto lg:mr-0">
                    {/* Dotted decorative background */}
                    <div
                        aria-hidden="true"
                        className="absolute -inset-x-2 inset-y-3 bg-[radial-gradient(#7563e833_1px,transparent_1px)] [background-size:13px_13px] sm:-inset-x-5 sm:inset-y-5"
                    />

                    {/* Portrait */}
                    <div className="relative mx-3 aspect-[4/4.5] overflow-hidden rounded-t-sm sm:mx-5">
                        <Image
                            src="/images/profile.png"
                            alt="Portrait of Saurabh Jagtap"
                            fill
                            priority
                            sizes="(max-width: 767px) 88vw, (max-width: 1023px) 70vw, 42vw"
                            className="object-cover object-[center_25%] transition duration-500 hover:grayscale-[50%]"
                        />
                    </div>

                    {/* Availability card */}
                    <div className="absolute -bottom-5 right-0 z-10 flex max-w-[290px] items-start gap-4 rounded-lg border border-border bg-surface p-4 shadow-[0_14px_42px_rgba(32,32,31,0.08)] sm:-right-2 sm:bottom-2 sm:max-w-[320px] sm:p-5">
                        <span className="relative mt-1.5 flex size-2.5 shrink-0">
                            <span className="absolute size-full rounded-full border border-accent/50" />
                            <span className="m-auto size-1.5 rounded-full bg-accent" />
                        </span>

                        <div>
                            <p className="font-mono text-[10px] font-semibold leading-5 tracking-wide text-foreground sm:text-[11px]">
                                OPEN TO OPPORTUNITIES
                            </p>
                            <p className="mt-1 text-xs text-muted sm:text-sm">
                                Junior full-stack roles
                            </p>
                        </div>
                    </div>

                    <p className="mt-9 text-right font-mono text-[9px] tracking-[0.08em] text-muted sm:mt-10 sm:text-[10px]">
                        BUILDING WITH INTENTION · LEARNING EVERY DAY
                    </p>
                </div>
            </div>
        </section>
    );
}
