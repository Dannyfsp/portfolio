import ArticleList from "../components/ArticleList";
import Technologies from "../components/Technologies";

export default function Articles() {
  return (
    <section>
      <Technologies />
      <div>
        <div className="flex items-center justify-center">
          <h1>My Articles</h1>
        </div>
        <ArticleList />
      </div>
    </section>
  );
}
