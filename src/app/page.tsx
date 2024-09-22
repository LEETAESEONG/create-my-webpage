import FirstScreen from "../components/main/FirstScreen";
import SecondScreen from "../components/main/SecondScreen";
import ThirdScreen from "../components/main/ThirdScreen";

export default function Home() {
  return (
    <div className="w-full h-[300vh]">
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
    </div>
  );
}
