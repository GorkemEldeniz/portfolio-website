import techStacks from "@utils/techStacks";
import ProjectCard from "./project-card";

const Projects = () => {
	return (
		<>
			<h1 className='mt-10 text-3xl tracking-wide md:mt-12 md:text-4xl'>
				Projects
			</h1>
			<div className='flex justify-center px-6 md:px-0'>
				<span className='h-[1px] w-full md:w-[20rem] bg-foreground'></span>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 gap-x-[6.8rem] gap-y-[4.6rem]'>
				<ProjectCard
					image={{
						alt: "Worlde",
						src: "../../public/wordle.png",
					}}
					title='Wordle'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada'
					link={{
						github: "https://github.com/GorkemEldeniz/Wordle",
						url: "https://wordle-clone-2-hazel.vercel.app/",
					}}
					stacks={techStacks.slice(0, 3)}
				/>
				<ProjectCard
					image={{
						alt: "Worlde",
						src: "../../public/wordle.png",
					}}
					title='Wordle'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada'
					link={{
						github: "https://github.com/GorkemEldeniz/Wordle",
						url: "https://wordle-clone-2-hazel.vercel.app/",
					}}
					stacks={techStacks.slice(0, 3)}
				/>
				<ProjectCard
					image={{
						alt: "Worlde",
						src: "../../public/wordle.png",
					}}
					title='Wordle'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada'
					link={{
						github: "https://github.com/GorkemEldeniz/Wordle",
						url: "https://wordle-clone-2-hazel.vercel.app/",
					}}
					stacks={techStacks.slice(0, 3)}
				/>
				<ProjectCard
					image={{
						alt: "Worlde",
						src: "../../public/wordle.png",
					}}
					title='Wordle'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada'
					link={{
						github: "https://github.com/GorkemEldeniz/Wordle",
						url: "https://wordle-clone-2-hazel.vercel.app/",
					}}
					stacks={techStacks.slice(0, 3)}
				/>
				<ProjectCard
					image={{
						alt: "Worlde",
						src: "../../public/wordle.png",
					}}
					title='Wordle'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada'
					link={{
						github: "https://github.com/GorkemEldeniz/Wordle",
						url: "https://wordle-clone-2-hazel.vercel.app/",
					}}
					stacks={techStacks.slice(0, 3)}
				/>
				<ProjectCard
					image={{
						alt: "Worlde",
						src: "../../public/wordle.png",
					}}
					title='Wordle'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada'
					link={{
						github: "https://github.com/GorkemEldeniz/Wordle",
						url: "https://wordle-clone-2-hazel.vercel.app/",
					}}
					stacks={techStacks.slice(0, 3)}
				/>
				<ProjectCard
					image={{
						alt: "Worlde",
						src: "../../public/wordle.png",
					}}
					title='Wordle'
					description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada'
					link={{
						github: "https://github.com/GorkemEldeniz/Wordle",
						url: "https://wordle-clone-2-hazel.vercel.app/",
					}}
					stacks={techStacks.slice(0, 3)}
				/>
			</div>
		</>
	);
};

export default Projects;
