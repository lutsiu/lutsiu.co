import BottomPart from "./BottomPart";
import TopPart from "./TopPart";
import styles from './styles.module.scss'
export default function Footer() {

  return (
    <footer className="bg-black mt-[8rem]">
      <TopPart/>
      <div className={`h-[0.1rem] ${styles['gradient-bg']}`}></div>
      <BottomPart/>
    </footer>
  )
}