import { Model } from 'sequelize';
import type { Optional } from 'sequelize';
export interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}
type UserCreationAttributes = Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'>;
declare class UserModel extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
export default UserModel;
//# sourceMappingURL=User.d.ts.map