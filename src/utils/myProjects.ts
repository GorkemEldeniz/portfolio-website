import type { ProjectCardProps as ProjectType } from "@components/project-card";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const myProjects = [
	{
		image: {
			src: "../../wordle.png",
			alt: "Wordle-Clone",
		},
		title: "Wordle-Clone",
		description:
			"This is a clone of the popular game Wordle implemented in JavaScript, HTML, and CSS.",
		link: {
			github: "https://github.com/GorkemEldeniz/wordle-clone-2",
			url: "https://wordle-clone-2-hazel.vercel.app/",
		},
		stacks: [
			{
				name: "HTML",
				icon: FaHtml5,
			},
			{
				name: "CSS",
				icon: FaCss3,
			},
			{
				name: "Javascript",
				icon: IoLogoJavascript,
			},
		],
	},
	{
		image: {
			src: "../../ip-adress-tracker.jpg",
			alt: "Ip Adress Tracker",
		},
		title: "Ip Adress Tracker",
		description:
			"IP Address Tracker is a web application that allows users to track IP addresses and view detailed information about them, including their location on the map.",
		link: {
			github: "https://github.com/GorkemEldeniz/ip-adress-tracker",
			url: "https://ip-adress-tracker-topaz.vercel.app/",
		},
		stacks: [
			{
				name: "HTML",
				icon: FaHtml5,
			},
			{
				name: "CSS",
				icon: FaCss3,
			},
			{
				name: "Javascript",
				icon: IoLogoJavascript,
			},
			{
				name: "React",
				icon: FaReact,
			},
		],
	},
	{
		image: {
			src: "../../advice-generator.jpg",
			alt: "Advice Generator",
		},
		title: "Advice Generator",
		description:
			"The Advice Generator App is a simple web application that generates random pieces of advice for users. It provides inspirational and motivational messages to help users navigate various situations in life.",
		link: {
			github: "https://github.com/GorkemEldeniz/advice-generator-app-main",
			url: "https://advice-generator-app-main-cyan-beta.vercel.app/",
		},
		stacks: [
			{
				name: "HTML",
				icon: FaHtml5,
			},
			{
				name: "CSS",
				icon: FaCss3,
			},
			{
				name: "Javascript",
				icon: IoLogoJavascript,
			},
		],
	},
	{
		image: {
			src: "../../countries-app.jpg",
			alt: "Countries App",
		},
		title: "Countries App",
		description:
			"Countries App is a web application that provides information about countries around the world. Users can search for specific countries, view details about them, and filter countries based on different criteria.",
		link: {
			github: "https://github.com/GorkemEldeniz/Countries-App",
			url: "https://countries-app-gamma-two.vercel.app/",
		},
		stacks: [
			{
				name: "HTML",
				icon: FaHtml5,
			},
			{
				name: "CSS",
				icon: FaCss3,
			},
			{
				name: "Javascript",
				icon: IoLogoJavascript,
			},
			{
				name: "React",
				icon: FaReact,
			},
		],
	},
	{
		image: {
			src: "../../multi-step-form.jpg",
			alt: "Multi-Step Form",
		},
		title: "Multi-Step Form",
		description:
			"The Multi-Step Form is a web application that guides users through a series of steps to complete a form submission. It breaks down lengthy forms into smaller, more manageable sections, improving user experience and completion rates.",
		link: {
			github: "https://github.com/GorkemEldeniz/multi-step-form-main",
			url: "https://multi-step-form-main.vercel.app/",
		},
		stacks: [
			{
				name: "HTML",
				icon: FaHtml5,
			},
			{
				name: "CSS",
				icon: FaCss3,
			},
			{
				name: "Javascript",
				icon: IoLogoJavascript,
			},
		],
	},
] as ProjectType[];

export default myProjects;
