"use client";

import { useState } from "react";
import Home from "../Pages/Home/Home";
import Navigation from "../Utils/Navigation/Navigation";
import type { SCREEN_NAMES } from "@/constants/Config";

export const Content: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<SCREEN_NAMES>("Dashboard");

  return (
    <div className="h-screen w-full">
      <div className="relative w-full min-h-full bg-white bg-[radial-gradient(circle,rgba(0,0,0,0.12)_1px,transparent_1.2px)] bg-size-[22px_22px]">
        <div>
          <div className="mx-auto max-w-360 w-full">
            <div className="px-5 py-5">
              <Navigation
                activeScreen={activeScreen}
                onScreenChange={setActiveScreen}
              />
              <div className="px-3">
                <Home activeScreen={activeScreen} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
