export interface TaskItemProps {
  state: string;
  onLocked?: boolean;
  role?: "extraIncome" | "networking" | "requalification";
}
