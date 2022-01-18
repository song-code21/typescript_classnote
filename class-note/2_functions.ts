//함수의 파라미터에 타입을 정의하는 방식
function sum1(a: number, b: number) {
  return a + b;
}
sum1(10,20);

// 함수의 반환 값에 타입을 정의하는 방식
function add() : number {
  return 20;
}

// 함수의 타입을 정의하는 방식을 종합하면?
function sum(a: number, b: number): number {
  return a + b;
}
// 함수 타입 - 파라미터를 제한하는 특성
// sum(10,20, 30) 불필요한 정보를 넣었다는 에러가 뜸

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {
  return 10;
}
log('hello world');
log('hello', 'tsc');