let myNum: number = 5;
let myString: string = "Hello Universe";
let anythingOne: any = "Hey";
anythingOne = 25;
let anythingTwo: any = "Hey";
anythingTwo = number[1, 2, 3, 4];
let anythingThree: any = "Hey";
anythingThree = { x: 1, y: 2 };
// There are two ways of declaring an array type
let arrayNumbersOne: number[] = [1, 2, 3, 4, 5, 6];
let arrayNumbersTwo: number[] = [1, 2, 3, 4, 5, 6];
let myObj: obj = { x: 5, y: 10 };
class myNode {
  public val: number;
  private _priv: number;
  constructor(val) {
    this.val = val}
    public publicFun() {
      console.log ("PUBLIC")
      etc.
    }
  }
}
// function constructor
let MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
let myNodeInstance: MyNode = new MyNode(1);
console.log(myNodeInstnace.val);
// This function will return nothing.
function myFunction(): void => {
  console.log("Hello World");
}
