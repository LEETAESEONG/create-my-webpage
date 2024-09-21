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
      <div className="absolute inset-0 z-50 py-[19vh] px-[4.76vw] flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-[3vh] font-bold text-white leading-[4.5vh]">
            Sed ut perspiciatis unde omnis
          </p>
          <p className="text-center text-[2.25vh] text-white opacity-80 leading-[3.75vh]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don{"'"}t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn{"'"}t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary.
          </p>
          <p className="text-center text-[1.75vh] text-white opacity-60 leading-[2.75vh]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore.
          </p>
        </div>
        {/* input에 포커스가 걸리면 div의 색이 바뀜 
            처음엔 흰색(포커스 없음) 
            => 포커스가 있을 때 유효성 검사 
            => valid일 때 초록색 아니면 빨강색
            => 빨강색일 때 종이비행기 opacity 50%
            글씨 전부 exo 2 크기 16 => 2vh
            제목만 bold
            please는 light 
            유효 : #00C300
            무효: #FF6633
            input
            높이: 6.25vh
            너비: 30vw
        */}
        <div>
          <h1 className="text-[2vh]">Subscribe to our newsletter</h1>
          <div>
            <input type="email" className="w-[30vw]" />
          </div>
          <h1>Please enter a valid email</h1>
        </div>
      </div>
    </div>
  );
}
