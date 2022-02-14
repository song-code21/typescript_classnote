//타입추론: 타입스크립트가 코드를 해석해 나가는 동작을 의미
//변수를 선언하거나 초기화 할 때 타입이 추론됨
//이외에도 변수, 속성, 함수의 반환 값 등을 설정할 때 타입추론이 일어난다.

//문맥상의 타이핑(Contextual typing)
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);
  console.log(mouseEvent.monkey);
}