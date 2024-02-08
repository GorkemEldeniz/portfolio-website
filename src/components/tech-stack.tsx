import { ComponentPropsWithoutRef } from "react";

interface TechStackProps<T> extends ComponentPropsWithoutRef<"div"> {
	items: readonly T[];
	render: (item: T) => React.ReactNode;
}

const TechStack = <T,>({
	items,
	render,
	children,
	...rest
}: TechStackProps<T>) => {
	return (
		<div {...rest}>
			{items.map((item) => render(item))}
			{children}
		</div>
	);
};

export default TechStack;
