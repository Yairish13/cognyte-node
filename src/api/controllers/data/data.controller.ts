import { NextFunction, Request, Response } from 'express';
import { fetchUsers, fetchTodos, fetchPosts, fetchComments } from '../../services/api';
import { handleUsersFromQuery, processData } from './data.funcs';
import GeneralError from '../../handlers/general-error';

export const getData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const companySearchStr = req.query.company?.toString().toLowerCase() || '';

        const [users, todos, posts, comments] = await Promise.all([
            fetchUsers(), fetchTodos(), fetchPosts(), fetchComments()
        ]);

        const filteredUserMap = handleUsersFromQuery(companySearchStr, users);

        const { companyNames, usersDetails } = processData(filteredUserMap, todos, posts, comments);

        res.json({ companyNames: Array.from(companyNames), users: usersDetails });
    } catch (error) {
        next(new GeneralError(`Something went wrong - ${error}`))
    }
};
