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