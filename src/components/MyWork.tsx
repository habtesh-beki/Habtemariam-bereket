const Projects = [
  {
    img: "/portifolio/2.png",
    title: "AASTU Gebi-gubye Student Management App",
    desc: "We've done orthodox student management system for addis abeba science and technology university",
    frontend: "https://github.com/habtesh-beki/aastu_gebi_gubaye_frontend.git",
    backend: "https://github.com/HaileabT/aastu_gibi_gubaye_api.git",
  },
  {
    img: "/portifolio/13.png",
    title: "Ticketing System",
    desc: "I've done Ticketing system user can create ticket and admin can update the status of it",
    frontend: "",
    backend: "",
  },
  {
    img: "/portifolio/16.png",
    title: "Simple blogging app",
    desc: "We've done blogging app user can create blog and read others blog",
    frontend: "",
    backend: "",
  },
];

export default function MyWork() {
  return (
    <section
      className="flex flex-col items-center  w-full h-full mb-10"
      id="my-work"
    >
      <h1 className="text-white text-3xl mb-10">My latest Works</h1>
      <div className="grid grid-cols-3 lg:w-1/2 md:w-3/4 sm:w-full h-[60vh] gap-10 text-[#5f6361] relative">
        {Projects.map((project) => (
          <div className="flex flex-col p-2 h-3/5 rounded-2xl border-4 border-[#5f6361] duration-300  Expretise-card-1 overflow-hidden">
            <img
              className="w-full h-50 rounded-t-2xl"
              src={project.img}
              alt=""
            />
            <h2 className="text-xl text-white my-2">{project.title}</h2>
            <div className="mt-auto mb-3">
              <p>{project.desc}</p>
              <div className="flex text-blue-700 justify-between">
                <a className="" href={project.frontend}>
                  frontend
                </a>

                <a href={project.backend}>backend</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
