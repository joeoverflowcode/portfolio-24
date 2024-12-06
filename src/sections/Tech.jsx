import React from 'react'
import { Element } from 'react-scroll'
import {tech, stack} from '../constants'
import { LeftCurve, RightCurve } from '../components/Curve.jsx'



const Tech = () => {
  return (
    <section className='mt-80 md:mt-2'>
        <Element name='tech stack'>
            <div className='container md:flex'>

            <div className="max-w-[25rem]">
          <h2 className="h3 mb-4 md:mb-4">
            Technologies I use everyday
          </h2>

          <ul className="max-w-[40rem] mb-10 md:mb-14">
            {stack.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={`${import.meta.env.BASE_URL}/images/check.svg`} width={20} height={24} alt="check" />
                  <h6 className="base-bold ml-5 text-p4">{item.title}</h6>
                </div>
                {item.text && (
                  <p className=" mt-3 small-3">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          {/* <Button>Contact Today</Button> */}
        </div>



        <div className="lg:ml-auto xl:w-[38rem] ">

        {/* <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            I consistently strive to improve my skillset
            </p> */}

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-gray-800 rounded-full -translate-x-1/2 scale:75 md:scale-100 mt-20">
            <div className="flex w-60 aspect-square m-auto border border-gray-800 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.1rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                  <img
                    src={`${import.meta.env.BASE_URL}/images/tech.png`}
                    width={100}
                    height={50}
                    alt="joe"
                    className='rounded-full'
                    />
                </div>
              </div>
            </div>

            <ul>
              {tech.map((app, index) => (
                <li
                key={app.id}
                className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                  index * 45
                }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-black border border-gray-500 rounded-xl -rotate-${
                      index * 45
                    }`}
                    >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                      />
                  </div>
                </li>
              ))}
            </ul>
          
                      <LeftCurve/>
                      <RightCurve />
          </div>
              {/* <img src={`${import.meta.env.BASE_URL}/images/curve-1.svg`}/>
            <img src={`${import.meta.env.BASE_URL}/images/curve-2.svg`}/> */}

        </div>
</div>
        </Element>
    </section>
  )
}

export default Tech