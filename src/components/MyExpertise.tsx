export default function MyExpertise() {
  return (
    <section className="flex justify-center w-full  mt-800 h-[90vh] text-white">
      <div className="w-1/2 flex flex-col items-center ">
        <h1 className="text-3xl mb-15">My Expertise</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-4 p-10 rounded-2xl border-[#5f6361] Expretise-card overflow-hidden duration-400">
            <h1 className="text-3xl mb-2">programming languages</h1>
            <p className="text-[#5f6361]">
              My primary programming languages are TypeScript and JavaScript,
              which I use to craft clean, maintainable, and efficient code for
              both frontend and backend development.
            </p>
          </div>
          <div className="border-4 p-10 rounded-2xl border-[#5f6361] Expretise-card overflow-hidden duration-400">
            <h1 className="text-3xl mb-2">Front-end Development</h1>
            <p className="text-[#5f6361]">
              I specialize in frontend development, leveraging modern
              technologies such as HTML, CSS, JavaScript, React, Next.js, and
              Tailwind CSS to create seamless and visually appealing user
              experiences.
            </p>
          </div>

          <div className="border-4 p-10 rounded-2xl border-[#5f6361] Expretise-card overflow-hidden duration-400">
            <h1 className="text-3xl mb-2">Back-end Development</h1>
            <p className="text-[#5f6361]">
              I specialize in backend development, utilizing powerful tools like
              Node.js, Express.js, RESTful APIs, and Socket.io to build robust,
              scalable, and efficient server-side solutions.
            </p>
          </div>
          <div className=" border-4 p-10 rounded-2xl border-[#5f6361] Expretise-card overflow-hidden duration-400">
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
