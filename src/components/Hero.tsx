import { useEffect, useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
type Props = {};

function Hero({}: Props) {
  const [opacity, setOpacity] = useState(1)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speedMultiplier = 0.003; // Adjust for desired parallax speed
      const startOpacity = 1;       // Initial opacity
      const minOpacity = 0;         // Minimum opacity
      const triggerPoint = 500;     // ScrollY position where the effect starts/ends
  
      if (scrollY <= triggerPoint) {
        // Calculate the new opacity, decreasing as scrollY increases
        const newOpacity = Math.max(startOpacity - (scrollY * speedMultiplier), minOpacity);
        setOpacity(newOpacity);
      } else {
        // Optionally set a fixed opacity after the trigger point
        setOpacity(minOpacity); // Or any other desired fixed opacity
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col top-[16%]  p-6 z-40  lg:p-20 fixed w-full justify-center items-center  " style={{willChange:"opacity",opacity:`${opacity}`}} >
      <div className="flex flex-col max-w-3xl lg:gap-7 ">
        <div className="flex items-center gap-4 w-max mb-5">
          <span className="h-[1.6px] w-[60px] bg-[#FBD784] "></span>
          <p className="text-[#FBD784] uppercase   tracking-widest lg:tracking-[5px] ">
            A Hiking guide
          </p>
        </div>
        <h1 className="text-[47px] lg:text-[60px] leading-none text-white  capitalize   lg:tracking-[3px]  ">
          Be prepared for the Mountains and beyond!
        </h1>
        <div className="mt-10 lg:mt-0">
          <a href="#content" className="text-white text-lg flex g items-center ">scroll down <IoIosArrowRoundDown className="text-4xl" /></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
