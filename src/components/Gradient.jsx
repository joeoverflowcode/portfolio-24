import gradient from "../public/images/gradient.png";

const Gradient = () => {
  return (
    <div className="absolute bottom-1/2 left-1/2 w-[60rem] mix-blend-color-dodge pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[60rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        <img
          className="w-full"
          src={gradient}
          width={942}
          height={942}
          alt="Gradient"
        />
        </div>
      </div>
  );
};

export default Gradient