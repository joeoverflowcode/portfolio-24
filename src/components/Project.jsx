import clsx from "clsx";
import React, { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import Button from "./Button";

const Project = ({ id, image, name, date, text, tech }) => {
  return (
    <div
    className={`relative h-full w-full min-w-[620px] lg:min-w-[800px] bg-cover bg-no-repeat`}
    >
    <img
      src={image}
      alt={``}
      className="absolute inset-0 w-full h-full object-cover lg:rounded-[60px] 2xl:rounded-[60px] opacity-40"
    />
      <div className="absolute inset-0 flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 border-2 border-p3 lg:rounded-[60px] 2xl:rounded-[60px]">
        <div className="flex gap-4 w-full h-full">
          <div className="absolute flex flex-col w-1/2">
            <img src="./images/feature-1.png" className="w-16 lg:w-20 " />
            <h1 className="flex h5 lg:h4 ">{name}</h1>
            <p className="body-1">{date}</p>
            <p className="">{text}</p>
          </div>
        </div>


        <div className="flex justify-between w-1/2 md:w-full gap-6">
            <span className="flex -space-x-4 overflow-hidden items-center">
              {tech.map((icon, id) => (
                <div
                  key={id}
                  className="bg-black border-2 border-white rounded-full flex items-center justify-center w-12 h-12 p-1 m-1"
                >
                  <img
                    src={icon.icon}
                    alt={id}
                    width={icon.width}
                    className="inline-block items-center "
                  />
                </div>
              ))}
            </span>
            
            <div className="flex items-center">

            <Button markerfill="#EAEDFF"
             containerClassName="text-[#EAEDFF] hidden lg:block">View Project</Button>
            </div>
       
            
        </div>
        <Button markerfill="#EAEDFF"
             containerClassName="text-[#EAEDFF] mt-6 block lg:hidden">View Project</Button>
      </div>
    </div>
  );
};

export default Project;
