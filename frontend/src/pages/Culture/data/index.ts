import abstract1 from "../../../assets/culture-page/abstract-1.jpg";
import abstract2 from "../../../assets/culture-page/abstract-2.jpg";
import abstract3 from "../../../assets/culture-page/abstract-3.jpg";
import person1 from "../../../assets/culture-page/person-1.jpg";
import person2 from "../../../assets/culture-page/person-2.jpg";
import person3 from "../../../assets/culture-page/person-3.jpg";
import person4 from "../../../assets/culture-page/person-4.jpg";
import person5 from "../../../assets/culture-page/person-5.jpg";
import { ICard, IPerson } from "../../../interfaces/models";

export const info: ICard[] = [
  {
    title: "INSPIRATIONAL JOURNEY",
    descr:
      "At the core of our work, we embark on an inspirational journey to create positive environments for businesses and clients. By fostering happiness within our teams, we believe that even under challenging circumstances, we can achieve meaningful outcomes, much like the historic moon landing.",
    img: abstract1,
  },
  {
    title: "TRANSPARENT ENGAGEMENT",
    descr:
      "Our commitment to a transparent and honest approach is unwavering. Just like true friends, we aim for the best for our collaborators and partners. We guide them toward well-informed decisions that lead to successful project outcomes, even when the path ahead seems uncertain.",
    img: abstract2,
  },
  {
    title: "COLLABORATIVE SYNERGY",
    descr:
      "Our strength lies in collaborative synergy. We bring together our team's confidence, experience, communication, and collaborative skills to the table. We encourage all stakeholders, including partners, to contribute their ideas in technology, development, design, and management. This teamwork strategy leads to exceptional results in all our projects.",
    img: abstract3,
  },
];

const people: IPerson[] = [
  {
    fullName: "Piotr Kowalczyk",
    role: "Chief Technology Officer",
    descr: "Piotr is the visionary behind our technology solutions. With a passion for innovation, he leads our tech team to develop cutting-edge software and IT solutions. His dedication to excellence drives us forward.",
    email: "piotr.kowalczyk@example.com",
    img: person2
  },
  {
    fullName: "Oleksandr Nowak",
    role: "Lead Software Engineer",
    descr: "Oleksandr is our go-to expert in software development. With extensive experience in coding and problem-solving, he plays a key role in ensuring our projects run smoothly and efficiently.",
    email: "oleksandr.nowak@example.com",
    img: person3
  },
  {
    fullName: "Maksym Sokolov",
    role: "UX/UI Designer",
    descr: "Maksym is our creative genius. As a talented designer, he brings aesthetics and user-friendliness to our projects. His designs transform ideas into visually appealing and intuitive solutions.",
    email: "maksym.sokolov@example.com",
    img: person4
  },
  {
    fullName: "Andriy Kovalenko",
    role: "Project Manager",
    descr: "Andriy ensures that our projects are delivered on time and within budget. With excellent organizational skills and attention to detail, he's the backbone of our project management.",
    email: "andriy.kovalenko@example.com",
    img: person5
  },
  {
    fullName: "Nataliya Zhukova",
    role: "Marketing Specialist",
    descr: "Nataliya is our marketing whiz. She creates and implements marketing strategies that boost our company's online presence and reach. Her data-driven approach ensures success in the digital landscape.",
    email: "nataliya.zhukova@example.com",
    img: person1
  }
];
export default people