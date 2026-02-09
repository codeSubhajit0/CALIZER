import type { SCREEN_NAMES } from "@/constants/Config";
import Dashboard from "../Dashboard/Dashboard";

interface HomeProps {
  activeScreen: SCREEN_NAMES;
}

export const Home: React.FC<HomeProps> = ({ activeScreen }) => {
  return (
    <div>
      <div>{activeScreen === "Dashboard" && <Dashboard />}</div>
    </div>
  );
};

export default Home;
