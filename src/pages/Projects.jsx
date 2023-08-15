import ProjectLists from "../components/ProjectList";
import Technologies from "../components/Technologies";

export default function Projects() {
  return (
    <section>
      <Technologies />
      <div>
        <div className="flex justify-center items-center">
          <h1 className="text-center">My Projects</h1>
        </div>
        <ProjectLists />
      </div>
    </section>
  );
}
