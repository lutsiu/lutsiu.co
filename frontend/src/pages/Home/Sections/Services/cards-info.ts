import it1 from "../../../../assets/services/it-1.jpg";
import it2 from "../../../../assets/services/it-2.jpg";
import it3 from "../../../../assets/services/it-3.jpeg";

import { ICard } from "../../../../interfaces/models";

const cardsInfo: ICard[] = [
  {
    img: it1,
    title: "PRODUCT DEVELOPMENT",
    descr:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
  },
  {
    img: it2,
    title: "UI/UX DESIGN",
    descr:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
  },
  {
    img: it3,
    title: "MANAGES SERVICES",
    descr:
      "Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.",
  },
];

export default cardsInfo