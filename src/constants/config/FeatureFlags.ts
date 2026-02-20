export const FEATURE_FLAG_ITEMS = {
  // Feature keys with flag indicator
  menu_add_item_icon_functionality: true,
  onboarding_step_form_functionality: true,
} satisfies Record<string, boolean>;

export type FEATURE_FLAG_KEY = keyof typeof FEATURE_FLAG_ITEMS;
export type FEATURE_FLAGS = Record<FEATURE_FLAG_KEY, boolean>;
