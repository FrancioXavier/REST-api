import express from 'express';
import BasicAuthenticationMiddleware from './middlewares/basic-authentication-middleware';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication-middleware';
import errorHandler from './middlewares/error-handler-middleware';
import authorizationRoute from './routes/auuthorization-routes';
import statusRouter from './routes/status-route';
import usersRoute from './routes/user-routes';
const app = express(); 


//Config
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

//Routes
    app.use('/status', statusRouter);

    app.use('/token', authorizationRoute);

    app.use(jwtAuthenticationMiddleware);
    app.use('/users', usersRoute);

//configuração handlers de erro

    app.use(errorHandler);

//Start
    app.listen(8080, () => {
        console.log('Aplicação executando na porta 8080');
    });