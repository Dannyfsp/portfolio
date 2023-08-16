import ProjectLists from "../components/ProjectList";
import Technologies from "../components/Technologies";

export default function Projects() {
  return (
    <section>
      <Technologies />
      <div>
        <div className="flex justify-center items-center mt-4">
          <h1 className="text-center font-bold text-3xl underline underline-offset-4">
            My Projects
          </h1>
        </div>
        <ProjectLists />
      </div>
    </section>
  );
}
