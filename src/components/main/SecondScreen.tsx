"use client";
import { getRandomImg } from "@/src/utils/get-random-img";
import { useEffect, useState } from "react";
import Image from "next/image";
import plane from "../../public/input/send_icon.png";

export default function SecondScreen() {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadImg() {
      try {
        const src = await getRandomImg();
        setImgSrc(src);
        setLoading(false); // 이미지가 로딩되었을 때 로딩 상태를 false로 설정
      } catch (error) {
        console.error("Failed to load image:", error);
        setLoading(false);
      }
    }
    loadImg();
  }, []);

  return (
    <div className="relative w-full h-[100vh] bg-slate-300">
      {loading ? (
        <p>Loading...</p> // 로딩 중일 때 표시
      ) : (
        imgSrc && ( // imgSrc가 null 또는 빈 문자열이 아닐 때만 이미지 렌더링
          <Image
            src={imgSrc}
            alt="background image"
            className="z-0 object-cover"
            fill={true}
            style={{
              objectFit: "cover",
            }}
            priority={true} // 중요한 이미지로 우선 로드
          />
        )
      )}
      <div className="absolute size-full bg-black z-1 opacity-50"></div>
      <div className="absolute inset-0 z-2 py-[19vh] px-[4.76vw] flex flex-col justify-between">
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-[3vh] mb-[3vh] font-bold text-white leading-[4.5vh]">
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
          <hr className="my-[4vh] w-full white" />
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
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[2vh] text-white mb-[2vh] font-bold">
            Subscribe to our newsletter
          </h1>
          <div className="relative h-[6.25vh] w-[30vw]">
            {/* Blur 처리할 배경 div */}
            <div className="absolute inset-0 bg-white opacity-10 z-0 blur-2.5"></div>

            {/* Input field와 오류 메시지를 같은 부모로 묶음 */}
            <input
              type="email"
              className="relative w-full h-full pl-4 pr-[6.25vh] text-white bg-transparent 
                      placeholder:text-white placeholder:font-exo_2
                        z-1 text-[2vh] outline-none border-white border-[1px] rounded-[7px] peer
                      focus:valid:border-green-500
                      focus:invalid:border-red-500
                        "
              required
              placeholder="Enter your email"
            />

            {/* peer-invalid 클래스 사용: input이 invalid 상태일 때 표시 */}
            <h1
              className="absolute top-full left-0 px-4 pt-[1vh] w-full text-[2vh] text-[#FF6633] 
                          invisible peer-focus:peer-invalid:visible"
            >
              Please enter a valid email
            </h1>

            {/* 비행기 */}
            <div className="flex absolute right-0 top-0 z-2 justify-center items-center h-full aspect-square
                           peer-focus:peer-valid:cursor-pointer peer-focus:peer-invalid:opacity-50">
              <Image
                src={plane}
                alt="비행기"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
