import MainCard from "../cards/MainCard";
import profile1 from "../../public/profiles/profile1.png";
import profile2 from "../../public/profiles/profile2.png";
import profile3 from "../../public/profiles/profile3.png";

const profiles = [
  {
    imageUrl: profile1.src,
    title: "Sed ut perspiciatis",
    content:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
  },
  {
    imageUrl: profile2.src,
    title: "Lorem ipsum dolor",
    content:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
  {
    imageUrl: profile3.src,
    title: "Nemo enim ipsam",
    content:
      "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
  },
];

export default function FirstScreen() {
  return (
    <div className="w-[100vw] h-[100vh] px-[4.76vw] flex flex-col justify-center">
      <div className="pb-[8.75vh]">
        <h1 className="text-[6vh] leading-[9vh] w-[44.6vw]">
          Snap photos and share like <br /> never before
        </h1>
      </div>
      <div className="grid gap-5 grid-cols-3 h-[44vh] w-full">
        {/* profiles data 랜덤 정렬 */}
        {profiles
          .sort(() => Math.random() - 0.5)
          .map((e) => {
            return (
              <MainCard
                key={e.title}
                imageUrl={e.imageUrl}
                title={e.title}
                content={e.content}
              />
            );
          })}
      </div>
    </div>
  );
}
