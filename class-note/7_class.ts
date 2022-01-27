// class Person1 {

//   constructor(name, age) {
//     this.name = name;
//     this.age = age; 
//   }
// } 이렇게 정의하면 this.name의 name부분에 빨간밑줄, age도 마찬가지로 빨간밑줄이 나타나는데, 
// 타입스크립트에서 constuctor에 속성을 정의해줄 때는
// 사용할 멤버변수의 타입을 먼저 지정해 주어야 한다.
// constructor의 변수 타입도 정해줄 수 있고, 변수의 유효범위도 설정해줄 수 있다. 
// 멤버변수에 대한 유효범위가 클래스 안이라고 하면 private라는 속성을 이용할 수 있다. 

class Person1 {
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}