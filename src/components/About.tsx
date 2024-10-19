import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function About() {
  const title = "About Me".split(" ");
  const textFirst =
    "Hi, it's me Gorkem, I live in Gaziantep/Turkey and I am 26 years old.In 2018, I qualified for the electrical and electronics engineering at Cukurova University. After 2 years, I decided to progress in the field of software and switched to the Web Design department at Anadolu University. Since then I have been improving myself by attending bootcamps and taking courses.".split(
      " "
    );
  const textSecond =
    "Since 2020, I have been working as a web developer. As a freelancer, I have developed my soft skills by working on different projects and interacting with various clients. With my passion and skills in frontend development, I am always open to new challenges while focusing on delivering innovative and impressive solutions in every project.".split(
      " "
    );

  return (
    <section id="aboutme" className="block xl:flex items-center gap-10 px-8">
      <motion.img
        transition={{ duration: 0.4, delay: 0.2, type: "spring", bounce: 0.7 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src="/AboutMe.svg"
        alt="About Me Image"
      />
      <article className="flex flex-col gap-5">
        <h1 className="py-5 text-custom-5xl lg:text-custom-7xl font-normal">
          {title.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              className={cn({
                "font-extrabold": i == 1,
              })}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </h1>
        <p className="text-zinc-500 !tracking-wider text-custom-base !leading-3">
          {textFirst.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 40,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </p>
        <p className="text-zinc-500 !tracking-wider text-custom-base !leading-3">
          {textSecond.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 40 + 1.5,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </p>
      </article>
    </section>
  );
}

export default About;
