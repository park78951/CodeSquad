## Code Wars 4월 5일 알고리즘

### 문제
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
(ROT13은 암호를 대체하는 글자로 해당 알파벳의 13번째 이후의 글자로 바꾸는 것이다. 카이사르의 암호 일종)

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
(string을 받는 함수를 만들고 ROT13 암호로 string을 반환하라. 만약 알파벳이 아닌 특수 문자나 숫자의 경우는 받은 값 그대로 반환되도록 설정하라. 단순히 라틴/영어 알파벳만 변환되어야 한다.)

### 풀이

```js
function rot13(message){
// 받은 글자를 배열화 하고 빈 배열을 만든다.
  let arr = message.split('');
  let tmp = [];

// 소문자와 대문자를 배열의 값으로 작성한다.
  let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let upperCase = lowerCase.map(letter => letter.toUpperCase());

// 알파벳은 총 26개이고, 배열의 index는 0 ~ 25까지 있다. 이를 이용해 arr를 map 메소드를 사용하여 새로운 배열을 만든다.
  tmp = arr.map( letter => {

// 먼저 map에서 받는 letter가 소문자인지 확인한다.
    if(lowerCase.indexOf(letter) >= 0) {
      let idxLow = lowerCase.indexOf(letter);

// letter의 index에 13을 더했을 때, 소문자 배열의 길이를 초과하는지, 초과하지 않는지를 나눠서 함수를 작성
      if(idxLow <= 12) {
        return lowerCase[idxLow+13];
      } else {
        return lowerCase[idxLow+13-lowerCase.length]
      }

// 먼저 map에서 받는 letter가 대문자인지 확인한다.
    } else if(upperCase.indexOf(letter) >= 0) {
      let idxUpp = upperCase.indexOf(letter);

// letter의 index에 13을 더했을 때, 대문자 배열의 길이를 초과하는지, 초과하지 않는지를 나눠서 함수를 작성
      if(idxUpp <= 12) {
        return upperCase[idxUpp+13];
      } else {
        return upperCase[idxUpp+13-upperCase.length]
      }

// 알파벳 이외의 것들은 그대로 리턴한다.
    } else {
      return letter;
    }
  });
  
  return tmp.join('');
}
```