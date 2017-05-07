export class Topic {
  public _id: string;
  public name: string;
  public description: string;
  public category: string;
  public user: string;
  public answers: [{
    text: string;
    user: string;
    likes: number;
    dislikes: number;
    comments: [{
      text: string;
      user: string;
    }];
  }];
  public createdAt: Date;

  constructor(name, description, category) {
    // this._id = "";
    this.name = name;
    this.description = description;
    this.category = category;
  }
}
