import { motion } from "framer-motion";
import { Icon } from "./ui/icon";

function Banner() {
  const title =
    "Hello I'am Gorkem Eldeniz Frontend Developer Based In Turkey.".split(" ");

  const text =
    "I have been working in the frontend development for more than 3 years. On this path, which I started by learning html and css, I am currently working on javascript frameworks (React,Vue). I'm learning css frameworks and technologies such as tailwind, styled-component, scss, module-css also learning ssr frameworks like Next js to become a full stack developer. Most of the time I do freelance work to improve myself.".split(
      " "
    );

  return (
    <section className="px-8 flex flex-col lg:flex-row lg:items-center relative">
      <article className="lg:py-5 z-10">
        <header className="space-y-4  text-custom-5xl lg:text-custom-7xl">
          <h1>
            {title.map((el, i) => (
              <motion.span
                className={i > 1 ? "font-extrabold" : undefined}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </h1>
        </header>
        <p className="text-custom-base text-zinc-500 mt-8 !tracking-wider lg:max-w-[70ch]">
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
      </article>
      <motion.img
        transition={{ duration: 0.4, delay: 0.2, type: "spring", bounce: 0.7 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="-order-1 mb-12 lg:mb-0 lg:order-1 object-contain"
        src="/Banner.svg"
        alt="Banner Image"
      />

      <ol className="flex mt-8 gap-8 py-1 lg:absolute md:-bottom-7 md:left-8">
        <li>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            href="https://github.com/GorkemEldeniz"
            target="_blank"
            className="flex items-center justify-center aspect-square p-4 rounded-[4px] bg-black border-2"
          >
            <Icon
              viewBox="0 0 20 20"
              className="size-5 fill-white"
              icon="github"
            />
          </motion.a>
        </li>
        <li>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            href="https://twitter.com/eldeniz_gorkem"
            target="_blank"
            className="flex items-center justify-center aspect-square p-4 rounded-[4px] bg-white border-2"
          >
            <Icon
              viewBox="0 0 20 20"
              className="stroke-black fill-black size-5"
              icon="twitter"
            />
          </motion.a>
        </li>
        <li>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            href="https://www.linkedin.com/in/g%C3%B6rkem-eldeniz-017886218/"
            target="_blank"
            className="flex items-center justify-center aspect-square p-4 rounded-[4px] bg-white border-2"
          >
            <Icon viewBox="0 0 20 20" className="size-5" icon="linkedin" />
          </motion.a>
        </li>
        <li>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            href="mailto:gorkemeldeniz30@gmail.com"
            target="_blank"
            className="flex items-center justify-center aspect-square p-4 rounded-[4px] bg-white border-2"
          >
            <Icon className="size-5" icon="gmail" />
          </motion.a>
        </li>
      </ol>
    </section>
  );
}

export default Banner;
