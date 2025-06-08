import ProjectCard from "./MyPortfolioComponents/ProjectCard";
const projects = [
  {
    title: "Habit Tracker",
    image: "/projects/habit-tracker.png",
    tech: ["TypeScript", "React", "Supabase", "TailwindCSS"],
    url: "https://habit-tracker-u8ok.vercel.app/",
  },
  {
    title: "Portfolio Builder",
    image: "/projects/portfolio-builder.png",
    tech: ["JavaScript", "React", "NodeJS", "MongoDB", "ExpressJS"],
    url: "https://portfolio-builder-dun.vercel.app/",
  },
  {
    title: "E-Com",
    image: "/projects/ecom.png",
    tech: ["JavaScript", "React", "ExpressJS", "Vite"],
    url: "https://e-comm-vert-psi.vercel.app/",
  },
];

export default function MyPortfolio() {
  return (
    <section
      className="w-full px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 "
      id="Projects"
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  );
}
