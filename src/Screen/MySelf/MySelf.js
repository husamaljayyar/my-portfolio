import About from "../About/About";
import Skiles from "../Skiles/Skiles";

export default function MySelf() {
  return (
    <div id="section2" className="h-auto w-screen flex flex-col items-center ">
      <div className="flex flex-col lg:flex-row items-center lg;justify-between justify-center h-auto my-10 lg:w-2/3 w-full ">
        <About />
        <Skiles />
      </div>
    </div>
  );
}
