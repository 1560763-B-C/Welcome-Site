import { Building, Leaf, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const economicBenefits = [
  {
    title: "Job creation",
    description:
      "Plan to grow from one founder to a ten-person Canadian team by Year 5, spanning engineering, AI, design, marketing, support, and sales roles.",
    icon: Building,
  },
  {
    title: "Tax contribution",
    description:
      "Annual tax impact is projected to expand from $25,734 in Year 1 to $147,868 by Year 5 through payroll and net income taxes.",
    icon: Building,
  },
  {
    title: "Knowledge transfer",
    description:
      "Upskill Canadian talent on modern frameworks, AI deployment, and secure SaaS operations through structured enablement programs.",
    icon: Building,
  },
];

const socialBenefits = [
  {
    title: "Sustainable operations",
    description:
      "Digital brochures and automated marketing will reduce paper waste and travel requirements for sales and approvals.",
    icon: Leaf,
  },
  {
    title: "Inclusive access",
    description:
      "Bilingual content generation will ensure English and French homebuyers receive timely, accurate information.",
    icon: Leaf,
  },
  {
    title: "Community engagement",
    description:
      "Budget is allocated for future local sponsorships and cultural events in Surrey and Greater Vancouver.",
    icon: Leaf,
  },
];

const culturalBenefits = [
  {
    title: "Multicultural workforce",
    description:
      "Planned hiring practices reflect Surrey’s diversity, offering paid observances for cultural and religious events.",
    icon: Users,
  },
  {
    title: "Data sovereignty leadership",
    description:
      "Canadian hosting and privacy-first design will reinforce national values on digital self-determination.",
    icon: Users,
  },
  {
    title: "Bilingual by design",
    description:
      "All AI-generated materials will default to Canada’s official languages, supporting linguistic duality across provinces.",
    icon: Users,
  },
];

export default function BenefitsPage() {
  return (
    <main className="relative isolate bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.12),rgba(255,255,255,0.94))] py-20 text-foreground dark:bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.85),rgba(0,0,0,0.9))]">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[420px] max-w-5xl bg-gradient-to-b from-rose-200/40 via-transparent to-transparent blur-3xl dark:from-foregroundRed/20" />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white/90 shadow-sm shadow-rose-500/40 backdrop-blur dark:bg-foregroundRed/20">
            Impact
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Advancing economic growth and inclusive innovation in Canada.
          </h1>
          <p className="text-lg text-muted-foreground">
            BuilderStack’s AI platform is positioned to strengthen the national proptech ecosystem, create high-skilled employment, and support Canada’s cultural and environmental priorities.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Economic contributions</h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Sustainable revenue growth—from $468K in Year 1 to $1.69M by Year 5—fuels direct and indirect benefits throughout the Canadian economy.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {economicBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <Card
                key={benefit.title}
                className="border-white/40 bg-white/80 p-6 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60"
              >
                <CardHeader className="space-y-2 p-0">
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-foregroundRed" aria-hidden />
                    Economic impact
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 text-sm text-muted-foreground">
                  {benefit.description}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Social value</h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            We embed environmental stewardship and inclusive access into product decisions and community programs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {socialBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <Card
                key={benefit.title}
                className="border-white/40 bg-white/80 p-6 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60"
              >
                <CardHeader className="space-y-2 p-0">
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-foregroundRed" aria-hidden />
                    Social value
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 text-sm text-muted-foreground">
                  {benefit.description}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Cultural leadership</h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            BuilderStack mirrors Canada’s multicultural identity, supporting diverse creators and multilingual buyers.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {culturalBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <Card
                key={benefit.title}
                className="border-white/40 bg-white/80 p-6 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60"
              >
                <CardHeader className="space-y-2 p-0">
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-foregroundRed" aria-hidden />
                    Cultural resilience
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4 text-sm text-muted-foreground">
                  {benefit.description}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}
