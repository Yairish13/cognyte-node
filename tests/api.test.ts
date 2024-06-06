import axios from 'axios';
import { fetchPosts } from '../src/api/services/api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API Service - Posts', () => {
  it('should fetch posts and return data', async () => {
    const posts = [
      { id: 1, title: 'Hello World', body: 'This is a post.', userId: 1 },
      { id: 2, title: 'Second Post', body: 'This is another post.', userId: 1 }
    ];

    mockedAxios.get.mockResolvedValue({ data: posts });

    const result = await fetchPosts();

    expect(mockedAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');

    expect(result).toEqual(posts);
  });
});
