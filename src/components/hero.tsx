import { Button } from "./ui/button";

import { motion } from "framer-motion";

const Hero = () => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				x: 100,
			}}
			whileInView={{
				opacity: 1,
				x: 0,
			}}
			viewport={{ once: true }}
			transition={{
				delay: 0.9,
				duration: 1,
			}}
			className='flex flex-col gap-10 sm:px-[3.75rem] py-[1.5rem] font-light text-center relative'
		>
			<h1
				id='hero'
				className='mt-10 text-4xl tracking-wide md:mt-12 md:text-5xl'
			>
				Frontend Developer
			</h1>
			<div className='flex justify-center px-6 md:px-0'>
				<span className='h-[1px] w-full md:w-[20rem] bg-foreground'></span>
			</div>
			<p className='px-6 mx-auto text-sm text-left md:text-center md:w-4/5 md:text-lg'>
				I have been working in the frontend development for more than 3 years.
				On this path, which I started by learning html and css, I am currently
				working on javascript frameworks (React,Vue). I'm learning css
				frameworks and technologies such as tailwind, styled-component, scss,
				module-css also learning ssr frameworks like Next js to become a full
				stack developer. Most of the time I do freelance work to improve myself.
			</p>
			<div className='flex flex-col items-center gap-6 md:justify-center md:flex-row'>
				<Button
					asChild
					className='text-xl font-light md:text-2xl w-fit'
					size='lg'
					variant='outline'
				>
					<a href='#projects'>Projects</a>
				</Button>
				<Button
					asChild
					className='text-xl font-light md:text-2xl w-fit'
					size='lg'
				>
					<a href='#contact'>Contact</a>
				</Button>
			</div>
		</motion.div>
	);
};

export default Hero;
