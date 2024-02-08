import { Button } from "./ui/button";

const Hero = () => {
	return (
		<div className='flex flex-col gap-10 px-[3.75rem] py-[1.5rem] font-light text-center'>
			<h1 className='text-5xl tracking-wide'>Developer Name</h1>
			<div className='flex justify-center px-6 md:px-0'>
				<span className='h-[1px] w-full md:w-[20rem] bg-foreground'></span>
			</div>
			<p className='px-6 text-lg md:px-9'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum
				urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non
				justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada
			</p>
			<div className='flex flex-col items-center gap-6 md:justify-center md:flex-row'>
				<Button
					className='text-2xl font-light w-fit'
					size='lg'
					variant='outline'
				>
					Projects
				</Button>
				<Button className='text-2xl font-light w-fit' size='lg'>
					Contact
				</Button>
			</div>
		</div>
	);
};

export default Hero;
