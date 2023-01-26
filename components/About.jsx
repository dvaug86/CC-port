import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-9">
        <div className="col-span-2">
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className="'py-4'">Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Right here is where my future bio would go with a brief history of
            me. I was civil/structural engineer as well as carpenter decided to
            take my wanning passion for the construction world and start
            pursuing my love of tech and code.
          </p>
          <p className='py-2 text-gray-600'>
            I decided then that I wanted take my love of designing buildings and
            merge that with my love of code and persue a path in coding.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400  rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={AboutImg} />
        </div>
      </div>
    </div>
  );
};

export default About;
