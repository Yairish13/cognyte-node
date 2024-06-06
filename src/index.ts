import { app } from './config/app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    } catch (err) {
        console.error('Failed to start the server:', err);
    }
};

start();
