import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

const Loader: React.FC = () => {
  return <LineSpinner size="50" stroke="3" speed="2" color="black" />;
};

export default Loader;
