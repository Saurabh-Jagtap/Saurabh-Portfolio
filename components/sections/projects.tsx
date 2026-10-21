
import Link from "next/link";
import {
    ArrowDownRight,
    ArrowUpRight,
    Braces,
    CalendarDays,
    CircleDot,
    GitPullRequest,
    Radio,
} from "lucide-react";

type Project = {
    number: string;
    name: string;
    description: string;
    technologies: string[];
    status: string;
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
};

const projects: Project[] = [
    {
        number: "01",
        name: "Triagent",
        description:
            "An AI executive assistant designed to help organize Gmail and Google Calendar workflows, with task planning and user-approved actions.",
        technologies: ["Next.js", "TypeScript", "AI Agents", "Gmail API"],
        githubUrl: "https://github.com/Saurabh-Jagtap/Triagent.git",
        liveUrl: "https://triagent.saurabhjagtap.tech",
        status: "Featured project",
        featured: true,
    },
    {
        number: "02",
        name: "PulseBoard",
        description:
            "A real-time polling application where participants can interact with polls and see updates through room-based live communication.",
        technologies: ["React", "Node.js", "PostgreSQL", "Socket.IO"],
        githubUrl: "https://github.com/Saurabh-Jagtap/PulseBoard.git",
        liveUrl: "https://pulseboard.saurabhjagtap.tech",
        status: "Deployed",
        featured: true,
    },
    {
        number: "03",
        name: "Chaisheet",
        description:
            "A runtime utility-engine project exploring how utility-first styling can be generated and applied. Published as an npm package.",
        technologies: ["JavaScript", "CSS", "npm"],
        githubUrl: "https://github.com/Saurabh-Jagtap/chaisheet.git",
        liveUrl: "https://www.npmjs.com/package/chaisheet",
        status: "Published package",
        featured: false,
    },
    {
        number: "04",
        name: "AI Code Reviewer",
        description:
            "An AI-powered code review application exploring a developer workflow for reviewing code and surfacing useful feedback.",
        technologies: ["Next.js", "TypeScript", "Prisma", "Neon"],
        githubUrl: "https://github.com/Saurabh-Jagtap/AI-Powered-Code-Review.git",
        status: "In progress",
        featured: false,
    },
];

// function ProjectLinks({
//   githubUrl,
//   liveUrl,
// }: {
//   githubUrl?: string;
//   liveUrl?: string;
// }) {
//   if (!githubUrl && !liveUrl) {
//     return (
//       <p className="text-xs text-muted">
//         Project links to be added
//       </p>
//     );
//   }

//   return (
//     <div className="flex flex-wrap gap-4">
//       {githubUrl && (
//         <a
//           href={githubUrl}
//           target="_blank"
//           rel="noreferrer"
//           className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
//         >
//           Source code <ArrowUpRight size={15} />
//         </a>
//       )}

//       {liveUrl && (
//         <a
//           href={liveUrl}
//           target="_blank"
//           rel="noreferrer"
//           className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
//         >
//           Live demo <ArrowUpRight size={15} />
//         </a>
//       )}
//     </div>
//   );
// }
function ProjectLinks({
    githubUrl,
    liveUrl,
    packageUrl,
}: {
    githubUrl?: string;
    liveUrl?: string;
    packageUrl?: string;
}) {
    const links = [
        { label: "Source code", url: githubUrl },
        { label: "Live demo", url: liveUrl },
        { label: "npm package", url: packageUrl },
    ].filter(
        (link): link is { label: string; url: string } =>
            Boolean(link.url),
    );

    if (links.length === 0) {
        return (
            <p className="text-xs text-muted">
                Project links coming soon
            </p>
        );
    }

    return (
        <div className="flex flex-wrap gap-4">
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
                >
                    {link.label}
                    <ArrowUpRight size={15} />
                </a>
            ))}
        </div>
    );
}

