
import Link from "next/link";
import { Sun } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Experience", href: "#experience" },
  { label: "Principles", href: "#principles" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[76px] w-full max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12"
      >
        <Link
          href="#home"
          aria-label="Saurabh Jagtap home"
          className="flex shrink-0 items-center gap-3"
        >
          <span className="font-serif text-4xl leading-none tracking-[-0.1em]">
            SJ
          </span>

          <span className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight">
              Saurabh Jagtap
            </span>
            <span className="mt-0.5 text-[11px] text-muted">
              The Thoughtful Builder
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="#contact"
            className="rounded-md border border-border px-3 py-2 text-xs font-medium transition-colors hover:border-accent hover:text-accent sm:px-4 sm:text-sm lg:hidden"
          >
            Contact
          </Link>

          <Sun
            aria-hidden="true"
            size={19}
            strokeWidth={1.7}
            className="hidden text-foreground/80 sm:block"
          />
        </div>
      </nav>
    </header>
  );
}
