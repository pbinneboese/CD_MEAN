import { Injectable } from '@angular/core';
import { User } from './user';
@Injectable()
export class UserService {
  users: Array<User> = [
    new User("Diana", Date(), Date()),
    new User("Ben", Date(), Date()),
    new User("Tina", Date(), Date()),
    new User("Kris", Date(), Date())
  ]
  constructor() { }

}
