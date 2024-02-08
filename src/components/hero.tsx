import { Button } from "./ui/button";

const Hero = () => {
	return (
		<>
			<h1 className='text-4xl tracking-wide md:text-5xl'>Developer Name</h1>
			<div className='flex justify-center px-6 md:px-0'>
				<span className='h-[1px] w-full md:w-[20rem] bg-foreground'></span>
			</div>
			<p className='px-6 text-sm md:text-lg md:px-9'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum
				urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non
				justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada
			</p>
			<div className='flex flex-col items-center gap-6 md:justify-center md:flex-row'>
				<Button
					className='text-xl font-light md:text-2xl w-fit'
					size='lg'
					variant='outline'
				>
					Projects
				</Button>
				<Button className='text-xl font-light md:text-2xl w-fit' size='lg'>
					Contact
				</Button>
			</div>
		</>
	);
};

export default Hero;
