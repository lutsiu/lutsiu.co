import { IWorkCard, WorkButtonFilter } from "../../../../../interfaces/models";
import BigCard from "./BigCard";
import Card from "./Card";
import styles from "./styles.module.scss";
interface Props {
  data: IWorkCard[];
  showBigCard: boolean;
  typeToShow: WorkButtonFilter
}
export default function GridCollection(props: Props) {
  const { data, showBigCard, typeToShow } = props;
  const bigImg = data.at(0);
  const normalImgsCollection = data.slice(1, 10);

  return (
    <div className={`${styles["grid-collection"]}`}>
      {showBigCard && (
        <>
          {bigImg && <BigCard {...bigImg} />}
          {normalImgsCollection &&
            normalImgsCollection.map((card, i) => {
              return <Card key={i} card={card} typeToShow={typeToShow} />;
            })}
        </>
      )}
      {!showBigCard && (
        <>
          {data &&
            data.map((card, i) => {
              return <Card key={i} card={card} typeToShow={typeToShow} />;
            })}
        </>
      )}
    </div>
  );
}
