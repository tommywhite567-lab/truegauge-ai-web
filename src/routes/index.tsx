import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Gauge, LineChart, ShieldCheck, Inbox, PenLine, CalendarClock, BookOpen } from "lucide-react";
import heroImage from "@/assets/gauge-hero.jpg";
import { GaugeMark } from "@/components/site/GaugeMark";

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
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Inbox,
    title: "Intake & Structuring",
    body: "Turn messy emails, forms, and documents into clean, structured records — automatically, without re-typing anything.",
  },
  {
    icon: PenLine,
    title: "Response Drafting",
    body: "Draft replies to routine queries — order status, FAQs, follow-ups — ready for your team to review and send.",
  },
  {
    icon: LineChart,
    title: "Reporting & Summarisation",
    body: "Recurring reports and weekly digests, pulled and written automatically so no one's assembling spreadsheets by hand.",
  },
  {
    icon: CalendarClock,
    title: "Scheduling & Status Updates",
    body: "Automatic confirmations, reminders, and status notifications — so your team isn't chasing or repeating themselves.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Capture",
    body: "Turn what's in your team's heads into written procedures and FAQs, without anyone having to sit down and write a manual.",
  },
  {
    icon: ShieldCheck,
    title: "Data Reconciliation",
    body: "Automated checks that flag mismatches and inconsistencies across your records — built to catch what's easy to miss, not to replace a full audit.",
  },
];

const steps = [
  { n: "01", title: "Calibrate", body: "Two-week audit of processes, systems and data. We quantify the baseline before touching anything." },
  { n: "02", title: "Build", body: "Short implementation cycles with working software in your environment, reviewed with your team weekly." },
  { n: "03", title: "Measure", body: "Hours recovered, error rates and turnaround time tracked against the baseline we agreed on." },
  { n: "04", title: "Hand over", body: "Documentation, training and support so the system belongs to your business, not to a vendor." },
];

const proof = [
  { value: "40+", label: "Workflows implemented" },
  { value: "12k", label: "Manual hours removed annually" },
  { value: "6 wk", label: "Typical time to first release" },
  { value: "ZA", label: "Local team, local data rules" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <GaugeMark className="h-7 w-7 text-primary" />
            <span className="font-display text-[17px] font-semibold tracking-tight">
              Truegauge<span className="text-primary"> AI</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition-colors hover:text-foreground">Services</a>
            <a href="#approach" className="transition-colors hover:text-foreground">Approach</a>
            <a href="#results" className="transition-colors hover:text-foreground">Results</a>
            <Link
              to="/measure"
              activeProps={{ className: "text-foreground font-medium" }}
              className="transition-colors hover:text-foreground"
            >
              Measure
            </Link>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-teal-deep"
          >
            Book an audit
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-charcoal text-primary-foreground">
          <div className="dial-ring pointer-events-none absolute -right-40 -top-40 h-[42rem] w-[42rem] opacity-70" />
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
            <div>
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent">
                <span className="h-px w-8 bg-accent" />
                South Africa · AI implementation
              </p>
              <h1 className="mt-7 font-display text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem]">
                AI automation, measured to the decimal.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
                We audit how your business actually runs, then implement automation and AI workflows
                that shorten turnaround, cut manual capture and hold up under scrutiny.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-teal"
                >
                  Book an automation audit
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#approach"
                  className="inline-flex h-12 items-center rounded-md border border-primary-foreground/25 px-6 text-sm font-medium text-primary-foreground/85 transition-colors hover:border-primary-foreground/50"
                >
                  How we work
                </a>
              </div>
              <dl className="mt-14 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 border-t border-primary-foreground/12 pt-8 sm:grid-cols-4">
                {proof.map((p) => (
                  <div key={p.label}>
                    <dt className="font-display text-2xl font-semibold text-accent">{p.value}</dt>
                    <dd className="mt-1 text-[13px] leading-snug text-primary-foreground/55">{p.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Precision teal gauge dial representing measured AI implementation"
                width={1408}
                height={1104}
                className="w-full rounded-lg border border-primary-foreground/10 object-cover shadow-elevated"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Services</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Implementation, not slide decks.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every engagement ships working systems into your environment, with a number attached to
              the outcome.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="bg-card p-8 transition-colors hover:bg-secondary">
                <s.icon className="h-6 w-6 text-primary" strokeWidth={1.6} />
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="border-y border-border bg-secondary/60">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Approach</p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                  Four stages, one baseline.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Automation only counts if it can be proven. We set the reading first, then improve
                  against it.
                </p>
              </div>
              <ol className="space-y-px overflow-hidden rounded-lg border border-border bg-border">
                {steps.map((s) => (
                  <li key={s.n} className="flex gap-6 bg-card p-7">
                    <span className="font-display text-sm font-semibold text-primary/70">{s.n}</span>
                    <div>
                      <h3 className="text-base font-semibold">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Results</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                What our clients stop doing by hand.
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Quote and invoice capture across email, WhatsApp and PDF documents",
                  "Manual reconciliation between finance, CRM and operations systems",
                  "First-line support triage, routing and response drafting",
                  "Weekly management reporting assembled from five different exports",
                  "Onboarding paperwork, compliance checks and document verification",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="rounded-lg border border-border bg-card p-9 shadow-card">
              <GaugeMark className="h-9 w-9 text-primary" />
              <blockquote className="mt-6 font-display text-xl leading-relaxed">
                “They measured our order process before proposing anything. Six weeks later
                turnaround dropped from three days to four hours — and we could see exactly why.”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                Operations Director · industrial distribution, Gauteng
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border bg-teal-deep text-primary-foreground">
          <div className="tick-grid mx-auto max-w-6xl px-6 py-24">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Start with a calibrated audit.
              </h2>
              <p className="mt-4 text-primary-foreground/70">
                Two weeks, fixed scope. You get a prioritised automation roadmap with effort, risk
                and expected return per item — whether or not you build it with us.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="mailto:hello@truegauge.ai"
                  className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-teal"
                >
                  hello@truegauge.ai
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="tel:+27100000000"
                  className="inline-flex h-12 items-center rounded-md border border-primary-foreground/25 px-6 text-sm font-medium transition-colors hover:border-primary-foreground/50"
                >
                  +27 10 000 0000
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

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
