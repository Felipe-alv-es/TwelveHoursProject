export interface TaskItemProps {
  state: string;
  onLocked?: boolean;
  onComplete: () => void;
  role?: string;
  seconds?: number;
  variant?: "Hour" | "HalfHour";
}
