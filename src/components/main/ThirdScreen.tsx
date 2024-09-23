"use client";
import React, { useCallback, useEffect, useState, useMemo } from "react";

// 문화유산 이미지
import pica from "../../public/cultures/pica.jpg";
import sagrada_família from "../../public/cultures/sagrada_família.jpg";
import fallingwater from "../../public/cultures/fallingwater.jpg";
import saint_basils_cathedral from "../../public/cultures/saint_basil's_cathedral.jpg";
import CultureCard from "../cards/CultureCard";

// 타입
export type culturesType = {
  name: string;
  country: string;
  continent: string;
  img: string;
  year: number;
  content: string;
};

// 문화유산 데이터
const cultures = [
  {
    name: "Pica",
    country: "Italy",
    continent: "Europe",
    img: pica,
    year: 1173,
    content:
      "The Leaning Tower of Pisa, or simply the Tower of Pisa (torre di Pisa), is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation. The tower is one of three structures in the Pisa's Cathedral Square (Piazza del Duomo), which includes the cathedral and Pisa Baptistry.",
  },
  {
    name: "Sagrada Família",
    country: "Spain",
    continent: "Europe",
    img: sagrada_família,
    year: 1882,
    content: `The Basílica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Família, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world. Designed by Catalan architect Antoni Gaudí (1852-1926), in 2005 his work on Sagrada Família was added to an existing (1984) UNESCO World Heritage Site, "Works of Antoni Gaudí". On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica.`,
  },
  {
    name: "Fallingwater",
    country: "US",
    continent: "America",
    img: fallingwater,
    year: 1935,
    content: `Fallingwater is a house designed by the architect Frank Lloyd Wright in 1935. Situated in the Mill Run section of Stewart township, in the Laurel Highlands of southwest Pennsylvania, about 70 miles (110 km) southeast of Pittsburgh in the United States, it is built partly over a waterfall on the Bear Run river. The house was designed to serve as a weekend retreat for Liliane and Edgar J. Kaufmann, the owner of Pittsburgh's Kaufmann's Department Store.`,
  },
  {
    name: "Saint Basil's Cathedral",
    country: "Russia",
    continent: "Asia",
    img: saint_basils_cathedral,
    year: 1683,
    content:
      "The Cathedral of Vasily the Blessed (Russian: Co6op бВасилия Блаженного, romanized: Sobor Vasiliya Blazhennogo), known in English as Saint Basil's Cathedral, is an Orthodox church in Red Square of Moscow, and is one of the most popular cultural symbols of Russia.",
  },
];

export default function ThirdScreen() {
  // 컴포넌트 내에서
  const centuries = useMemo(() => [1000, 1300, 1700, 2000], []); // 빈 배열로 인해 한 번만 계산됨
  const continents = useMemo(
    () => ["All", "Asia", "Europe", "America", "Oceania"],
    []
  ); // 빈 배열로 인해 한 번만 계산됨
  const [currentCountries, setCurrentCountries] = useState(cultures);
  const [pickContinent, setPickContinent] = useState<number>(0);
  const [pickCentury, setPickCentury] = useState<boolean[]>(
    Array.from({ length: 4 }, () => true)
  );
  const [pickCount, setPickCount] = useState<number>(0);

  // 국가 선택 함수
  const clickContinent = (index: number) => {
    setPickContinent(index);
  };
  // 건설 년도 선택 함수
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
  // 필터로 걸러주는 함수
  const checkValid = useCallback(() => {
    let minCen = 10000;
    let maxCen = 0;

    // pickCentury 배열에서 선택된 세기의 최소, 최대값을 찾습니다.
    for (let i = 0; i < 4; i++) {
      if (pickCentury[i]) {
        minCen = Math.min(minCen, centuries[i]);
        maxCen = Math.max(maxCen, centuries[i]);
      }
    }

    const currentCon = continents[pickContinent];

    const newCultures = cultures.filter((e) => {
      return (
        minCen <= e.year &&
        e.year <= maxCen &&
        (currentCon === "All" || e.continent === currentCon)
      );
    });

    setCurrentCountries(newCultures);
  }, [pickContinent, pickCentury, centuries, continents]);

  useEffect(() => {
    checkValid();
  }, [checkValid]); // checkValid 의존성에 추가

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
      <div className="flex gap-10">
        {currentCountries.length > 0 ? (
          currentCountries.map((e) => {
            return (
              <CultureCard
                key={e.name}
                name={e.name}
                year={e.year}
                continent={e.continent}
                content={e.content}
                country={e.country}
                img={e.img.src}
              />
            );
          })
        ) : (
          <div className="w-full h-[52vh] flex justify-center items-center">
            <h1 className="font-bold text-[4vh]">
              There are no items matching the conditions.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
