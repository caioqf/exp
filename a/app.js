import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getUsers, registerNewUser} from '../b/user.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res)=> {
    
    res.send('API Rodando aqui')    
})

app.get('/user', (req, res)=> {
    res.send(getUsers())
})

app.post('/user', (req, res) => {
    
    var response = registerNewUser(req.body)
    res.send(response)
    
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))