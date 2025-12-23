"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useContactModal } from "@/components/ContactModalProvider";
import AIShowcase from "@/components/AIShowcase";

const highlights = [
  {
    label: "Pilot status",
    value: "Private beta · 2026",
    description: "Inviting Canadian builders to co-design the launch release.",
  },
  {
    label: "Focus communities",
    value: "BC · AB · ON",
    description: "Target markets for first-wave go-lives and learning loops.",
  },
  {
    label: "Core modules",
    value: "4",
    description: "Website studio, AI content, digital brochures, buyer chat.",
  },
];

const featureGrid = [
  {
    title: "Unified marketing workspace",
    copy:
      "Design and governance controls under development will centralize publishing, permissions, and content scheduling.",
  },
  {
    title: "Buyer journey tracking",
    copy:
      "Roadmapped analytics will surface engagement signals and automate CRM handoffs for qualified leads.",
  },
  {
    title: "AI-assisted localization",
    copy:
      "Bilingual copy generation is being built to respect builder tone while covering English and French requirements.",
  },
  {
    title: "No-code personalization",
    copy:
      "Guided audience targeting and variant testing will help teams spin up tailored community experiences without tickets.",
  },
];

export default function Home() {
  const { openModal } = useContactModal();

  return (
    <main className="relative isolate flex flex-col gap-24 bg-transparent py-24 text-foreground">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[560px] max-w-5xl bg-gradient-to-b from-rose-200/40 via-transparent to-transparent blur-3xl dark:from-foregroundRed/20" />

      {/* Hero */}
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white/90 shadow-sm shadow-rose-500/50 backdrop-blur dark:bg-foregroundRed/20">
              <Sparkles className="h-4 w-4" />
              BuilderStack · Pre-launch build
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              We’re building the AI platform that will elevate every buyer touchpoint.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              BuilderStack is in active development, bringing together content automation, branded web experiences, and actionable buyer insights for Canadian homebuilders. Join the roadmap to shape what ships first.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/platform">
                  View the product roadmap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="bg-white/10 text-foreground shadow-inner shadow-rose-200/40 transition hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-rose-200/60"
                onClick={openModal}
              >
                Join the pilot waitlist
              </Button>
            </div>
          </div>
          <Card className="float-slow w-full max-w-md border-white/40 bg-white/80 p-6 shadow-xl shadow-rose-300/30 backdrop-blur dark:border-foregroundRed/30 dark:bg-black/70">
            <CardHeader className="space-y-1 p-0">
              <CardTitle className="text-xl">What we’re building first</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Foundational modules are underway with builders providing feedback at each milestone.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-6 grid gap-4 p-0 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-foregroundRed" />
                Automated brochure and listing generation (beta)
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-foregroundRed" />
                Approval workflows tailored to builder orgs (design in progress)
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-foregroundRed" />
                Real-time brand guardrails as you edit (prototype)
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60 sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="space-y-2 transition will-change-transform hover:-translate-y-1 hover:text-foreground"
            >
              <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
              <p className="text-3xl font-semibold">{item.value}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 animate-in fade-in-0 slide-in-from-bottom-8 duration-700 delay-100">
        <AIShowcase />
      </section>

      {/* Product pillars */}
      <section className="mx-auto w-full max-w-6xl space-y-10 px-6 animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-200">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-3xl font-semibold tracking-tight">Roadmapped pillars for smarter community launches</h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground lg:mx-0">
            Each capability is being validated with pilot partners to ensure the platform removes manual busywork and elevates every release cycle.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureGrid.map((feature) => (
            <Card
              key={feature.title}
              className="border-white/40 bg-white/80 shadow-lg shadow-rose-200/30 backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-rose-300/50 dark:border-foregroundRed/20 dark:bg-black/60"
            >
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {feature.copy}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Workflow snapshot */}
      <section className="mx-auto w-full max-w-6xl rounded-3xl border border-white/40 bg-white/80 px-6 py-16 shadow-xl shadow-rose-200/30 backdrop-blur animate-in fade-in-0 slide-in-from-bottom-12 duration-700 delay-300 dark:border-foregroundRed/20 dark:bg-black/60">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">Workflow concepts piloted with early advisors</h2>
            <p className="text-lg text-muted-foreground">
              We are codifying standard operating procedures alongside launch partners—from intake forms to stage-gate approvals—so every community rollout stays on track once live.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-foregroundRed" />
                Centralized asset library shared across sales, marketing, and customer care (in build).
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-foregroundRed" />
                Guided intake capturing amenities, lot releases, pricing, and timelines (UX testing now).
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-foregroundRed" />
                Automated reminders to keep approvals moving without endless email follow-ups (pilot automation).
              </li>
            </ul>
          </div>
          <Card className="border-foregroundRed/10 bg-gradient-to-br from-rose-100 via-rose-200 to-rose-100 p-6 shadow-lg shadow-rose-300/40 dark:from-foregroundRed/10 dark:via-foregroundRed/5 dark:to-foregroundRed/10">
            <CardHeader className="border-b border-dashed border-foregroundRed/20 pb-4">
              <CardTitle>Workflow prototype</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-white/80 px-4 py-3 text-foreground dark:bg-black/40">
                <span className="text-xs text-muted-foreground">Marketing launch · Prototype</span>
              </div>
              <div className="space-y-2 rounded-xl bg-white/60 p-4 text-muted-foreground dark:bg-black/40">
                <p className="flex items-center justify-between text-xs font-medium uppercase tracking-wide text-foreground">
                  Stage gates (concept)
                  <span>6 Tasks</span>
                </p>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <span>Content localization</span>
                    <span className="text-xs text-foreground">Mock</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Collateral review</span>
                    <span className="text-xs text-foreground">Mock</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>MLS syndication</span>
                    <span className="text-xs text-foreground">Mock</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white/60 p-4 text-muted-foreground dark:bg-black/40">
                <p className="text-xs font-medium uppercase tracking-wide text-foreground">Team pulse</p>
                <p className="mt-2 text-sm">"BuilderStack’s planned automation will help us replace scattered tools with one workspace."</p>
                <p className="mt-2 text-xs text-muted-foreground">— Prospective pilot partner</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to action */}
      <section className="mx-auto w-full max-w-6xl px-6 animate-in fade-in-0 slide-in-from-bottom-14 duration-700 delay-500">
        <Card className="overflow-hidden border-foregroundRed/10 bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500 text-white shadow-2xl">
          <CardContent className="flex flex-col gap-6 px-8 py-10 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight">Help shape BuilderStack’s launch</h2>
              <p className="max-w-xl text-base text-white/80">
                We are partnering with forward-thinking builders to co-design the platform. Share your needs, and we’ll prioritize the automation that delivers immediate impact.
              </p>
            </div>
            <div className="flex flex-col gap-3 text-foreground md:w-64">
              <Button variant="secondary" size="lg" onClick={openModal}>
                Request a pilot briefing
              </Button>
              <Button variant="ghost" size="lg" className="bg-white/10 text-white hover:bg-white/20" asChild>
                <Link href="/platform">Review current roadmap</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
