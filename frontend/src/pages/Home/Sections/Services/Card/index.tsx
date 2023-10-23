import {GoArrowRight} from 'react-icons/go';
import { ICard } from '../cards-info';
import styles from './styles.module.scss'

export default function Card(props: ICard) {
  const {img, title, descr} = props;
  const titleArr = title.split(' ');
 
  return (
    <div className={`${styles.card} relative lg:flex-1 h-[35rem] md:h-[50rem]`}>
      <img src={img} alt="card-image" className='w-full h-full object-cover' />
      <div className='absolute z-[2] bottom-[1.5rem] sm:bottom-[3rem] text-white px-[1.5rem] sm:px-[3rem] flex flex-col gap-[1rem]'>
        <h4 style={{fontFamily: 'Montserrat'}} className='text-3xl sm:text-5xl font-medium'>
          {titleArr[0]}
          <br/>
          {titleArr[1]}
        </h4>
        <p style={{fontFamily: "DM Sans"}} className='text-xl sm:text-2xl font-normal'>{descr}</p>
        <div className='flex items-center gap-[1rem]'>
          <span className='text-xl sm:text-2xl'>LEARN MORE</span>
          <GoArrowRight className="w-[2rem] h-[2rem]"/>
        </div>
      </div>
    </div>
  )
}