function TriagentPreview() {
    return (
        <div
            aria-label="Illustrative preview of an AI executive assistant interface"
            className="relative flex min-h-[260px] flex-col overflow-hidden rounded-lg border border-[#e7e3dd] bg-[#fbfaf7] p-4 sm:min-h-[310px] sm:p-6"
        >
            <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Braces size={17} />
                    </div>
                    <div>
                        <p className="text-xs font-semibold">Triagent</p>
                        <p className="text-[10px] text-muted">Executive assistant</p>
                    </div>
                </div>

                <span className="rounded-full border border-border bg-white px-2.5 py-1 font-mono text-[9px] text-muted">
                    WORKSPACE
                </span>
            </div>

            <div className="grid flex-1 grid-cols-[1fr_0.9fr] gap-3 py-5">
                <div className="flex flex-col gap-3">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-muted">
                        Your day
                    </p>

                    <div className="rounded-lg border border-border bg-white p-3">
                        <div className="flex items-center gap-2">
                            <CalendarDays size={14} className="text-accent" />
                            <span className="text-[10px] font-medium">Calendar</span>
                        </div>
                        <div className="mt-3 h-1.5 w-4/5 rounded-full bg-[#e9e5df]" />
                        <div className="mt-2 h-1.5 w-3/5 rounded-full bg-[#e9e5df]" />
                    </div>

                    <div className="rounded-lg border border-border bg-white p-3">
                        <p className="text-[10px] font-medium">Inbox</p>
                        <div className="mt-3 h-1.5 w-full rounded-full bg-[#e9e5df]" />
                        <div className="mt-2 h-1.5 w-2/3 rounded-full bg-[#e9e5df]" />
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-muted">
                        Assistant
                    </p>

                    <div className="flex-1 rounded-lg border border-[#dcd5ff] bg-[#f1eeff] p-3">
                        <div className="flex size-6 items-center justify-center rounded-md bg-white text-accent">
                            <Braces size={13} />
                        </div>
                        <p className="mt-3 text-[10px] font-medium">
                            Suggested action
                        </p>
                        <div className="mt-2 h-1.5 w-full rounded-full bg-[#dcd5ff]" />
                        <div className="mt-2 h-1.5 w-4/5 rounded-full bg-[#dcd5ff]" />
                        <div className="mt-4 rounded-md border border-[#dcd5ff] bg-white px-2 py-1.5 text-center text-[9px] text-accent">
                            Review action
                        </div>
                    </div>
                </div>
            </div>

            <p className="font-mono text-[9px] text-muted">
                CONCEPTUAL PRODUCT PREVIEW
            </p>
        </div>
    );
}

