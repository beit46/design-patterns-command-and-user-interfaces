export type User = {
  id: string;
  name: string;
  company: string;
  email: string;

  isActive: boolean;

  isNotified: boolean;
};
export type Users = User[];
