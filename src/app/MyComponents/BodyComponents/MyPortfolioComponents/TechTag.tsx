type TechTagProps = {
  name: string;
};

export default function TechTag({ name }: TechTagProps) {
  return (
    <span className="px-3 py-1 text-sm rounded-md bg-neutral-800 text-white border border-neutral-700">
      {name}
    </span>
  );
}
