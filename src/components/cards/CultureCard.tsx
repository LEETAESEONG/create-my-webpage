import Image from "next/image";
import { culturesType } from "../main/ThirdScreen";

export default function CultureCard({
  name,
  country,
  img,
  year,
  content,
}: culturesType) {
  return (
    <div className="h-[52vh] w-[24vw] bg-[#d9d9d9] rounded-[10px] px-[2.5vh] pt-[2vh]">
      <div className="flex justify-between mb-[1vh] text-[2vh]">
        <p className="font-bold">{`${country}, ${name}`}</p>
        <p>{year}</p>
      </div>
      <div className="relative w-full h-[29vh] mb-[2.5vh]">
        <Image
          src={img}
          alt={name}
          fill
          className="rounded-[5px] mb-[2.5vh]"
          sizes="100%"
        />
      </div>
      <div className="w-full h-[12.5vh] text-[1.75vh] overflow-y-auto scrollbar-hide">
        <p>{content}</p>
      </div>
    </div>
  );
}
