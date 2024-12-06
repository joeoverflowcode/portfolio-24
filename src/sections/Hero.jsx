import { Element, Link, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";
import Download from "../components/Download";
import Contact from "../components/Contact";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-28 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <p className="caption small-2 uppercase ">
              Based in Dallas, Texas
            </p>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-2 max-md:text-5xl max-md:leading-12">
              Web Developer
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-8">Hi, I'm Joe, I help companies achieve their web development and technology goals. <br />
            {/* results-driven, <br/> */}
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <Download />
          <Contact />
          </div>

             {/* <LinkScroll to="features" offset={-100} spy smooth>
              <Button 
              icon={`${import.meta.env.BASE_URL}/images/download.svg`}
              className="">Resume</Button>
             </LinkScroll> */}

          </div>
          <div className="absolute -top-32 left-[calc(50%-360px)] w-[1230px] pointer-events-none hero-img_res">
            <img src={`${import.meta.env.BASE_URL}/images/hero03.png`} className="size-1230"/>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
