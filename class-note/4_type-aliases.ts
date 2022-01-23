// interface Person {
//   name: string;
//   age: number;
// }

type Person1 = {
  name: string;
  age: number;
}

var seho: Person1 = {
  name: 'seho',
  age: 25
}

type MyString = string;
var str: MyString = 'hello';

type Todo = {id: string; title: string; done: boolean};
function getTodo(todo: Todo) {

}

// 타입별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 여부이다. interface는 확장이 가능한데 타입별칭은 확장이 불가능
// 가능한 interface로 선언하는 것이 좋음! -공식문서
// 좋은 소프트웨어는 언제나 확장이 용이해야 한다는 원칙에 따라 가능한 interface로 선언하면 좋다!
