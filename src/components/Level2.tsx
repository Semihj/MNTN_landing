import { FaArrowRightLong } from "react-icons/fa6";
import level2 from "../../public/level2.png";
type Props = {};

function Level2({}: Props) {
  return (
    <div className="text-white flex flex-col-reverse z-50  lg:justify-between lg:flex-row-reverse w-full h-max lg:mt-20   px-5 lg:px-[120px]    ">
      <div className="flex flex-col  items-center w-full  mt-10 lg:mt-[100px] lg:pl-20 z-50      ">
        <div className=" flex flex-col gap-4 lg:gap-8  ">
          <div className="flex items-center w-full justify-start gap-3 relative  ">
            <h1 className="absolute top-0 left-0 lg:left-[-100px] lg:top-[-150px] text-[200px] opacity-90  text-gray-700 -z-10   ">
              02
            </h1>
            <div className="flex items-center gap-4 ">
              <span className="h-[1.6px] w-20 bg-[#FBD784] "></span>
              <p className="text-[#FBD784]  uppercase   tracking-widest lg:tracking-[5px]">
                Hiking Essentials
              </p>
            </div>
          </div>
          <p className=" text-4xl lg:text-[60px] leading-[110%]  z-10 ">
            Picking the right Hiking Gear!
          </p>
          <p className="  lg:text-lg  lg:leading-8 ">
            The nice thing about beginning hiking is that you don’t really need
            any special gear, you can probably get away with things you already
            have. Let’s start with clothing. A typical mistake hiking beginners
            make is wearing jeans and regular clothes, which will get heavy and
            chafe wif they get sweaty or wet.
          </p>
                  <a href="#" className="text-[#FBD784]    text-lg flex items-center gap-2  lg:gap-4" >read more <FaArrowRightLong className="text-2xl  " /></a>
          
        </div>
      </div>
      <div className="w-full">
        <img
          src={level2}
          alt=""
          className="lg:w-[450px] w-[300px] h-[370px] lg:h-[95vh] object-cover "
        />
      </div>
    </div>
  );
}

export default Level2;
