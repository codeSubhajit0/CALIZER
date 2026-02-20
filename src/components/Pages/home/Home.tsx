import type { SCREEN_NAMES } from "@/constants/global.types";
import Board from "../board/Board";

interface HomeProps {
  activeScreen: SCREEN_NAMES;
}

export const Home: React.FC<HomeProps> = ({ activeScreen }) => {
  return <div>{activeScreen === "Dashboard" && <Board />}</div>;
};

export default Home;
