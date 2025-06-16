import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { Icon } from "./ui/icon";

// Define project type
interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  link: string;
  github: string;
}

// Projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Kelime Oyunu",
    description:
      'The app, "Kelime Oyunu," is a web-based game designed to enhance users\' Turkish vocabulary through an engaging and interactive learning experience. It features various gameplay mechanics',
    images: ["/kelimeoyunu-1.png", "/kelimeoyunu-2.png", "/kelimeoyunu-3.png"], // Update with your actual image paths
    link: "https://kelimeoyunu.net.tr/", // Update with actual link
    github: "https://github.com/GorkemEldeniz/Kelime-Oyunu",
  },
  {
    id: 2,
    title: "Admin Dashboard for Music Campaign Management System",
    description:
      "A powerful admin dashboard for managing music campaigns, built with modern web technologies. It includes features for campaign creation, management, and analytics.",
    images: [
      "/music-campaign-dashboard-1.png",
      "/music-campaign-dashboard-2.png",
      "/music-campaign-dashboard-3.png",
    ],
    link: "https://music-campaign-admin-dashboard.vercel.app",
    github: "https://github.com/GorkemEldeniz/Music-Campaign-Admin-Dashboard",
  },
  {
    id: 3,
    title: "Hypershop e-commerce web site",
    description:
      "E-commerce interface developed using modern web technologies. It features a responsive design, product listings, and a shopping cart system.",
    images: ["/hypershop-1.png", "/hypershop-2.png", "/hypershop-3.png"],
    link: "https://hyper-teknoloji-sandy.vercel.app/",
    github: "https://github.com/GorkemEldeniz/Hyper-Teknoloji",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-5 px-8 bg-black text-white py-10 lg:py-14"
    >
      <h1 className="text-custom-5xl lg:text-custom-7xl text-center py-5">
        My <span className="font-extrabold">Projects</span>
      </h1>

      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
              x: isEven ? 50 : -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className={`py-5 flex flex-col lg:flex-row items-center gap-7 lg:gap-10`}
          >
            {isEven ? (
              // Even numbered projects (0, 2, 4...) - Carousel on left, Details on right
              <>
                <ProjectCarousel images={project.images} />
                <ProjectDetails
                  number={String(project.id).padStart(2, "0")}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  github={project.github}
                />
              </>
            ) : (
              // Odd numbered projects (1, 3, 5...) - Details on left, Carousel on right
              <>
                <ProjectDetails
                  number={String(project.id).padStart(2, "0")}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  github={project.github}
                />
                <ProjectCarousel images={project.images} />
              </>
            )}
          </motion.div>
        );
      })}
    </section>
  );
}

// Separate components for better organization
function ProjectCarousel({ images }: { images: string[] }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="flex items-center justify-center"
          >
            <div className="flex items-center justify-center w-full h-72 md:h-96 max-w-full">
              <img
                className="object-contain max-h-72 md:max-h-96 w-auto h-auto max-w-full rounded-lg shadow-lg bg-zinc-900"
                src={image}
                alt={`Project Image ${index + 1}`}
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function ProjectDetails({
  number,
  title,
  description,
  link,
  github,
}: {
  number: string;
  title: string;
  description: string;
  link: string;
  github: string;
}) {
  return (
    <article className="w-full flex flex-col gap-7">
      <h2 className="font-extrabold text-custom-5xl lg:text-custom-7xl">
        {number}
      </h2>
      <h3 className="text-custom-2xl lg:text-custom-4xl font-bold">{title}</h3>
      <p className="text-zinc-500 !leading-3 text-custom-base">{description}</p>
      <div className="flex gap-4">
        <a href={link} target="_blank" title="Live Demo">
          <Icon
            viewBox="0 0 20 20"
            className="size-5 cursor-pointer"
            icon="read-more"
          />
        </a>
        <a href={github} target="_blank" title="View Code">
          <Icon
            viewBox="0 0 24 24"
            className="size-5 cursor-pointer fill-white"
            icon="github"
          />
        </a>
      </div>
    </article>
  );
}

export default Projects;
