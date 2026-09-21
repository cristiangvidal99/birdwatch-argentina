import { User } from '../models';
declare function getAllUsers(): Promise<User[]>;
declare function getUserById(id: string | number): Promise<User>;
export { getAllUsers, getUserById };
//# sourceMappingURL=UserService.d.ts.map