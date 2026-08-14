import { createFileRoute } from "@tanstack/react-router";
import { GaugeMark } from "@/components/site/GaugeMark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Truegauge AI | Coming Soon" },
      {
        name: "description",
        content:
          "Truegauge AI is building automation you can actually trust. Honest measurement of operational data and admin, without hype or overclaiming.",
      },
      { property: "og:title", content: "Truegauge AI | Coming Soon" },
      {
        property: "og:description",
        content:
          "Automation you can actually trust. Honest measurement of operational data and admin, without hype or overclaiming.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <div className="max-w-lg">
        <div className="flex items-center justify-center gap-3">
          <GaugeMark className="h-10 w-10 text-primary" />
          <span className="font-display text-2xl font-semibold tracking-tight">
            Truegauge<span className="text-primary"> AI</span>
          </span>
        </div>

        <h1 className="mt-10 font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Automation you can actually trust.
        </h1>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          A gauge tells you the true state of a system — no more, no less. Truegauge AI does the same for messy operational data and admin: honest measurement, clear baselines, and automation built without hype or overclaiming.
        </p>

        <p className="mt-6 text-sm font-medium text-foreground">
          We're currently building — get in touch if you'd like to be one of our first clients.
        </p>

        <a
          // Placeholder email address — replace with real contact address before launch
          href="mailto:hello@truegauge.ai"
          className="mt-6 inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-teal-deep"
        >
          hello@truegauge.ai
        </a>
      </div>

      <footer className="absolute bottom-8 text-sm text-muted-foreground">
        Truegauge AI · South Africa · © 2026
      </footer>
    </div>
  );
}
