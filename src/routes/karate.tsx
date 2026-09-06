import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Trophy,
  ShieldCheck,
  Users,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import logo from "@/assets/karate-logo.png.asset.json";
import heroImg from "@/assets/karate-hero.jpg";
import kidsImg from "@/assets/karate-kids.jpg";
import adultsImg from "@/assets/karate-adults.jpg";
import dojoImg from "@/assets/karate-dojo.jpg";

const TITLE = "Karate Samurai Bergvliet | Traditional Karate in Cape Town";
const DESCRIPTION =
  "Traditional Shukokai karate for kids and adults in Bergvliet, Cape Town. Confidence, discipline, focus and real self-defence — claim your free trial week.";

export const Route = createFileRoute("/karate")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KaratePage,
});

const WHATSAPP = "https://wa.me/27847113945";
const PHONE_LABEL = "084 711 3945";
const EMAIL = "karatesamuraibergvliet@gmail.com";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#classes", label: "Classes" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "5+", label: "Years training Bergvliet" },
  { value: "KSiSAS", label: "Affiliated federation" },
  { value: "All ages", label: "Kids & adult classes" },
  { value: "141+", label: "Followers on Facebook" },
];

const values = [
  "Confidence",
  "Discipline",
  "Respect",
  "Focus",
  "Fitness",
  "Self-defence",
];

const classes = [
  {
    name: "Kids Karate",
    icon: Sparkles,
    image: kidsImg,
    copy: "Confidence, discipline, focus and fun — all in one class. A strong start for every child, whatever their belt.",
  },
  {
    name: "Adults Karate",
    icon: Users,
    image: adultsImg,
    copy: "Fitness, discipline and practical self-defence — all levels welcome, from first-timers to advanced belts.",
  },
  {
    name: "Black & Brown Belt Course",
    icon: ShieldCheck,
    image: dojoImg,
    copy: "An advanced course for students progressing toward their black belt, hosted in Claremont.",
  },
];

const schedule = [
  { day: "Monday", morning: "08:30", afternoon: "14:30" },
  { day: "Tuesday", morning: "To confirm", afternoon: "To confirm" },
  { day: "Wednesday", morning: "To confirm", afternoon: "To confirm" },
  { day: "Thursday", morning: "To confirm", afternoon: "To confirm" },
  { day: "Friday", morning: "To confirm", afternoon: "To confirm" },
  { day: "Saturday", morning: "To confirm", afternoon: "To confirm" },
];

const achievements = [
  {
    title: "KSiSAS South Championships",
    copy: "Our team competed at the Kimura Shukokai International South Africa Championships, hosted at Wynberg Military Base.",
  },
  {
    title: "Women's Only Tournament",
    copy: "Congratulations to our ladies' team, including a gold medal for Louise Duffett, competing on Women's Day.",
  },
  {
    title: "Black & Brown Belt Course",
    copy: "Students joined the Black & Brown Belt Course in Claremont, sharpening technique ahead of grading.",
  },
];

function KaratePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dojo-ink text-dojo-bone">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-dojo-bone/10 bg-dojo-ink/90 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Karate Samurai Bergvliet emblem"
              width={48}
              height={48}
              className="h-11 w-11 rounded-full bg-dojo-bone object-contain"
            />
            <span className="font-display text-sm font-semibold uppercase leading-tight tracking-[0.18em]">
              Karate Samurai
              <span className="block text-[11px] font-normal tracking-[0.3em] text-dojo-gold">
                Bergvliet
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-dojo-bone/70 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-dojo-bone"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 items-center rounded-md bg-dojo-crimson px-4 text-sm font-semibold text-dojo-bone transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Free trial week
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-dojo-bone/20 md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-dojo-bone/10 px-6 py-4 md:hidden">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-dojo-bone/80"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center rounded-md bg-dojo-crimson px-4 text-sm font-semibold"
                >
                  Free trial week
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Students training at Karate Samurai Bergvliet"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dojo-ink/85 via-dojo-ink/80 to-dojo-ink" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-dojo-gold">
            <span className="h-px w-10 bg-dojo-gold" />
            Bergvliet, Cape Town · Est. 2020
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
            Discipline today.
            <span className="block text-dojo-crimson">Champion tomorrow.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-dojo-bone/75">
            Traditional karate for kids and adults in Bergvliet, Cape Town —
            building confidence, discipline, focus and real self-defence skills,
            for every age and belt level.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-dojo-crimson px-7 text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-90"
            >
              Claim your free trial week
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-dojo-bone/25 px-7 text-sm font-medium transition-colors hover:border-dojo-bone/60"
            >
              <Phone className="h-4 w-4" /> WhatsApp {PHONE_LABEL}
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-dojo-bone/10 pt-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-semibold text-dojo-gold">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-dojo-bone/55">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Welcome */}
      <section className="bg-dojo-bone py-20 text-dojo-ink sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dojo-crimson">
              Welcome to your dojo
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-tight sm:text-4xl">
              Train with us in Bergvliet
            </h2>
            <p className="mt-5 text-base leading-relaxed text-dojo-ink/75">
              We invite you to join our dojo and experience the numerous benefits
              that karate has to offer. Since 2020, Karate Samurai Bergvliet has
              trained students of all ages in traditional Shukokai karate —
              building confidence, discipline, respect, fitness and practical
              self-defence, on and off the mat.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-semibold uppercase">
                  Kids Karate
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dojo-ink/70">
                  Give your child a strong start — confidence, discipline, focus
                  and fun, all in one class.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold uppercase">
                  Adults &amp; Self-Defence
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dojo-ink/70">
                  Fitness, respect and self-defence skills. Every experience
                  level is welcome, from first-timers to advanced belts.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={kidsImg}
              alt="Children in a kids karate class"
              loading="lazy"
              width={1200}
              height={912}
              className="h-64 w-full rounded-lg object-cover sm:h-80"
            />
            <img
              src={adultsImg}
              alt="Adults practising self-defence drills"
              loading="lazy"
              width={1200}
              height={912}
              className="mt-8 h-64 w-full rounded-lg object-cover sm:h-80"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dojo-gold">
            About us
          </p>
          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold uppercase leading-tight sm:text-4xl">
                Our story
              </h2>
              <p className="mt-5 text-base leading-relaxed text-dojo-bone/70">
                Karate Samurai Bergvliet has been part of the Bergvliet community
                since September 2020, teaching traditional Shukokai karate to
                students of all ages from our dojo on Bergvliet Main Road.
              </p>
              <h3 className="mt-10 font-display text-2xl font-semibold uppercase">
                Meet your instructor
              </h3>
              <p className="mt-4 text-base leading-relaxed text-dojo-bone/70">
                Our dojo has been led by our Master Instructor since 2020,
                training students in the Kimura Shukokai style with a firm focus
                on discipline, technique and respect.
              </p>
              <h3 className="mt-10 font-display text-2xl font-semibold uppercase">
                What Kime means to us
              </h3>
              <p className="mt-4 text-base leading-relaxed text-dojo-bone/70">
                Kime — focused power and commitment in every technique — is at the
                heart of how we train. Every class builds toward it, one
                repetition at a time.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {values.map((v) => (
                  <li
                    key={v}
                    className="rounded-full border border-dojo-bone/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-dojo-bone/75"
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={dojoImg}
                alt="The dojo training hall"
                loading="lazy"
                width={1200}
                height={912}
                className="h-80 w-full rounded-lg object-cover lg:h-[28rem]"
              />
              <div className="mt-6 rounded-lg border border-dojo-bone/15 bg-dojo-slate p-6">
                <p className="text-sm leading-relaxed text-dojo-bone/75">
                  We proudly train and compete under Kimura Shukokai
                  International South Africa (KSiSAS), taking our students to
                  national tournaments throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="bg-dojo-slate py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dojo-gold">
            Train with us
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase sm:text-4xl">
            Classes &amp; schedule
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {classes.map((c) => (
              <article
                key={c.name}
                className="overflow-hidden rounded-lg border border-dojo-bone/12 bg-dojo-ink"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="h-44 w-full object-cover"
                />
                <div className="p-6">
                  <c.icon className="h-5 w-5 text-dojo-crimson" />
                  <h3 className="mt-4 font-display text-lg font-semibold uppercase">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dojo-bone/70">
                    {c.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-dojo-bone/12">
            <table className="w-full text-left text-sm">
              <thead className="bg-dojo-ink text-[11px] uppercase tracking-[0.16em] text-dojo-bone/55">
                <tr>
                  <th className="px-5 py-4 font-medium">Day</th>
                  <th className="px-5 py-4 font-medium">Morning class</th>
                  <th className="px-5 py-4 font-medium">Afternoon class</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row) => (
                  <tr key={row.day} className="border-t border-dojo-bone/10">
                    <td className="px-5 py-4 font-medium">{row.day}</td>
                    <td className="px-5 py-4 text-dojo-bone/70">{row.morning}</td>
                    <td className="px-5 py-4 text-dojo-bone/70">
                      {row.afternoon}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-dojo-bone/50">
            Class times shown are the 08:30 and 14:30 sessions. Send us the exact
            days for each session and we will complete the table.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 rounded-lg border border-dojo-crimson/40 bg-dojo-ink p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold uppercase">
                1 week free trial
              </h3>
              <p className="mt-2 text-sm text-dojo-bone/70">
                Try two sessions on us — no obligation. Morning class 08:30,
                afternoon class 14:30.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center rounded-md bg-dojo-crimson px-6 text-sm font-semibold uppercase tracking-wide"
              >
                WhatsApp us
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex h-11 items-center rounded-md border border-dojo-bone/25 px-6 text-sm font-medium"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dojo-gold">
            Our achievements
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold uppercase leading-tight sm:text-4xl">
            Our students train hard and it shows
          </h2>
          <p className="mt-4 max-w-xl text-base text-dojo-bone/70">
            From local belt courses to national championships.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {achievements.map((a) => (
              <article
                key={a.title}
                className="rounded-lg border border-dojo-bone/12 bg-dojo-slate p-6"
              >
                <Trophy className="h-5 w-5 text-dojo-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold uppercase">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dojo-bone/70">
                  {a.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-dojo-bone py-20 text-dojo-ink sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dojo-crimson">
            Visit or contact us
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold uppercase sm:text-4xl">
            Find the dojo
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-dojo-crimson" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dojo-ink/50">
                    Address
                  </p>
                  <p className="mt-1 text-dojo-ink/80">
                    151 Bergvliet Main Rd, Bergvliet, Cape Town, 7945
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-dojo-crimson" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dojo-ink/50">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+27847113945"
                    className="mt-1 block text-dojo-ink/80 underline-offset-4 hover:underline"
                  >
                    {PHONE_LABEL}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-dojo-crimson" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dojo-ink/50">
                    Email
                  </p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 block break-all text-dojo-ink/80 underline-offset-4 hover:underline"
                  >
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-dojo-crimson" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dojo-ink/50">
                    Opening hours
                  </p>
                  <p className="mt-1 text-dojo-ink/60">
                    To be confirmed — send us your class hours and we will add
                    them.
                  </p>
                </div>
              </li>
            </ul>

            <div className="overflow-hidden rounded-lg border border-dojo-ink/10">
              <iframe
                title="Map of 151 Bergvliet Main Road, Cape Town"
                src="https://www.google.com/maps?q=151+Bergvliet+Main+Rd,+Bergvliet,+Cape+Town,+7945&output=embed"
                loading="lazy"
                className="h-80 w-full border-0"
              />
            </div>
          </div>

          <div className="mt-14 max-w-2xl">
            <h3 className="font-display text-2xl font-semibold uppercase">
              Send us a message
            </h3>
            <p className="mt-3 text-sm text-dojo-ink/60">
              Fill this in and it opens a WhatsApp message ready to send.
            </p>
            <MessageForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-dojo-bone/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center text-xs text-dojo-bone/50">
          <img
            src={logo.url}
            alt="Karate Samurai Bergvliet emblem"
            loading="lazy"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full bg-dojo-bone object-contain"
          />
          <p>Karate Samurai Bergvliet · 151 Bergvliet Main Rd, Cape Town</p>
          <p>Kimura Shukokai International South Africa (KSiSAS) affiliated</p>
        </div>
      </footer>
    </div>
  );
}

function MessageForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const text = encodeURIComponent(
    `Hi Karate Samurai Bergvliet, my name is ${name || "[name]"} (${
      phone || "[phone]"
    }). ${message}`
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.open(`${WHATSAPP}?text=${text}`, "_blank", "noreferrer");
      }}
      className="mt-6 space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-dojo-ink/50">
          Name
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 h-11 w-full rounded-md border border-dojo-ink/15 bg-card px-3 text-sm font-normal normal-case tracking-normal text-dojo-ink outline-none focus:border-dojo-crimson"
          />
        </label>
        <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-dojo-ink/50">
          Phone
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-2 h-11 w-full rounded-md border border-dojo-ink/15 bg-card px-3 text-sm font-normal normal-case tracking-normal text-dojo-ink outline-none focus:border-dojo-crimson"
          />
        </label>
      </div>
      <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-dojo-ink/50">
        Message
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full rounded-md border border-dojo-ink/15 bg-card px-3 py-2 text-sm font-normal normal-case tracking-normal text-dojo-ink outline-none focus:border-dojo-crimson"
        />
      </label>
      <button
        type="submit"
        className="inline-flex h-11 items-center rounded-md bg-dojo-crimson px-6 text-sm font-semibold uppercase tracking-wide text-dojo-bone transition-opacity hover:opacity-90"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
