import About from "@components/about";
import Contact from "@components/contact";
import Foooter from "@components/footer";
import Hero from "@components/hero";
import Meta from "@components/meta";
import Navbar from "@components/nav/navbar";
import Projects from "@components/project";

const Layout = () => {
	return (
		<>
			<Meta />
			<div className='min-h-screen mx-auto max-w-screen-2xl bg-background text-foreground'>
				<Navbar />
				<Hero />
				<About />
				<Projects />
				<Contact />
				<Foooter />
			</div>
		</>
	);
};

export default Layout;
