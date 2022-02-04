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

//제네릭 타입
// function logText<T>(text: T): T {
//   return text;
// }

// let str1: <T>(text: T) => T = logText;
// let str2: {<T>(text: T): T} = logText;

interface GenericLogTextFn {
  <T>(text: T): T;
}
function logText<T>(text:T): T {
  return text;
}
let myString: GenericLogTextFn = logText;
