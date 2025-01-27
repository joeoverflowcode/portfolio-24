import React from "react";
import { Element } from "react-scroll";
import Download from "../components/Download";
import Contact from "../components/Contact";

const About = () => {
  return (
    <section>
      <Element name="about">
        <div className="flex flex-col w-full h-full overflow-hidden py-24 container ">
        {/* <h1 className="h3 md:h2 block lg:hidden">About Joe</h1> */}
          <div className=" w-full h-full flex flex-col items-center lg:flex-row">
            <div className="items-center ">
              <img
                src="./images/about.png"
                alt="about"
                className="max-w-[1500px] object-contain pb-10 w-[400px] lg:w-[540px]"
              />
            </div>

            <div className="z-20 flex flex-col container ">
              <div className="relative min-w-[340px]">
              <h1 className="h3 md:h2">About Joe</h1>
                <p className="body-3 mt-4 mb-10">Hi, I’m Joe, I’m a web developer based out of Dallas, Texas. I’m passionate about finding ways that people and software can work together to make life better. I’m currently working on a few freelance projects for client’s in the DFW and NYC area.  
                  <br /><br />
                  I bring over 12+ years of professional experience working in Financial Services and Business Administration to the Technology sector. This experience has given me various skills but more importantly the capability to work individually or with teams in order to meet customer needs and company objectives.
                  <br /><br />
                  As a developer, I enjoy finding solutions that help bridge the gaps between business objectives and technology. I value user-friendly projects that try to solve real-world problems. I’m always looking for ways to give back to the various communities that have supported me over the years.  
                  <br/><br/>
                  Outside of development work, I find inspiritation spending time with my family, and being outdoors. My hunger and curiosity for life drive me to experience as much as I can with the time that is given to me. This ambition hopefully can be seen with the type of work and experiences I produce.
                  </p>
                <div className="flex gap-4 items-center lg:justify-center">
            <Download />
          <Contact />
          </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default About;
