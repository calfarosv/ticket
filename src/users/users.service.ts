import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'spusersismch',
      password: 'r00t515mch',
      email: 'spusersismch@gmail.com',
      /*      
        userId: 1,
        username: 'john',
        password: 'changeme',
        email: 'emailjohn@gmail.com',
      */
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
      email: 'emailjohn@gmail.com',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}