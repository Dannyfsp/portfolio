import redis_as_a_database from "../assets/redis_as_a_database.jpg";
import sosiliso_airline from "../assets/sosiliso_airline.jpg";
import jake_proj from "../assets/jake_proj.jpg";
import medblood from "../assets/medblood.jpg";

const projects = [
  {
    name: "jake",
    img: jake_proj,
    description:
      "jake is an e-commerce platform that connects individuals who wishes to buy products with individuals who wants to sell their products, it also integrates the services of logistics personnels. Technologies used in this project are React and tailwindcss for frontend and NodeJS and mongoDB for the backend. I was 100% active in this project as I contributed a lot to both the frontend and backend development...",
    sourceCode: "https://github.com/DEGJ-Plug/jake_backend.git",
    projectLink:
      "https://www.linkedin.com/posts/danbogare_good-day-everyone-im-pleased-to-update-activity-7085226751970226176-mpGb?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "sosoliso Airline",
    img: sosiliso_airline,
    description:
      "This project is a server-side application of which I single-handedly developed all by myself. It is a backend architecture for an airline company. It is a standard project given by Grazac and I was able to complete it within one week which is the deadline and was also able to present it. Technologies I used are NodeJS, Typescript, PostgreSQL and Paystack...",
    sourceCode: "https://github.com/Dannyfsp/Sosoliso_Airline.git",
    projectLink: "https://documenter.getpostman.com/view/25460695/2s93Y6tKGY",
  },
  {
    name: "Medblood",
    img: medblood,
    description:
      "Medblood is a blood bank server-side application. It aims to remove obstacles in checking, receiving and donating matching blood with little or no hassle. I was able to develope this project myself and also presented it within two weeks dead. Medblood was implemented using NodeJS, Prisma and Postgresql...",
    sourceCode: "https://github.com/Dannyfsp/Medblood.git",
    projectLink: "https://documenter.getpostman.com/view/25460695/2s93K1pzYQ",
  },
  {
    name: "Redis DB",
    img: redis_as_a_database,
    description:
      "This project is an implementation of a CRUD API using NodeJS and redis as a Non-relational database. Actually Redis is an in-memory data structure store, used as a distributed, in-memory key-value database, cache and message broke with optional durability but many people do not you can use redis as a non-relational database so I demonstrated how using this project...",
    sourceCode: "https://github.com/Dannyfsp/redis_db.git",
    projectLink: "https://github.com/Dannyfsp/redis_db#readme",
  },
];

export default function ProjectLists() {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {projects.map((project, index) => (
        <div
          key={index}
          className="md:w-[600px] sm:w-[500px] w-[400px] md:mx-4 mx-2 rounded-xl md:h-[600px] flex flex-col items-center justify-start my-8 bg-gray-800"
        >
          <div className="">
            <div>
              <img
                className="rounded-t-xl md:w-[600px] md:h-[300px] w-[400px] h-[200px] sm:w-[500px] sm:h-[250px] hover:scale-105"
                src={project.img}
                alt={project.name}
              />
            </div>
            <div className="px-2">
              <div>
                <div>
                  <h1 className="font-bold text-2xl my-1">{project.name}</h1>
                </div>
                <div>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="flex justify-between items-center my-4">
                <div>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="py-2 px-3 bg-white text-black rounded-lg hover:scale-105">
                      view project
                    </button>
                  </a>
                </div>
                <div>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="py-2 px-3 bg-white text-black rounded-lg hover:scale-105">
                      source code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
