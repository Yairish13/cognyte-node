import CustomError from './custom-error';

class NotFoundError extends CustomError {
    constructor(message: string, metadata: Record<string, any> = {}) {
        super(message, 404, metadata);
        this.name = 'NotFoundError';
    }
}

export default NotFoundError;
