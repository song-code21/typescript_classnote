// ES2015(ES6) class

class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}

var seho = new Person("세호", 30); // 생성되었습니다 출력
console.log(seho);

//자바스크립트 프로토타입 (참조관계에서 부모객체를 프로토타입아라고 한다.)
// .__proto__로 접근할 수 있다.
// 기본적으로 객체를 생성하면 프로토타입은 최상위의 Object라서 Object 프로토타입의 여러 메소드들을 사용할 수 있다.

// 클래스는 syntatic sugar이다. 기존 생성자 함수로 만들어지는 것을 보기 좋게 바꾼 것 뿐!
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var cindy = new Person("cindy", 10);

//이 문법이 위 클래스 문법이랑 기능이 정확히 동일하다.
