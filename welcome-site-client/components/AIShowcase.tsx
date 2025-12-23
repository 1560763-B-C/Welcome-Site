"use client";

import { useEffect, useMemo, useState } from "react";
import { Bot, Sparkles, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useContactModal } from "@/components/ContactModalProvider";

const scenarios = [
  {
    label: "Launch copy",
    prompt: "Generate a bilingual landing page for a Surrey townhouse release launching in March.",
    response:
      "Drafting English and French hero copy, amenities highlights, and CTA language aligned to BuilderStack brand guardrails...",
    statLabel: "Copy turnaround",
    statValue: "< 3 min",
  },
  {
    label: "Brochure automation",
    prompt: "Refresh digital brochure content now that Phase 2 townhomes are 70% reserved.",
    response:
      "Updating inventory, pricing badges, and availability messaging while keeping photography pacing consistent across layouts...",
    statLabel: "Manual updates saved",
    statValue: "6 hrs/week",
  },
  {
    label: "Lead triage",
    prompt: "Summarize buyer chat activity and surface warm leads for today’s sales stand-up.",
    response:
      "Highlighting six high-intent buyers requesting closing timelines, plus three prospects ready for virtual walkthrough links...",
    statLabel: "Qualified leads surfaced",
    statValue: "+38%",
  },
];

const insights = [
  "Canadian models tuned for homebuilder terminology and compliance.",
  "Realtime brand guardrails keep AI outputs on spec before publish.",
  "Audit trails document every automation step for approvals.",
];

export default function AIShowcase() {
  const { openModal } = useContactModal();
  const [step, setStep] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  const activeScenario = useMemo(() => scenarios[step % scenarios.length], [step]);
  const fullResponse = activeScenario.response;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStep((prev) => (prev + 1) % scenarios.length);
    }, 9000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    setVisibleCharacters(0);
  }, [activeScenario]);

  useEffect(() => {
    if (visibleCharacters >= fullResponse.length) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setVisibleCharacters((prev) => Math.min(prev + 2, fullResponse.length));
    }, 35);

    return () => window.clearTimeout(timeout);
  }, [visibleCharacters, fullResponse]);

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="relative overflow-hidden border-white/30 bg-gradient-to-br from-rose-500/90 via-foregroundRed/90 to-amber-400/80 text-white shadow-2xl">
        <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-white/20 blur-3xl opacity-60" aria-hidden />
        <CardHeader className="relative space-y-2 pb-0">
          <CardTitle className="flex items-center gap-2 text-white/90">
            <Sparkles className="h-5 w-5" aria-hidden />
            AI collaboration preview
          </CardTitle>
          <CardDescription className="text-white/70">
            Sneak peek of how BuilderStack’s planned copilots will assist marketing and sales teams during pilots.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative mt-6 space-y-6 p-0">
          <div className="space-y-3 rounded-3xl bg-black/20 p-6 shadow-inner shadow-black/30">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-wide text-white/80">
              {activeScenario.label}
            </div>
            <div className="flex items-start gap-3 text-sm">
              <div className="flex size-8 items-center justify-center rounded-full bg-white/20">
                <User className="h-4 w-4" aria-hidden />
              </div>
              <p className="text-white/90">{activeScenario.prompt}</p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 text-sm text-white/80 shadow-lg shadow-black/40">
              <div className="flex size-8 items-center justify-center rounded-full bg-white/15">
                <Bot className="h-4 w-4" aria-hidden />
              </div>
              <p className="text-white/90">
                {fullResponse.slice(0, visibleCharacters)}
                {visibleCharacters < fullResponse.length ? (
                  <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-white/70" aria-hidden />
                ) : null}
              </p>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl bg-white/10 p-4 text-sm text-white/80 shadow-inner shadow-black/30 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-black/30 p-4 text-center">
              <p className="text-xs uppercase tracking-wide text-white/60">{activeScenario.statLabel}</p>
              <p className="mt-1 text-2xl font-semibold text-white">{activeScenario.statValue}</p>
            </div>
            {insights.map((insight) => (
              <div key={insight} className="rounded-2xl bg-black/20 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Insight</p>
                <p className="mt-2 text-white/80">{insight}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-white/30 bg-white/80 shadow-xl shadow-rose-200/50 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
        <CardHeader>
          <CardTitle>How pilots will leverage AI</CardTitle>
          <CardDescription>
            BuilderStack’s roadmap blends deterministic workflows with generative models so teams supervise every automation before publishing.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <div className="rounded-2xl border border-foregroundRed/10 bg-white/70 p-4 shadow-sm shadow-rose-200/40 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-200/70 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-wide text-foregroundRed">Pilot controls</p>
            <p className="mt-2">
              Every automation step ships with human-in-the-loop approval states, version history, and audit logs tuned for regulator reviews.
            </p>
          </div>
          <div className="rounded-2xl border border-foregroundRed/10 bg-white/70 p-4 shadow-sm shadow-rose-200/40 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-200/70 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-wide text-foregroundRed">Model strategy</p>
            <p className="mt-2">
              Proprietary prompts and grounding data keep AI outputs aligned with regional bylaws, bilingual tone, and builder voice.
            </p>
          </div>
          <div className="rounded-2xl border border-foregroundRed/10 bg-white/70 p-4 shadow-sm shadow-rose-200/40 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-200/70 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-wide text-foregroundRed">Pilot onboarding</p>
            <p className="mt-2">
              We co-create launch playbooks with partner teams, capturing data requirements, review cadences, and escalation paths before GA.
            </p>
          </div>
          <Button size="sm" className="bg-foregroundRed text-white hover:bg-foregroundRed/90" onClick={openModal}>
            Explore AI pilot access
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
