//제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것을 말한다.
// 데이터의 타입을 일반화한다.

function logText(text) {
  console.log(text);
  return text;
}

logText('넘길 수 있는 값은 아주 많다'); // text type 정의 안해서
logText(19);
logText(true);

function logText1<T>(text: T): T {
  console.log(text);
  return text
}

logText1<string>('하이');


//제네릭 타입
interface GenericTextLogFn {
  <T>(text: T): T;
}
function logText2<T>(text: T): T {
  return text;
}

let myString: GenericTextLogFn = logText2; // Okay;