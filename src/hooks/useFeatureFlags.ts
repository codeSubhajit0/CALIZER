import { useFeatureFlagStore } from "@/store/featureFlag.store";
import type { FEATURE_FLAG_KEY } from "@/constants/config/FeatureFlags";

export const useFeatureFlags = () => {
    const flags = useFeatureFlagStore((feature) => feature.flags);
    const isEnabled = useFeatureFlagStore((feature) => feature.isEnabled);
    const setFlag = useFeatureFlagStore((feature) => feature.setFlag);
    const setFlags = useFeatureFlagStore((feature) => feature.setFlags);

    const withFeature = <T,>(
        flag: FEATURE_FLAG_KEY,
        enabledValue: T,
        disabledValue: T
    ): T => {
        return isEnabled(flag) ? enabledValue : disabledValue;
    };

    return {
        flags,
        isEnabled,
        setFlag,
        setFlags,
        withFeature
    }
}