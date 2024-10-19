import { motion } from "framer-motion";
import { Icon } from "./ui/icon";

function Footer() {
  return (
    <motion.footer
      transition={{ duration: 0.4, delay: 0.2, type: "stiffness", bounce: 0.7 }}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      className="bg-black text-white py-5 lg:py-6 flex items-center justify-between px-4 lg:px-8"
    >
      <div className="flex items-center gap-2 lg:gap-3">
        <Icon
          viewBox="0 0 40 40"
          className="size-7 lg:size-10 stroke-white fill-white"
          icon="logo"
        />
        <h1 className="text-custom-base lg:text-custom-xl font-bold">
          Personal
        </h1>
      </div>
      <div className="flex flex-col lg:gap-3 text-right">
        <p className="font-semibold text-custom-sm lg:text-custom-base">
          &copy; {new Date().getFullYear()} Gorkem Eldeniz.
        </p>
        <p className="font-semibold text-custom-sm lg:text-custom-base">
          All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
