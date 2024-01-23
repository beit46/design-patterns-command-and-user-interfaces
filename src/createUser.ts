import { User } from './model/user.model';

export const createUser: ({
  name,
  company,
  email
}: {
  name: string;
  company: string;
  email: string;
}) => User = ({ name, company, email }) => ({
  name: name + ' Copy (1)',
  company,
  email,
  id: crypto.randomUUID(),
  isActive: false,
  isNotified: false
});
