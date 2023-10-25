import { IService } from "../../../../interfaces/models";
import design from "../../../../assets/services-page/design.jpg";
import development from "../../../../assets/services-page/development.jpg";
import services from "../../../../assets/services-page/services.jpg";
const data: IService[] = [
  {
    firstTitle: "Product Development and Management",
    secondTitle: "Full-Stack Development",
    descr:
      " Proin faucibus aliquam tempor. Nunc facilisis vehicula tristique. Integer semper tincidunt ex, in dictum massa commodo elementum. Phasellus quis molestie metus, ac semper augue. Nulla mi risus, ultrices vel est sit amet, gravida hendrerit lorem. Nam nec efficitur nunc. Fusce ac suscipit sem. Donec hendrerit urna diam, ut aliquam sem facilisis a.",
    img: development,
    imgTitle: "MERN",
    imgDescr: 'Etiam libero sem, euismod sit amet dignissim ac, scelerisque vel arcu. Etiam faucibus placerat malesuada. ',
    color: "pink"
  },
  {
    firstTitle: "User-friendly Interface",
    secondTitle: "UI/UX Design",
    descr:
      "Maecenas augue augue, mollis sit amet velit at, pellentesque imperdiet libero. Aliquam non quam ut tellus malesuada maximus vitae vitae purus. Aenean mauris nulla, varius et lobortis vitae, fermentum at nunc. Duis quis quam sit amet urna volutpat aliquam non ut velit. Pellentesque ligula nunc, aliquet nec ullamcorper et, euismod sed risus.",
    img: design,
    imgTitle: "Figma",
    imgDescr: 'In eu odio quis tortor tristique aliquet egestas non purus. Proin auctor fringilla mauris in feugiat.',
    color: 'purple'
  },
  {
    firstTitle: "Long-run Collaborations and Partnership",
    secondTitle: "Managed services",
    descr:
      "Sed ac accumsan magna, vel condimentum purus. Ut venenatis orci turpis, id aliquam lorem ultrices et. Maecenas finibus blandit felis, nec placerat lectus iaculis in. Morbi porttitor risus ut odio vehicula, ac auctor ligula tempor. Duis venenatis velit vel dolor rhoncus semper. Vestibulum efficitur malesuada magna, nec gravida dolor porta at. Etiam libero sem, euismod sit amet dignissim ac, scelerisque vel arcu. ",
    img: services,
    imgTitle: "ELutsiu",
    imgDescr: 'Curabitur eget dictum leo. Vestibulum tempor sem lacus, placerat maximus turpis luctus nec. ',
    color: 'blue'
  },
];

export default data;
