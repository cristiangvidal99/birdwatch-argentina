import { NextFunction, Request, Response } from 'express';
declare function list(req: Request, res: Response, next: NextFunction): Promise<void>;
declare function getById(req: Request, res: Response, next: NextFunction): Promise<void>;
export { list, getById };
//# sourceMappingURL=UserController.d.ts.map