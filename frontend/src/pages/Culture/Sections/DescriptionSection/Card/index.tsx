import { ICard } from "../../../../../interfaces/models";
import styles from './styles.module.scss'
export default function Card(props: ICard) {
  const {img, title, descr} = props;
  return (
    <div className={`${styles.card} relative lg:flex-1 h-[25rem] sm:h-[20rem] lg:h-[44rem]`}>
      <img src={img} alt="card-image" className="w-full h-full object-cover" />
      <div className="absolute z-10 top-0 p-[1.5rem] sm:p-[2rem] xl:p-[3rem] text-white">
        <h4 className="text-4xl sm:text-5xl lg:text-4xl 2xl:text-5xl font-medium" style={{fontFamily: 'Montserrat, sans-serif'}}>{title}</h4>
        <p className="text-xl sm:text-2xl 2xl:text-3xl mt-[1rem] lg:mt-[2.5rem]">{descr}</p>
      </div>
    </div>
  )
}