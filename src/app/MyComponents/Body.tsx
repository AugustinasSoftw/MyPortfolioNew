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

      <div className="relative bg-[url('/grid_background.png')] bg-center bg-repeat rounded-xl overflow-hidden">
        {/* Content */}

        {/* Top fade */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent pointer-events-none" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        {/* Left fade */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black to-transparent pointer-events-none" />

        {/* Right fade */}
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>

      <CurrentTechnologies />
      <div className="bg-black">
        <MyPortfolio />
      </div>
    </>
  );
}
