import express from 'express';

const router = express.Router();

router.post('/create', (req, res) => {
    res.send('Ruta de Creación de Usuario')
});

export default router;