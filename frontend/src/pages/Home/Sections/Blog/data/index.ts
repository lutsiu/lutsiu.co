import { ICard } from "../../../../../interfaces/models";
import security from "../../../../../assets/home-page/blog/security.jpg";
import design from "../../../../../assets/home-page/blog/design.jpg";
import productivity from "../../../../../assets/home-page/blog/productivity.jpg";
const data: ICard[] = [
  {
    img: productivity,
    title: "What is Productivity",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elit velit, iaculis eu ex sed, vulputate dignissim eros.",
  },
  {
    img: security,
    title: "First steps in Cybersecurity",
    descr:
      " Etiam vitae neque at dui placerat ullamcorper. Suspendisse potenti. Donec at molestie viverra sapien quam.",
  },
  {
    img: design,
    title: "User-friendly Design",
    descr:
      "Fusce tincidunt volutpat ante at commodo. Nullam eget mi ut quam pretium posuere dolor, sed iaculis imperdiet interdum.",
  },
];

export default data