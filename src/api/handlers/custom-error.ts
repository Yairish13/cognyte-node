class CustomError extends Error {
    statusCode: number;
    metadata: Record<string, any>;
  
    constructor(message: string, statusCode: number = 500, metadata: Record<string, any> = {}) {
      super(message);
  
      this.name = this.constructor.name;
      this.statusCode = statusCode;
      this.metadata = metadata;
    }
  }
  
  export default CustomError;
  