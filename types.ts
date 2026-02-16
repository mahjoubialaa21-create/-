
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface CauseItem {
  title: string;
  description: string;
  icon: string;
}
