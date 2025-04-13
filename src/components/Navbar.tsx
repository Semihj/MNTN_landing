import { MdOutlineAccountCircle } from "react-icons/md";
import logo from "../../public/logo.svg"
type Props = {}


function Navbar({}: Props) {
  return (
 <div className="top-0 left-0 absolute mt-10 w-full z-50 text-white">
    <div className="px-6 lg:px-20 flex justify-between items-center w-full">
      <img src={logo} alt="" />
      <div className=" hidden lg:flex gap-[70px] text-white    items-center  ">
        <a href="#" className="hover:-translate-y-1 hover:text-[#FBD784] transition-all duration-300" >Equipment</a>
        <a href="#" className="hover:-translate-y-1 hover:text-[#FBD784] transition-all duration-300" >About Us</a>
        <a href="#" className="hover:-translate-y-1 hover:text-[#FBD784] transition-all duration-300" >Blog</a>
      </div>
      <div className="flex gap-2   items-center hover:text-[#FBD784] duration-300 cursor-pointer ">
        <MdOutlineAccountCircle className="text-2xl  " />
        <h1>Account</h1>
      </div>
    </div>
 </div>
  )
}

export default Navbar