import TechStackCard from "./CurrentTechnologiesComponents/TechStackCard";

const stack = [
  {
    icon: "/icons/typescripts.png",
    title: "TypeScript",
    subtitle: "JavaScript but better",
  },
  { icon: "/icons/react.png", title: "React", subtitle: "JavaScript Library" },
  { icon: "/icons/next.jpg", title: "NextJS", subtitle: "React framework" },
  { icon: "/icons/tailwind.png", title: "Tailwind", subtitle: "CSS framework" },
  { icon: "/icons/git.png", title: "Git", subtitle: "Version control" },
  { icon: "/icons/supabase.png", title: "Supabase", subtitle: "Backend tool" },
];

export default function CurrentTechnologies() {
  return (
    <section
      className="w-full px-6 py-20 flex flex-col items-center bg-black text-white"
      id="About"
    >
      <div className="max-w-6xl w-full text-left mb-12">
        <h2 className="text-4xl font-extrabold">Current technologies</h2>
        <p className="mt-4 text-gray-300 max-w-2xl">
          I'm proficient in a range of modern technologies that empower me to
          build highly functional solutions. These are some of my main
          technologies.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {stack.map((item) => (
          <TechStackCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
