import ig from "../../public/instagram.png";
import tw from "../../public/twitter.png";
type Props = {};

function Socials({}: Props) {
  return (
    <div className="hidden lg:flex flex-col absolute top-[30%] left-2 z-50  items-center  ">
      <p className="rotate-90  ">Follow Us</p>
      <a href="#">
        <img
          src={ig}
          alt=""
          className="w-4 h-4 object-cover cursor-pointer mt-14 "
        />
      </a>
      <a href="#">
        <img
          src={tw}
          alt=""
          className="w-4 h-4 object-cover cursor-pointer mt-7 "
        />
      </a>{" "}
    </div>
  );
}

export default Socials;
