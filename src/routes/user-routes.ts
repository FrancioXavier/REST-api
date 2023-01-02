import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes'
const usersRoute = Router();


usersRoute.get('/', (req: Request, res: Response, next: NextFunction) => {
    const user = [{userName: 'Francio'}];
    res.status(StatusCodes.OK).send(user);
});

usersRoute.get('/:uuid', (req: Request<{uuid:string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid
    res.status(StatusCodes.OK).send({uuid})
});

export default usersRoute;