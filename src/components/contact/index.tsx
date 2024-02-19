import ContactForm from "./contact-form";

const Contact = () => {
	return (
		<div className='flex flex-col gap-10 sm:px-[3.75rem] py-[1.5rem] font-light text-center relative'>
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
		</div>
	);
};

export default Contact;
