import { FaCss3, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export type TechStackType = {
	name: string;
	icon: (typeof techStacks)[number]["icon"];
};

const techStacks = [
	{
		name: "Python",
		icon: FaPython,
	},
	{
		name: "Javascript",
		icon: IoLogoJavascript,
	},
	{
		name: "Typescript",
		icon: SiTypescript,
	},
	{
		name: "HTML",
		icon: FaHtml5,
	},
	{
		name: "React",
		icon: FaReact,
	},
	{
		name: "Next JS",
		icon: SiNextdotjs,
	},
	{
		name: "CSS",
		icon: FaCss3,
	},
	{
		name: "Tailwind",
		icon: SiTailwindcss,
	},
] as const;

export default techStacks;
