import type { Route } from "@utils/routes";
import routes from "@utils/routes";
import LinkButton from "../link-button";
import ListItem from "./navlist";

const Menu = () => {
	return (
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
	);
};

export default Menu;
