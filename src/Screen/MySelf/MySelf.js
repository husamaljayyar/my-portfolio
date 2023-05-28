import About from "../About/About";
import Skiles from "../Skiles/Skiles";

export default function MySelf() {
  return (
    <div id="section2" className="flex flex-col items-center justify-center m-10 flex-wrap w-full">
      <div className="w-2/3 max-w-screen-2xl flex flex-row justify-between  ">
        <About />
        <Skiles />
      </div>
    </div>
  );
}
