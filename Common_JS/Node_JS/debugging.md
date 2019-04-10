## Debugging Tool과 Debugging 방법

### Debugging Tools

Javascript 개발에 사용하는 Tool로 VS Code와 Chrome Dev Tool을 위주로 정리하려 한다.

### Debugging 방법



#### Chrome Dev Tools로 디버깅하기 (출처: [Google Dev Tools](https://developers.google.com/web/tools/chrome-devtools/javascript/?hl=ko))

VS Code로도 디버깅을 연습해 봤지만, Chrom Dev Tools이 기능이 다양한 것 같아 Chrome으로 적었다.

```js
/* Copyright 2016 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. */
function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  updateLabel();
}
function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else {
    return false;
  }
}
function updateLabel() {
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  var sum = addend1 + addend2;
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}
function getNumber1() {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}
var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);
```

![bug1](https://user-images.githubusercontent.com/37759759/55609848-a712b500-57bc-11e9-8c5c-06a3fa13e736.png)
(출처: [Google Dev Tools](https://developers.google.com/web/tools/chrome-devtools/javascript/?hl=ko))

위의 코드에서 5와 1을 넣었을 때 6이여야 하지만 51로 나와 이를 디버그 하는 예시를 보여주었다.

Chrome Dev Tools로 Debugging을 할 시 아래와 같이 진행한다.
1. DevTools를 열고 Source창으로 넘어간다.
2. Source 창은 3가지로 나뉘는데 해당 페이지가 요청하는 창, Code Editor 창, 자바스크립트를 검사하는 도구가 있는 창이다.
3. Break point로 코드를 사용하여 코드 실행 도중 코드를 멈추게 하고 그 부분의 모든 변수 값을 검사할 수 있다.
4. VS Code와 달리 (기능을 못찾은 걸 수도 있다.) Chrome Dev Tool은 Break point를 이벤트 발생 시점으로 지정 할 수도 있다.
5. 코드가 멈추면 `Step over next function call`로 다음 줄에 나오는 명령을 실행하고 다음 줄로 점프한다.
6. 호출된 함수를 검사하고 싶다면 `Step into next function call`를 입력하여 함수를 검사한다.
7. 검사하고 싶은 부분이 끝나면 `Step out`을 눌러 현재 함수의 내용을 실행하고 다음 함수에서 멈추도록 한다. (필요에 따라 다른 기능 선택)

### 추가 기능 및 정의

#### breack points
  - debugging을 위해 해당부분을 중지시키기 위한 중단점. 함수 실행 중 break points 에서 멈추게 된다.

#### Watch
  - +를 눌러 변수명을 입력하면 debugging 중 해당 변수가 정의된 시점을 지날 시 watch에 해당 변수명의 값이 출력된다. (일반 editor 창에도 값이 뜬다.)

#### call stack
  - 함수 내부의 함수가 계속 호출된다면 계속 call stack에 함수가 위치하게 되고 가장 늦게 호출될 수록 가장 상단에 위치하게 된다. 이 후 함수가 하나씩 완료될 때 마다 함수는 call stack에서 제거되게 되고, 함수의 호출을 차례대로 수행하는 역할을 한다.
  아래는 call stack을 초과했을 경우 overflow된 예시이다.

![maximum-call-stack](https://user-images.githubusercontent.com/37759759/55610982-25705680-57bf-11e9-8be6-1629967d1e01.png)
(출처: [캡틴판교 블로그](https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine/))

    
