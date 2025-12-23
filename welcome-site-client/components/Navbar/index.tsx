"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Logo from "./Logo";
import { useContactModal } from "@/components/ContactModalProvider";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/platform", label: "Platform" },
  { href: "/features", label: "Roadmap" },
  { href: "/market", label: "Market" },
  { href: "/team", label: "Team" },
  { href: "/benefits", label: "Impact" },
  { href: "/financials", label: "Financials" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useContactModal();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-foregroundRed via-rose-500 to-orange-400/90 text-white shadow-[0_20px_45px_-25px_rgba(244,63,94,0.8)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              {navLinks.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/80 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            size="sm"
            className="bg-white text-foreground shadow-lg shadow-rose-200/60 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-200/80"
            onClick={openModal}
          >
            Contact us
          </Button>
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:bg-white/10 lg:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-gradient-to-br from-foregroundRed via-rose-500 to-orange-400 text-white shadow-inner shadow-black/30 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg bg-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/20"
              >
                {item.label}
              </Link>
            ))}
            <Button
              size="lg"
              className="mt-2 bg-white text-foregroundRed shadow-lg shadow-rose-200/60 hover:bg-white/90"
              onClick={() => {
                openModal();
                closeMenu();
              }}
            >
              Contact us
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
