import { User } from '../models';
import type { UserAttributes } from '../models/User';
interface Credentials {
    name?: string;
    email?: string;
    password?: string;
}
declare function register({ name, email, password }: Credentials): Promise<{
    user: User;
    token: string;
}>;
declare function login({ email, password }: Credentials): Promise<{
    user: UserAttributes;
    token: string;
}>;
declare function generateToken(user: UserAttributes): string;
export { register, login, generateToken };
//# sourceMappingURL=AuthService.d.ts.map