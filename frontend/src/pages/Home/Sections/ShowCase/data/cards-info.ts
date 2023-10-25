import moviePlatform from "../../../../../assets/home-page/showcase/movie-platform.jpg";
import chatApp from "../../../../../assets/home-page/showcase/chat-application.jpg";
import socialMediaApp from "../../../../../assets/home-page/showcase/social-media-application.png";
import { ICard } from "../../../../../interfaces/models";

const cardsInfo: ICard[] = [
  {
    img: moviePlatform,
    title: "Movie App",
    descr: "Movie platform",
    link: "https://movie-74pyoj8ag-lutsius-projects.vercel.app/",
  },
  {
    img: chatApp,
    title: "Chat App",
    descr: "Application for communication",
    link: "https://github.com/lutsiu/chat-app",
  },
  {
    img: socialMediaApp,
    title: "Social-media App",
    descr: "Light clone of Twitter",
    link: "https://github.com/lutsiu/social-network",
  },
];

export default cardsInfo