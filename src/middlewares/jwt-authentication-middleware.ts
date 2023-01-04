import { NextFunction, Request, Response } from "express";
import JWT from 'jsonwebtoken';
import ForbiddenError from "../models/errors/forbidden-error";
import user_repository from "../repositories/user_repository";


async function jwtAuthenticationMiddleware(req: Request, res: Response, next:NextFunction) {
    try {
        const authorizationHeader = req.headers['authorization'];

        if(!authorizationHeader){
            throw new ForbiddenError('Credenciais não informadas.');
        }

        const [authenticationType, token] = authorizationHeader.split(' ');

        if(authenticationType !== 'Bearer' || !token){
            throw new ForbiddenError('Tipo de autenticação inválido.');
        }

        try {
            const tokenPayload = JWT.verify(token, 'my_secret_key');

            if(typeof tokenPayload !== 'object' || !tokenPayload.sub){
                throw new ForbiddenError('Tipo de identificação inválido.');
            }

            const uuid = tokenPayload.sub;

            const user = {
                uuid: uuid,
                username: tokenPayload.username
            };

            req.user = user;

            next();
            
        } catch (error) {
            throw new ForbiddenError('Tipo de autenticação inválido.');
        }

    } catch (error) {
        next(error);
    }
}

export default jwtAuthenticationMiddleware;











// {
// 	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkNsYXJhIEzDrXJpbyIsImlhdCI6MTY3MjgwMjg0Nywic3ViIjoiYzY1ODBlZjMtNWNhYS00NTk2LThmMTQtOGU3NDA0NjE4YmEwIn0.iWzTjOzbnuftmUfKKWRVj1Led9WHSMm3VUfa67FRmJY"
// }