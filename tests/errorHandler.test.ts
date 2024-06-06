import BadRequestError from '../src/api/handlers/bad-request-error';

describe('BadRequestError', () => {
  it('should set correct status code and message on BadRequestError', () => {
    const error = new BadRequestError('Invalid request parameter');

    expect(error.message).toBe('Invalid request parameter');
    expect(error.statusCode).toBe(400);
  });
});
