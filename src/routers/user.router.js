import express from 'express';

const router = express.Router();

router.post('/create', (req, res) => {
    console.log('Ruta de Creación de Usuario');
});

export default router;