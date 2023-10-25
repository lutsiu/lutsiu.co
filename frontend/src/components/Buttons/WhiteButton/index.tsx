import styles from './styles.module.scss'

interface Props {
  onClick?: () => void;
  content: string;
  black?: boolean;
  paddingSmall?: boolean
}
export default function WhiteButton(props: Props) {
  const { content, black, paddingSmall } = props;

  return (
    <button
      className={`${black ? styles.black : styles.white} ${paddingSmall ? styles['padding-small'] : styles['padding-normal']} border-[.1rem] rounded-[3rem] py-[1.5rem]  text-2xl md:text-3xl font-semibold duration-200`}
      style={{ fontFamily: "DM Sans" }}
    >
      {content}
    </button>
  );
}
