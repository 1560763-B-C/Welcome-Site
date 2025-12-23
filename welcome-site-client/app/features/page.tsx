import { CheckCircle2, Globe2, LayoutDashboard, MessageSquare } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const featureSets = [
  {
    title: "AI-assisted site builder",
    description:
      "Planned to launch high-performing Next.js sites with drag-and-drop sections, guarded code injection, and responsive defaults tuned for conversions.",
    bullets: [
      "Template library curated for residential developments (in design).",
      "Secure HTML, CSS, and JavaScript embeds with automated linting (roadmapped).",
      "Real-time brand control spanning colours, typography, and components (prototype).",
    ],
    icon: LayoutDashboard,
  },
  {
    title: "Dynamic brochure studio",
    description:
      "Will produce print-ready or digital brochures instantly, pulling live data for pricing, floor plans, incentives, and timelines.",
    bullets: [
      "Update once, syndicate across brochures, landing pages, and email kits (planned automation).",
      "Generate polished PDF exports alongside web-friendly versions (beta target).",
      "Maintain brand fidelity with reusable layouts and asset libraries (pattern library in build).",
    ],
    icon: Globe2,
  },
  {
    title: "AI content generation",
    description:
      "Will create SEO-ready property narratives, FAQs, and campaign messaging in English and French without waiting on agencies.",
    bullets: [
      "Guided prompts tuned for builder workflows and zoning terminology (UX testing).",
      "Adjust tone to match each community’s brand voice instantly (AI configuration).",
      "Automated internal reviews to flag compliance risks before publishing (policy engine design).",
    ],
    icon: CheckCircle2,
  },
  {
    title: "Conversational buyer engagement",
    description:
      "Will embed a 24/7 chatbot that qualifies leads, surfaces tailored information, and syncs context back to sales teams.",
    bullets: [
      "Capture buyer preferences on budget, timelines, and must-have features (conversation design underway).",
      "Route warm leads to the right team member with CRM integrations (integration roadmap).",
      "Provide instant answers from builder-approved knowledge bases (knowledge base tooling).",
    ],
    icon: MessageSquare,
  },
];

const automationHighlights = [
  {
    title: "Personalized experience",
    copy:
      "Planned AI insights will analyze on-page behaviour to recommend layout tweaks—like surfacing floor plans for engaged prospects.",
  },
  {
    title: "Continuous optimization",
    copy:
      "Predictive analytics are being developed to flag underperforming sections and suggest data-backed call-to-action placements.",
  },
  {
    title: "Compliance ready",
    copy:
      "Canadian data residency, audit trails, and secure permissions are core launch requirements to protect builder and buyer information.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="relative isolate bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.15),rgba(255,255,255,0.92))] py-20 text-foreground dark:bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.85),rgba(0,0,0,0.9))]">
      <div className="absolute inset-y-0 right-0 -z-10 h-full w-1/2 bg-gradient-to-l from-rose-200/40 via-transparent to-transparent blur-3xl dark:from-foregroundRed/20" />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white/90 shadow-sm shadow-rose-500/40 backdrop-blur dark:bg-foregroundRed/20">
            Roadmapped capabilities
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Roadmapped automation keeps builders in the driver’s seat.
          </h1>
          <p className="text-lg text-muted-foreground">
            From first impression to signed contract, BuilderStack is being engineered to connect every step with intelligent workflows that reduce manual handoffs and accelerate launch timelines.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {featureSets.map((feature) => (
            <Card
              key={feature.title}
              className="border-white/40 bg-white/80 p-6 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60"
            >
              <CardHeader className="flex flex-row items-start justify-between gap-4 p-0">
                <div className="space-y-2">
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </div>
                <feature.icon className="h-10 w-10 text-foregroundRed" aria-hidden />
              </CardHeader>
              <CardContent className="mt-6 space-y-3 p-0 text-sm text-muted-foreground">
                {feature.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 size-2 rounded-full bg-foregroundRed" aria-hidden />
                    <p>{bullet}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Applied intelligence everywhere</h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            BuilderStack’s AI services go beyond copywriting—they watch performance, adapt experiences, and safeguard compliance across every touchpoint.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {automationHighlights.map((item) => (
            <Card
              key={item.title}
              className="border-white/40 bg-white/80 backdrop-blur shadow-lg shadow-rose-200/30 dark:border-foregroundRed/20 dark:bg-black/60"
            >
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {item.copy}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl rounded-3xl border border-white/40 bg-white/80 px-6 py-16 shadow-xl shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight">Projected subscription model designed for measurable ROI</h2>
            <p className="text-lg text-muted-foreground">
              Flexible onboarding with pilot tiers, predictable monthly pricing, and premium AI add-ons will keep teams agile while scaling into new communities.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-foregroundRed" aria-hidden />
                Core plan modeled at $500 per month or $6,000 to $8,400 annually depending on deployment scale.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-foregroundRed" aria-hidden />
                Premium modules will unlock deeper AI analytics, advanced integrations, and enterprise support.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-foregroundRed" aria-hidden />
                All tiers include Canadian data residency, continuous updates, and a dedicated success manager.
              </li>
            </ul>
          </div>
          <Card className="border-foregroundRed/10 bg-gradient-to-br from-rose-100 via-rose-200 to-rose-100 p-6 shadow-lg shadow-rose-300/40 dark:from-foregroundRed/10 dark:via-foregroundRed/5 dark:to-foregroundRed/10">
            <CardHeader className="border-b border-dashed border-foregroundRed/20 pb-4">
              <CardTitle>Planned launch sprint outline</CardTitle>
              <CardDescription>Every onboarding is expected to follow a 90-day path.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pt-4 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Phase 1:</span> Discovery and brand intake with data migration.
              </p>
              <p>
                <span className="font-medium text-foreground">Phase 2:</span> AI tuning, template customization, and pilot launches.
              </p>
              <p>
                <span className="font-medium text-foreground">Phase 3:</span> Enablement, KPI tracking, and go-live support.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
