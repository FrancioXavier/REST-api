import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const statusRouter = Router()

statusRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

export default statusRouter;