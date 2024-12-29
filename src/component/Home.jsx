import HeroImg from "../assets/me.jpg";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="main_padding flex flex-col gap-6 items-center justify-center h-[85vh] mt-[83px]"
      >
        <div className=" items-center flex flex-col gap-8">
          <img
            src={HeroImg}
            alt="image"
            className="size-56 shadow-lg shadow-[#BA26D9] rounded-full border-[4px] border-white"
          />
          <h1 className="text-7xl font-[500]">Sanam Rai</h1>
          <div className="flex gap-4">
            <button className="bg-purple-500  shadow-md hover:shadow-[#72CAF2] text-white text-xl py-3 px-10 rounded-full bg-gradient-to-r from-[#BA26D9] to-[#D67239] font-[500]">
              Contact Me
            </button>
            <button className="font-[500] transition-all shadow-md hover:shadow-[#72CAF2] duration-500 text-xl hover:bg-white hover:text-black py-3 px-10 bg-transparent border-2 border-white rounded-full">
              My Resume
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
