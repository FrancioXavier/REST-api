import express, { Request, Response, NextFunction } from 'express'
import usersRoute from './routes/user-routes';

const app = express();
app.use('/users', usersRoute)


app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('batata');
});

app.listen(8080, () => {
    console.log('Aplicação executando na porta 8080');
});