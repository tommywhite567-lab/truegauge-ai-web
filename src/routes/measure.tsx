import { createFileRoute, redirect } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { GaugeMark } from "@/components/site/GaugeMark";
import { SiteHeader } from "@/components/site/SiteHeader";

export const Route = createFileRoute("/measure")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  head: () => ({
    meta: [
      { title: "Measured to the decimal — Truegauge AI" },
      {
        name: "description",
        content:
          "See how Truegauge AI sets a baseline and tracks the same numbers after implementation. An interactive demonstration of our measurement approach.",
      },
      { property: "og:title", content: "Measured to the decimal — Truegauge AI" },
      {
        property: "og:description",
        content:
          "Interactive demonstration of how we measure baseline and post-implementation performance for AI automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MeasurePage,
});

const metrics = [
  {
    key: "quote",
    label: "Quote turnaround",
    baseline: 72,
    after: 4,
    unit: "hours",
    format: (v: number) => `${v.toFixed(0)} hrs`,
  },
  {
    key: "admin",
    label: "Manual admin hours / week",
    baseline: 18,
    after: 3,
    unit: "hours/week",
    format: (v: number) => `${v.toFixed(0)} hrs`,
  },
  {
    key: "errors",
    label: "Data entry error rate",
    baseline: 8.5,
    after: 1.2,
    unit: "%",
    format: (v: number) => `${v.toFixed(1)}%`,
  },
  {
    key: "queries",
    label: "Customer query response time",
    baseline: 26,
    after: 2,
    unit: "hours",
    format: (v: number) => `${v.toFixed(0)} hrs`,
  },
] as const;

type Metric = (typeof metrics)[number];

const percentageReduction = (metric: Metric) => {
  return Math.round(((metric.baseline - metric.after) / metric.baseline) * 100);
};

function GaugeDial({
  value,
  baseline,
  after,
  unit,
  animating,
}: {
  value: number;
  baseline: number;
  after: number;
  unit: string;
  animating: boolean;
}) {
  // Map a metric value to a needle angle. Angle range: -90° to 90° (left to right).
  // The baseline is the rightmost point of the scale (90°), and "after" is a much smaller value.
  // We use a logarithmic-ish scale so that a 90%+ reduction still shows a clear needle sweep.
  const min = Math.max(after * 0.25, 0.01);
  const max = baseline * 1.1;
  const clamped = Math.min(Math.max(value, min), max);
  const log = Math.log(clamped / min) / Math.log(max / min);
  const angle = -90 + log * 180;

  const radius = 140;
  const center = { x: 160, y: 160 };
  const ticks = 12;

  const tickMarks = Array.from({ length: ticks + 1 }, (_, i) => {
    const tickAngle = -90 + (i / ticks) * 180;
    const rad = (tickAngle * Math.PI) / 180;
    const inner = radius - 16;
    const outer = i % 3 === 0 ? radius - 6 : radius - 10;
    return {
      x1: center.x + inner * Math.cos(rad),
      y1: center.y + inner * Math.sin(rad),
      x2: center.x + outer * Math.cos(rad),
      y2: center.y + outer * Math.sin(rad),
      major: i % 3 === 0,
    };
  });

  const needleRad = (angle * Math.PI) / 180;
  const needleTip = {
    x: center.x + (radius - 22) * Math.cos(needleRad),
    y: center.y + (radius - 22) * Math.sin(needleRad),
  };

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-center">
      <svg
        viewBox="0 0 320 190"
        className="w-full"
        aria-label={`Gauge showing ${value} ${unit}`}
        role="img"
      >
        {/* Semicircle arc */}
        <path
          d="M 20 160 A 140 140 0 0 1 300 160"
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.2}
          strokeWidth={2}
          strokeLinecap="round"
        />
        {/* Tick marks */}
        {tickMarks.map((t, i) => (
          <line
            key={i}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke="currentColor"
            strokeOpacity={0.35}
            strokeWidth={t.major ? 2.5 : 1.5}
            strokeLinecap="round"
          />
        ))}
        {/* Subtle dial rings */}
        <circle
          cx={center.x}
          cy={center.y}
          r={radius - 38}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.08}
          strokeWidth={1}
        />
        {/* Needle */}
        <line
          x1={center.x}
          y1={center.y}
          x2={needleTip.x}
          y2={needleTip.y}
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          className={animating ? "transition-all duration-75 ease-linear" : "transition-all duration-700 ease-out"}
        />
        {/* Pivot */}
        <circle cx={center.x} cy={center.y} r={6} fill="currentColor" />
        {/* Labels */}
        <text
          x={center.x - radius + 14}
          y={center.y + 28}
          className="fill-current text-[11px] font-medium uppercase tracking-wider"
          opacity={0.6}
        >
          After
        </text>
        <text
          x={center.x + radius - 14}
          y={center.y + 28}
          textAnchor="end"
          className="fill-current text-[11px] font-medium uppercase tracking-wider"
          opacity={0.6}
        >
          Baseline
        </text>
      </svg>

      <div className="mt-2 text-center">
        <p className="font-display text-4xl font-semibold text-accent">
          {value === 0 ? "0" : value.toFixed(value < 1 ? 1 : 0)}
          <span className="ml-1.5 text-base font-medium text-primary-foreground/55">{unit}</span>
        </p>
      </div>
    </div>
  );
}

