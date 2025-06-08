import Image from "next/image";
import TechTag from "./TechTag";
import { ArrowUpRightIcon } from "lucide-react";

type ProjectCardProps = {
  title: string;
  image: string;
  tech: string[];
  url: string;
};

export default function ProjectCard({
  title,
  image,
  tech,
  url,
}: ProjectCardProps) {
  return (
    <div className="bg-zinc-800 rounded-xl shadow p-5 h-full relative ">
      <div>
        <div className="overflow-hidden rounded-md mb-4">
          <Image
            src={image}
            alt={title}
            width={800}
            height={300}
            className="rounded-md object-cover h-[450px]"
          />
        </div>
        <h3 className="text-xl p-2 font-semibold mb-2 text-white">{title}</h3>

        <div className="flex flex-wrap max-w-sm gap-2">
          {tech.map((t) => (
            <TechTag key={t} name={t} />
          ))}
        </div>
      </div>

      {/* BUTTON: positioned bottom-right */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 transition text-white p-2 rounded-md w-12 h-12 flex items-center justify-center"
      >
        <ArrowUpRightIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
