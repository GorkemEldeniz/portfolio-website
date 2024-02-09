import type { ButtonProps } from "./ui/button";
import { Button } from "./ui/button";

interface LinkButtonProps extends ButtonProps {
	to: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, children }) => {
	const handleClick = () => {
		console.log(to);
	};

	return (
		<Button
			variant={to !== "#contact" ? "link" : "default"}
			size={to === "#contact" ? "lg" : "default"}
			onClick={handleClick}
			className='text-xl font-light md:text-2xl'
		>
			{children}
		</Button>
	);
};

export default LinkButton;
