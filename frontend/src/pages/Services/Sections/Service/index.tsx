import data from "../data";
import Article from "./Article";
export default function ServiceSection() {
  return (
    <section className="service-section">
      {data.map((article, i) => {
        return <Article key={i} {...article} />;
      })}
    </section>
  );
}
