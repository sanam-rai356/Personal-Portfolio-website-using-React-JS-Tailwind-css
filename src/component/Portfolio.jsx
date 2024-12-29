import { ProjectDetail } from "../export/Export";
const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="main_padding py-48">
        <div className="text-center mb-[90px]  text-6xl font-semibold">
          <h3 className="mainH3">Recent Projects</h3>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
          {ProjectDetail.map((project) => (
            <div key={project.id}>
              <img
                src={project.img}
                alt="project image"
                className="w-full shadow-lg hover:shadow-[#72CAF2] rounded-xl cursor-pointer transition-transform hover:-translate-y-1"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
