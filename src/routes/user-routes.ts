import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes'
import user_repository from '../repositories/user_repository';

const usersRoute = Router();


usersRoute.get('/', async (req: Request, res: Response, next: NextFunction) => {
    const user = await user_repository.findAllUsers();
    res.status(StatusCodes.OK).send(user);
});

usersRoute.get('/:uuid', async (req: Request<{uuid:string}>, res: Response, next: NextFunction) => {
    try{
        const uuid = req.params.uuid;
        const user = await user_repository.findById(uuid);
        res.status(StatusCodes.OK).send(user);
    } catch(error){
        next(error);
    }
    
});

usersRoute.post('/', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await user_repository.insertUser(newUser);
    res.status(StatusCodes.CREATED).send(uuid);
});

usersRoute.put('/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    await user_repository.updateUser(modifiedUser);

    res.status(StatusCodes.OK).send();
});

usersRoute.delete('/delete/:uuid', async (req: Request<{uuid:string}>, res: Response, next: NextFunction) => {
    const uuid_user = req.params.uuid
    await user_repository.deleteUser(uuid_user)
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;