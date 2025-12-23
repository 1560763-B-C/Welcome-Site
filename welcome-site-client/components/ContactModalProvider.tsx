"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Calendar, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";

type ContactModalContextValue = {
  openModal: () => void;
  closeModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | undefined>(undefined);

export function useContactModal() {
  const context = useContext(ContactModalContext);

  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }

  return context;
}

export default function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  const contextValue = useMemo(
    () => ({ openModal, closeModal }),
    [openModal, closeModal]
  );

  return (
    <ContactModalContext.Provider value={contextValue}>
      {children}
      {isMounted &&
        createPortal(
          <div
            aria-hidden={!isOpen}
            aria-modal
            role="dialog"
            className={`fixed inset-0 z-[100] grid place-items-center overflow-y-auto px-6 py-10 transition-opacity duration-300 ${
              isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.35),rgba(15,23,42,0.9))] backdrop-blur-md"
              onClick={closeModal}
            />

            <section
              className={`relative z-10 w-full max-w-lg rounded-3xl border border-white/20 bg-white/95 p-8 shadow-2xl shadow-rose-500/40 transition-all duration-300 ease-out ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              } dark:border-white/10 dark:bg-zinc-900/90 dark:text-white`}
            >
              <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-br from-rose-400 via-foregroundRed to-amber-400 blur-3xl opacity-80" aria-hidden />
              <div className="relative space-y-6">
                <header className="space-y-3 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black">
                    Contact Us
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight">
                    Talk with Hardawinder Singh
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Share your communities and explore how AI copilots, automated brochures, and digital buyer journeys fit your roadmap.
                  </p>
                </header>

                <div className="grid gap-4 rounded-2xl bg-white/80 p-4 shadow-inner shadow-rose-200/40 backdrop-blur dark:bg-white/5">
                  <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-rose-50/80 via-white/70 to-amber-50/80 p-3 text-sm font-medium text-foreground dark:bg-white/10">
                    <Mail className="h-4 w-4 text-foregroundRed" aria-hidden />
                    <a href="mailto:hardawindersingh08@gmail.com" className="hover:underline">
                      hardawindersingh08@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-rose-50/80 via-white/70 to-amber-50/80 p-3 text-sm font-medium text-foreground dark:bg-white/10">
                    <Phone className="h-4 w-4 text-foregroundRed" aria-hidden />
                    <a href="tel:+16047292663" className="hover:underline">
                      +1 (604) 729-2663
                    </a>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-rose-50/80 via-white/70 to-amber-50/80 p-3 text-sm text-muted-foreground dark:bg-white/10">
                    <Calendar className="h-4 w-4 text-foregroundRed" aria-hidden />
                    <span>Weekday availability · 9am–6pm PST · Virtual or on-site in Surrey.</span>
                  </div>
                  <div className="rounded-xl border border-white/40 bg-white/60 p-3 text-xs uppercase tracking-wide text-foreground/80 shadow-sm shadow-rose-200/30 dark:border-white/10 dark:bg-white/10">
                    AI copilots in preview · Automated launch playbooks · Bilingual marketing automation
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="bg-white/10 text-foreground hover:bg-white/20 dark:text-white"
                    onClick={closeModal}
                  >
                    Close
                  </Button>
                  <Button size="sm" onClick={() => window.open("mailto:hardawindersingh08@gmail.com", "_blank")}
                  >
                    Email Hardawinder
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white text-foreground hover:bg-white/90"
                    onClick={() => window.open("tel:+16047292663")}
                  >
                    Call 604·729·2663
                  </Button>
                </div>
              </div>
            </section>
          </div>,
          document.body
        )}
    </ContactModalContext.Provider>
  );
}
