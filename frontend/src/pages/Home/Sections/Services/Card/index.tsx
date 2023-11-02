import {GoArrowRight} from 'react-icons/go';
import { ICard } from '../../../../../interfaces/models';
import styles from './styles.module.scss'
import useSrcIsLoading from '../../../../../hooks/useSrcIsLoading';
import SkeletonElement from '../../../../../components/Skeleton';

export default function Card(props: ICard) {
  const {img, title, descr} = props;
  const titleArr = title.split(' ');
  const {imageSrc, srcIsLoading} = useSrcIsLoading(img);
  return (
    <div className={`${styles.card} relative lg:flex-1 h-[35rem] md:h-[50rem]`}>
      {srcIsLoading && <SkeletonElement className='w-full h-full'/>}
      {!srcIsLoading && <img loading='lazy' src={imageSrc} alt="card-image" className='w-full h-full object-cover' />}
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