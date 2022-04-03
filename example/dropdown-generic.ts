interface DropdownItem<T> {
  value: T;
  selected: boolean;
};

//value의 타입이 바뀔 때 마다 interface선언을 다르게 해줄 것이 아니라, 바뀌는 타입을 수용할 수 있는 제네릭을 활용해서 일원화해주면 됨
// interface Email {
//   value: string;
//   selected: boolean
// }

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// interface ProductNum {
//   value: number;
//   selected: boolean
// }
const numberOfProducts: DropdownItem<number>[]= [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];


// email과 numberOfProducts를 모두 수용할 수 있는 타입을 정의해줘야 함.(제네릭 활용)
// 인터페이스를 사용하면 각 타입 정의 부분이 더 많이 생기게 된다. 
// 향후에 어떤 타입이 오던간에 그때그때마다 유연하게 가져다가 쓸 수 있게 하는 것 -> 제네릭
function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});
