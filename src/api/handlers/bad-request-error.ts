import CustomError from './custom-error';

class BadRequestError extends CustomError {
    constructor(message: string, metadata: Record<string, any> = {}) {
        super(message, 400, metadata);
        this.name = 'BadRequestError';
    }
}

export default BadRequestError;
