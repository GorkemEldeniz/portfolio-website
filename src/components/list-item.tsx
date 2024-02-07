import { ModeToggle } from "./mode-toggle";

interface ListPropsType<T> {
	items: readonly T[];
	render: (item: T) => React.ReactNode;
}

const ListItem = <T,>({ items, render }: ListPropsType<T>) => {
	if (!items.length) throw new Error("Empty Array");

	return (
		<div className='flex gap-6'>
			{items.map((item) => render(item))}
			<ModeToggle />
		</div>
	);
};

export default ListItem;
