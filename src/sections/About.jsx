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
              <div className="relative min-w-[400px]">
              <h1 className="h3 md:h2">About Joe</h1>
                <p className="body-1 mt-4 mb-10">Lorem ipsum odor amet, consectetuer adipiscing elit. Maximus habitasse aptent et, consectetur etiam ullamcorper ridiculus finibus euismod. Sollicitudin et lobortis fringilla semper ligula. Nulla odio a tortor vel feugiat mi diam congue. <br/><br/>Nibh fringilla scelerisque pharetra litora sociosqu dapibus. Litora proin nisl; elementum ex viverra proin. Nulla aptent consequat dignissim fermentum leo enim finibus. </p>
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
