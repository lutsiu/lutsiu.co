import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  className: string;
}

export default function SkeletonElement(props: Props) {
  const { className } = props;
  return (
    <SkeletonTheme>
      <Skeleton
        count={1}
        className={className}
        baseColor="#2b3a54"
        highlightColor="#7890ba"
        duration={1}
      />
    </SkeletonTheme>
  );
}
