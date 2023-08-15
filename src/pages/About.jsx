import special_danny from "../assets/special_danny.png";
import HireButton from "../components/HireButton";
import ResumeButton from "../components/ResumeButton";
import Testimonials from "../components/Testimonials";

export default function About() {
  return (
    <section className="my-6 md:my-10 lg:my-8">
      <div className="flex md:flex-row flex-col justify-around items-center">
        <div className="flex justify-center items-center md:w-1/2">
          <div>
            <img
              src={special_danny}
              alt="danny img"
              className="sm:w-[300px] sm:h-[500px] w-60 h-96 border-4 border-white shadow-sm shadow-white rounded-xl"
            />
          </div>
        </div>
        <div className="flex justify-center items-center md:w-1/2">
          <div className="space-y-4">
            <div className="mt-4 flex justify-center items-center">
              <h1 className="tex-center text-3xl">About Me</h1>
            </div>
            <div className="space-y-4">
              <p>
                I'm a professional software engineer specializing in back-end
                development. I have the zeal to provide solutions to real world
                problems using technologies like Node.js, ExpressJS, PostgreSQL,
                MySQL, MongoDB, Go (golang), Gin, Redis, RabbitMQ and NextJS.
                Boasting two plus years of hands-on experience, I excel in
                crafting robust and scalable server-side solutions that power
                diverse software ecosystems. My proficiency spans the creation
                of efficient RESTful APIs, seamless database integrations, and
                seamless deployment of applications.
              </p>
              <p>
                I am committed to staying up-to-date with the latest
                advancements and trends in the field of software engineering. I
                have a proven track record of delivering high-quality results to
                clients and ensuring their satisfaction. My passion for
                technology and dedication to excellence drives me to continually
                expand my knowledge and skills to provide better solutions.
              </p>
              <p>
                If you are seeking a reliable and experienced software engineer
                to build scalable and dependable back-end systems, I encourage
                you to react out to me. I am confident that my skills and
                expertise can help you achieve your business goals.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <HireButton />
              <ResumeButton />
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </section>
  );
}
