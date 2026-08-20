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

const capabilities = [
  {
    title: "Intake & Structuring",
    description:
      "Turn messy emails, forms, and documents into clean, structured records — automatically, without re-typing anything.",
  },
  {
    title: "Response Drafting",
    description:
      "Draft replies to routine queries — order status, FAQs, follow-ups — ready for your team to review and send.",
  },
  {
    title: "Reporting & Summarisation",
    description:
      "Recurring reports and weekly digests, pulled and written automatically so no one's assembling spreadsheets by hand.",
  },
  {
    title: "Scheduling & Status Updates",
    description:
      "Automatic confirmations, reminders, and status notifications — so your team isn't chasing or repeating themselves.",
  },
  {
    title: "Knowledge Capture",
    description:
      "Turn what's in your team's heads into written procedures and FAQs, without anyone having to sit down and write a manual.",
  },
  {
    title: "Data Reconciliation",
    description:
      "Automated checks that flag mismatches and inconsistencies across your records — built to catch what's easy to miss, not to replace a full audit.",
  },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center sm:py-32">
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
            href="mailto:hello@truegaugeai.co.za"
            className="mt-6 inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-teal-deep"
          >
            hello@truegaugeai.co.za
          </a>
        </div>
      </section>

      <section className="w-full px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            What we're building
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            Practical automation for the day-to-day work that slows teams down.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="group relative flex flex-col rounded-lg border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-elevated"
              >
                <div className="mb-4 flex h-8 items-center">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                  <div className="mx-3 h-2 w-2 rounded-full bg-primary/80" />
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-auto py-8 text-center text-sm text-muted-foreground">
        Truegauge AI · South Africa · © 2026
      </footer>
    </div>
  );
}
