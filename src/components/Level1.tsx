import level1 from "../../public/level1.png";
import { FaArrowRightLong } from "react-icons/fa6";
type Props = {};

function Level1({}: Props) {
  return (
    <div className="text-white flex flex-col-reverse z-50  lg:justify-between lg:flex-row w-full h-max   px-5 lg:px-[120px]    ">
      <div className="flex flex-col mt-10 lg:mt-[150px] gap-4 lg:gap-8 w-full z-50   ">
        <div className="flex items-center justify-start w-full gap-3 relative">
        <h1 className="absolute top-[-100px] left-[-70px] lg:left-[-100px] lg:top-[-150px]  text-[200px] opacity-90  text-gray-700 -z-10   " >01</h1>

          <span className="h-[1.6px] w-20 bg-[#FBD784] "></span>
          <p className="text-[#FBD784]  uppercase   tracking-widest lg:tracking-[5px]">
            Get Started
          </p>
        </div>
        <p className=" text-4xl lg:text-[60px] lg:max-w-[70%] leading-[110%]  z-10 ">What level of hiker are you?</p>
        <p className=" lg:max-w-[70%] lg:text-lg  lg:leading-8 " >
          Determining what level of hiker you are can be an important tool when
          planning future hikes. This hiking level guide will help you plan
          hikes according to different hike ratings set by various websites like
          All Trails and Modern Hiker. What type of hiker are you – novice,
          moderate, advanced moderate, expert, or expert backpacker?
        </p>
        <a href="#" className="text-[#FBD784]    text-lg flex items-center gap-2  lg:gap-4" >read more <FaArrowRightLong className="text-2xl  " /></a>
      </div>
      <img
        src={level1}
        alt=""
        className="lg:w-[600px] w-[300px] h-[370px] lg:h-[95vh] object-cover "
      />
    </div>
  );
}

export default Level1;
