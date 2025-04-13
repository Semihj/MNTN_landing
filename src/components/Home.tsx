import mg from "../../public/mg.png";
import hg from "../../public/hg.png";
import vg from "../../public/vg.png";
import { useEffect, useState } from "react";
type Props = {};

export default function Home({}: Props) {
  const [hgTrans, setHgTrans] = useState(0);
  const [mgTrans, setMgTrans] = useState(0);
  const [vgTrans, setVgTrans] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const speedMultiplier = 0.05; // Adjust this for the desired parallax speed
      const maxHgTranslate = 60; // Adjust these maximum translation values as needed
      const maxMgTranslate = 30;
      const maxVgTranslate = 10;
      const triggerPoint = 500; // Adjust this value to the scrollY position where you want the effect to stop

      if (scrollY <= triggerPoint) {
        setHgTrans(Math.min(scrollY * speedMultiplier, maxHgTranslate));
        setMgTrans(Math.min(scrollY * speedMultiplier, maxMgTranslate));
        setVgTrans(Math.min(scrollY * speedMultiplier, maxVgTranslate));
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" max-h-[1000px] flex flex-col  ">
    
      <img
        src={hg}
        alt=""
        className="h-[600px] md:h-auto w-full absolute top-0 left-0 object-cover md:object-fill object-[30%_50%]  will-change-transform z-0 brightness-50 "
        style={{
          transform: `translate3d(0px,-${hgTrans}%,0px) scale3d(1,1,1) rotateY(0deg) rotateZ(0deg) rotateX(0deg) skew(0deg,0deg) `,
          transformStyle: "preserve-3d",
        }}
      />
      <img
        src={mg}
        alt=""
        className="h-[600px] md:h-auto w-full absolute object-cover top-[45%] md:top-[30%] lg:top-[40%] z-0 left-0 brightness-75 object-[30%_50%] "
        style={{
          transform: `translate3d(0px,-${mgTrans}%,0px) scale3d(1,1,1) rotateY(0deg) rotateZ(0deg) rotateX(0deg) skew(0deg,0deg) `,
          transformStyle: "preserve-3d",
        }}
      />
      <img
        src={vg}
        alt=""
        className="h-[600px] md:h-auto w-full absolute  object-cover top-[67%] md:top-[45%] lg:top-[60%] left-0 right-0 bottom-0  inline-block align-middle z-50 object-[30%_50%] sm:object-[50%_0%] "
        style={{
          transform: `translate3d(0px, -${vgTrans}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) `,
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
}
