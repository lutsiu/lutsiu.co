interface Props {
  onClick?: () => void;
  content: string;
}
export default function WhiteButton(props: Props) {
  const { content } = props;

  return (
    <button
      className="bg-white border-[.2rem] border-black rounded-[3rem] py-[1.5rem] px-[7rem] text-3xl font-semibold duration-200 hover:bg-black hover:text-white  delay-75"
      style={{ fontFamily : 'DM Sans'}}
    >
      {content}
    </button>
  );
}
