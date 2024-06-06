import BadRequestError from "../../handlers/bad-request-error";
import { User, Todo, Post, Comment, UserData, UserDetails } from '../../types/types';

export const handleUsersFromQuery = (companySearchStr: string, users: User[]): Record<number, User> => {
    const filteredUsers = companySearchStr
        ? users.filter(user => user.company.name.toLowerCase().includes(companySearchStr))
        : users;

    if (!filteredUsers.length) {
        throw new BadRequestError('Company was not found');
    }

    const filteredUserMap: Record<number, User> = {};
    filteredUsers.forEach(user => {
        filteredUserMap[user.id] = user;
    });

    return filteredUserMap;
};


export const processData = (userMap: Record<number, User>, todos: Todo[], posts: Post[], comments: Comment[]): UserData => {
    const userTaskCount: Record<number, number> = {};
    const userCommentCount: Record<number, number> = {};
    const companyNames = new Set<string>();
    const usersDetails: UserDetails[] = [];

    todos.forEach(todo => {
        if (todo.completed && userMap[todo.userId]) {
            userTaskCount[todo.userId] = (userTaskCount[todo.userId] || 0) + 1;
            if (userTaskCount[todo.userId] === 4) { 
                companyNames.add(userMap[todo.userId].company.name);
            }
        }
    });

    posts.forEach(post => {
        if (userMap[post.userId]) {
            const commentCount = userMap[post.userId].address.geo.lat && userMap[post.userId].address.geo.lng ? comments.filter(comment => comment.postId === post.id).length : 0;
            if (commentCount > 3) {
                userCommentCount[post.userId] = (userCommentCount[post.userId] || 0) + 1;
                if (userCommentCount[post.userId] === 3) { 
                    const user = userMap[post.userId];
                    usersDetails.push({
                        name: user.name,
                        email: user.email,
                        todoCount: todos.filter(todo => todo.userId === user.id).length
                    });
                }
            }
        }
    });

    return { companyNames, usersDetails };
};