function PulseBoardPreview() {
    const bars = [38, 65, 48, 83, 57, 72, 45, 91, 63, 77, 54, 86];

    return (
        <div
            aria-label="Illustrative preview of a real-time polling dashboard"
            className="flex min-h-[260px] flex-col overflow-hidden rounded-lg border border-[#e7e3dd] bg-[#fbfaf7] p-4 sm:min-h-[310px] sm:p-6"
        >
            <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2.5">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <Radio size={17} />
                    </div>
                    <div>
                        <p className="text-xs font-semibold">PulseBoard</p>
                        <p className="text-[10px] text-muted">Live polling</p>
                    </div>
                </div>

                <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[9px] font-medium text-emerald-800">
                    <CircleDot size={10} />
                    Live session
                </span>
            </div>

            <div className="mt-5">
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted">
                    Poll results · Preview
                </p>
                <h3 className="mt-2 text-sm font-medium sm:text-base">
                    Which feature matters most?
                </h3>
            </div>

            <div className="mt-5 flex flex-1 items-end gap-2 sm:gap-3">
                {bars.map((height, index) => (
                    <div
                        key={index}
                        className="flex flex-1 flex-col items-center justify-end gap-2"
                    >
                        <div
                            className={`w-full max-w-7 rounded-t-sm ${index === 7 ? "bg-accent" : "bg-[#dcd5ff]"
                                }`}
                            style={{ height: `${height}px`, maxHeight: "96px" }}
                        />
                        <span className="font-mono text-[8px] text-muted">
                            {index + 1}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <span className="text-[10px] text-muted">
                    Real-time result visualization
                </span>
                <Radio size={14} className="text-accent" />
            </div>
        </div>
    );
}

function FeaturedProject({ project }: { project: Project }) {
    const isTriagent = project.name === "Triagent";

    return (
        <article className="group grid min-w-0 gap-6 border-t border-border pt-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-9 lg:pt-8">
            <div className="min-w-0">
                {isTriagent ? <TriagentPreview /> : <PulseBoardPreview />}
            </div>

            <div className="flex min-w-0 flex-col justify-center py-1">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs text-accent">
                        SELECTED PROJECT / {project.number}
                    </span>
                    <span className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted">
                        {project.status}
                    </span>
                </div>

                <h3 className="mt-5 font-serif text-3xl font-normal tracking-tight sm:text-4xl">
                    {project.name}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-muted sm:text-[15px]">
                    {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <li
                            key={technology}
                            className="rounded-md border border-border bg-white/60 px-2.5 py-1.5 font-mono text-[10px] text-muted sm:text-[11px]"
                        >
                            {technology}
                        </li>
                    ))}
                </ul>

                <div className="mt-6">
                    <ProjectLinks
                        githubUrl={project.githubUrl}
                        liveUrl={project.liveUrl}
                    />
                </div>
            </div>
        </article>
    );
}

function SecondaryProject({ project }: { project: Project }) {
    const Icon =
        project.name === "ChaiTailwind" ? Braces : GitPullRequest;

    return (
        <article className="group flex min-w-0 flex-col rounded-lg border border-border bg-surface p-5 transition-colors duration-200 hover:border-accent/40 sm:p-6">
            <div className="flex items-start justify-between gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background text-accent">
                    <Icon size={19} />
                </div>
                <span className="rounded-full border border-border px-2 py-1 text-[10px] text-muted">
                    {project.status}
                </span>
            </div>

            <p className="mt-5 font-mono text-[10px] text-accent">
                PROJECT / {project.number}
            </p>

            <h3 className="mt-2 font-serif text-2xl font-normal tracking-tight">
                {project.name}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                {project.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                    <li
                        key={technology}
                        className="rounded-md bg-background px-2 py-1 font-mono text-[10px] text-muted"
                    >
                        {technology}
                    </li>
                ))}
            </ul>

            <div className="mt-6 border-t border-border pt-4">
                <ProjectLinks
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                />
            </div>
        </article>
    );
}

export default function Projects() {
    const featuredProjects = projects.filter((project) => project.featured);
    const secondaryProjects = projects.filter((project) => !project.featured);

    return (
        <section
            id="work"
            className="scroll-mt-24 bg-background py-20 sm:py-24 lg:py-28"
        >
            <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12">
                <div className="flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end sm:pb-10">
                    <div>
                        <p className="font-mono text-[11px] font-medium tracking-[0.08em] text-accent">
                            A SELECTION OF MY WORK
                        </p>

                        <h2 className="mt-4 font-serif text-4xl font-normal leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                            Built with intention.
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-muted sm:text-[15px]">
                        A few things I&apos;ve built, the problems behind them,
                        and the engineering decisions that brought them to life.
                    </p>
                </div>

                <div className="mt-8 space-y-10 sm:mt-10 sm:space-y-12">
                    {featuredProjects.map((project) => (
                        <FeaturedProject key={project.name} project={project} />
                    ))}
                </div>

                <div className="mt-20 sm:mt-24">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <h3 className="font-serif text-2xl font-normal sm:text-3xl">
                            More things I&apos;ve built
                        </h3>
                        <span className="font-mono text-[10px] text-muted">
                            02 PROJECTS
                        </span>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {secondaryProjects.map((project) => (
                            <SecondaryProject key={project.name} project={project} />
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex items-center justify-between gap-4 border-t border-border pt-6">
                    <p className="max-w-lg text-xs leading-6 text-muted">
                        Each project is an opportunity to understand a problem,
                        make deliberate choices, and improve through building.
                    </p>

                    <Link
                        href="#toolkit"
                        className="inline-flex shrink-0 items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                    >
                        My toolkit
                        <ArrowDownRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
