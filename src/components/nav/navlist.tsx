import { ComponentPropsWithoutRef } from "react";
import { ModeToggle } from "../mode-toggle";

interface ListPropsType<T> extends ComponentPropsWithoutRef<"div"> {
	items: readonly T[];
	render: (item: T) => React.ReactNode;
}

const ListItem = <T,>({
	items,
	render,
	children,
	...rest
}: ListPropsType<T>) => {
	if (!items.length) throw new Error("Empty Array");

	return (
		<div {...rest}>
			{items.map((item) => render(item))}
			<ModeToggle />
			{children}
		</div>
	);
};

export default ListItem;
