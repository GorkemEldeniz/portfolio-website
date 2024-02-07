import Hero from "@components/hero";
import Navbar from "@components/navbar";

const Layout = () => {
	return (
		<div className='min-h-screen max-w-screen-2xl mx-auto bg-background text-foreground'>
			<Navbar />
			<Hero />
		</div>
	);
};

export default Layout;
