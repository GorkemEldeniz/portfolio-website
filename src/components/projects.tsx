import myProjects from "@utils/myProjects";
import ProjectCard from "./project-card";

const Projects = () => {
	return (
		<>
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
				{myProjects.map((project, id) => (
					<ProjectCard key={id} {...project} />
				))}
			</div>
		</>
	);
};

export default Projects;
