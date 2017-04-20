export class Friend {
  firstName: string;
  lastName: string;
  birthday: Date;
  _id: string;
  createdAt: Date;

  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
  }
}
