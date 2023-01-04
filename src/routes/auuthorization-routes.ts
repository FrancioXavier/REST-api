import { NextFunction, Request, Response, Router } from 'express';
import ForbiddenError from '../models/errors/forbidden-error';


const authorizationRoute =  Router();

authorizationRoute.post('', (req: Request, res: Response, next: NextFunction) => {

    try {
        const authorizationHeader = req.headers['authorization'];

        if(!authorizationHeader){
            throw new ForbiddenError('Credenciais não informadas.');
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if(authenticationType !== 'Basic' || !token){
            throw new ForbiddenError('Tipo de autenticação inválido.');
        }

        const tokenContent = Buffer.from(token, 'base64').toString('utf-8');

        console.log(tokenContent);

        const [username, password] = tokenContent.split(':');

        if(!username || !password){
            throw new ForbiddenError('Credenciais não preenchidas.');
        }

    } catch (error) {
        next(error);
    }


});

export default authorizationRoute;