import Image from "next/image";

type TechStackCardProps = {
  icon: string; // path to icon image (from public/)
  title: string;
  subtitle: string;
};

export default function TechStackCard({
  icon,
  title,
  subtitle,
}: TechStackCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-md bg-neutral-900 text-white border border-neutral-700 shadow-md hover:scale-[1.02] transition">
      <Image src={icon} alt={title} width={32} height={32} />
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}
