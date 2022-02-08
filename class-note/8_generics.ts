//제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것을 말한다.
// 데이터의 타입을 일반화한다.

// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText('넘길 수 있는 값은 아주 많다'); // text type 정의 안해서
// logText(19);
// logText(true);

// function logText1<T>(text: T): T {
//   console.log(text);
//   return text
// }

// logText1<string>('하이');


//제네릭 타입
// interface GenericTextLogFn {
//   <T>(text: T): T;
// }
// function logText2<T>(text: T): T {
//   return text;
// }

// let myString: GenericTextLogFn = logText2; // Okay;


//기존 타입 정의 방식과 제네릭의 차이점 1. 함수 중복선언의 단점
//인자를 그대로 출력하는 함수의 내용은 동일한데, 타입에 따라 중간 처리가 달라진다면, 같은 리턴값을 가지는 함수들을 많이 만들어야 하는 문제 발생
// function logText(text: string) {
//   text.split('').reverse().join();
//   return text;
// }

// function logNum(num: number) {
//   console.log(num);
//   return num;
// }

// logText('안녕');
// logNum(10);

// 제네릭의 장점과 타입 추론에서의 이점
// 타입을 각각 선언해서 따로 만들 필요가 없이 실제로 함수를 정의할 때 타입을 비워놓고 호출 시점에 타입을 넣어주는 것이 이점이다.

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');

//제네릭 타입
// function logText<T>(text: T): T {
//   return text;
// }

// let str1: <T>(text: T) => T = logText;
// let str2: {<T>(text: T): T} = logText;

// interface GenericLogTextFn {
//   <T>(text: T): T;
// }
// function logText<T>(text:T): T {
//   return text;
// }
// let myString: GenericLogTextFn = logText;


//인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = {
//   value: 10, // string으로 선언해야 하는데 number로 선언해서 에러남
//   selected: false
// }

// const obj: Dropdown  ={
//   value: '1',
//   selected: false
// }

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

// Dropdown에 string을 넣으면 value는 string값, number를 넣으면 number값이 된다. 
const obj: Dropdown<string> = {
  value: '10',
  selected: false
}

// 제네릭 클래스
class GenericMath<T> {
  pi: T;
  sum: (x: T, y: T) => T;
}

let math = new GenericMath<number>();
