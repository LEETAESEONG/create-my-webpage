// import { getRandomImg } from "@/src/utils/get-random-img";

import Image from "next/image";

export default function SecondScreen() {
  // const getRandomImg()
  return (
    <div className="relative w-[100vw] h-[100vh] bg-slate-300">
      <Image
        // 현재 이미지로 테스트중
        src="https://images.unsplash.com/photo-1726687676612-c745a9ef9c21?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNTAyMTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjY4OTkxNjh8&ixlib=rb-4.0.3&q=85"
        alt="ddddd"
        className="z-0 object-cover"
        fill={true}
        style={{
          objectFit: "cover",
        }} // 이미지의 비율을 유지하면서 화면을 채움
        loading="lazy"
      />
      <div className="absolute size-full bg-black z-1 opacity-50"></div>
      <div className="absolute inset-0 z-50 flex flex-col justify-center items-center py-[19vh] px-[4.76vw]">
        <p className="text-center text-[3vh] font-bold text-white leading-[4.5vh]">
          Sed ut perspiciatis unde omnis
        </p>
        <p className="text-center text-[2.25vh] text-white opacity-80 leading-[3.75vh]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don{"'"}t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn{"'"}t anything embarrassing hidden in the middle
          of text. All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary.
        </p>
        <p className="text-center text-[1.75vh] text-white opacity-60 leading-[2.75vh]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore.
        </p>
      </div>
    </div>
  );
}
