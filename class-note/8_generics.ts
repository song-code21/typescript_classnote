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

// 인터페이스에 제네릭을 사용하면 특정 속성에 대한 타입을 별도로 사용시점에 정의해서 넘겨줄 수 있다.
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

//제네릭의 타입 제한
// function logTextLength<T>(text: T): T {
//   console.log(text.length)
//   return text;
// }
//제네릭으로 보내는 타입에는 배열객체에서 사용할 수 있는 length를 사용할 수 있는지 아닌지 알 수 없다.
//제네릭에 타입 한트를 추가적으로 줘서 타입제한을 해줄 수 있다. 
// function logTextLength<T>(text: T[]):T[] {
//   console.log(text.length);
//   return text;
// }
// logTextLength<string>(['hi', 'hello']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

// T는 lengthType을 가지고 있는 타입으로 인식 lengthType에는 length가 number타입으로 정의되어 있음
function logTextLength<T extends LengthType>(text: T):T {
  text.length;
  return text;
}
logTextLength('a');
// logTextLength(10); length가 내부 속성으로 제공되고 있지 않아서 포함할 수 없음

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// function getShoppingItemOption<T>(itemOption: T): T {
//   return itemOption;
// }
// getShoppingItemOption(1); // 어떤 타입이던 함수를 호출한 시점에서 제네릭타입만 잘 넘겨주면 문제없이 사용할 수 있음
// 하지만 getShoppingItemOption에 우리가 선언해둔 ShoppingItem에 있는 속성들만 받겠다고 제약할 경우에는 keyof로 타입을 제한할 수 있다.

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption
};
getShoppingItemOption('name');
getShoppingItemOption('price');

