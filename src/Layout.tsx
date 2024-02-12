import About from "@components/about";
import Contact from "@components/contact";
import Foooter from "@components/footer";
import Hero from "@components/hero";
import Navbar from "@components/nav/navbar";
import Projects from "@components/project";

const Layout = () => {
	return (
		<div className='min-h-screen mx-auto max-w-screen-2xl bg-background text-foreground'>
			<Navbar />
			<div className='flex flex-col gap-10 sm:px-[3.75rem] py-[1.5rem] font-light text-center'>
				<Hero />
				<About />
				<Projects />
				<Contact />
				<Foooter />
			</div>
		</div>
	);
};

export default Layout;
