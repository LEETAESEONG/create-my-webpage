"use client";
import React, { useState } from "react";

export default function ThirdScreen() {
  const continents = ["All", "Asia", "Europe", "America", "Oceania"];
  const centuries = ["1000", "1300", "1700", "2000"];
  const [pickContinent, setPickContinent] = useState<number>(0);
  const [pickCentury, setPickCentury] = useState<boolean[]>(
    Array.from({ length: 4 }, () => true)
  );
  const [pickCount, setPickCount] = useState<number>(0);
  const clickContinent = (index: number) => {
    setPickContinent(index);
  };
  const clickCentury = (index: number) => {
    // 이미 선택된 상자를 클릭했을 경우 : 초기화
    if (pickCentury[index]) {
      setPickCentury(Array.from({ length: 4 }, () => false));
      setPickCount(0);
    } else {
      // 선택되지 않은 상자를 클릭했을 경우
      // 하나 만 선택 된 경우
      if (pickCount === 0) {
        setPickCentury(
          Array.from({ length: 4 }, (_, si) => {
            if (si === index) {
              return true;
            }
            return false;
          })
        );
        setPickCount(1);
      } else {
        // 두 개를 선택한 경우
        // 좌 우로 true가 있는지 확인
        for (let i = 0; i < index; i++) {
          if (pickCentury[i]) {
            // 왼쪽에 있기 때문에 왼쪽부터 현 위치까지 true
            setPickCentury(
              Array.from({ length: 4 }, (_, ni) => {
                if (i <= ni && ni <= index) {
                  return true;
                }
                return false;
              })
            );
            return;
          }
        }
        for (let j = index + 1; j < 4; j++) {
          if (pickCentury[j]) {
            setPickCentury(
              Array.from({ length: 4 }, (_, ji) => {
                if (index <= ji && ji <= j) {
                  return true;
                }
                return false;
              })
            );
            return;
          }
        }
        return;
      }
    }
  };
  return (
    <div className="w-full h-[100vh] px-[4.76vw] pt-[15vh] pb-[10vh]">
      <h1 className="mb-[4vh] text-[6vh] leading-[72px]">
        Duis tincidunt ut ligula vitae mollis.
      </h1>
      {/* 필터 */}
      <div className="mb-[4vh] flex gap-5">
        <div
          className="flex justify-between items-center w-[24vw] h-[6.25vh] min-w-[360px]
                    rounded-[3.125vh] px-[5px] border-black border-opacity-50 border-[1px]"
        >
          {continents.map((e, idx) => {
            return (
              <div
                key={e}
                className={`h-[5vh] flex justify-center items-center rounded-[3.125vh]
                  cursor-pointer
                  ${idx === 0 ? "px-[15px]" : "px-[12px]"}
                  ${idx === pickContinent ? "bg-black" : null}`}
                onClick={() => clickContinent(idx)}
              >
                {/* 클릭 시 흰색 검은 배경 */}
                <h1
                  className={`text-[2vh] ${
                    idx === pickContinent ? "text-white" : null
                  }`}
                >
                  {e}
                </h1>
              </div>
            );
          })}
        </div>
        <div
          className="flex justify-between items-center w-[24vw] h-[6.25vh] rounded-[3.125vh] px-[5px]
                  border-black border-opacity-50 border-[1px]"
        >
          {centuries.map((e, idx) => {
            return (
              <React.Fragment key={"fragment" + e + idx}>
                {idx > 0 ? (
                  // 양쪽 idx가 true면 이 막대기도 색도 변경
                  <div
                    className={`grow h-[1.25vh] ${
                      pickCentury[idx] && pickCentury[idx - 1]
                        ? "bg-black"
                        : "bg-[#999999]"
                    }`}
                  ></div>
                ) : null}
                <div
                  className={`flex-none size-[5vh] flex justify-center items-center rounded-full cursor-pointer ${
                    pickCentury[idx] ? "bg-black" : "bg-[#999999]"
                  }`}
                  onClick={() => {
                    clickCentury(idx);
                  }}
                >
                  <h1 className={`text-[1.75vh] text-white`}>{e}</h1>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {/* 슬라이더 */}
      <div></div>
    </div>
  );
}
