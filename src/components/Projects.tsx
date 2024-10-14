import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Icon } from "./ui/icon";

function Projects() {
	return (
		<section
			id='projects'
			className='flex flex-col gap-5 px-8 bg-black text-white py-10 lg:py-14'
		>
			<h1 className='text-custom-5xl lg:text-custom-7xl text-center py-5'>
				My <span className='font-extrabold'>Projects</span>
			</h1>

			<motion.div
				initial={{
					opacity: 0,
					x: 50,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
					transition: {
						duration: 1,
					},
				}}
				viewport={{ once: true }}
				className='py-5 flex flex-col lg:flex-row items-center gap-7 lg:gap-10'
			>
				<Carousel className='w-full'>
					<CarouselContent>
						<CarouselItem className='flex items-center justify-center'>
							<img
								className='object-cover size-96'
								src='/wordle-1.png'
								alt='Wordle Clone Image'
							/>
						</CarouselItem>
						<CarouselItem className='flex items-center justify-center'>
							<img
								className='object-cover size-96'
								src='/wordle-2.png'
								alt='Wordle Clone Image'
							/>
						</CarouselItem>
						<CarouselItem className='flex items-center justify-center'>
							<img
								className='object-cover size-96'
								src='/wordle-3.png'
								alt='Wordle Clone Image'
							/>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
				<article className='w-full flex flex-col gap-7'>
					<h2 className='font-extrabold text-custom-5xl lg:text-custom-7xl'>
						01
					</h2>
					<h3 className='text-custom-2xl lg:text-custom-4xl font-bold'>
						Wordle Clone
					</h3>
					<p className='text-zinc-500 !leading-3 text-custom-base'>
						This is a clone of the popular game Wordle implemented in
						JavaScript, HTML, and CSS.
					</p>
					<a href='https://wordle-clone-2-hazel.vercel.app/' target='_blank'>
						<Icon
							viewBox='0 0 20 20'
							className='size-5 cursor-pointer'
							icon='read-more'
						/>
					</a>
				</article>
			</motion.div>

			<motion.div
				initial={{
					opacity: 0,
					x: -50,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
					transition: {
						duration: 1,
					},
				}}
				viewport={{ once: true }}
				className='py-5 flex flex-col-reverse lg:flex-row items-center gap-7 lg:gap-10'
			>
				<article className='w-full flex flex-col gap-7'>
					<h2 className='font-extrabold text-custom-5xl lg:text-custom-7xl'>
						02
					</h2>
					<h3 className='text-custom-2xl lg:text-custom-4xl font-bold'>
						iWeather
					</h3>
					<p className='text-zinc-500 !leading-3 text-custom-base line-clamp-2'>
						It is an application that visualizes weather data using openweather
						api according to user inputs
					</p>
					<a href='https://react-staj.vercel.app/' target='_blank'>
						<Icon
							viewBox='0 0 20 20'
							className='size-5 cursor-pointer'
							icon='read-more'
						/>
					</a>
				</article>

				<Carousel className='w-full'>
					<CarouselContent>
						<CarouselItem className='flex items-center justify-center'>
							<img
								className='object-contain size-96'
								src='/iweather-1.jpeg'
								alt='Iweather Image'
							/>
						</CarouselItem>
						<CarouselItem className='flex items-center justify-center'>
							<img
								className='object-contain size-96'
								src='/iweather-2.jpeg'
								alt='Iweather Image'
							/>
						</CarouselItem>
						<CarouselItem className='flex items-center justify-center'>
							<img
								className='object-contain size-96'
								src='/iweather-3.jpeg'
								alt='Iweather Image'
							/>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</motion.div>

			<motion.div
				initial={{
					opacity: 0,
					x: 50,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
					transition: {
						duration: 1,
					},
				}}
				viewport={{ once: true }}
				className='py-5 flex flex-col lg:flex-row items-center gap-7 lg:gap-10'
			>
				<Carousel className='w-full'>
					<CarouselContent>
						<CarouselItem className='flex items-center justify-center'>
							<img
								className='object-cover size-96'
								src='/advice-generator-1.png'
								alt='Advice Generator Image'
							/>
						</CarouselItem>
						<CarouselItem className='flex items-center justify-center'>
							<img
								className='object-cover size-96'
								src='/advice-generator-2.jpg'
								alt='Advice Generator Image'
							/>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
				<article className='w-full flex flex-col gap-7'>
					<h2 className='font-extrabold text-custom-5xl lg:text-custom-7xl'>
						03
					</h2>
					<h3 className='text-custom-2xl lg:text-custom-4xl font-bold'>
						Advice Generator
					</h3>
					<p className='text-zinc-500 !leading-3 text-custom-base'>
						The Advice Generator App is a simple web application that generates
						random pieces of advice for users. It provides inspirational and
						motivational messages to help users navigate various situations in
						life.
					</p>

					<a
						href='https://advice-generator-app-main-cyan-beta.vercel.app/'
						target='_blank'
					>
						<Icon
							viewBox='0 0 20 20'
							className='size-5 cursor-pointer'
							icon='read-more'
						/>
					</a>
				</article>
			</motion.div>
		</section>
	);
}

export default Projects;
