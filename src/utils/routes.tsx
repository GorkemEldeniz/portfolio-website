export type Route = {
	name: string;
	to: (typeof routes)[number]["to"];
};

const routes = [
	{
		name: "Home",
		to: "#",
	},
	{
		name: "About",
		to: "#about",
	},
	{
		name: "Projects",
		to: "#projects",
	},
	{
		name: "Contact",
		to: "#contact",
	},
] as const;

export default routes;
