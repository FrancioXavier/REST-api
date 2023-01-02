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

usersRoute.post('/', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;

    console.log(newUser)
    res.status(StatusCodes.CREATED).send(newUser);
});

export default usersRoute;