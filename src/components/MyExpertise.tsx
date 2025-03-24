export default function MyExpertise() {
  return (
    <section
      className="flex justify-center w-full  md:mt-800 lg:mt-800 mt-10 h-max text-white mb-10"
      id="expertise"
    >
      <div className="lg:w-1/2 2md:w-3/4 md:w-3/4 w-full flex flex-col items-center mx-2">
        <h1 className="text-3xl mb-15">My Expertise</h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2  gap-4">
          <div className="border-2 lg:px-10 sm:px-6 px-2 py-10 rounded-2xl border-[#5f6361] Expretise-card overflow-hidden duration-400">
            <h1 className="text-3xl mb-2">programming languages</h1>
            <p className="text-[#5f6361]">
              My primary programming languages are TypeScript and JavaScript,
              which I use to craft clean, maintainable, and efficient code for
              both frontend and backend development.
            </p>
          </div>
          <div className="border-2 lg:px-10 sm:px-6 px-2 py-10  rounded-2xl border-[#5f6361] Expretise-card overflow-hidden duration-400">
            <h1 className="text-3xl mb-2">Front-end Development</h1>
            <p className="text-[#5f6361]">
              I specialize in frontend development, leveraging modern
              technologies such as HTML, CSS, JavaScript, React, Next.js, and
              Tailwind CSS to create seamless and visually appealing user
              experiences.
            </p>
          </div>

          <div className="border-2 lg:px-10 sm:px-6 px-2 py-10  rounded-2xl border-[#5f6361] Expretise-card overflow-hidden duration-400">
            <h1 className="text-3xl mb-2">Back-end Development</h1>
            <p className="text-[#5f6361]">
              I specialize in backend development, utilizing powerful tools like
              Node.js, Express.js, RESTful APIs, and Socket.io to build robust,
              scalable, and efficient server-side solutions.
            </p>
          </div>
          <div className=" border-2 lg:px-10 sm:px-6 px-2 py-10  rounded-2xl border-[#5f6361] Expretise-card overflow-hidden duration-400">
            <h1 className="text-3xl mb-2">Others</h1>
            <p className="text-[#5f6361]">
              I work with a variety of databases, including SQLite, MongoDB, and
              PostgreSQL. For version control, I rely on Git and GitHub to
              maintain organized and collaborative workflows. Additionally, I
              use ORM tools like TypeORM, Mongoose, and Prisma
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
