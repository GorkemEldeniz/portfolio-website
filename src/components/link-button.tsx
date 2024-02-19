import cn from "@utils/cn";
import type { ButtonProps } from "./ui/button";
import { Button } from "./ui/button";

interface LinkButtonProps extends ButtonProps {
	to: string;
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, children, setOpen }) => {
	return (
		<Button
			onClick={() => {
				if (setOpen) {
					document.body.style.overflow = "auto";
					setOpen(false);
				}
			}}
			asChild
			variant={to !== "#contact" ? "link" : "default"}
			size={to === "#contact" ? "lg" : "default"}
			className='relative text-xl font-light md:text-2xl'
		>
			<a
				className={cn({
					"link-btn": to !== "#contact",
				})}
				href={to}
			>
				{children}
			</a>
		</Button>
	);
};

export default LinkButton;
