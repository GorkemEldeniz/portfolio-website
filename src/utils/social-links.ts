import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialLinks = [
	{
		name: "twitter",
		Icon: FaTwitter,
		link: "https://twitter.com/eldeniz_gorkem",
	},
	{
		name: "linkedin",
		Icon: FaLinkedin,
		link: "https://www.linkedin.com/in/g%C3%B6rkem-eldeniz-017886218",
	},
	{
		name: "github",
		Icon: FaGithub,
		link: "https://github.com/GorkemEldeniz",
	},
	{
		name: "gmail",
		Icon: SiGmail,
		link: "mailto:gorkemeldeniz30@gmail.com",
	},
	{
		name: "instagram",
		Icon: FaInstagram,
		link: "https://www.instagram.com/gorkemeldeniz",
	},
] as const;

export default socialLinks;
