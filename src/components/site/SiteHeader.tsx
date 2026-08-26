"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { GaugeMark } from "@/components/site/GaugeMark";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface HashLink {
  to: "/";
  hash: string;
  label: string;
}

interface RouteLink {
  to: "/measure";
  label: string;
}

type NavLink = HashLink | RouteLink;

const navLinks: NavLink[] = [
  { to: "/", hash: "services", label: "Services" },
  { to: "/", hash: "approach", label: "Approach" },
  { to: "/", hash: "results", label: "Results" },
  { to: "/measure", label: "Measure" },
];

export function SiteHeader({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <GaugeMark className="h-7 w-7 shrink-0 text-primary" />
          <span className="font-display text-[17px] font-semibold tracking-tight">
            Truegauge<span className="text-primary"> AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {navLinks.map((link) =>
            link.to === "/measure" ? (
              <Link
                key={link.label}
                to={link.to}
                activeProps={{ className: "text-foreground font-medium" }}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/"
            hash="contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/"
            hash="contact"
            className="hidden h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-teal-deep sm:inline-flex"
          >
            Book an audit
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="flex flex-col gap-6 pt-8">
                {navLinks.map((link) => {
                  const hashProp =
                    link.to === "/" ? { hash: link.hash } : {};
                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        to={link.to}
                        {...hashProp}
                        className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}
                <SheetClose asChild>
                  <Link
                    to="/"
                    hash="contact"
                    className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                  >
                    Contact
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/"
                    hash="contact"
                    className="mt-4 inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-teal-deep"
                  >
                    Book an audit
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
