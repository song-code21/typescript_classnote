function logMessage(value: any) {
  console.log(value);
}

logMessage('hello');
logMessage(100);
// type에 any를 사용하게 되면, 사실상 타입의 장점이 없어지게 된다.
// 좀 더 타입의 장점을 살리면서 문제를 해결하는 방법이 있다.
// or연선자 | 를 이용한 유니온타입(하나의 타입 이상을 사용할 수 있게 해주는 것)
function logMessage2(value: string | number) {
  console.log(value);
}

logMessage2('hello');
logMessage2(100);

//유니온 타입의 장점
//기본적으로 유니온 타입은 특정 파라미터나 변수에 한가지 이상의 타입을 사용하고 싶을 때 파이프 연산자를 사용하면 된다. 
var cindy: string | number | boolean; //복습


function logMessage3(value: string | number) {
  if(typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }

  throw new TypeError('value must be string or number');
}
logMessage3('hello');
logMessage3(100);

//유니온타입 특징
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name
  // someone.age
  // someone.skill
}
//인터페이스를 유니온타입으로 사용할 경우 보장된 공통 속성만 접근이 가능하다.


//인터섹션타입 & 연산자
function askSomeone2(someone: Developer & Person) {
  someone.name
  someone.age
  someone.skill
}
// 인터섹션타입으로 정의하게 되면 모두 만족하는 타입이기 때문에 Developer와 Person의 모든 속성에 접근 가능하다.
// 실무에서는 유니온타입을 더 많이 쓰게 된다. 