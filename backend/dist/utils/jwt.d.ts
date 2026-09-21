import { JwtPayload } from 'jsonwebtoken';
export interface TokenPayload extends JwtPayload {
    userId: number;
    email: string;
}
declare function signToken(payload: TokenPayload): string;
declare function verifyToken(token: string): TokenPayload;
export { signToken, verifyToken, };
//# sourceMappingURL=jwt.d.ts.map