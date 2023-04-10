import React from "react";
import "./Banner.css";
import crypkoGirl from "../../images/crypkogirl.png";
import crypkogirlboy from "../../images/crypkogirlboy.png";
import circle from "../../images/circle.png";
import { IoIosAppstore } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=" bg-white h-screen px-2 py-5">
      <ul className="flex justify-between absolute right-0 left-0 gap-10 pb-5 bg-[#ed3b4b]  mx-20">
        <div className="mt-5 font-bold text-xl text-black z-[100]">Crypko</div>
        <div className="flex justify-center  gap-20 px-40 py-4  z-100 nav-list absolute right-0 left-1 w-[70%] mx-auto font-bold">
          <li>Home</li>
          <li>Gallery</li>
          <li>World</li>
          <li>Roadmap</li>
          <li>More</li>
          <li>Buy</li>
        </div>
        <div className="mt-5 z-[100] ">
          <ul className="flex   items-center ">
            {/* <div className="h-6 w-[3px] bg-white"></div> */}

            <li className="tracking-[.1825rem] font-bold text-[0.9rem] px-3 h-8 text-center rounded-md flex items-center cursor-pointer uppercase ">
              <AiFillTwitterCircle size={24} />
            </li>
            <li className="tracking-[.1825rem] font-bold text-[0.9rem] px-3 h-8 text-center rounded-md flex items-center cursor-pointer uppercase ">
              <AiFillInstagram size={24} />
            </li>
            <li className="tracking-[.1825rem] font-bold text-[0.9rem] px-3 h-8 text-center rounded-md flex items-center cursor-pointer uppercase ">
              <FaDiscord size={24} />,
            </li>
          </ul>
        </div>
      </ul>

      <div className=" bg-[#ed3b4b] h-[95vh] w-full rounded-2xl flex flex-col relative ">
        <div className="flex justify-between w-full">
          <div className="flex flex-col w-3/5 ">
            <h1 className="mt-20 pl-[10%] text-white font-bold text-8xl leading-tighter tracking-wider">
              The Outlaw's Last Ride
            </h1>
            <img
              src={circle}
              className="w-[200px] absolute right-[40%] bottom-[30%] self-end"
              alt=""
            />
          </div>
          <div>
            <img
              src={crypkoGirl}
              className="w-[300px] top-10 right-40 absolute"
              alt=""
            />
          </div>
          '
        </div>
        <div className="flex">
          <div>
            <img
              src={crypkogirlboy}
              className="w-[600px] absolute bottom-0 left-20 "
              alt=""
            />
          </div>
          <div className="w-[600px] absolute bottom-10 right-10 rounded-2xl p-5 flex flex-col tabs tab-left-right">
            <div>
              <h3>SMARTPHONE APP MEMES</h3>
            </div>
            <div className="content">
              <p>
                The smartphone application MEMES, where Crypko serves as the
                core technology behind, is now available in Apple App Store &
                Google Play
              </p>
              <div className="flex justify-between w-full">
                <div className="flex relative">
                  <IoIosAppstore className="w-[30px] h-[30px] bg-green-800 rounded-full" />
                  <FaGooglePlay className="w-[30px] h-[30px] bg-green-800 rounded-full -ml-2" />
                </div>
                <div className="border-2 border-black rounded-3xl flex items-center">
                  <span className="px-5">download</span>
                  <div className="bg-green-700 h-[30px] rounded-full w-[30px] flex items-center justify-center">
                    <HiDownload />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
