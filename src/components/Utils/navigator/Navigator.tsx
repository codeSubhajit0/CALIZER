import { fontRoboto } from "@/lib/font";
import Image from "next/image";
import CalizerLogo from "../../../../public/logo.png";
import { NAVIGATION_MENU_ITEMS } from "@/constants/config/NavigationMenu";
import type { SCREEN_NAMES } from "@/constants/global.types";
import { Plus } from "lucide-react";
import { useFeatureFlags } from "@/hooks/useFeatureFlags";

interface NavigatorProps {
  activeScreen: SCREEN_NAMES;
  onScreenChange: (screenName: SCREEN_NAMES) => void;
}

export const Navigator: React.FC<NavigatorProps> = ({
  activeScreen,
  onScreenChange,
}) => {
  const { isEnabled } = useFeatureFlags();

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={CalizerLogo}
            width={50}
            height={50}
            alt="calizer-logo"
            className="hidden"
          />
          <h1 className={`${fontRoboto.className} font-bold text-4xl`}>
            CALIZER <span className="text-orange-400">.</span>
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-3 lg:gap-3">
          {NAVIGATION_MENU_ITEMS.map((menu) => {
            const Icon = menu.icon;
            return (
              <button
                onClick={() => onScreenChange(menu.name as SCREEN_NAMES)}
                type="button"
                key={menu.id}
                className={`border border-orange-400 px-2 py-1 rounded-full hover:cursor-pointer transition-all duration-300 ${
                  activeScreen === menu.name
                    ? "opacity-100 bg-orange-400 text-black"
                    : "opacity-60 text-black bg-white hover:opacity-80"
                }`}
              >
                <div className="flex items-center gap-1">
                  {Icon && <Icon size={17} />}
                  {menu.name}
                </div>
              </button>
            );
          })}
          {isEnabled("menu_add_item_icon_functionality") && (
            <div>
              <button
                type="button"
                className="group border-2 border-orange-400 bg-white p-1 rounded-full hover:cursor-pointer hover:bg-orange-400 transition-all duration-300"
              >
                <Plus
                  size={20}
                  className="group-hover:scale-120 transition-all duration-300"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigator;
