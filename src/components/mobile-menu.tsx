import type { Route } from "@utils/routes";
import routes from "@utils/routes";

import { Menu, X } from "lucide-react";

import cn from "@utils/cn";
import { useEffect, useState } from "react";
import LinkButton from "./link-button";
import ListItem from "./navlist";

const MobileMenu = () => {
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		const mobileMediaQuery = window.matchMedia(
			"only screen and (max-width: 768px)"
		);

		if (open && mobileMediaQuery.matches) {
			document.body.style.overflow = "hidden";
		}

		function handleSizeChange(event: MediaQueryListEvent) {
			if (open && event.matches) {
				document.body.style.overflow = "hidden";
				return;
			}
			document.body.style.overflow = "auto";
		}

		mobileMediaQuery.addEventListener("change", handleSizeChange);

		return () => {
			document.body.style.overflow = "auto";
			mobileMediaQuery.removeEventListener("change", handleSizeChange);
		};
	}, [open]);

	return (
		<>
			<Menu
				onClick={() => setOpen(true)}
				className='block cursor-pointer md:hidden'
				width={30}
				height={30}
			/>
			<div
				className={cn(
					"absolute -top-[100dvh] left-0 flex w-full h-dvh bg-background transition-all duration-400 ease-in md:hidden",
					{
						"top-0": open,
					}
				)}
			>
				<ListItem<Route>
					className='flex flex-col items-center justify-center w-full h-full gap-6'
					items={routes}
					render={(item) => {
						return (
							<LinkButton key={item.name} to={item.to}>
								{item.name}
							</LinkButton>
						);
					}}
				>
					<X
						onClick={() => setOpen(false)}
						className='absolute top-6 right-6'
						width={30}
						height={30}
					/>
				</ListItem>
			</div>
		</>
	);
};

export default MobileMenu;
