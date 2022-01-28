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