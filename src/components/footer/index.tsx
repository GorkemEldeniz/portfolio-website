import FooterCard from "./card";

import socialLinks from "@utils/social-links";

const Foooter = () => {
	return (
		<div className='flex justify-center gap-6 mt-10 md:mt-12'>
			{socialLinks.map((link) => (
				<FooterCard key={link.name} {...link} />
			))}
		</div>
	);
};

export default Foooter;
