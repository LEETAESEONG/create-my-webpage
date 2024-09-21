// import { getRandomImg } from "@/src/utils/get-random-img";

import Image from "next/image";

export default function SecondScreen() {
  // const getRandomImg()
  return (
    <div className="relative w-[100vw] h-[100vh] bg-slate-300">
      <Image
        // 현재 이미지로 테스트중
        src=""
        alt="ddddd"
        className="z-0 object-cover"
        layout="fill" // 이미지가 부모 요소를 채우도록 설정
        objectFit="contain" // 이미지의 비율을 유지하면서 화면을 채움
      />
      <div className="absolute inset-0 z-50 flex justify-center items-center py-[19vh] px-[4.76vw]">
        <p className="text-center">Sed ut perspiciatis unde omnis</p>
      </div>
    </div>
  );
}
