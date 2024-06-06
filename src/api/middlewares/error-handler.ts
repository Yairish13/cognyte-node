import { Request, Response, NextFunction } from 'express';
import CustomError from '../handlers/custom-error';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err, 'error from handler');

    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({
            error: {
                message: err.message,
                stack: err.stack,
                metadata: err.metadata,
            }
        });
    }

    console.error('Unhandled Error:', err);

    return res.status(500).json({
        error: {
            message: err.message || 'Something went wrong',
            stack: err.stack,
        }
    });
};

export { errorHandler };
