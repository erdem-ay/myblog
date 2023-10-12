export interface BlogType {
  _id?: string;
  title: string;
  body: string;
  author: string;
}

export interface RegisterType {
  id?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
