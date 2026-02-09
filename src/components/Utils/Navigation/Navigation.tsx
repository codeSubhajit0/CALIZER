import { fontRoboto } from "@/lib/font";
import Image from "next/image";
import CalizerLogo from "../../../../public/logo.png";
import { NAVIGATION_MENU_ITEMS } from "@/constants/NavigationMenu";
import type { SCREEN_NAMES } from "@/constants/Config";

interface NavigationProps {
  activeScreen: SCREEN_NAMES;
  onScreenChange: (screenName: SCREEN_NAMES) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeScreen,
  onScreenChange,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={CalizerLogo} width={50} height={50} alt="calizer-logo" />
          <h1 className={`${fontRoboto.className} font-bold text-2xl`}>
            CALIZER <span className="text-orange-400">.</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {NAVIGATION_MENU_ITEMS.map((menu) => (
            <button
              onClick={() => onScreenChange(menu.name as SCREEN_NAMES)}
              type="button"
              key={menu.id}
              className={
                activeScreen === menu.name
                  ? "opacity-100 bg-orange-400 text-black rounded-full px-2 py-1 hover:cursor-pointer transition-all duration-300"
                  : "opacity-60"
              }
            >
              <span className="border border-orange-400 px-2 py-1 rounded-full hover:cursor-pointer transition-all duration-300">
                {menu.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
