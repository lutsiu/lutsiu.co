import { IService } from "../../../../../interfaces/models";
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
    </article>
  );
}
