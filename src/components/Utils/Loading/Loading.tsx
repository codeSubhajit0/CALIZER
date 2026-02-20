import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

const Loading: React.FC = () => {
  return <LineSpinner size="50" stroke="3" speed="1" color="black" />;
};

export default Loading;
