"use client";

import Home from "../Pages/Home/Home";
import Navigation from "../Utils/Navigation/Navigation";

export const Content: React.FC = () => {
  return (
    <div className="h-screen w-full">
      <div
        className="relative w-full min-h-full bg-white bg-[radial-gradient(circle,rgba(0,0,0,0.12)_1px,transparent_1.2px)]
        bg-size-[22px_22px]"
      >
        <div>
          <Navigation />
          <div className="mx-auto max-w-360 w-full">
            <div className="px-5 py-5 md:px-25 lg:px-25">
              <Home />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
