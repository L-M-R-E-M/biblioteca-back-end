const jwt = require('jsonwebtoken');

let verificaToken = (req, res, next) => {
    let token = req.get('token');

    //console.log('Hola Querido Padre, he entrado añ middleware pero no te diste cuenta');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if(err){
            return res.status(401).json({
                ok: false,
                err
            });
        }

        req.registrarEmpresa = decoded.registrarEmpresa;

        next();
    });
};

module.exports = {
    verificaToken
}