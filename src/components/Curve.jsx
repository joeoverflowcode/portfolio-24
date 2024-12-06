import curve1 from "../public/images/curve-1.svg"
import curve2 from '../public/images/curve-2.svg'

export const LeftCurve = () => {
  return (
    <div className=" hidden absolute top-1/2 right-full w-[15rem] md:w-[20rem] -mt-1 mr-10 pointer-events-none lg:block">
      <img src={curve1} width={522} height={182} alt="Curve 1" />
    </div>
  );
};

export const RightCurve = () => {
    return (
      <div className=" hidden absolute top-1/2 left-full w-[25rem] -mt-1 ml-10 pointer-events-none lg:block">
        <img src={curve2} width={150} height={76} alt="Curve 2" />
      </div>
    );
  };
  