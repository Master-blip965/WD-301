export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completedAtDate?: string;
  assigneeName?: string;
}
