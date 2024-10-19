import { motion } from "framer-motion";
import { Icon, IconTypes } from "./ui/icon";

function Skills() {
  const icons = [
    "Python",
    "Javascript",
    "Git",
    "Typescript",
    "Html5",
    "React",
    "Next",
    "Css",
    "Tailwind",
    "Nodejs",
  ];

  return (
    <section id="skills" className="px-4 lg:px-8 mt-10 lg:mt-14">
      <h1 className="text-custom-5xl lg:text-custom-7xl text-center py-5">
        My <span className="font-bold">Skills</span>
      </h1>
      <ol className="py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {icons.map((icon, index) => (
          <motion.li
            transition={{
              duration: 0.8,
              delay: index / 10,
            }}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            key={index}
            className="transition-all  aspect-video border border-1 rounded-[4px] flex flex-col gap-8 justify-center  py-2 items-center bg-white"
          >
            <Icon
              icon={icon.toLocaleLowerCase("en") as IconTypes}
              className="size-14"
            />
            <p className="text-custom-2xl">{icon}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

export default Skills;
