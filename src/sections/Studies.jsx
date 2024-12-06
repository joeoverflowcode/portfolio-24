import React from "react";
import { Element } from "react-scroll";
import { studies  } from "../constants";
import Button from "../components/Button";
import Gradient  from "../components/Gradient";

const Studies = () => {
  return (
    <section className="mt-40 overflow-hidden">
    <Element name="case studies">
      <div className="container">
        <h3 className="h4 mb-10 md:mb-4">Case Studies</h3>
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">

        {studies.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.5 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-black"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-[#0E0C15] rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={`${import.meta.env.BASE_URL}/images/grid.png`}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <h1>{"[ "}{item.date}{" ]"}</h1>

                    <div className="flex items-center px-4 py-1 bg-white rounded text-black">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? "./images/check-02.svg " : "./images/loading-01.svg"}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h5 mb-2"><span className=" "> </span>{item.title}</h4>
                  <p >{item.text}</p>
                  <Button markerfill="#EAEDFF"
             containerClassName="text-[#EAEDFF] mt-2 md:mt-6">Read More</Button>
                </div>
              </div>
            </div>
          );
        })}
<Gradient/>

        </div>
      </div>
    </Element>
  </section>
  );
};

export default Studies;
