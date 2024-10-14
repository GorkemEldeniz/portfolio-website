import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

interface LinkProps extends HTMLMotionProps<"a"> {
	text: string;
	selected?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
	({ className, text, selected = false, ...props }, ref) => {
		return (
			<motion.a
				whileTap={{ scale: 0.85 }}
				ref={ref}
				{...props}
				className={cn(
					"text-black text-custom-base lg:text-custom-xl font-semibold cursor-pointer hover:text-neutral hover:underline",
					className,
					{
						"text-neutral underline": selected,
					}
				)}
			>
				{text}
			</motion.a>
		);
	}
);

export default Link;
