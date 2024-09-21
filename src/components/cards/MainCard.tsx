import Image from "next/image";

type MainCardType = {
  imageUrl: string;
  title: string;
  content: string;
};

export default function MainCard({ imageUrl, title, content }: MainCardType) {
  return (
    <div className="flex flex-col justify-between">
      <Image src={imageUrl} alt="image" width={108} height={108} />
      <p className="text-[3vh] font-bold leading-[4.5vh]">{title}</p>
      <p className="text-[2.25vh] leading-[3.75vh]">{content}</p>
      <h1 className="text-[2.25vh] text-[#18A0FB] font-bold cursor-pointer">LEARN MORE</h1>
    </div>
  );
}
