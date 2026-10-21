
import { ArrowUpRight, Compass, GitBranch, RefreshCw } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Think before building.",
    description:
      "Good engineering starts with understanding the problem. I try to question assumptions, think through trade-offs, and choose solutions that fit the actual requirements.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Build for clarity.",
    description:
      "Code should be easy to understand, change, and maintain. I value thoughtful structure, clear responsibilities, and keeping complexity under control.",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Keep improving.",
    description:
      "I learn best by building real things, finding what doesn't work, and refining my approach. Every project is an opportunity to become a better engineer.",
    icon: RefreshCw,
  },
];

export default function Principles() {
  return (
    <section
      id="principles"
      aria-labelledby="principles-heading"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-accent">
              Beyond the code
            </p>

            <h2
              id="principles-heading"
              className="max-w-[650px] font-serif text-4xl leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            >
              How I approach
              <br />
              the craft.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-muted sm:text-base">
            Tools change. Frameworks evolve. The way we think about
            problems is what makes the difference.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-14">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.number}
                className="group flex min-h-[310px] flex-col rounded-xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon
                      size={21}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>

                  <span className="font-mono text-xs text-muted/70">
                    {principle.number}
                  </span>
                </div>

                <h3 className="mt-10 font-serif text-[27px] leading-tight tracking-[-0.035em] sm:text-3xl">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {principle.description}
                </p>

                <div className="mt-auto flex justify-end pt-6 text-muted/50 transition-colors group-hover:text-accent">
                  <ArrowUpRight size={17} aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex items-center gap-3 border-t border-border pt-6">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
            Curiosity. Clarity. Consistency.
          </p>
        </div>
      </div>
    </section>
  );
}
