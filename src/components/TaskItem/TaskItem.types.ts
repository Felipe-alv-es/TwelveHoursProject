export interface TaskItemProps {
  active: boolean;
  locked: boolean;
  finished: boolean;
  role: "extraIncome" | "networking" | "requalification";
}
