import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes'
import user_repository from '../repositories/user_repository';

const usersRoute = Router();


usersRoute.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const user = await user_repository.findAllUsers();
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

usersRoute.put('/:uuid', (req: Request<{uuid:string}>, res: Response, next: NextFunction) => {
    const update_user_uuid = req.params.uuid;
    const modified_user = req.body;

    modified_user.uuid = update_user_uuid;

    res.status(StatusCodes.OK).send(modified_user);
});

usersRoute.delete('/delete/:uuid', (req: Request<{uuid:string}>, res: Response, next: NextFunction) => {

    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;