import logo from "../../public/Logo.svg";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="lg:mt-[270px] mt-40 w-full flex flex-col lg:flex-row justify-between z-50 px-5 gap-10 lg:pr-20 lg:pl-40 lg:pb-40 pb-20  h-full  ">
      <div className="flex flex-col  gap-5 ">
        <img src={logo} alt="" className="w-40" />

        <p className="max-w-[300px] leading-8 ">
          Get out there & discover your next slope, mountain & destination!
        </p>
        <p className="max-w-[400px] text-gray-400   justify-end leading-7 mt-5 lg:mt-10 ">
          Copyright 2025 MNTN, Inc. Terms & Privacy A concept not by{" "}
          <a
            href="https://portfolio-liart-three-72.vercel.app"
            target="_blank"
            referrerPolicy="no-referrer"
            className="underline"
          >
            Semih
          </a>
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10  ">
        <div className="flex flex-col gap-3 ">
          <a
            href="#"
            className="text-3xl cursor-pointer text-[#FBD784]   capitalize mb-5 "
          >
            More on the blog
          </a>
          <a href="#">About MNTN</a>
          <a href="#">Contributors & Writers</a>
          <a href="#">Write For Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="flex flex-col gap-3 ">
          <a
            href="#"
            className="text-3xl cursor-pointer text-[#FBD784]   capitalize mb-5 "
          >
            More on the MNTN
          </a>
          <a href="#">The Team</a>
          <a href="#">Jobs</a>
          <a href="#">Press</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
