import express, { Request, Response, NextFunction } from 'express'
const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('batata');
});

app.listen(8080, () => {
    console.log('Aplicação executando na porta 8080');
});