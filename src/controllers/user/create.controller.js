import bcrypt from 'bcrypt';
import validateHelper from '../../helpers/validate.helper.js';
import schema from '../../schemas/user/create.schema.js';
import userService from '../../services/user/index.service.js';

const main = async (req, res, next) => {
    try {
        // validar esquema
        await validateHelper(schema, req.body);
        req.body.password = await bcrypt.hash(req.body.password, 5);
        // enviar al servicio los datos
        await userService.create(req.body);
        // responder
        res.send('Usuario creado con éxito')
    } catch (error) {        
       next(error); 
    }
}

export default main