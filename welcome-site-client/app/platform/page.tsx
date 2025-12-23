import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PlatformPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 space-y-20 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.12),rgba(255,255,255,0.95))] text-foreground dark:bg-[radial-gradient(circle_at_top,_rgba(17,24,39,0.85),rgba(0,0,0,0.9))]">
      {/* Hero */}
      <section className="space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight">
          The BuilderStack Platform
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">
          BuilderStack is an early-stage digital platform in development to help
          Canadian homebuilders modernize how they manage websites, marketing
          content, and buyer engagement. Everything outlined here represents the
          roadmap for our first public release.
        </p>
      </section>

      {/* Core Value */}
      <Card className="border-white/40 bg-white/80 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
        <CardHeader>
          <CardTitle>What BuilderStack Does</CardTitle>
          <CardDescription>
            A centralized system for builder-focused digital operations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>
            BuilderStack is designed to bring together tools that are typically fragmented
            across agencies, CMS platforms, and marketing vendors into a single
            workflow built specifically for the residential construction
            industry.
          </p>
          <p>
            The platform is being built with a focus on clarity, maintainability, and
            long-term scalability, enabling builders to evolve their digital
            presence without constant redevelopment.
          </p>
        </CardContent>
      </Card>

      {/* Feature Grid */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card className="border-white/40 bg-white/80 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
          <CardHeader>
            <CardTitle>Website & Brand Control</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Modern, framework-based websites are being engineered to allow builders to manage
            layouts, branding, and structured content with flexibility and
            consistency.
          </CardContent>
        </Card>

        <Card className="border-white/40 bg-white/80 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
          <CardHeader>
            <CardTitle>AI-Assisted Content</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            AI-assisted generation of marketing and informational content in
            English and French is planned to support—not replace—human review.
          </CardContent>
        </Card>

        <Card className="border-white/40 bg-white/80 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
          <CardHeader>
            <CardTitle>Digital Brochures</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Structured data and reusable templates will enable faster creation of
            brochures and sales assets without repetitive design work.
          </CardContent>
        </Card>

        <Card className="border-white/40 bg-white/80 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
          <CardHeader>
            <CardTitle>Buyer Engagement</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Early-stage chatbot and inquiry tools are being designed to assist with lead
            qualification and improve response times on builder websites.
          </CardContent>
        </Card>
      </section>

      {/* Architecture */}
      <Card className="border-white/40 bg-white/80 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
        <CardHeader>
          <CardTitle>Platform Architecture</CardTitle>
          <CardDescription>
            Built with modern web technologies and modular design.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>
            BuilderStack is being developed using contemporary web frameworks and
            cloud-based infrastructure, with an emphasis on performance,
            security, and extensibility.
          </p>
          <p>
            The modular architecture will allow features to be introduced
            incrementally, supporting pilot deployments and gradual expansion.
          </p>
        </CardContent>
      </Card>

      {/* Status */}
      <Card className="border-white/40 bg-white/80 shadow-lg shadow-rose-200/30 backdrop-blur dark:border-foregroundRed/20 dark:bg-black/60">
        <CardHeader>
          <CardTitle>Development Status</CardTitle>
          <CardDescription>Early-stage product development</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>
            BuilderStack is currently in an early development phase. Core
            components are being prototyped and validated through pilot use
            cases, with future enhancements guided by builder feedback.
          </p>
        </CardContent>
      </Card>

      {/* CTA */}
      <section className="flex flex-col items-start gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Interested in shaping the launch?
        </h2>
        <p className="max-w-xl text-muted-foreground">
          BuilderStack is currently exploring pilot opportunities and early
          partnerships. Share your priorities and we will align the build plan
          with the outcomes that matter most to your communities.
        </p>
        <Button variant="outline" asChild>
          <a href="/contact">Contact the team</a>
        </Button>
      </section>
    </div>
  );
}
