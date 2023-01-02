import express, { Request, Response, NextFunction } from 'express'
import usersRoute from './routes/user-routes';
const app = express(); 


//Config
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

//Routes
    app.use('/users', usersRoute);

    app.get('/status', (req: Request, res: Response, next: NextFunction) => {
        res.status(200).send('batata');
    });

//Start
    app.listen(8080, () => {
        console.log('Aplicação executando na porta 8080');
    });