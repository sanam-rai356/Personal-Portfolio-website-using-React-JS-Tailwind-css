import AboutImg from "../assets/sanam.jpg";
import htmlImg from "../assets/html.jpg";
import cssImg from "../assets/css.jpg";
import jsImg from "../assets/js.png";
import Reactjsimg from "../assets/react.png";
const About = () => {
  return (
    <>
      <section id="about" className="main_padding py-48">
        <div className="text-center mb-[90px]  text-6xl font-semibold">
          <h3 className="mainH3">About Me</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-14">
          <img src={AboutImg} alt="about img" className="w-full lg:w-[400px]" />
          <div className="">
            <div>
              <p className="text-lg font-[500]">
                Hello, my name is Sanam Rai, and I am looking for an internship
                in frontend development, aiming to build a career in web
                development. I am familiar with HTML, CSS, JS, and React JS,
                gaining knowledge through the internet and self-study.
              </p>

              <div className="mt-[85px]">
                <h4 className="text-4xl font-[500] mb-8">SKILLS</h4>

                <div className="flex gap-7  flex-wrap">
                  <div
                    style={{
                      backgroundImage: `url(${htmlImg})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="size-28 skillbg transition-transform duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[#72CAF2] rounded-br-3xl cursor-pointer border-[4px] flex justify-center items-center border-white"
                  ></div>

                  <div
                    style={{
                      backgroundImage: `url(${cssImg})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="size-28 transition-transform duration-300 hover:-translate-y-1  shadow-lg hover:shadow-[#72CAF2] rounded-br-3xl cursor-pointer border-[4px] flex justify-center items-center border-white"
                  ></div>

                  <div
                    style={{
                      backgroundImage: `url(${jsImg})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="size-28 transition-transform duration-300 hover:-translate-y-1  shadow-lg hover:shadow-[#72CAF2] rounded-br-3xl cursor-pointer  flex justify-center items-center "
                  ></div>

                  <div
                    style={{
                      backgroundImage: `url(${Reactjsimg})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="size-28 transition-transform duration-300 hover:-translate-y-1  shadow-lg hover:shadow-[#72CAF2] rounded-br-3xl cursor-pointer  flex justify-center items-center "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
