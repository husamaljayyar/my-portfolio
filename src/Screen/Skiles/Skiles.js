export default function Skiles() {
  return (
    <>
      <div className=" w-auto h-auto flex flex-col items-center   ">
        <p
          className="font-bold text-2xl border-indigo-500 border-b-4 uppercase my-5  
             text-center"
        >
          Skiles
        </p>
        <div className=" w-auto h-auto ">
          <div className="flex flex-row justify-between ">
            <p className="skils-section">
              Html5 <br /> CSS3
            </p>
            <p className="skils-section">
              {" "}
              JavaScript <br />
              EcmaScript
            </p>
            <p className=" skils-section">React</p>{" "}
          </div>
          <div className="flex flex-row justify-between items-center text-center">
            <p className=" skils-section">React Hooks</p>
            <p className=" skils-section">
              Redux <br />
              Redux-thunk
            </p>
            <p className="skils-section">
              Git <br /> GitHub
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="skils-section">
              Styled
              <br /> Component
            </p>

            <p className="skils-section">Material UI</p>
            <p className="skils-section">Tailwind CSS</p>
          </div>
        </div>
      </div>
    </>
  );
}

