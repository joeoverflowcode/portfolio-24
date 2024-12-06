import { projects1 } from "../constants/index"
import Project from "../components/Project";
import { Element } from "react-scroll";
import Gradient from "../components/Gradient";

const Projects = () => {
  return (
    <section>
      <Element name="projects">
      <div className="">
      <h1 className="h4 mt-20 container">My Projects</h1>

      <div className=" mx-auto max-w-[1440px] relative flex flex-col py-8 lg:mb-10 xl:mb-20">
        <div className="hide-scrollbar flex h-[440px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[500px] xl:h-[640px]">
        {projects1.map(({id, image, name, date, text, tech}) => (
          <Project 
          key={id}
          image={image}
          name={name}
          date={date}
          text={text}
          tech={tech}

          />
        ))}


        </div>
<Gradient/>
      </div>
      </div>
      </Element>
    </section>
  );
};

export default Projects;