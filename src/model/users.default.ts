import { Users } from './user.model';

export const defaultUsers: () => Users = () => [
  {
    id: crypto.randomUUID(),
    name: 'Athena Weissnat',
    company: 'Little - Rippin',
    email: 'Elouise.Prohaska@yahoo.com',
    isNotified: false,
    isActive: true
  },
  {
    id: crypto.randomUUID(),
    name: 'Enrico Bottani',
    company: 'Bloombastic',
    email: 'el@beit.rock',
    isNotified: false,
    isActive: true
  }
];
