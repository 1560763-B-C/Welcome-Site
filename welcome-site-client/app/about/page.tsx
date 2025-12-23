import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const roadmap = [
  {
    year: "Year 1",
    focus: "Foundational build",
    detail:
      "Build core platform modules—website studio, brochure automation, and buyer chatbot—using a flexible freelancer model.",
  },
  {
    year: "Year 2",
    focus: "Team expansion",
    detail:
      "Hire dedicated web developer, AI engineer, and general manager to scale delivery while the founder transitions to remote oversight.",
  },
  {
    year: "Year 3-5",
    focus: "Managed growth",
    detail:
      "Add design, marketing, support, and sales talent, growing to a ten-person team while broadening AI capabilities and market reach.",
  },
];

const differentiators = [
  "AI-assisted customization will keep builders in control of brand and code once live.",
  "Dynamic, bilingual marketing assets are planned to stay current across channels automatically.",
  "24/7 lead capture and qualification is being engineered through an embedded chatbot.",
  "Canadian data residency and compliance are foundational requirements from day one.",
];

export default function AboutPage() {
  return (
    <main className="relative isolate bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.15),rgba(255,255,255,0.9))] py-20 text-foreground dark:bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.85),rgba(0,0,0,0.9))]">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[460px] max-w-5xl bg-gradient-to-b from-rose-200/40 via-transparent to-transparent blur-3xl dark:from-foregroundRed/20" />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white/90 shadow-sm shadow-rose-500/40 backdrop-blur dark:bg-foregroundRed/20">
            Pre-launch vision
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Building AI-first digital tools for Canadian homebuilders.
          </h1>
          <p className="text-lg text-muted-foreground">
            BuilderStack is a Surrey-based technology company in build mode, creating an integrated platform
            that will let homebuilders manage websites, branding, content, and buyer engagement in one place.
            We operate primarily online with a lean in-person hub that supports pilots, client meetings, and
            collaborative build sessions as we prepare for launch.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/platform">
                Review the roadmap
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="/contact">Discuss a pilot</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-white/40 bg-white/80 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
            <CardHeader>
              <CardTitle>Mission</CardTitle>
              <CardDescription>
                Empower Canadian builders with AI that will streamline operations and amplify every buyer touchpoint.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                We focus on practical automation: surfacing accurate, bilingual content, capturing warm leads,
                and reducing reliance on external agencies for updates once the platform is live.
              </p>
              <p>
                Each feature is being designed with operational resilience in mind, supporting builder teams as they scale across communities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-white/40 bg-white/80 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
            <CardHeader>
              <CardTitle>Home base</CardTitle>
              <CardDescription>11862 98A Ave, Surrey BC V3V 2L3</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Operating from the Greater Vancouver tech corridor gives us proximity to talent, pilot partners, and industry networks as we build.
              </p>
              <p>
                The office runs weekdays with hybrid collaboration, evolving into a dedicated commercial space as the team expands.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Why builders are joining the BuilderStack roadmap</h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            We are combining full creative control with AI automation so builders can move faster without sacrificing brand or compliance once we launch.
          </p>
        </div>
        <div className="grid gap-4 rounded-3xl border border-white/40 bg-white/80 p-6 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="mt-1 size-2 rounded-full bg-foregroundRed" aria-hidden />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Growth roadmap</h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            A phased hiring plan keeps operations lean in Year 1, then layers in permanent roles as customer volume increases.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {roadmap.map((phase) => (
            <Card key={phase.year} className="border-white/40 bg-white/80 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
              <CardHeader>
                <CardTitle>{phase.year}</CardTitle>
                <CardDescription>{phase.focus}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {phase.detail}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
