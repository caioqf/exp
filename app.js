// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import { getUsers, registerNewUser, loginUser, authenticateToken} from '../b/user.js';

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json())
// app.use(cors())

// app.get('/', authenticateToken, (req, res)=> {
    
//     res.send('API Rodando aqui')    
// })

// app.get('/user', async (req, res)=> {
//     res.send(await getUsers())
// })

// app.post('/user', (req, res) => {
    
//     var response = registerNewUser(req.body)
//     res.send(response)
     
// })

// app.post('/user/login', (req, res) => {

//     res.send(loginUser(req.body))
// })



// app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))


import express from "express";
import { router } from './routes/main.js'
import dotenv from 'dotenv'
dotenv.config('.env')

const app = express();

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1', router)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, ()=>
            console.log(`dev server running at: http://localhost:${port}`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();