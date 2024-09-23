import Image from "next/image";
import { culturesType } from "../main/ThirdScreen";

export default function CultureCard({
  name,
  country,
  continent,
  img,
  year,
  content,
}: culturesType) {
  return (
    <div>
      <Image src={img} alt={name} />
    </div>
  );
}
