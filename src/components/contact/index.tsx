import ContactForm from "./contact-form";

const Contact = () => {
	return (
		<>
			<h1
				id='contact'
				className='mt-10 text-3xl tracking-wide md:mt-12 md:text-4xl'
			>
				Contact
			</h1>
			<div className='flex justify-center px-6 md:px-0'>
				<span className='h-[1px] w-full md:w-[20rem] bg-foreground'></span>
			</div>
			<ContactForm />
		</>
	);
};

export default Contact;
