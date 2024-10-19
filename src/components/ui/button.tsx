import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "px-4 py-3 inline-flex justify-center items-center gap-2 border border-black rounded-md bg-black text-custom-base lg:text-custom-xl text-white active:bg-white active:text-black transition-all disabled:bg-neutral"
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <motion.div
        className="w-fit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.85 }}
      >
        <Comp
          className={cn(buttonVariants({ className }))}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Button.displayName = "Button";

export { Button };
