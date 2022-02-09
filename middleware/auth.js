import jsonwebtoken from "jsonwebtoken";

const authMiddleware = async (req, res) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        // throw new Error()
        res.status(401).json({msg: 'token nao informado'})
        return console.log('Token nao informado na header da request.');
    }

    const token = authHeader.split(' ')[1]

    try {
        
        next()
        
    } catch (error) {
        // throw new Error()
        res.sendStatus(401)
    }
}

export { authMiddleware }; 