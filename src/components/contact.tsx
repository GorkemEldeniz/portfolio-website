import ContactForm from "./contact-form";

const Contact = () => {
	return (
		<>
			<h1 className='text-3xl tracking-wide md:text-4xl'>Contact</h1>
			<div className='flex justify-center px-6 md:px-0'>
				<span className='h-[1px] w-full md:w-[20rem] bg-foreground'></span>
			</div>
			<ContactForm />
		</>
	);
};

export default Contact;
