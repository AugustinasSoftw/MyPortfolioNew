import CurrentTechnologies from "./BodyComponents/CurrentTechnologies";
import MyPortfolio from "./BodyComponents/MyPortfolio";

export default function Body() {
  return (
    <>
      <div className="bg-[url('/projects/grid_background.png')] bg-repeat bg-center shadow-[inset_0_0_100px_#000000]">
        <div className=" w-screen h-screen flex items-center justify-center flex-col -mt-14 ">
          <strong>
            <p className="text-white mb-4 uppercase text-sm font-semibold tracking-wide">
              {" "}
              Based In Lithunia
            </p>
          </strong>
          <h1 className="text-white text-7xl font-bold">
            Quality <span className="text-blue-500">Design & Web</span>
            <br /> <span className="text-blue-500">Development</span> Synergy
          </h1>
          <p className="text-gray-400 mt-7 font-bold text-base">
            Hi, I'm Augustinas, I&apos;m currently exploring depths of
            FullStack.
          </p>
        </div>
      </div>

      <CurrentTechnologies />
      <div className="bg-black">
        <MyPortfolio />
      </div>
    </>
  );
}
