import express from 'express';
import statusRouter from './routes/status-route';
import usersRoute from './routes/user-routes';
const app = express(); 


//Config
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

//Routes
    app.use('/users', usersRoute);

    app.use('/status', statusRouter)

//Start
    app.listen(8080, () => {
        console.log('Aplicação executando na porta 8080');
    });