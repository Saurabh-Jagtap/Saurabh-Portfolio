
import { ArrowUpRight, BookOpen, Code2, Lightbulb } from "lucide-react";

const interests = [
  {
    icon: Code2,
    title: "Building end to end",
    description:
      "I enjoy connecting frontend experiences with backend logic, APIs, and databases to create complete products.",
  },
  {
    icon: Lightbulb,
    title: "Understanding the why",
    description:
      "I want to understand the reasoning behind engineering decisions, not just make code work.",
  },
  {
    icon: BookOpen,
    title: "Always learning",
    description:
      "Every project gives me a chance to explore unfamiliar ideas, learn from mistakes, and improve my craft.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-accent">
              A little about me
            </p>

            <h2
              id="about-heading"
              className="max-w-xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            >
              Curious by nature.
              <br />
              An engineer in
              <br className="hidden sm:block" /> the making.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              I'm a full-stack developer who enjoys understanding how things
              work, building useful products, and turning ideas into software
              people can rely on.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
              My journey so far has been shaped by hands-on projects,
              collaborative learning, and the challenge of figuring out how
              individual pieces fit into a complete system. I'm focused on
              growing into an engineer who can reason about problems and build
              thoughtful solutions.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Let's connect
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="flex flex-col justify-center gap-0">
            {interests.map((interest, index) => {
              const Icon = interest.icon;

              return (
                <article
                  key={interest.title}
                  className="grid grid-cols-[44px_1fr] gap-4 border-b border-border py-6 first:pt-0 last:border-b-0 last:pb-0 sm:gap-5"
                >
                  <div className="flex size-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-muted/70">
                        0{index + 1}
                      </span>
                      <h3 className="text-base font-semibold tracking-tight">
                        {interest.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-muted">
                      {interest.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
