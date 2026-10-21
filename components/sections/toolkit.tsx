
import {
  ArrowUpRight,
  Braces,
  Database,
  Layers3,
  Wrench,
} from "lucide-react";

const toolkit = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive, thoughtful user experiences.",
    icon: Layers3,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML & CSS",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description: "Designing APIs and application logic that hold up.",
    icon: Braces,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.IO",
      "Authentication",
    ],
  },
  {
    number: "03",
    title: "Databases",
    description: "Working with data models, queries, and persistence.",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Drizzle ORM",
      "Mongoose",
      "Redis",
    ],
  },
  {
    number: "04",
    title: "Tools & Infrastructure",
    description: "Taking projects from local development to deployment.",
    icon: Wrench,
    skills: [
      "Git & GitHub",
      "Docker",
      "Vercel",
      "Render",
      "Postman",
      "pnpm",
    ],
  },
];

export default function Toolkit() {
  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-heading"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto w-full max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-4 font-mono text-xs tracking-[0.12em] text-accent uppercase">
              The tools behind the work
            </p>

            <h2
              id="toolkit-heading"
              className="max-w-md font-serif text-4xl leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl"
            >
              A toolkit for
              <br />
              building well.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted sm:text-base">
              The technologies I use to turn ideas into working products,
              from the interface people interact with to the systems behind it.
            </p>

            <div className="mt-8 hidden items-center gap-2 font-mono text-xs text-muted lg:flex">
              <span className="h-px w-8 bg-accent" />
              LEARNING BY BUILDING
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {toolkit.map((category) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.number}
                  className="group flex flex-col rounded-xl border border-border bg-surface p-5 transition-colors duration-300 hover:border-accent/40 sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                    </div>

                    <span className="font-mono text-xs text-muted/70">
                      {category.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold tracking-tight">
                    {category.title}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                    {category.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border/80 px-2.5 py-1.5 text-xs text-foreground/80 transition-colors duration-200 group-hover:border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex justify-end pt-5 text-muted/50 transition-colors group-hover:text-accent">
                    <ArrowUpRight size={16} aria-hidden="true" />
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
