import { motion } from "framer-motion";
import Form from "./Form";
import Link from "./Link";

function Contact() {
	const title = "Let's talk for Something special".split(" ");
	const text =
		"I seek to push the limits of creativity to create high-engaging,user-friendly, and memorable interactive experiences.".split(
			" "
		);

	return (
		<section id='contactme' className='px-4 my-10 lg:my-14'>
			<div className='lg:px-8 block lg:flex justify-between'>
				<Form />

				<article className='lg:w-[50%] flex flex-col justify-center text-black'>
					<div className='mb-8 lg:mb-10'>
						<h1 className='mb-5'>
							{title.map((el, i) => (
								<motion.span
									className='text-custom-5xl lg:text-custom-7xl font-extrabold'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 0.25,
										delay: i / 10,
									}}
									key={i}
								>
									{el} {i == 2 ? <br /> : undefined}
								</motion.span>
							))}
						</h1>
						<p className='text-zinc-500 text-custom-base !leading-3 !tracking-wider'>
							{text.map((el, i) => (
								<motion.span
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 0.25,
										delay: i / 50 + 0.5,
									}}
									key={i}
								>
									{el}{" "}
								</motion.span>
							))}
						</p>
					</div>

					<Link
						target='_blank'
						href='mailto:gorkemeldeniz30@gmail.com'
						className='text-custom-xl lg:text-custom-3xl font-semibold mb-4'
						text='gorkemeldeniz30@gmail.com'
					/>
				</article>
			</div>
		</section>
	);
}

export default Contact;
