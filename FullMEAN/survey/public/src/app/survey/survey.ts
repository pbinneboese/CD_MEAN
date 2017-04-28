export class Survey {
  public _id: string;
  public userName: string;
  public question: string;
  public option1: string;
  public vote1: number;
  public option2: string;
  public vote2: number;
  public option3: string;
  public vote3: number;
  public option4: string;
  public vote4: number;
  public createdAt: Date;

  constructor(userName, question) {
    // this._id = "";
    this.userName = userName;
    this.question = question;
    this.option1 = "";
    this.vote1 = 0;
    this.option2 = "";
    this.vote2 = 0;
    this.option3 = "";
    this.vote3 = 0;
    this.option4 = "";
    this.vote4 = 0;
  }
}

export class Account {
  public _id: string;
  public userName: string;
  public createdAt: Date;

  constructor(userName) {
    // this._id = "";
    this.userName = userName;
  }
}
