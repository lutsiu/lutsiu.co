interface Props {
  content: string;
  onClick?: () => void;
}
export default function TransparentButton(props: Props) {
  const { content } = props;

  return (
    <button
      className="bg-transparent py-[1.5rem] px-[5rem] text-3xl border-[1px] border-white rounded-[3rem] hover:bg-white duration-200 hover:text-black"
      style={{ fontFamily: "DM Sans, sans-serif" }}
    >
      {content}
    </button>
  );
}
