export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface Token {
  createdAt: Date;
  expiresAt: Date;
  id: string;
  token: string;
  user?: User;
  userId: string;
}

export interface User {
  createdAt: Date;
  displayName: string;
  email: string;
  googleId?: null | string;
  id: string;
  password?: null | string;
  phone?: null | string;
  roles: Role[];
  tokens?: Token[];
  updatedAt: Date;
  username: string;
}
