## Node.JS

Node.JS는 Module System으로 이뤄졌으며, 각각의 파일이 module을 수용하여 실행되는 방식이다.

### Web Browser에서 작동하는 Javascript와 Node.JS의 차이

둘다 Javascript의 문법을 기반으로 작동하지만, 다른 함수를 사용한다. 각각의 다른 기능을 공부해야 두가지 언어 모두 쓸 수 있게된다.
Web과 Node.JS는 서로 협력적인 관계이기 때문에 두 가지를 제어해 하나의 완결된 Web Application을 만들 수 있다.

### Node.JS의 특징
1. V8 Engine이다. (자바스크립트 코드를 실행하는 프로그램 또는 인터프리터 / 오픈소스, 구글에서 개발, C++로 작성)
    - 높은 퍼포먼스가 특징.
    - 속도 향상을 위해 interpreter를 사용하는 대신 just in-time compiler를 구현하여 코드 실행시 머신 코드로 컴파일
2. Event-driven 방식
    - 사용자가 이벤트를 발생 시켰을 때, 발생한 이벤트에 대해서만 웹서버가 연결을 하여 자원을 최소화.
    - 대부분의 웹 서버는 사용자의 이벤트를 기다리며 자원(메모리 등)을 소비
3. non-blocking 방식
    - I/O: I/O (Input / Output) 작업을 실행할 때는 OS와 I/O Device(Hard Disk)가 알아서 처리를 하기 때문에 보통 CPU가 할 일이 없다.
    - Blocking: CPU가 쉬면서 OS에서 오는 신호를 기다리는 행위를 말한다. Javascript 코드를 한줄 한줄 실행하다가 I/O 작업이 필요한 경우 CPU는 가동을 멈추고 쉬면서 OS에게 일을 맡긴다. 이후 OS에서 작업이 끝나면 다시 Javascript 코드를 한 줄씩 읽기 시작한다.
    - Non-Blocking: CPU를 쉬게 두지 않고 OS에게 작업 지시를 한 후 계속 Javascript 코드를 읽는다. 이후 맡은 일을 OS가 완료하면 CPU에 전달하도록 명령하여 CPU가 계속 일을 할 수 있도록 하는 것이 Non-Blocking.
    - 오래 걸리는 작업을 효율적으로 처리 할 수 있다.
4. Single Thread


### module 불러오기 (출처: [node.js](https://nodejs.org/api/modules.html))

만약 main.js 파일에서 *circle.js*라는 파일을 불러오려면

***main.js***
```js
const circle = require('./circle.js');
```

***circle.js***
```js
const { PI } = Math;

exports.area = (r) => PI * r ** 2;

exports.circumference = (r) => 2 * PI * r;
```

처럼 작성하면 되며, ***main.js*** 파일의 circle 변수에 ***circle.js*** module을 저장한 것이다.
일반적으로 각 모듈은 require됨과 동시에 아래의 함수 안에 감싸지게 되고 처리된다. 아래 코드 예시를 확인하자.

```js
(function(exports, require, module, __filename, __dirname) {
    const { PI } = Math;

    exports.area = (r) => PI * r ** 2;

    exports.circumference = (r) => 2 * PI * r;
});
```
기본적으로 제공되는 `exports`, `require`, `module`, `__filename`, `__dirname`을 parameter로 받아 우리가 따로 import 하지 않아도 module js파일에서 해당 property or variable을 사용할 수 있었다.
이렇게 감싸므로써, 모듈의 변수는 private 상태가 되어 다른 곳에서 접근할 수 없게 된다.
여기서 `exports`는 `module.exports`와 동일하여 `exports.area = (r) => PI * r ** 2;`와 `module.exports.area = (r) => PI * r ** 2;` 모두 작성할 수 있다.

### 내가 짠 예시

***main.js*** (모듈을 호출하는 메인 함수)
```js
const module_test = require('./module_test');

console.log(module_test.shout());
console.log(module_test.laugh());
```

***module_test.js***
```js
const laughing = 'hahahahaha';
const shouting = 'AAAAAAAAAA!!!!!';

exports.laugh = () => laughing;
exports.shout = () => shouting;
```

***Command 출력 결과***
![test](https://user-images.githubusercontent.com/37759759/55611747-636e7a00-57c1-11e9-8be8-c206fd52dd24.png)