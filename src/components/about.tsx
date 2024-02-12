import type { TechStackType } from "@utils/tech-stacks";
import techStacks from "@utils/tech-stacks";
import TechStack from "./tech-stack";

const About = () => {
	return (
		<>
			<h1
				id='about'
				className='mt-10 text-3xl tracking-wide md:mt-12 md:text-4xl'
			>
				About
			</h1>
			<div className='flex justify-center px-6 md:px-0'>
				<span className='h-[1px] w-full md:w-[20rem] bg-foreground'></span>
			</div>
			<p className='px-6 mx-auto text-sm md:w-4/5 md:text-lg'>
				Hi, it's me <span className='font-bold'>Gorkem</span>, I live in
				Gaziantep/Turkey and I am 26 years old. In 2018, I qualify for the
				electrical and electronics engineering at Cukurova University. After 2
				years, I decided to progress in the field of software and switched to
				the Web Design department at Anadolu University. Since then I have been
				improving myself by attending bootcamps and taking courses.
				<br />
				These are the technologies I actively use:
			</p>
			<TechStack<TechStackType>
				className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'
				items={techStacks}
				render={(Item) => (
					<div className='flex flex-col items-center gap-1' key={Item.name}>
						<Item.icon className='w-10 h-10' key={Item.name} />
						<p>{Item.name}</p>
					</div>
				)}
			/>
		</>
	);
};

export default About;
