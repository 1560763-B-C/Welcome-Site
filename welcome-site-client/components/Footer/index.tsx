"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useContactModal } from "@/components/ContactModalProvider";

export default function Footer() {
  const { openModal } = useContactModal();

  return (
    <footer className="border-t border-white/10 bg-gradient-to-br from-white/80 via-rose-50/60 to-white/90 backdrop-blur dark:from-zinc-900/80 dark:via-zinc-950/90 dark:to-black/90">
      <div className="container mx-auto max-w-6xl grid gap-10 px-6 py-14 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">BuilderStack</h3>
          <p className="text-sm text-muted-foreground">
            Digital infrastructure for Canadian homebuilders.
          </p>
          <Button
            size="sm"
            className="bg-black text-white shadow-lg shadow-rose-200/60 transition hover:-translate-y-0.5 hover:shadow-rose-300/80"
            onClick={openModal}
          >
            Contact us
          </Button>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-medium text-foreground">Solutions</p>
          <Link
            href="/platform"
            title="Platform — BuilderStack"
            className="block text-muted-foreground transition hover:text-foreground"
          >
            Platform
          </Link>
          <Link
            href="/features"
            title="Capabilities — BuilderStack"
            className="block text-muted-foreground transition hover:text-foreground"
          >
            Capabilities
          </Link>
          <Link
            href="/market"
            title="Market insights — BuilderStack"
            className="block text-muted-foreground transition hover:text-foreground"
          >
            Market Insights
          </Link>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-medium text-foreground">Company</p>
          <Link href="/about" className="block text-muted-foreground transition hover:text-foreground">
            About
          </Link>
          <Link href="/team" className="block text-muted-foreground transition hover:text-foreground">
            Leadership
          </Link>
          <Link href="/benefits" className="block text-muted-foreground transition hover:text-foreground">
            Impact
          </Link>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-medium text-foreground">Connect</p>
          <Link
            href="mailto:hardawindersingh08@gmail.com"
            title="Email BuilderStack"
            aria-label="Email BuilderStack"
            className="block text-muted-foreground transition hover:text-foreground"
          >
            hardawindersingh08@gmail.com
          </Link>
          <a
            href="tel:+16047292663"
            title="Call BuilderStack"
            aria-label="Call BuilderStack"
            className="block text-muted-foreground transition hover:text-foreground"
          >
            +1 (604) 729-2663
          </a>
          <p className="text-muted-foreground">Hardawinder Singh</p>
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} BuilderStack
          </p>
        </div>
      </div>
    </footer>
  );
}
