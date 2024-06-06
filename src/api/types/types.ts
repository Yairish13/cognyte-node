export interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
  address: {
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface UserData {
  companyNames: Set<string>;
  usersDetails: UserDetails[];
}

export interface UserDetails {
  name: string;
  email: string;
  todoCount: number;
}
