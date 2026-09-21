import { NextFunction, Request, Response } from 'express';
declare function register(req: Request, res: Response, next: NextFunction): Promise<void>;
declare function login(req: Request, res: Response, next: NextFunction): Promise<void>;
declare function me(req: Request, res: Response, next: NextFunction): Promise<void>;
export { register, login, me };
//# sourceMappingURL=AuthController.d.ts.map