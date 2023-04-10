import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className=" bg-white h-screen px-2 py-5">
      <ul className="flex justify-between absolute right-0 left-0 gap-10 pb-5 bg-[#117f95]  mx-20">
        <div className="pt-5 font-bold text-xl">Crypko</div>
        <div className="flex bg-white gap-10 p-5 rounded-br-xl rounded-bl-xl">
          <li>Guideline</li>
          <li>Faq</li>
          <li>Contact Us</li>
          <li>Discord</li>
          <li>Twitter</li>
        </div>
        <div className="mt-5 ">
          {" "}
          <span className="bg-white px-5 py-2 rounded-3xl">Join Us</span>
        </div>
      </ul>

      <div className=" bg-[#117f95] h-[95vh] w-full rounded-2xl ">
        <h1 className=" pt-[10%] pl-[10%] text-white font-extrabold text-6xl leading-tighter">
          ANIME CHARACTER <br /> GENERATION
        </h1>
      </div>
    </div>
  );
}

export default App;
