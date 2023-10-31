import { WorkButtonFilter } from '../../../interfaces/models';
import styles from './styles.module.scss';
interface Props {
  content: WorkButtonFilter;
  isActive: boolean;
  setFilter: React.Dispatch<React.SetStateAction<WorkButtonFilter>>;
}

export default function WorkButton(props: Props) {
  const { content, isActive, setFilter} = props;
  const contentToShow = content.replace(content[0], content[0].toUpperCase());
  function handleSetFilter() {
    setFilter(content);
  }
  return (
    <button
      className={`${styles.button} ${isActive ? styles['button-isActive'] : ""}  w-[12rem] sm:w-fit rounded-[2.5rem] bg-transparent text-black text-center border-[.3rem]  py-[.7rem] px-[4rem] sm:px-[3rem] md:px-[5rem] lg:px-[7rem] 2xl:px-[7.5rem] font-medium text-2xl duration-300 `}
      style={{
        fontFamily: "DM Sans",
      }}
      onClick={handleSetFilter}
    >
      {contentToShow}
    </button>
  );
}
