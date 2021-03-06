import express from 'express';
import cors from 'cors';
import { AppRouter } from './AppRouter';
import './controllers/RootController';

const app = express();
const port = 5050;
// app.use(cookieSession({keys: ['arstdy']}))
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(AppRouter.getInstance());

app.listen(port, () => {
    console.log(`Listening! See: http://localhost:${port}`)
})