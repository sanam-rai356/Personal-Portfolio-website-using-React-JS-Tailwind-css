import { FaEnvelope, FaMobile } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section id="contact" className="main_padding pt-48 pb-10">
        <div>
          <div className="text-center mb-[90px]  text-6xl font-semibold">
            <h3 className="mainH3">Get In Touch</h3>
          </div>
          {/* first section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-4xl font-[500]">Let's Talk</h4>
              <p className="text-lg mt-4 mb-7 leading-8 text-gray-400">
                I am currently available for an internship, <br /> so feel free
                to send a message. <br /> You can contact anytime
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex gap-3 items-center">
                  <FaEnvelope className="text-3xl text-gray-300" />
                  <span className="text-lg text-gray-300">
                    rais68578@gmail.com
                  </span>
                </div>

                <div className="flex gap-3 items-center">
                  <FaMobile className="text-3xl text-gray-300" />
                  <span className="text-lg text-gray-300">9843580606</span>
                </div>

                <div className="flex gap-3 items-center">
                  <FaLocationDot className="text-3xl text-gray-300" />
                  <span className="text-lg text-gray-300">
                    Balkumari, Lalitpur
                  </span>
                </div>
              </div>
            </div>

            <div>
              <form className="w-full flex flex-col gap-6">
                <div>
                  <label className="text-xl text-gray-300 ">Fullname</label>
                  <input
                    className="w-full bg-[#32323C] mt-3 text-lg px-3 py-4 rounded-md focus:outline-none"
                    type="text"
                    placeholder="Enter Fullname"
                  />
                </div>

                <div>
                  <label className="text-xl text-gray-300 ">Email</label>
                  <input
                    className="w-full bg-[#32323C] mt-3 text-lg px-3 py-4 rounded-md focus:outline-none"
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>

                <div>
                  <label className="text-xl text-gray-300 ">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-[#32323C] resize-none mt-3 text-lg px-3 py-4 rounded-md focus:outline-none"
                    placeholder="Enter Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-800 text-xl text-white py-4 rounded-lg"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          {/* second section */}
        </div>

        <div className="mt-24">
          <hr className=" w-full h-[1.5px] bg-gray-300" />
          <p className="text-center text-gray-300 mt-2">@ All right reserved</p>
        </div>
      </section>
    </>
  );
};

export default Contact;
