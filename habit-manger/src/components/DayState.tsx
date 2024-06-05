import Image from "next/image";

export default function DayState({ day }: { day: boolean | undefined }) {
  let image: [string, string, number?] = [
    "/images/gray-mark.svg",
    "gray mark",
    12,
  ];

  switch (day) {
    case undefined:
      image = ["/images/gray-mark.svg", "gray mark", 12];
      break;
    case true:
      image = ["/images/green-mark.svg", "green mark", 24];
      break;
    case false:
      image = ["/images/red-mark.svg", "red mark", 24];
      break;
  }

  const [src, alt, size] = image;

  return (
    <div className="flex items-center justify-center h-9">
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  );
}
