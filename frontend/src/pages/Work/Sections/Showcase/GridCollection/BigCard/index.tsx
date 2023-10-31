import { IWorkCard } from '../../../../../../interfaces/models'
import styles from '../styles.module.scss'

export default function BigCard(props: IWorkCard) {
  const {img, title, type, subtitle, descr} = props;
  return (
    <div data-filter={type} className={`${styles["grid-collection-first-element"]} sm:mb-[3rem] lg:mb-[6rem] relative`}>
      <img src={img} alt="company" className='w-full h-full object-cover' />
      <div className="mt-[1rem] absolute bottom-[2rem] md:bottom-[4rem] left-[2rem] md:left-[4rem] text-white">
        <h3 className="text-5xl md:text-7xl font-bold">{title}</h3>
        <h4 className='text-2xl md:text-4xl mt-[.4rem] font-medium' style={{fontFamily: "Montserrat, sans-serif"}}>{subtitle}</h4>
        <p className="text-xl md:text-2xl mt-[1rem] max-w-[75%] md:max-w-[70%]">{descr}</p>
      </div>
    </div>
  )
}