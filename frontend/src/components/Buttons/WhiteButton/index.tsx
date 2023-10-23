import styles from './styles.module.scss'

interface Props {
  onClick?: () => void;
  content: string;
  black?: boolean;
}
export default function WhiteButton(props: Props) {
  const { content, black } = props;

  return (
    <button
      className={`${black ? styles.black : styles.white} border-[.2rem] rounded-[3rem] py-[1.5rem] px-[4rem] md:px-[7rem] text-2xl md:text-3xl font-semibold duration-200`}
      style={{ fontFamily: "DM Sans" }}
    >
      {content}
    </button>
  );
}
