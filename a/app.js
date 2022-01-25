import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {registerNewUser} from '/home/caio/Documentos/js/exp/b/user.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res)=> {
    
    res.send('api no ar...')

})

app.post('/registrar', (req, res) => {
    
    var body = req.body
    
    registerNewUser(body)
    
})
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))