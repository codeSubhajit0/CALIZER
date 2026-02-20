"use client";

import { useState, useEffect } from "react";
import Home from "../Pages/home/Home";
import { OnboardingForm } from "../Utils/form/on-boarding-form/OnboardingForm";
import type { SCREEN_NAMES } from "@/constants/global.types";
import { useFeatureFlags } from "@/hooks/useFeatureFlags";
import { useOnboardingStore } from "@/store/onboarding.store";
import LoaderScreen from "../Utils/loader-screen/LoaderScreen";
import Navigator from "../Utils/navigator/Navigator";

export const Content: React.FC = () => {
  const { isEnabled } = useFeatureFlags();
  const { isComplete } = useOnboardingStore();
  const [hasHydrated, setHasHydrated] = useState(false);
  const [activeScreen, setActiveScreen] = useState<SCREEN_NAMES>("Dashboard");

  useEffect(() => {
    const unsubscribe = useOnboardingStore.persist.onFinishHydration(() =>
      setHasHydrated(true),
    );
    if (useOnboardingStore.persist.hasHydrated()) setHasHydrated(true);
    return unsubscribe;
  }, []);

  if (!hasHydrated) {
    return <LoaderScreen />;
  }

  return (
    <div className="h-screen w-full">
      {hasHydrated &&
        !isComplete &&
        isEnabled("onboarding_step_form_functionality") && <OnboardingForm />}
      <div className="relative w-full min-h-full bg-white bg-[radial-gradient(circle,rgba(0,0,0,0.12)_1px,transparent_1.2px)] bg-size-[22px_22px]">
        <div>
          <div className="mx-auto max-w-360 w-full">
            <div className="px-5 py-5">
              <Navigator
                activeScreen={activeScreen}
                onScreenChange={setActiveScreen}
              />
              <div>
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
