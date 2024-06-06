import express from 'express';
import { getData } from '../controllers/data/data.controller';

const router = express.Router();

router.get('/get_data', getData);

export default router;
