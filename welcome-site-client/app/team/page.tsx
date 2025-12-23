import { Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const leadership = [
  {
    name: "Hardawinder Singh",
    title: "Founder & Chief Technology Officer",
    summary:
      "Full-stack engineer with award-winning AI integration experience at Zonda, specializing in React, Next.js, Remix, and .NET platform architectures.",
    responsibilities: [
      "Define product roadmap, technical architecture, and AI strategy during the first 18 months.",
      "Lead pilot implementations, QA processes, and knowledge transfer to the Canadian team.",
      "Oversee secure data residency, CI/CD pipelines, and compliance frameworks.",
    ],
  },
];

const hiringTimeline = [
  {
    period: "Year 1",
    roles: "Specialized freelancers",
    focus: "Flexible resourcing across development, AI, design, and marketing while core platform ships.",
  },
  {
    period: "Year 2",
    roles: "Web Developer, AI Engineer, General Manager",
    focus: "Establish in-house delivery and operations leadership as the founder transitions to remote oversight.",
  },
  {
    period: "Year 3",
    roles: "Web Designer, Marketing Specialist",
    focus: "Deepen design system execution and amplify demand generation alongside steady feature releases.",
  },
  {
    period: "Year 4",
    roles: "Second Web Developer & AI Engineer, Customer Support, Sales Manager",
    focus: "Scale customer success, accelerate roadmap velocity, and drive enterprise relationships.",
  },
  {
    period: "Year 5",
    roles: "Additional Web Designer",
    focus: "Round out a ten-person in-house team supporting national and international growth.",
  },
];

export default function TeamPage() {
  return (
    <main className="relative isolate bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.12),rgba(255,255,255,0.95))] py-20 text-foreground dark:bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.85),rgba(0,0,0,0.9))]">
      <div className="absolute inset-y-0 left-0 -z-10 h-full w-1/2 bg-gradient-to-r from-rose-200/40 via-transparent to-transparent blur-3xl dark:from-foregroundRed/20" />

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="max-w-3xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white/90 shadow-sm shadow-rose-500/40 backdrop-blur dark:bg-foregroundRed/20">
            Leadership
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Experienced operators guiding an AI-first proptech roadmap.
          </h1>
          <p className="text-lg text-muted-foreground">
            BuilderStack’s founding team blends deep real estate technology experience with pragmatic product delivery, ensuring every feature we release is grounded in builder realities.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {leadership.map((leader) => (
            <Card
              key={leader.name}
              className="border-white/40 bg-white/80 p-6 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60"
            >
              <CardHeader className="space-y-2 p-0">
                <CardTitle className="text-2xl">{leader.name}</CardTitle>
                <CardDescription>{leader.title}</CardDescription>
              </CardHeader>
              <CardContent className="mt-6 space-y-4 p-0 text-sm text-muted-foreground">
                <p>{leader.summary}</p>
                <ul className="space-y-3">
                  {leader.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 size-2 rounded-full bg-foregroundRed" aria-hidden />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
          <Card className="border-white/40 bg-white/80 p-6 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
            <CardHeader className="space-y-2 p-0">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-foregroundRed" aria-hidden />
                Successor focus
              </CardTitle>
              <CardDescription>
                Seamless leadership transition ensures continuity after the founder’s initial on-site period.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-6 space-y-4 p-0 text-sm text-muted-foreground">
              <p>
                A seasoned Canadian General Manager will step in during Year 2 to run day-to-day operations and shepherd long-term growth.
              </p>
              <p>
                The founder will remain actively involved as a remote advisor, supporting strategic decisions and ongoing product direction from abroad.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-10 px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">Hiring roadmap</h2>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Payroll grows from $214K in Year 1 to $866K in Year 5, creating ten high-skilled roles across technology, operations, and customer success.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {hiringTimeline.map((item) => (
            <Card
              key={item.period}
              className="border-white/40 bg-white/80 p-6 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60"
            >
              <CardHeader className="space-y-1 p-0">
                <CardTitle>{item.period}</CardTitle>
                <CardDescription>{item.roles}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 text-sm text-muted-foreground">
                {item.focus}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
