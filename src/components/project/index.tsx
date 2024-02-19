import projectList from "@utils/project-list";
import ProjectCard from "./card";

const Projects = () => {
	return (
		<div className='flex flex-col gap-10 sm:px-[3.75rem] py-[1.5rem] font-light text-center relative'>
			<h1
				id='projects'
				className='mt-10 text-3xl tracking-wide md:mt-12 md:text-4xl'
			>
				Projects
			</h1>
			<div className='flex justify-center px-6 md:px-0'>
				<span className='h-[1px] w-full md:w-[20rem] bg-foreground'></span>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 gap-x-[6.8rem] gap-y-[4.6rem]'>
				{projectList.map((project, id) => (
					<ProjectCard index={id} key={id} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
