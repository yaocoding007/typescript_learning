let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;


let name_: string = 'bob';
name_ = 'smith';

let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];

//元组 Tuple

let x: [string, number];
x = ['hello', 10];

// 枚举
enum Color {
    Red, Green, Blue
}

let c: Color = Color.Green;

// console.log('ccccc->', c)

enum Color2 {
    Red = 2,
    Green = 3,
    Blue = 4
}

let c2: Color2 = Color2.Green;

console.log('c2->', c2)

// Void

function warnUser() :void {
    console.log('This is my warning message');
}

// Undefined Null

let u: undefined = undefined;
let n: null = null;

// 类型断言

let someValue: any = 'this is a string';

let strLen: number = (<string>someValue).length; 
let strLen2: number = (someValue as string).length; 