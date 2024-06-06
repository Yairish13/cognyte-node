import CustomError from './custom-error';

class GeneralError extends CustomError {
    constructor(message: string, metadata: Record<string, any> = {}) {
        super(message, 500, metadata);
        this.name = 'GeneralError';
    }
}

export default GeneralError;
