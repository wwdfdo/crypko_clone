import React from "react";

const BannerOne = () => {
  return (
    <div className=" bg-white h-screen px-2 py-5">
      <ul className="flex justify-between absolute right-0 left-0 gap-10 pb-5  mx-10">
        <div className="pt-5 font-bold text-xl">Crypko</div>
        <div className="flex justify-center  gap-20 px-40 py-4  z-100  absolute right-0 left-1 w-2/3 mx-auto">
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

      <div className=" bg-cripko-bg bg-cover h-[95vh] w-full rounded-2xl ">
        <h1 className=" pt-[10%] pl-[10%] text-black font-semibold text-7xl leading-tighter">
          ANIME CHARACTER <br /> GENERATION
        </h1>
      </div>
    </div>
  );
};

export default BannerOne;
