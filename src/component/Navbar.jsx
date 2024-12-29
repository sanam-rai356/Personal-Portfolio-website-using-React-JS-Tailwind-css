import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav className="bg-black fixed top-0 left-0 z-50 w-full flex justify-between items-center main_padding py-2">
        <div>
          <Link
            to="test1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="Logo"
          >
            SANAM
          </Link>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-8 ">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-xl cursor-pointer shadow-md hover:shadow-[#DC709D] border-transparent  border-[3px]  hover:border-[#C441A1] py-2 px-4 rounded-full transition-all duration-200 hover:-translate-y-1  inline-block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-xl cursor-pointer shadow-md hover:shadow-[#DC709D] border-transparent  border-[3px]  hover:border-[#C441A1] py-2 px-4 rounded-full transition-all duration-200 hover:-translate-y-1  inline-block"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-xl cursor-pointer shadow-md hover:shadow-[#DC709D] border-transparent  border-[3px]  hover:border-[#C441A1] py-2 px-4 rounded-full transition-all duration-200 hover:-translate-y-1  inline-block"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-xl cursor-pointer shadow-md hover:shadow-[#DC709D] border-transparent  border-[3px]  hover:border-[#C441A1] py-2 px-4 rounded-full transition-all duration-200 hover:-translate-y-1  inline-block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <FaBars
          className="text-[35px] hover:text-[#B821E5] shadow-md hover:shadow-[#B821E5] cursor-pointer block md:hidden"
          onClick={() => setNav(true)}
        />

        {nav ? (
          <ul className="flex flex-col px-5 pt-12 bg-black shadow-md shadow-[#DC709D] w-[200px] sm:w-[300px] z-50 h-[100vh] absolute top-0 right-0 gap-8">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-xl cursor-pointer border-transparent  border-[3px]  hover:border-[#C441A1] py-2 shadow-md hover:shadow-[#DC709D] px-4 rounded-full transition-all duration-200 hover:-translate-y-1  inline-block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-xl cursor-pointer border-transparent  border-[3px]  hover:border-[#C441A1] py-2 px-4 shadow-md hover:shadow-[#DC709D] rounded-full transition-all duration-200 hover:-translate-y-1  inline-block"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-xl cursor-pointer border-transparent  border-[3px]  hover:border-[#C441A1] py-2 px-4 shadow-md hover:shadow-[#DC709D] rounded-full transition-all duration-200 hover:-translate-y-1  inline-block"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-xl cursor-pointer border-transparent  border-[3px]  hover:border-[#C441A1] py-2 px-4 shadow-md hover:shadow-[#DC709D] rounded-full transition-all duration-200 hover:-translate-y-1  inline-block"
              >
                Contact
              </Link>
            </li>
            <ImCross
              className="text-[35px] absolute hover:text-[#B821E5] right-6 top-6 cursor-pointer"
              onClick={() => setNav(false)}
            />
          </ul>
        ) : (
          ""
        )}
      </nav>
    </>
  );
};

export default Navbar;
