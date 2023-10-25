import { IService } from "../../../../../interfaces/models";
import BottomPart from "./BottomPart";
import TopPart from "./TopPart";

export default function Article(props: IService) {
  const { firstTitle, secondTitle, imgTitle, imgDescr, img, descr, color } =
    props;

  return (
    <article>
      <TopPart
        firstTitle={firstTitle}
        secondTitle={secondTitle}
        descr={descr}
        color={color}
      />
      <BottomPart
        img={img}
        imgTitle={imgTitle}
        imgDescr={imgDescr}
        color={color}
      />
    </article>
  );
}
