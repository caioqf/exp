import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
const PORT = 3000;

app.use(bodyParser.json())
app.use(cors())

// app.get('/pegar', (req, res)=> {
    
//     res.send({nome: 'caio'})

// })

app.post('/registrar', (req, res) => {
    var body = req.body
    console.log(body);

    
})
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))