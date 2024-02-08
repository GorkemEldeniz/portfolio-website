import Hero from "@components/hero";
import Navbar from "@components/navbar";

const Layout = () => {
	return (
		<div className='min-h-screen mx-auto max-w-screen-2xl bg-background text-foreground'>
			<Navbar />
			<Hero />
			<Hero />
			<Hero />
		</div>
	);
};

export default Layout;
