import express from 'express';
import dataRoutes from './data.route';

const router = express.Router();

router.get('/status', (req, res) => {
    res.json({
        code: 200,
        message: 'ok',
    });
});

router.use('/', dataRoutes);

export default router;
