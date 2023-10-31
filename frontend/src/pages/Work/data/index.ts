import { IWorkCard, WorkButtonFilter } from "../../../interfaces/models";
import AeroNova from "../../../assets/work-page/AeroNova.jpg";
import ApexWare from "../../../assets/work-page/ApexWare.jpg";
import AquaTech from "../../../assets/work-page/AquaTech.jpg";
import AutoFleet from "../../../assets/work-page/AutoFleet.jpg";
import ByteLink from "../../../assets/work-page/ByteLink.jpg";
import DataSync from "../../../assets/work-page/DataSync.jpg";
import EcoSync from "../../../assets/work-page/EcoSync.jpg";
import FireBud from "../../../assets/work-page/FireBud.jpg";
import FusionWave from "../../../assets/work-page/FusionWave.jpg";
import NeonSync from "../../../assets/work-page/NeonSync.jpg";
import SkyLuxe from "../../../assets/work-page/SkyLuxe.jpg";
import SunCoast from "../../../assets/work-page/SunCoast.jpg";
import SwiftIQ from "../../../assets/work-page/SwiftIQ.jpg";
import TechWave from "../../../assets/work-page/TechWave.jpg";
import TrueMint from "../../../assets/work-page/TrueMint.jpg";
import TerraSky from "../../../assets/work-page/TerraSky.jpg";
import VirtuSys from "../../../assets/work-page/VirtuSys.jpg";
import XpressIQ from "../../../assets/work-page/XpressIQ.jpg";
import ZenVolt from "../../../assets/work-page/ZenVolt.jpg";
import ZephyrCo from "../../../assets/work-page/ZephyrCo.jpg";

