export type GoalTypes = "gain" | "lose";

export type OnboardingFormDataTypes = {
  id: string;
  username: string;
  currentWeight: string;
  goal: GoalTypes | null;
};
