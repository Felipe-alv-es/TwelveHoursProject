export interface TaskItemProps {
  state: string;
  onLocked?: boolean;
  onComplete: () => void;
  role?: "extraIncome" | "networking" | "requalification";
}