interface ButtonsData {
  filter: WorkButtonFilter;
}
const workData: IWorkCard[] = [
  {
    img: AeroNova,
    title: "AeroNova",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet bibendum felis.",
    type: "product",
    subtitle: "Fireworks Display Magic",
  },
  {
    img: ApexWare,
    title: "ApexWare",
    descr:
      "Nullam at tellus vitae mauris fermentum tincidunt ac ac lacus posuere ut urna sit amet finibus.",
    type: "mobile",
    subtitle: "Empowering Software Solutions",
  },
  {
    img: AquaTech,
    title: "AquaTech",
    descr:
      "Sed vitae sapien et tortor interdum pellentesque. Ut et nisl ut elit venenatis fringilla. Integer nisl magna, euismod id vestibulum eu, commodo nec massa.",
    type: "UX/UI",
    subtitle: "Water Technology Advancements",
  },
  {
    img: AutoFleet,
    title: "AutoFleet",
    descr:
      "Nulla semper fringilla pharetra. Phasellus nec orci et felis venenatis lacinia quis ut urna. Morbi posuere risus consectetur pellentesque tristique.",
    type: "UX/UI",
    subtitle: "Efficient Vehicle Management",
  },
  {
    img: ByteLink,
    title: "ByteLink",
    descr:
      "Quisque finibus metus feugiat libero porttitor, tempus laoreet mi volutpat. Donec eget aliquet lorem.",
    type: "mobile",
    subtitle: "Connecting Mobile Worlds",
  },
  {
    img: DataSync,
    title: "DataSync",
    descr:
      "Nunc rhoncus rutrum sem vel mollis. Curabitur a blandit ligula, vel finibus dolor. Donec mattis tempor eros vel bibendum.",
    type: "mobile",
    subtitle: "Synchronizing Data Seamlessly",
  },
  {
    img: EcoSync,
    title: "EcoSync",
    descr:
      " Vestibulum congue quam nibh, in laoreet purus accumsan eget. Mauris faucibus interdum erat, at dapibus diam pulvinar ut.",
    type: "product",
    subtitle: "Eco-friendly Product Development",
  },
  {
    img: FireBud,
    title: "FireBud",
    descr:
      "Praesent nec massa consectetur, accumsan nibh vel, vestibulum dui. Fusce elementum fermentum leo, at pretium tortor ultrices eget.",
    type: "UX/UI",
    subtitle: "Igniting User Experiences",
  },
  {
    img: FusionWave,
    title: "FusionWave",
    descr:
      "Vestibulum ut nunc turpis. Cras quis dolor facilisis quam rhoncus consectetur ac in lacus. Duis auctor eu nisi auctor hendrerit.",
    type: "mobile",
    subtitle: "Waving Mobile Fusion",
  },
  {
    img: NeonSync,
    title: "NeonSync",
    descr:
      "Cras molestie sapien felis, at dignissim elit facilisis sit amet. Vivamus ultricies ex vel neque volutpat, in euismod ligula accumsan. Pellentesque nec eleifend velit.",
    type: "product",
    subtitle: "Syncing Bright Ideas",
  },
  {
    img: SkyLuxe,
    title: "SkyLuxe",
    descr:
      "Nullam lobortis massa et erat suscipit dapibus. Aliquam vitae porta leo. Curabitur ipsum sapien, dapibus vestibulum pulvinar vel, facilisis in ante.",
    type: "UX/UI",
    subtitle: "Elevating User Interfaces",
  },
  {
    img: SunCoast,
    title: "SunCoast",
    descr:
      "Donec vitae purus finibus lacus eleifend accumsan eget quis nulla. Phasellus at enim et massa fermentum condimentum eget porta ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    type: "mobile",
    subtitle: "Sunny Mobile Solutions",
  },
  {
    img: SwiftIQ,
    title: "SwiftIQ",
    descr:
      "onec sit amet luctus velit. Cras ullamcorper semper orci, ut efficitur ipsum sollicitudin vel. Cras risus tortor.",
    type: "product",
    subtitle: "Quick Solutions IQ",
  },
  {
    img: TechWave,
    title: "TechWave",
    descr:
      "Integer sed gravida enim, eget iaculis orci. Proin efficitur at enim vitae facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    type: "UX/UI",
    subtitle: "Waving in Tech",
  },
  {
    img: TerraSky,
    title: "TerraSky",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet bibendum felis,",
    type: "product",
    subtitle: "Earthly Innovations",
  },
  {
    img: TrueMint,
    title: "TrueMint",
    descr:
      "Etiam id neque non est pellentesque blandit quis scelerisque ex. Maecenas sed ipsum nec massa rutrum tempus.",
    type: "mobile",
    subtitle: "Minting True Connections",
  },
  {
    img: VirtuSys,
    title: "VirtuSys",
    descr:
      "Donec rutrum risus vitae rhoncus porta. Pellentesque dictum eros at placerat dictum. Nunc scelerisque viverra placerat. Nunc et eleifend quam.",
    type: "product",
    subtitle: "Virtually Productive",
  },
  {
    img: XpressIQ,
    title: "XpressIQ",
    descr:
      "Nam faucibus quam nunc, ac blandit ex vulputate eget. Duis nec placerat neque. Sed sollicitudin justo sed sem dignissim, ut fringilla felis maximus.",
    type: "UX/UI",
    subtitle: "Expressing User Intelligence",
  },
  {
    img: ZenVolt,
    title: "ZenVolt",
    descr:
      "Morbi sit amet porta magna. Duis ut tortor nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    type: "product",
    subtitle: "Charging Zen Energy",
  },
  {
    img: ZephyrCo,
    title: "ZephyrCo",
    descr:
      "Maecenas a ante a nulla sagittis laoreet. Fusce condimentum iaculis orci a molestie. Vestibulum pharetra interdum consectetur. Proin id ipsum mollis, dictum metus ut, consectetur neque.",
    type: "mobile",
    subtitle: "Breezy Mobile Innovations",
  },
];

export const buttonsData: ButtonsData[] = [
  { filter: "all" },
  { filter: "product" },
  { filter: "mobile" },
  { filter: "UX/UI" },
];
export default workData;
