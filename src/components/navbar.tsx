import ListItem from "./list-item";

import type { Route } from "@utils/routes";
import routes from "@utils/routes";

import LinkButton from "./link-button";

const Navbar = () => {
	return (
		<nav className='flex items-center px-[4rem] py-9'>
			<div className='flex justify-start flex-1'>
				<h1 className='font-bold text-3xl'>Name</h1>
			</div>

			<ListItem<Route>
				items={routes}
				render={(item) => {
					return (
						<LinkButton key={item.name} to={item.to}>
							{item.name}
						</LinkButton>
					);
				}}
			/>
		</nav>
	);
};

export default Navbar;
