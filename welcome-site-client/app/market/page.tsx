import { Building2, Globe, LineChart, MapPin } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const marketStats = [
  {
    figure: "$3.8B",
    label: "Canadian proptech value in 2024",
    source: "Market Research Future",
  },
  {
    figure: "17.36%",
    label: "Projected CAGR through 2035",
    source: "Market Research Future",
  },
  {
    figure: "51,053",
    label: "Canadian homebuilder businesses",
    source: "IBISWorld, 2025",
  },
  {
    figure: "70.56%",
    label: "Residential construction share from new builds",
    source: "Mordor Intelligence, 2024",
  },
];

const regionalFocus = [
  {
    region: "British Columbia",
    insight:
      "Surrey anchors launch efforts with proximity to innovation hubs and long-term infrastructure investment signaled by the Major Projects Inventory.",
  },
  {
    region: "Alberta",
    insight:
      "Housing starts forecast to rise over 20% year-over-year, providing fertile ground for streamlined marketing operations in fast-growing municipalities.",
  },
  {
    region: "Ontario",
    insight:
      "High-density developments dominate, with Toronto condo starts projected to climb 112% — ideal for scalable digital showcase tooling.",
  },
];

const marketGaps = [
  {
    title: "Limited customization",
    description:
      "Builders rely on generic templates and external agencies, leading to slow updates and inconsistent brand execution.",
  },
  {
    title: "Manual marketing",
    description:
      "Teams spend valuable time rewriting property descriptions and brochures instead of focusing on strategy and sales.",
  },
  {
    title: "Lead engagement gaps",
    description:
      "Most builders lack automated tools to qualify buyers after hours, leaving warm leads unattended.",
  },
  {
    title: "Data sovereignty",
    description:
      "Global SaaS platforms often store data outside Canada, creating compliance friction for domestic developers.",
  },
];

export default function MarketPage() {
  return (
    <main className="relative isolate bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.12),rgba(255,255,255,0.94))] py-20 text-foreground dark:bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.85),rgba(0,0,0,0.9))]">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[420px] max-w-4xl bg-gradient-to-b from-rose-200/40 via-transparent to-transparent blur-3xl dark:from-foregroundRed/20" />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white/90 shadow-sm shadow-rose-500/40 backdrop-blur dark:bg-foregroundRed/20">
            Industry outlook
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Proptech momentum across Canada is accelerating.
          </h1>
          <p className="text-lg text-muted-foreground">
            BuilderStack is aligning its launch with builders modernizing buyer experiences as the proptech market climbs toward a projected $22.1B valuation by 2035.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketStats.map((stat) => (
            <Card
              key={stat.figure}
              className="border-white/40 bg-white/80 p-6 text-center shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60"
            >
              <CardHeader className="space-y-2 p-0">
                <CardTitle className="text-3xl font-semibold">{stat.figure}</CardTitle>
                <CardDescription>{stat.label}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 text-xs uppercase tracking-wide text-muted-foreground">
                {stat.source}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Regional launch strategy</h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            We will pilot with British Columbia builders, then expand into Alberta’s high-growth corridor, and scale into Ontario’s volume-driven market.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {regionalFocus.map((region) => (
            <Card
              key={region.region}
              className="border-white/40 bg-white/80 p-6 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60"
            >
              <CardHeader className="flex items-center gap-3 p-0">
                <MapPin className="h-6 w-6 text-foregroundRed" aria-hidden />
                <div>
                  <CardTitle>{region.region}</CardTitle>
                  <CardDescription>Regional strategy</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-4 text-sm text-muted-foreground">
                {region.insight}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Who we serve</h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Small to mid-sized residential builders and developers who are scaling communities and need modern, flexible digital operations.
          </p>
        </div>
        <Card className="border-white/40 bg-white/80 p-6 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
          <CardHeader className="flex flex-wrap items-center gap-6 p-0">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Building2 className="h-5 w-5 text-foregroundRed" aria-hidden />
              <span>Homebuilders & developers</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <LineChart className="h-5 w-5 text-foregroundRed" aria-hidden />
              <span>Proptech partners</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Globe className="h-5 w-5 text-foregroundRed" aria-hidden />
              <span>International expansion (Year 2+)</span>
            </div>
          </CardHeader>
          <CardContent className="mt-6 grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
            <p>
              Canada’s construction industry has only 28% digital adoption despite nine in ten executives acknowledging productivity gains from technology. BuilderStack is developing purpose-built tools to shorten launch cycles.
            </p>
            <p>
              By Year 2 we target US expansion, leveraging a scalable SaaS footprint to reach similar builders while keeping core innovation anchored in Canada.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-xl shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold tracking-tight">Market gaps we close</h2>
            <p className="max-w-3xl text-lg text-muted-foreground">
              BuilderStack is being architected to solve the friction Canadian builders face when running digital sales operations.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {marketGaps.map((gap) => (
              <Card key={gap.title} className="border-white/40 bg-white/90 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
                <CardHeader>
                  <CardTitle>{gap.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {gap.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
