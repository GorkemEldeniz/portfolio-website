import { motion } from "framer-motion";

function Experience() {
	return (
		<section className='py-10 px-4 lg:py-14 bg-black'>
			<h1 className='text-white text-center text-custom-5xl lg:text-custom-7xl py-5'>
				My <span className='font-extrabold'>Experience</span>
			</h1>
			<ol className='flex flex-col gap-5 lg:gap-8'>
				<motion.li
					initial={{
						opacity: 0,
						x: 50,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: {
							duration: 1,
						},
					}}
					viewport={{ once: true }}
					className='px-6 py-7 space-y-7 text-white bg-zinc-800 rounded-lg'
				>
					<header className='block md:flex items-center'>
						<div className='flex items-center gap-7'>
							<img
								className='size-8 object-cover'
								src='/malwation-logo.jpeg'
								alt='Malwation Logo'
							/>
							<h2 className='text-custom-xl lg:text-custom-2xl font-semibold'>
								Intern Front end Developer at Malwation
							</h2>
						</div>
						<span className='text-zinc-300 block ml-auto mt-7 lg:mt-0 text-custom-base font-semibold'>
							June 2023 - Sep 2023
						</span>
					</header>
					<p className='text-custom-base text-zinc-300 !tracking-wider'>
						During my internship, I gained hands-on experience with HTML and CSS
						basics, DOM manipulation using JavaScript, and responsive web design
						techniques. I also became proficient in Git version control,
						ensuring efficient project management and collaboration.
						Additionally, I developed a solid understanding of basic web
						security principles and explored frontend frameworks to build
						dynamic and interactive user interfaces.
					</p>
				</motion.li>
				<motion.li
					initial={{
						opacity: 0,
						x: -50,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
						transition: {
							duration: 1,
						},
					}}
					viewport={{ once: true }}
					className='px-6 py-7 space-y-7 text-white border border-zinc-500 rounded-lg'
				>
					<header className='block md:flex items-center'>
						<div className='flex items-center gap-7'>
							<img
								className='size-8 object-cover'
								src='/bionluk-logo.png'
								alt='Bionluk Logo'
							/>
							<h2 className='text-custom-xl lg:text-custom-2xl font-semibold'>
								Freelance Front end Developer as Bionluk
							</h2>
						</div>
						<span className='text-zinc-300 block ml-auto mt-7 lg:mt-0 text-custom-base font-semibold'>
							2023 - Present
						</span>
					</header>
					<p className='text-custom-base text-zinc-300 !tracking-wider'>
						As a freelancer, I have gained valuable experience and expertise in
						frontend development. Working on various projects, I have honed my
						skills in HTML, CSS, and JavaScript to build responsive and
						user-friendly interfaces. I’ve worked with design tools like Figma,
						translating designs into pixel-perfect code, and have successfully
						collaborated with clients to deliver projects within tight
						deadlines. My freelancing journey has strengthened my
						problem-solving abilities and adaptability, allowing me to
						confidently handle different challenges and continuously improve my
						technical knowledge in frontend development.
					</p>
				</motion.li>
			</ol>
		</section>
	);
}

export default Experience;
