//숫자형 이넘
enum Shoes {
  Nike,
  Adidas
}

var myShoes = Shoes.Nike;
console.log(myShoes);
// 별도의 값을 지정하지 않으면 숫자형 이넘에 자동증가 1, 2, 3 이런식

//문자형 이넘
enum Shoes2 {
  Nike = '나이키',
  Adidas = '아디다스'
}

//이넘의 활용(예외처리를 쉽게 해줄 수 있다)
enum Answer {
  Yes = 'Y',
  No = 'N'
}

function AskQuestion(answer: Answer) {
  if(answer === Answer.Yes) {
    console.log('yes')
  }
  if(answer === Answer.No) {
    console.log('no')
  }
}

AskQuestion(Answer.Yes);
AskQuestion(Answer.No);
// AskQuestion('yes') 여러 상황에 있을 수 있는 예외를 처리해줄 수 있다. 모두 Answer.Yes || Answer.No로 통일
// AskQuestion('y')