function MeasurePage() {
  const [selected, setSelected] = useState<Metric>(metrics[0]);
  const [value, setValue] = useState<number>(metrics[0].baseline);
  const [phase, setPhase] = useState<"idle" | "animating" | "done">("idle");
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    setValue(selected.baseline);
    setPhase("idle");
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
    }
  }, [selected]);

  const runComparison = () => {
    if (phase === "animating") return;
    setPhase("animating");
    const start = value;
    const end = selected.after;
    const duration = 1000;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      setValue(current);
      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setValue(end);
        setPhase("done");
      }
    };

    animRef.current = requestAnimationFrame(animate);
  };

  const reset = () => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
    }
    setValue(selected.baseline);
    setPhase("idle");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="relative overflow-hidden border-b border-border bg-charcoal text-primary-foreground">
        <div className="dial-ring pointer-events-none absolute -right-40 -top-40 h-[42rem] w-[42rem] opacity-70" />
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-accent">
              <span className="h-px w-8 bg-accent" />
              South Africa · AI implementation
            </p>
            <h1 className="mt-7 font-display text-4xl leading-[1.08] font-semibold sm:text-5xl lg:text-[3.4rem]">
              Measured to the decimal.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/70">
              We set the baseline before touching anything, then track the same numbers after. This is
              what that comparison looks like.
            </p>
          </div>

          {/* Interactive comparison tool */}
          <div className="mt-16 rounded-lg border border-primary-foreground/10 bg-primary-foreground/[0.03] p-6 backdrop-blur-sm sm:p-10">
            {/* Metric tabs */}
            <div className="flex flex-wrap gap-2">
              {metrics.map((m) => (
                <button
                  key={m.key}
                  onClick={() => setSelected(m)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selected.key === m.key
                      ? "bg-accent text-accent-foreground"
                      : "border border-primary-foreground/20 text-primary-foreground/80 hover:border-primary-foreground/40 hover:text-primary-foreground"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Gauge */}
            <div className="mt-12">
              <GaugeDial
                value={value}
                baseline={selected.baseline}
                after={selected.after}
                unit={selected.unit}
                animating={phase === "animating"}
              />
            </div>

            {/* Legend and controls */}
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary-foreground/40" />
                  <span className="text-primary-foreground/70">
                    Baseline: <span className="font-medium text-primary-foreground">{selected.format(selected.baseline)}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-primary-foreground/70">
                    After Truegauge: <span className="font-medium text-primary-foreground">{selected.format(selected.after)}</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {phase === "done" ? (
                  <>
                    <button
                      onClick={reset}
                      className="inline-flex h-11 items-center rounded-md border border-primary-foreground/25 px-5 text-sm font-medium transition-colors hover:border-primary-foreground/50"
                    >
                      Reset
                    </button>
                    <span className="text-sm font-semibold text-accent">
                      {percentageReduction(selected)}% reduction
                    </span>
                  </>
                ) : (
                  <button
                    onClick={runComparison}
                    disabled={phase === "animating"}
                    className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-teal disabled:opacity-60"
                  >
                    Run the comparison
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-primary-foreground/50">
              These are illustrative figures for demonstration. A real engagement starts with a two-week
              audit to set your actual baseline before any build begins —{" "}
              <Link to="/" hash="approach" className="underline underline-offset-2 transition-colors hover:text-primary-foreground/80">
                see Approach
              </Link>
              .
            </p>
          </div>
        </div>
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
