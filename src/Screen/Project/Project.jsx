import dataSlider from "./dataSlider";
//import {MdOutlineOpenInNew} from "react-icons/lib/md"
import { MdOpenInNew } from "react-icons/md";

export default function MyProject() {
  return (
    
      
    <div className="container flex flex-col items-center  m-10 flex-wrap w-80  ">
    
    <h5 className="w-auto font-bold text-2xl border-Purple border-b-4 uppercase  mb-5 ">
    My Project
  </h5>

    <div className="flex flex-row justify-center items-center flex-wrap  ">
      {dataSlider.map((item) => (
        <div
          key={item.id}
          className=" flex-wrap h-auto rounded overflow-hidden shadow-lg m-2 bg-white" style={{width: "350px"}}
        >
          <img
            className="w-full h-56"
            src={item.image}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 flex flex-row justify-between">
            <p className="font-bold text-lg mb-2 ">{item.title}</p>
            <a href={item.link}>
              <MdOpenInNew
                style={{ fontSize: "25px" }}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
