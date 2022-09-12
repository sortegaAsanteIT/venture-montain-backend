import { AuthRoleEnum } from '../../external/auth/Auth';

export class User {
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  role: AuthRoleEnum = AuthRoleEnum.USER;
  createdAt: number = Date.now();
}
