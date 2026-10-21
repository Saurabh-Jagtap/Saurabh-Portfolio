
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
} from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Saurabh-Jagtap",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saurabh-jagtap-084893287/?isSelfProfile=true",
    icon: "LinkedIn",
  },
];

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Contact() {
  const currentYear = await getCurrentYear();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border bg-surface"
    >
      <div className="mx-auto w-full max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-accent">
              Have something in mind?
            </p>

            <h2
              id="contact-heading"
              className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl"
            >
              Let's build
              <br />
              something
              <br />
              <span className="text-accent">meaningful.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-muted sm:text-base">
              I'm open to junior full-stack opportunities, interesting
              collaborations, and conversations about building better
              software. If you have something in mind, I'd love to hear
              from you.
            </p>

            <a
              href="mailto:saurabhjagtap773@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-accent px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              <Mail size={17} aria-hidden="true" />
              Get in touch
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-xl border border-border bg-background p-5 sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              Find me around the web
            </p>

            <div className="mt-5 divide-y divide-border">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <span className="flex size-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent">
                      
<span className="flex size-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent">
  {link.icon === "github" ? (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.62 5.22-5.11 5.5.4.35.75 1.02.75 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )}
</span>

                    </span>

                    <span className="flex-1">
                      <span className="block text-sm font-medium">
                        {link.label}
                      </span>
                      <span className="mt-1 block text-xs text-muted">
                        Connect with me
                      </span>
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="text-muted transition-colors group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-7 border-t border-border pt-5">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-muted">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
            className="inline-flex items-center gap-2 font-serif text-xl tracking-tight transition-colors hover:text-accent"
          >
            SJ
            <span className="font-sans text-xs text-muted">
              The Thoughtful Builder
            </span>
            <ArrowDownRight size={14} aria-hidden="true" />
          </a>

          <p className="text-xs text-muted">
            Designed and built with intention.
          </p>

          <p className="font-mono text-[11px] text-muted">
            © {currentYear} Saurabh Jagtap
          </p>
        </footer>
      </div>
    </section>
  );
}
