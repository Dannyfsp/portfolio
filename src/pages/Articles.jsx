import ArticleList from "../components/ArticleList";
import Technologies from "../components/Technologies";

export default function Articles() {
  return (
    <section>
      <Technologies />
      <div>
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-bold mt-4 underline underline-offset-4">
            My Articles
          </h1>
        </div>
        <ArticleList />
      </div>
    </section>
  );
}
