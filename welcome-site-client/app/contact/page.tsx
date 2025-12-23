"use client";

import { Brain, Mail, MapPin, Phone } from "lucide-react";

import { useContactModal } from "@/components/ContactModalProvider";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const contactDetails = [
  {
    title: "Email",
    value: "hardawindersingh08@gmail.com",
    icon: Mail,
    href: "mailto:hardawindersingh08@gmail.com",
  },
  {
    title: "Phone",
    value: "+1 (604) 729-2663",
    icon: Phone,
    href: "tel:+16047292663",
  },
  {
    title: "Office",
    value: "11862 98A Ave, Surrey BC V3V 2L3",
    icon: MapPin,
  },
];

const pilotHighlights = [
  {
    title: "AI copilots ready",
    description: "Preview automated brochure updates, bilingual copy generation, and lead triage during your pilot onboarding.",
  },
  {
    title: "Launch playbooks",
    description: "Co-design standard operating procedures and approval flows tailored to your communities before general availability.",
  },
  {
    title: "Analytics insights",
    description: "Roadmapped dashboards surface buyer engagement so sales teams act on high-intent signals instantly.",
  },
];

export default function ContactPage() {
  const { openModal } = useContactModal();

  return (
    <main className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.2),rgba(255,255,255,0.92))] py-20 text-foreground dark:bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.85),rgba(8,12,24,0.95))]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.25),transparent_60%)] bg-animated" aria-hidden />
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[420px] max-w-4xl bg-gradient-to-b from-rose-300/40 via-transparent to-transparent blur-3xl" />

      <div className="pointer-events-none absolute -left-24 top-32 hidden h-80 w-80 rounded-full bg-gradient-to-br from-rose-400/40 via-amber-200/30 to-sky-200/20 blur-3xl sm:block" aria-hidden />
      <div className="pointer-events-none absolute -right-24 top-72 hidden h-72 w-72 rounded-full bg-gradient-to-br from-rose-400/40 via-amber-200/30 to-sky-200/20 blur-3xl md:block" aria-hidden />

      <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 text-center animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
        <div className="mx-auto max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-foregroundRed/10 px-4 py-1 text-sm font-medium text-foregroundRed">
            Contact BuilderStack
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Let’s shape your next AI-assisted community launch.
          </h1>
          <p className="text-lg text-muted-foreground">
            Reach out and we’ll tailor a BuilderStack pilot around your community pipeline—from AI-powered content production to automated buyer engagement and analytics.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" onClick={openModal}>
            Contact us
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="bg-white/20 text-foreground hover:bg-white/30 dark:text-white"
            asChild
          >
            <a href="mailto:hardawindersingh08@gmail.com">Email Hardawinder</a>
          </Button>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-5xl px-6 animate-in fade-in-0 slide-in-from-bottom-8 duration-700 delay-150">
        <div className="grid gap-6 md:grid-cols-3">
          {contactDetails.map((item) => (
            <Card
              key={item.title}
              className="group/card border-white/40 bg-white/80 p-6 shadow-lg shadow-rose-200/30 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-rose-300/60 dark:border-foregroundRed/20 dark:bg-black/60"
            >
              <CardHeader className="space-y-2 p-0 text-left">
                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                  <item.icon className="h-5 w-5 text-foregroundRed" aria-hidden />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 text-sm text-muted-foreground">
                {item.href ? (
                  <a href={item.href} className="font-medium text-foreground transition hover:text-foregroundRed">
                    {item.value}
                  </a>
                ) : (
                  <span className="font-medium text-foreground">{item.value}</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-5xl space-y-10 px-6 animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-300">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="border-white/30 bg-white/85 p-6 shadow-xl shadow-rose-200/40 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
            <CardHeader className="space-y-2 p-0">
              <CardTitle>How we collaborate</CardTitle>
              <CardDescription>
                Book a consultation with Hardawinder Singh to align your pilot timeline, AI automation priorities, and launch KPIs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-0 text-sm text-muted-foreground">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-foregroundRed" aria-hidden />
                  <p>Discovery workshop to map your community pipeline, team roles, and required approvals.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-foregroundRed" aria-hidden />
                  <p>AI enablement plan covering brochure automation, bilingual content guardrails, and lead triage workflows.</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-foregroundRed" aria-hidden />
                  <p>Weekly pilot syncs to review analytics, iterate on prompts, and prioritize new roadmap items.</p>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" onClick={openModal}>
                  Schedule a pilot call
                </Button>
                <Button size="sm" variant="ghost" className="bg-white/20 text-foreground hover:bg-white/30" asChild>
                  <a href="tel:+16047292663">Call 604·729·2663</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-white/40 bg-gradient-to-br from-foregroundRed/90 via-rose-600/90 to-amber-400/80 p-6 text-white shadow-2xl">
            <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/20 blur-3xl opacity-50" aria-hidden />
            <CardHeader className="relative space-y-2 p-0">
              <CardTitle className="flex items-center gap-2 text-white">
                <Brain className="h-5 w-5" aria-hidden />
                AI concierge preview
              </CardTitle>
              <CardDescription className="text-white/80">
                See how BuilderStack’s copilots will streamline campaign refreshes, approvals, and buyer nurturing during your pilot.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative mt-6 grid gap-4 p-0 text-sm">
              {pilotHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-3xl bg-white/15 p-4 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:bg-white/25"
                >
                  <p className="text-xs uppercase tracking-wide text-white/70">{highlight.title}</p>
                  <p className="mt-2 text-white/90">{highlight.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
