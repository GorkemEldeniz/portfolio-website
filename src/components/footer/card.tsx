import type { IconType } from "react-icons";

interface FooterCardProps {
	name: string;
	Icon: IconType;
	link: string;
}

const FooterCard = ({ name, link, Icon }: FooterCardProps) => {
	return (
		<a
			aria-label={name}
			href={link}
			target='_blank'
			className='flex items-center justify-center w-8 h-8 rounded-full md:w-10 md:h-10 bg-foreground'
		>
			<Icon className='w-5 h-5 fill-background' />
		</a>
	);
};

export default FooterCard;
