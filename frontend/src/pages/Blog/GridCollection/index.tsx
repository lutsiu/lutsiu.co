import styles from "../styles.module.scss";
import data from "../data";
import BigCard from "./BigCard";
import Card from "./Card";
export default function GridCollection() {
  const bigCard = data.at(0);
  const otherCards = data.slice(1, -1);
  return (
    <section className={`${styles.padding} grid-collection pt-[2rem]`}>
      {bigCard && (
        <div>
          <BigCard {...bigCard} />
        </div>
      )}
      {otherCards && (
        <div>
          {otherCards.map((card, i) => {
            return <Card key={i} {...card} />;
          })}
        </div>
      )}
    </section>
  );
}
