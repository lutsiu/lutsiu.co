export interface ICard {
  img: string;
  title: string;
  descr: string;
  link?: string
}
export interface IService {
  firstTitle: string,
  secondTitle: string,
  descr: string,
  img: string
  imgTitle: string,
  imgDescr: string
  color: 'pink' | 'blue' | 'purple'
}
export type WorkButtonFilter = "all" | 'product' | 'mobile' | 'UX/UI'
export interface IWorkCard extends ICard {
  type: WorkButtonFilter
}