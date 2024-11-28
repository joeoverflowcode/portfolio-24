import React from 'react'
import { Element } from 'react-scroll'
import {tech} from '../constants'


const Tech = () => {
  return (
    <section>
        <Element name='tech stack'>
            <div className='container'>



        <div className="lg:ml-auto xl:w-[38rem] mt-4">

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-gray-800 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-gray-800 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.1rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-black rounded-full">
                  <img
                    src={`${import.meta.env.BASE_URL}/images/joe.svg`}
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

            {/* <img src={`${import.meta.env.BASE_URL}/images/curve-1.svg`}/> */}
            {/* <img src={`${import.meta.env.BASE_URL}/images/curve-2.svg`}/> */}
          </div>
        </div>
</div>

        </Element>
    </section>
  )
}

export default Tech