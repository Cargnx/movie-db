import Image from "next/image";

export default function Cards({
  hasImage = false,
  image,
  alt,
  title,
  description,
}) {
  return (
    <a
      href="https://www.youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-accent-dark-gray rounded-lg shadow-lg bg-black w-[390px] overflow-hidden"
    >
      {hasImage && (
        <div className="relative w-full h-[250px] flex items-center justify-center">
          {image ? (
            <Image src={image} alt={alt} fill style={{ objectFit: "cover" }} />
          ) : (
            <Image
              src="/image-placeholder.svg"
              alt="Image Placeholder"
              width={100}
              height={200}
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      )}

      <div className="p-5 max-h-[150px] gap-4 flex flex-col">
        <span className="card-title block text-white line-clamp-2">
          {title}
        </span>
        <p className="card-description text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>
    </a>
  );
}
