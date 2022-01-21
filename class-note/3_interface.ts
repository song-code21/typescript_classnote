interface User {
  age: number;
  name: string;
}

//변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
}

//함수에 인터페이스 활용
function getUser(user:User) {
  console.log(user);
}
getUser({age: 1, name: '세호'});

//함수의 스펙에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}

//인덱싱
interface StringArray {
  [index: number]: string
}
var arr: StringArray = ['1', '2', '3'];
var arr2: string[] = ['2','2','3'];

//딕셔너리 패턴 -> 인덱싱과 유사한 방식 
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/
}
// 인터페이스의 핵심은 타입 체크를 확실하게 할 수 있다(추론)
Object.keys(obj).forEach(function(value) {
  // parameter value의 타입을 알 수 있음
})


//인터페이스 확장(인터페이스를 상속받아서 기존에 있던것 보다 확장해서 사용할 수 있게 됨)
interface Person {
  name: string;
  age: number;
}

//확장을 사용하기 전
interface Developer {
  name: string;
  age: number;
  stack: string;
}

//확장을 사용하면 중복값을 쓰지 않고 필요한 값만 추가할 수 있다. extends키워드를 사용
interface Developer2 extends Person {
  stack: string;
}

var cindy: Developer2 = {
  name: 'cindy',
  age: 28,
  stack: 'typescript'
}
