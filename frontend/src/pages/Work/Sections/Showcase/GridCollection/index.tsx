import { IWorkCard } from "../../../../../interfaces/models";
import BigCard from "./BigCard";
import Card from "./Card";
import styles from "./styles.module.scss";
interface Props {
  data: IWorkCard[];
}
export default function GridCollection(props: Props) {
  const { data } = props;
  const bigImg = data.at(0);
  const normalImgsCollection = data.slice(1, 10);

  return (
    <div className={`${styles["grid-collection"]}`}>
      {bigImg && <BigCard {...bigImg} />}
      {normalImgsCollection &&
        normalImgsCollection.map((card, i) => {
          return <Card key={i} {...card} />;
        })}
    </div>
  );
}
