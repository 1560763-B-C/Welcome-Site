import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative isolate inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-4 focus-visible:ring-ring/40 focus-visible:ring-offset-0 active:translate-y-0.5",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-foregroundRed via-rose-500 to-amber-400 text-white shadow-lg shadow-rose-200/60 hover:shadow-rose-200/80 hover:-translate-y-0.5 after:absolute after:inset-0 after:-z-10 after:rounded-xl after:bg-gradient-to-r after:from-white/30 after:via-transparent after:to-white/30 after:opacity-0 after:transition after:duration-300 hover:after:opacity-100",
        destructive:
          "bg-gradient-to-r from-destructive via-red-600 to-rose-700 text-white shadow-lg shadow-red-300/30 hover:shadow-red-300/50 hover:-translate-y-0.5 focus-visible:ring-destructive/30",
        outline:
          "border border-white/40 bg-transparent text-foreground shadow-sm shadow-rose-100/20 hover:-translate-y-0.5 hover:bg-white/20 hover:text-foreground dark:border-white/10 dark:bg-white/5",
        secondary:
          "bg-white text-foreground shadow-md shadow-rose-200/40 hover:-translate-y-0.5 hover:bg-white/90 dark:bg-white/10 dark:text-white",
        ghost:
          "text-foreground hover:-translate-y-0.5 hover:bg-white/20 hover:text-foreground dark:text-white/90 dark:hover:bg-white/10",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-2xl px-8 has-[>svg]:px-5",
        icon: "size-11 rounded-2xl",
        "icon-sm": "size-9 rounded-xl",
        "icon-lg": "size-12 rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
