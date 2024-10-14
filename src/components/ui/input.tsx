import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"px-6 py-4 border text-custom-base border-black placeholder:text-zinc-500 text-black bg-white rounded-lg disabled:cursor-not-allowed disabled:text-zinc-300 disabled:border-zinc-300 disabled:bg-zinc-100 hover:border-neutral hover:bg-zinc-100 hover:placeholder:text-neutral focus:placeholder:text-neutral focus:shadow-md focus:outline-none",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
