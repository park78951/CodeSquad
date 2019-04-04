## Code Wars 4월 4일 알고리즘

### 문제
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
(string으로 된 다수의 소괄호를 인자로 받는 함수를 만들고, 소괄호가 열렸다가 닫히는 순서가 올바르면 true, 올바르지 않다면 false를 return 하라.)

#### Examples

```js
"()" => true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```

#### Constraints

```js
0 <= input.length <= 100
```

### 풀이

```js
function validParentheses(parens){
  // parameter로 받은 소괄호들을 배열로 만들고(arr) 참고용으로 쓸 빈 배열을 하나 만든다.
  let arr = parens.split('');
  let tmpArr = [];
  
  // 일단 닫힌 소괄호가 첫 번째로 오는 경우는 무조건 false를 return 하기 때문에 가장 먼저 if문으로 조건을 걸어 놓는다.
  if(arr[0] === ')') return false;
  
  // 쪼개진 소괄호가 저장된 배열에 forEach문을 두어 처음 만들어 두었던 빈 배열에 '('가 나오면 저장, ')'가 나오면 삭제하도록 callback 함수를 작성
  // 조건은 총 3개로, '('일 경우는 무조건 임시 배열에 저장, ')'이 나오면 '('이 임시배열에 있을 경우 이를 삭제, 없을 경우 '('를 임시배열에 추가.
  arr.forEach(function(par) {
    if(par === '(') {
      tmpArr.push('(');
    } else if(par === ')' && tmpArr.indexOf('(') >= 0) {
      const remIdx = tmpArr.indexOf('(');
      tmpArr.splice(remIdx, 1);
    } else {
      tmpArr.push(')');
    }
  });
  
  // 처음 시작이 ')'로 시작하지 않고 제대로 소괄호가 열린다면 소괄호의 짝이 맞을 경우 tmpArr에서 모두 사라져야하기에 
  // tmpArr의 길이가 0이라면 true, 0보다 클경우 false 리턴
  return tmpArr.length === 0 ? true : false;
}
```