import type { TechStackType } from "@utils/techStacks";
import TechStack from "./tech-stack";

import { Button } from "./ui/button";

import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

type Image = {
	src: string;
	alt: string;
};

type Link = {
	github: `https://github.com/GorkemEldeniz/${string}`;
	url: `https://${string}`;
};

interface ProjectCardProps {
	image: Image;
	title: string;
	description: string;
	link: Link;
	stacks: readonly TechStackType[];
}

const ProjectCard = ({
	image,
	title,
	description,
	link,
	stacks,
}: ProjectCardProps) => {
	const handleExternalLink = (to: string) => {
		window.open(to, "_blank");
	};

	return (
		<div className='flex flex-col gap-4 text-left'>
			<img
				className='object-cover aspect-square'
				src={image.src}
				alt={image.alt}
			/>
			<h2 className='text-xl md:text-2xl'>{title}</h2>
			<span className='h-[1px] w-full bg-foreground'></span>
			<p className='text-sm md:text-base'>{description}</p>

			<TechStack<TechStackType>
				className='flex flex-wrap gap-5'
				items={stacks}
				render={(Item) => (
					<div className='flex flex-col items-center gap-1' key={Item.name}>
						<Item.icon className='w-5 h-5' key={Item.name} />
					</div>
				)}
			/>

			<div className='flex gap-2'>
				<Button
					onClick={() => handleExternalLink(link.github)}
					size='icon'
					variant='link'
				>
					<FaGithub className='w-7 h-7' />
				</Button>
				<Button
					onClick={() => handleExternalLink(link.url)}
					size='icon'
					variant='link'
				>
					<IoIosLink className='w-7 h-7' />
				</Button>
			</div>
		</div>
	);
};

export default ProjectCard;
