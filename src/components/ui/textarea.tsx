import * as React from "react";

import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "px-6 py-4 border border-black placeholder:text-zinc-500 text-black bg-white rounded-lg disabled:cursor-not-allowed disabled:text-zinc-300 disabled:border-zinc-300 disabled:bg-zinc-100 hover:border-neutral hover:bg-zinc-100 hover:placeholder:text-neutral focus:placeholder:text-neutral focus:shadow-md focus:outline-none resize-none min-h-36",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
