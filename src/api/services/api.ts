import axios from 'axios';
import { User, Todo, Post, Comment } from '../types/types';

const API_URL = process.env.PORT || 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>(`${API_URL}/users`);
    return response.data;
};

export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await axios.get<Todo[]>(`${API_URL}/todos`);
    return response.data;
};

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await axios.get<Post[]>(`${API_URL}/posts`);
    return response.data;
};

export const fetchComments = async (): Promise<Comment[]> => {
    const response = await axios.get<Comment[]>(`${API_URL}/comments`);
    return response.data;
};
