
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  FileBadge,
  Download,
} from "lucide-react";

const responsibilities = [
  "Implemented backend APIs using Node.js and Express.js.",
  "Worked with MongoDB data models and database operations.",
  "Built frontend pages using React, Vite, and CSS.",
  "Worked on request validation, authentication flows, and error handling.",
];

const technologies = [
  "React",
  "Vite",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
];

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.12em] text-accent uppercase">
              Where learning met practice
            </p>

            <h2
              id="experience-heading"
              className="max-w-md font-serif text-4xl leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            >
              Experience
              <br />
              in the real world.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted sm:text-base">
              A chance to work through practical development tasks, connect
              frontend and backend systems, and learn how software comes
              together beyond personal projects.
            </p>

            <div className="mt-8 hidden items-center gap-2 font-mono text-xs text-muted lg:flex">
              <span className="h-px w-8 bg-accent" />
              LEARNING THROUGH DELIVERY
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-[19px] top-8 w-px bg-border" />

            <article className="relative pl-12">
              <div className="absolute left-2 top-1 flex size-6 items-center justify-center rounded-full border border-accent/30 bg-background">
                <span className="size-2 rounded-full bg-accent" />
              </div>

              <div className="rounded-xl border border-border bg-surface p-5 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs tracking-wide text-accent">
                      INTERNSHIP · 2026
                    </p>

                    <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                      Full Stack Development Intern
                    </h3>

                    <p className="mt-1 text-base text-muted">
                      VELOOP Rewards
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs text-muted">
                    <CalendarDays size={14} aria-hidden="true" />
                    <span>13 Aug – 14 Sep</span>
                  </div>
                </div>

                <div className="my-6 h-px bg-border" />

                <p className="text-sm leading-7 text-muted">
                  Contributed to a rewards platform by working across frontend
                  pages and backend API development, while gaining practical
                  experience with database operations and application flows.
                </p>

                <h4 className="mt-7 flex items-center gap-2 text-sm font-semibold">
                  <Code2
                    size={16}
                    className="text-accent"
                    aria-hidden="true"
                  />
                  What I worked on
                </h4>

                <ul className="mt-4 space-y-3">
                  {responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-3 text-sm leading-6 text-foreground/80"
                    >
                      <CheckCircle2
                        size={17}
                        strokeWidth={1.7}
                        className="mt-0.5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-border pt-5">
                  <p className="mb-3 font-mono text-[11px] tracking-wide text-muted uppercase">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-border px-2.5 py-1.5 text-xs text-foreground/80"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>


<div className="mt-7 border-t border-border pt-5">
  <p className="mb-3 font-mono text-[11px] tracking-wide text-muted uppercase">
    Credentials
  </p>

  <div className="flex flex-wrap gap-3">
    <a
      href="/documents/veloop-internship-certificate.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
    >
      <FileBadge size={16} aria-hidden="true" />
      Internship Certificate
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>

    <a
      href="/documents/veloop-letter-of-recommendation.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
    >
      <Download size={16} aria-hidden="true" />
      Letter of Recommendation
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  </div>
</div>

                <div className="mt-6 flex items-center gap-2 text-xs text-muted">
                  <BriefcaseBusiness
                    size={14}
                    aria-hidden="true"
                  />
                  <span>Professional experience</span>
                  <ArrowUpRight
                    size={14}
                    className="ml-auto text-accent"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
