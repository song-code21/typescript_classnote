// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello'; // TS에서는 ES6사용

// TS 숫자 선언
let num: number = 1;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['dr.strange', 'ironman', 'spiderman'];
let arr2: number[] = [1,2,3];
let heroes2: string[] = ['capt', 'hulk', 'thor'];

// TS 튜플 -- 배열 index의 타입까지 정해놓는 것
let address: [string, number] = ['cindy', 10];

// TS 객체
let person: object = {
  name: 'capt',
  age: 100
};

let person2:{name: string, age: number} = {
  name: 'thor',
  age: 1000
};

// TS 진위값
let show: boolean = true;