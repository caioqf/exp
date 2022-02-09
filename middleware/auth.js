import jsonwebtoken from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        // throw new Error()
        res.status(401).json({msg: 'token nao informado'})
        return console.log('Token nao informado na header da request.');
    }

    const token = authHeader.split(' ')[1]


    jsonwebtoken.verify(token, process.env.JWT_SECRET, (err, user)=> {
        if(err) return res.sendStatus(401)
        next()
    })
}
export { authMiddleware }