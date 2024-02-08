import ListItem from "./list-item";

import type { Route } from "@utils/routes";
import routes from "@utils/routes";

import LinkButton from "./link-button";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
	return (
		<nav className='flex items-center px-[2rem] md:px-[4rem] py-9'>
			<div className='flex justify-start flex-1'>
				<h1 className='text-2xl font-bold md:text-3xl'>Name</h1>
			</div>

			<ListItem<Route>
				className='hidden md:gap-1 lg:gap-6 md:flex'
				items={routes}
				render={(item) => {
					return (
						<LinkButton key={item.name} to={item.to}>
							{item.name}
						</LinkButton>
					);
				}}
			/>

			<MobileMenu />
		</nav>
	);
};

export default Navbar;
