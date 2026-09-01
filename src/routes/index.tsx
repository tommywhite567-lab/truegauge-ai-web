import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  CalendarClock,
  Inbox,
  LineChart,
  PenLine,
  ShieldCheck,
} from "lucide-react";
import { GaugeMark } from "@/components/site/GaugeMark";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import gaugeHero from "@/assets/gauge-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Truegauge AI | AI Automation Consultancy, South Africa" },
      {
        name: "description",
        content:
          "Truegauge AI designs and implements measurable AI automation and workflow systems for South African businesses. Audit, build, measure.",
      },
      { property: "og:title", content: "Truegauge AI | AI Automation Consultancy" },
      {
        property: "og:description",
        content:
          "Measured AI automation and workflow implementation for South African businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Inbox,
    title: "Intake & Structuring",
    description:
      "Turn messy emails, forms, and documents into clean, structured records — automatically, without re-typing anything.",
  },
  {
    icon: PenLine,
    title: "Response Drafting",
    description:
      "Draft replies to routine queries — order status, FAQs, follow-ups — ready for your team to review and send.",
  },
  {
    icon: LineChart,
    title: "Reporting & Summarisation",
    description:
      "Recurring reports and weekly digests, pulled and written automatically so no one's assembling spreadsheets by hand.",
  },
  {
    icon: CalendarClock,
    title: "Scheduling & Status Updates",
    description:
      "Automatic confirmations, reminders, and status notifications — so your team isn't chasing or repeating themselves.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Capture",
    description:
      "Turn what's in your team's heads into written procedures and FAQs, without anyone having to sit down and write a manual.",
  },
  {
    icon: ShieldCheck,
    title: "Data Reconciliation",
    description:
      "Automated checks that flag mismatches and inconsistencies across your records — built to catch what's easy to miss, not to replace a full audit.",
  },
];

const approach = [
  {
    step: "01",
    title: "Calibrate",
    description:
      "We start with a two-week audit to map your workflows, find the bottlenecks, and set a measurable baseline.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "We design and implement the automation using the right tools for your stack — no unnecessary complexity.",
  },
  {
    step: "03",
    title: "Measure",
    description:
      "We track the same metrics we captured at baseline, so you can see the difference in hours, errors, and speed.",
  },
  {
    step: "04",
    title: "Hand over",
    description:
      "We document everything and train your team, then stay on call until the new way of working sticks.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal text-primary-foreground">
        <div className="dial-ring pointer-events-none absolute -right-48 -top-48 h-[36rem] w-[36rem] opacity-60" />
        <div className="dial-ring pointer-events-none absolute -bottom-48 -left-48 h-[28rem] w-[28rem] opacity-40" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div className="relative z-10">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent">
              <span className="h-px w-8 bg-accent" />
              South Africa · AI implementation
            </p>
            <h1 className="mt-7 font-display text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem]">
              Measured to the decimal.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
              Truegauge AI helps South African businesses implement automation and AI workflows that
              are proven, not promised. We set the baseline, build the system, and measure the result.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-teal">
                <Link to="/" hash="contact">
                  Book an audit
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-teal"
              >
                <Link to="/measure">See how we measure</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-primary-foreground/10 pt-8">
              <div>
                <p className="font-display text-2xl font-semibold text-accent">2 weeks</p>
                <p className="text-sm text-primary-foreground/60">to baseline</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-accent">SA-based</p>
                <p className="text-sm text-primary-foreground/60">implementation</p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-accent">Measured</p>
                <p className="text-sm text-primary-foreground/60">before & after</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img
                src={gaugeHero}
                alt="Minimal teal analog gauge dial"
                className="rounded-2xl shadow-elevated"
                width={640}
                height={640}
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-foreground/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              Services
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Automation that fits the way you already work.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We focus on practical, high-friction tasks first — the ones that quietly eat up hours every week.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group border-border/70 bg-card shadow-card transition-shadow hover:shadow-elevated"
              >
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="border-t border-border bg-sand/40 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              Approach
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              Audit. Build. Measure. Hand over.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((stage) => (
              <div key={stage.title} className="relative">
                <span className="font-display text-5xl font-semibold text-primary/15">
                  {stage.step}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / testimonial */}
      <section id="results" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
                Results
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
                We measure what matters.
              </h2>
              <p className="mt-4 max-w-lg text-lg text-muted-foreground">
                Every engagement starts with a baseline and ends with a comparison. You see the
                reduction in hours, errors, and response time — not vague promises.
              </p>
              <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-teal-deep">
                <Link to="/measure">Try the measurement demo</Link>
              </Button>
            </div>

            <Card className="border-border/70 bg-card shadow-elevated">
              <CardContent className="p-8">
                <GaugeMark className="h-8 w-8 text-primary" />
                <blockquote className="mt-6 text-lg leading-relaxed text-foreground">
                  “Truegauge mapped our quote workflow in days and built an automation that cut our
                  admin time dramatically. The best part was seeing the before-and-after numbers in
                  the report.”
                </blockquote>
                <div className="mt-6">
                  <p className="font-medium text-foreground">Operations Director</p>
                  <p className="text-sm text-muted-foreground">South African services business</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-charcoal py-24 text-primary-foreground lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent">
              <span className="h-px w-8 bg-accent" />
              Get in touch
              <span className="h-px w-8 bg-accent" />
            </p>
            <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
              Start with a two-week audit.
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/70">
              We'll map your workflows, identify the highest-friction opportunities, and give you a
              clear baseline before any build begins.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

            <p className="mt-10 text-sm text-primary-foreground/50">
              Cape Town, South Africa
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <GaugeMark className="h-5 w-5 text-primary" />
            <span className="font-display font-semibold text-foreground">Truegauge AI</span>
          </div>
          <p>Cape Town, South Africa · © {new Date().getFullYear()} Truegauge AI</p>
        </div>
      </footer>
    </div>
  );
}
