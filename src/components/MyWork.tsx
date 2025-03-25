const Projects = [
  {
    img: "/portifolio/2.png",
    title: "AASTU Gebi-gubye Student Management App",
    desc: "We've done orthodox student management system for AASTU Gebigubye",
    frontend: "https://github.com/habtesh-beki/aastu_gebi_gubaye_frontend.git",
    backend: "https://github.com/HaileabT/aastu_gibi_gubaye_api.git",
  },
  {
    img: "/portifolio/13.png",
    title: "Role Based Ticketing Management System",
    desc: "I've done Ticketing system user can create ticket and admin can update the status of it",
    frontend: "https://github.com/habtesh-beki/ticketing_system_client.git",
    backend: "",
  },
  {
    img: "/portifolio/16.png",
    title: "Simple blogging app People Create and see Blogs",
    desc: "We've done blogging app user can create blog including Authentication and Authorization",
    frontend: "https://github.com/habtesh-beki/simple_bloging_app_client.git",
    backend: "",
  },
];

export default function MyWork() {
  return (
    <section
      className="flex flex-col items-center  w-full h-max m-25"
      id="my-work"
    >
      <h1 className="text-white text-3xl mb-10">My latest Works</h1>
      <div className="grid lg:grid-cols-3 lg:w-1/2 md:w-3/4 sm:w-full h-max gap-10 text-[#5f6361] relative mx-4">
        {Projects.map((project) => (
          <div className="flex flex-col p-2 lg:h-95 md:90 h-max rounded-2xl border-2 border-[#5f6361] duration-300  Expretise-card-1 overflow-hidden">
            <img
              className="w-max h-max rounded-t-2xl"
              src={project.img}
              alt=""
            />
            <h2 className="text-xl text-white my-2">{project.title}</h2>
            <div className="mt-auto mb-3">
              <p>{project.desc}</p>
              <a className="" href={project.frontend}>
                {" "}
                <div className="bg-white flex gap-2 w-max h-max px-3 py-1 rounded-md my-2">
                  <img
                    className="h-6 w-6 rounded-4xl"
                    src="/tech-stack/GitHub.png"
                    alt="github"
                  />
                  <span className="text-black">source</span>
                  {/* <a href={project.backend}>backend</a> */}
                </div>{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
