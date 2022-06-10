import { ROUTES } from '../models/routes';

export const userUrl = (id: string) => `${ROUTES.USERS}${id}`;
