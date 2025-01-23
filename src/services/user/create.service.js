import getPool from "../../db/getPool";
import errorHelper from "../../helpers/errorHelper";

const main = async (user) => {
    try {
        // conectar a la base de datos
        const pool = await getPool();
        const sqlQuery = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
        const values = [user.name, user.email, user.password];
        const [response] = await pool.query(sqlQuery, values);

        if (response.affectedRows !== 1) {
            errorHelper.conflictError('Error al insertar el usuario', 'CREATE_USER_ERROR');
        }
        // dar de alta el usuario
        // devolver respuesta
    } catch (error) {
        errorHelper.internalServerError(error.message, 'CREATE_USER_ERROR');
    }
}

export default main