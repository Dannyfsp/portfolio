import ResumeButton from "../components/ResumeButton";
import HireButton from "../components/HireButton";
import HeroImage from "../components/HeroImage";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-around items-center my-6 md:my-10 lg:my-8">
      <div className="md:w-1/2 items-center md:text-left text-center space-y-6">
        <h1 className="text-5xl font-extrabold">
          Empowering Digital Success and <br /> Experiences from Behind the
          Scenes
        </h1>
        <p className="text-justify">
          I'm <span className="font-bold">Aghogho Daniel Bogare</span>, a
          backend achitect. I specialize in building robust, performant and
          scalable server-side applications.
          <br />
          With a keen eye for detail and a deep understanding of databases,
          API's, and server-side technologies. I take pride in creating the
          backbone <br />
          that supports stunning user interfaces and delivers seemless
          experiences.
        </p>
        <div className="flex items-center space-x-4 md:place-content-start place-content-center">
          <div>
            <HireButton />
          </div>
          <div>
            <ResumeButton />
          </div>
        </div>
      </div>
      <HeroImage />
    </div>
  );
}
