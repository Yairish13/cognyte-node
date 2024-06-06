import { Request, Response, NextFunction } from 'express';
import { getData } from '../src/api/controllers/data/data.controller';
import * as dataFuncs from '../src/api/controllers/data/data.funcs';

jest.mock('../src/api/controllers/data/data.funcs');

const mockRequest = (query: any) => ({
  query
}) as Request;

const mockResponse = () => {
  const res: Partial<Response> = {};
  res.json = jest.fn().mockReturnValue(res);
  return res as Response;
};

describe('Data Controller', () => {
  it('getData should send a JSON response with data', async () => {
    const req = mockRequest({ company: 'Tech' });
    const res = mockResponse();
    const next = jest.fn() as NextFunction;

    (dataFuncs.processData as jest.Mock).mockReturnValue({
      companyNames: new Set(['Tech Innovate']),
      usersDetails: [{ name: 'John Doe', email: 'john@example.com', todoCount: 5 }]
    });

    await getData(req, res, next);
    expect(res.json).toHaveBeenCalledWith({
      companyNames: ['Tech Innovate'],
      users: [{ name: 'John Doe', email: 'john@example.com', todoCount: 5 }]
    });
  });
});
