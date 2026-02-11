import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {
    FEATURE_FLAG_ITEMS,
    type FEATURE_FLAGS,
    type FEATURE_FLAG_KEY,
} from "@/constants/config/FeatureFlags";

type FeatureFlagStoreState = {
    flags: FEATURE_FLAGS;

    isEnabled: (flag: FEATURE_FLAG_KEY) => boolean;
    setFlag: (flag: FEATURE_FLAG_KEY, value: boolean) => void;
    setFlags: (flags: FEATURE_FLAGS) => void;
    resetFlags: () => void;
};

export const useFeatureFlagStore = create<FeatureFlagStoreState>()(
    devtools((set, get) => ({
        flags: FEATURE_FLAG_ITEMS,

        isEnabled: (flag) => Boolean(get().flags[flag]),

        setFlag: (flag, value) =>
            set((state) => ({
                flags: { ...state.flags, [flag]: value },
            })),

        setFlags: (newFlags) =>
            set({
                flags: { ...FEATURE_FLAG_ITEMS, ...newFlags },
            }),

        resetFlags: () => set({ flags: FEATURE_FLAG_ITEMS }),
    }))
);
