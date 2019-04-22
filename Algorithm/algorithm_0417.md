## Codewars 4월 17일 알고리즘

정규 표현식을 공부하면서 익숙하지 않지만 연습 겸 풀어보았다.
풀고나서 더 괜찮은 코드를 보았는데 한줄만에 해결되었다....

### 문제
In this example you have to validate if a user input string is alphanumeric. The given string is not nil, so you don't have to check that.
(함수의 parameter로 input 받는 string이 알파벳과 숫자로 되어 있는지 검토해야한다. 빈 숫자는 없으니 체크하지 않아도 된다. - 라고 했지만 test case에 있었다.)

### 제한사항

- At least one character ("" is not valid)
- Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
- No whitespaces/underscore

### 풀이

```js
function alphanumeric(string){
  let arr = string.split('');
  let result = true;
  
  if(string === "") return false;
  
  arr.forEach( letter => {
    if(letter.match(/[a-zA-Z0-9]/) === null) result = false;
  })
  
  return result;
}
```

## 더 나은 풀이

```js
function alphanumeric(string){
  return /^[0-9a-z]+$/i.test(string);
}
```