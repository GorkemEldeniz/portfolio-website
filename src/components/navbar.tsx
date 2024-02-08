import Menu from "./Menu";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
	return (
		<nav className='flex items-center px-[2rem] md:px-[4rem] py-9'>
			<div className='flex justify-start flex-1'>
				<h1 className='text-2xl font-bold md:text-3xl'>Name</h1>
			</div>

			<Menu />

			<MobileMenu />
		</nav>
	);
};

export default Navbar;
