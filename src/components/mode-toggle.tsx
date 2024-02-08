import { Moon, Sun } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

import { Button } from "./ui/button";

import { useTheme } from "@hooks/useTheme";
import { useEffect, useState } from "react";

export function ModeToggle() {
	const { setTheme, isDark } = useTheme();
	const [isMobile, setIsMobile] = useState(false);

	const toggleTheme = () => {
		if (isDark) {
			setTheme("light");
			return;
		}
		setTheme("dark");
	};

	useEffect(() => {
		const mobileMediaQuery = window.matchMedia(
			"only screen and (max-width: 768px)"
		);

		setIsMobile(mobileMediaQuery.matches);

		function handleSizeChange(event: MediaQueryListEvent) {
			setIsMobile(event.matches);
		}

		mobileMediaQuery.addEventListener("change", handleSizeChange);

		return () => {
			mobileMediaQuery.removeEventListener("change", handleSizeChange);
		};
	}, []);

	return (
		<DropdownMenu>
			<>
				{!isMobile ? (
					<DropdownMenuTrigger asChild>
						<Button className='!p-1' variant='outline' size='icon'>
							<Sun className='h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
							<Moon className='absolute h-[1.8rem] w-[1.8rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
							<span className='sr-only'>Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
				) : (
					<Button
						onClick={toggleTheme}
						className='!p-1'
						variant='outline'
						size='icon'
					>
						{isDark ? (
							<Sun className='h-[2rem] w-[2rem]' />
						) : (
							<Moon className='h-[1.8rem] w-[1.8rem]' />
						)}
						<span className='sr-only'>Toggle theme</span>
					</Button>
				)}
			</>
			{!isMobile ? (
				<DropdownMenuContent align='end'>
					<DropdownMenuItem
						className='text-xl'
						onClick={() => setTheme("light")}
					>
						Light
					</DropdownMenuItem>
					<DropdownMenuItem
						className='text-xl'
						onClick={() => setTheme("dark")}
					>
						Dark
					</DropdownMenuItem>
					<DropdownMenuItem
						className='text-xl'
						onClick={() => setTheme("system")}
					>
						System
					</DropdownMenuItem>
				</DropdownMenuContent>
			) : undefined}
		</DropdownMenu>
	);
}
