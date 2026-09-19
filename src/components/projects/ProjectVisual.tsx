import Image from "next/image";
export function ProjectVisual({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="project-visual">
      <Image
        src={image}
        alt={`${title} project screenshot`}
        fill
        sizes="(max-width: 700px) 100vw, 50vw"
      />
    </div>
  );
}
