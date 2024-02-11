import Menu from "./Menu";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
	return (
		<nav className='flex items-center px-[2rem] md:px-[4rem] py-9'>
			<div className='flex justify-start flex-1'>
				<a
					className='focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring'
					href='https://www.linkedin.com/in/g%C3%B6rkem-eldeniz-017886218/'
					target='blank'
				>
					<img
						className='object-cover w-12 h-12 rounded-full'
						src='../../profile.jpeg'
						alt='Profile'
					/>
				</a>
			</div>

			<Menu />

			<MobileMenu />
		</nav>
	);
};

export default Navbar;
