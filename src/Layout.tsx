import About from "@components/about";
import Hero from "@components/hero";
import Navbar from "@components/navbar";

const Layout = () => {
	return (
		<div className='min-h-screen mx-auto max-w-screen-2xl bg-background text-foreground'>
			<Navbar />
			<div className='flex flex-col gap-10 sm:px-[3.75rem] py-[1.5rem] font-light text-center'>
				<Hero />
				<About />
			</div>
		</div>
	);
};

export default Layout;
