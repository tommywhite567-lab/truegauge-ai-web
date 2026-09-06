import { createFileRoute, Link } from "@tanstack/react-router";
import { GaugeMark } from "@/components/site/GaugeMark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Truegauge AI | AI Automation Consultancy, South Africa" },
      {
        name: "description",
        content:
          "Truegauge AI designs and implements measurable AI automation and workflow systems for South African businesses. Launching soon.",
      },
      { property: "og:title", content: "Truegauge AI | AI Automation Consultancy" },
      {
        property: "og:description",
        content:
          "Measured AI automation and workflow implementation for South African businesses. Launching soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-charcoal px-6 py-20 text-center text-primary-foreground">
      <div className="dial-ring pointer-events-none absolute -right-32 -top-32 h-[24rem] w-[24rem] opacity-50" />
      <div className="dial-ring pointer-events-none absolute -bottom-32 -left-32 h-[20rem] w-[20rem] opacity-30" />

      <div className="relative z-10 flex max-w-xl flex-col items-center">
        <GaugeMark className="h-16 w-16 text-accent" />

        <p className="mt-8 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent">
          <span className="h-px w-8 bg-accent" />
          South Africa · AI implementation
          <span className="h-px w-8 bg-accent" />
        </p>

        <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-6xl">
          Measured to the decimal.
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
          Launching Soon. Truegauge AI helps South African businesses implement automation and AI
          workflows that are proven, not promised.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@truegauge-ai.co.za"
            className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-teal"
          >
            hello@truegauge-ai.co.za
          </a>
          <a
            href="tel:+27832050567"
            className="inline-flex h-12 items-center rounded-md border border-primary-foreground/25 px-6 text-sm font-medium text-primary-foreground/85 transition-colors hover:border-primary-foreground/50"
          >
            +27 83 205 0567
          </a>
        </div>

        <p className="mt-12 text-sm text-primary-foreground/50">Cape Town, South Africa</p>
      </div>
    </div>
  );
}
