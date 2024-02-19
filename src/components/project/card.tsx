import type { TechStackType } from "@utils/tech-stacks";
import TechStack from "../tech-stack";

import { Button } from "../ui/button";

import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

import { motion } from "framer-motion";

type Image = {
	src: string;
	alt: string;
};

type Link = {
	github: `https://github.com/GorkemEldeniz/${string}`;
	url: `https://${string}`;
};

export interface ProjectCardProps {
	image: Image;
	title: string;
	description: string;
	link: Link;
	stacks: readonly TechStackType[];
}

type ProjectCardType = { index: number } & ProjectCardProps;

const ProjectCard = ({
	image,
	title,
	description,
	link,
	stacks,
	index,
}: ProjectCardType) => {
	const handleExternalLink = (to: string) => {
		window.open(to, "_blank");
	};

	return (
		<motion.div
			initial={{
				opacity: 0,
				y: -100,
			}}
			whileInView={{
				y: 0,
				opacity: 1,
			}}
			viewport={{ once: true }}
			transition={{
				delay: 0.1 * index,
				duration: 1,
			}}
			className='flex flex-col gap-4 text-left'
		>
			<img
				className='object-contain aspect-square'
				src={image.src}
				alt={image.alt}
			/>

			<h2 className='text-xl md:text-2xl'>{title}</h2>
			<span className='h-[1px] w-full bg-foreground'></span>
			<p className='text-sm md:text-base'>{description}</p>
			<div className='flex flex-col justify-end flex-1 gap-4'>
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
		</motion.div>
	);
};

export default ProjectCard;
