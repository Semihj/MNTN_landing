import { FaArrowRightLong } from "react-icons/fa6";
import level3 from "../../public/level3.png";
type Props = {};

function Level3({}: Props) {
  return (
    <div className="text-white flex flex-col-reverse z-50  lg:justify-between lg:flex-row w-full h-max lg:mt-20  px-5 lg:px-[120px]    ">
      <div className="flex flex-col mt-20 lg:mt-[100px] gap-4 lg:gap-8 w-full z-50   ">
        <div className="flex items-center justify-start w-full gap-3 relative">
          <h1 className="absolute top-[-100px] left-[-70px] lg:left-[-100px] lg:top-[-150px]  text-[200px] opacity-90  text-gray-700 -z-10   ">
            03
          </h1>

          <span className="h-[1.6px] w-20 bg-[#FBD784] "></span>
          <p className="text-[#FBD784]  uppercase   tracking-widest lg:tracking-[5px]">
            where you go is the key
          </p>
        </div>
        <p className=" text-4xl lg:text-[60px] lg:max-w-[70%] leading-[110%]  z-10 ">
          Understand Your Map & Timing
        </p>
        <p className=" lg:max-w-[70%] lg:text-lg  lg:leading-8 ">
          To start, print out the hiking guide and map. If it’s raining, throw
          them in a Zip-Lock bag. Read over the guide, study the map, and have a
          good idea of what to expect. I like to know what my next landmark is
          as I hike. For example, I’ll read the guide and know that say, in a
          mile, I make a right turn at the junction..
        </p>
               <a href="#" className="text-[#FBD784]    text-lg flex items-center gap-2  lg:gap-4" >read more <FaArrowRightLong className="text-2xl  " /></a>
       
      </div>
      <img
        src={level3}
        alt=""
        className="lg:w-[600px] w-[300px] h-[370px] lg:h-[95vh] object-cover "
      />
    </div>
  );
}

export default Level3;
