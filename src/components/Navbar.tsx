import { cn } from "@/lib/utils";

import useIsScrolling from "@/hooks/useIsScrolling";
import { useScreen } from "@/hooks/useScreen";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";

type Tabs = "aboutme" | "skills" | "projects" | "contactme" | null;

const links = [
  { name: "About Me", to: "aboutme" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact Me", to: "contactme" },
] as {
  name: string;
  to: Tabs;
}[];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

function Navbar() {
  const [currentTab, setCurrentTab] = useState<Tabs>(null);

  const isScrolling = useIsScrolling();
  const isSmallScreen = useScreen(768);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open && isSmallScreen);

    return () => document.body.classList.remove("overflow-hidden");
  }, [open, isSmallScreen]);

  return (
    <motion.nav
      transition={{
        duration: 0.4,
        delay: 0.2,
        type: "stiffness",
        bounce: 0.7,
      }}
      initial={{ opacity: 0, y: "-100%" }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      className={cn(
        "transition-all rounded-b-md sticky top-0 left-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 p-4 md:px-8 md:py-6 flex justify-between items-center",
        {
          "shadow-md": isScrolling,
        }
      )}
    >
      <div className="flex gap-3 items-center">
        <Icon icon="logo" viewBox="0 0 40 40" className="size-10" />
        <h1 className="font-bold text-custom-xl">Personal</h1>
      </div>
      <ol className="hidden md:flex gap-8">
        {links.map(({ name, to }, i) => (
          <li key={i}>
            <motion.a
              className={cn(
                "text-black text-custom-base lg:text-custom-xl font-semibold cursor-pointer hover:text-neutral hover:underline",
                {
                  "text-neutral underline": currentTab === to,
                }
              )}
              key={i}
              href={`#${to}`}
              variants={itemVariants}
              onClick={() => setCurrentTab(to)}
            >
              {name}
            </motion.a>
          </li>
        ))}
      </ol>

      <Button asChild className="group hidden md:inline-flex">
        <a href="/Gorkem_Eldeniz_Full_Stack_Web_Developer_Resume.pdf" download>
          Resume{" "}
          <Icon
            viewBox="0 0 20 20"
            className="stroke-white fill-black group-active:stroke-black group-active:fill-white size-5"
            icon="download"
          />
        </a>
      </Button>

      <AnimatePresence>
        {isSmallScreen && (
          <Button
            className="w-10 h-10 border-none relative focus:outline-none bg-white"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`bg-black block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  open ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`bg-black block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`bg-black block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  open ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </Button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && isSmallScreen && (
          <motion.aside
            className="absolute top-0 left-0 w-2/3 h-screen bg-white p-4"
            initial={{
              opacity: 0,
              x: "-100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "-100%",
              transition: {
                duration: 0.4,
                delay: 0.2,
                type: "stiffness",
                bounce: 0.7,
              },
            }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Personal</h2>
            </div>
            <motion.div
              className="flex flex-col gap-4 h-full pl-2"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to }, index) => (
                <motion.a
                  className="w-fit hover:underline hover:text-neutral"
                  key={index}
                  href={`#${to}`}
                  variants={itemVariants}
                  onClick={() => setOpen(false)}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
