# Javascript Hoising.

Hoisting에 관해 간단히 정리하고자 한다. **var**, **let**/**const**는 모두 hoising이 되지만 좀 다른 특징을 갖고 있다.

##var의 특징

**var**는 hoisting이 이뤄진다. 인사이드 자바스크립트에서는 함수 실행시 변수 정의 과정을 아래 예시와 같이 설명하였다.
1. 함수가 호출되었을 때, 함수 내부의 변수를 읽어들인다.
2. 함수 내부의 변수를 읽어들인 후 값을 제외한 변수만 활성객체 (=변수객체)에 저장한다. 
   - 변수 선언 과정은
        1. 선언 단계 - 변수 객체에 변수명만 등록 (스코프 참조 대상)
        2. 초기화 단계 - 변수의 값이 undefined로 초기화
        3. 할당 단계 - 실제 값을 할당
    - var는 선언과 초기화가 한꺼번에 이뤄진다. 
3. 이후 함수를 한줄 씩 읽으면서 값을 읽어 들인다.


```js
console.log(x) // undefined
var x = "hello"
console.log(x) // hello
```

## var와 let/const의 hoisting 차이

ECMAScript 2015 spec을 확인해보면, 아래와 같은 글이 써있다고 한다.
(출처: [해외블로그](http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified))
>NOTE let and const declarations define variables that are scoped to the running execution context’s LexicalEnvironment. The variables are created when their containing Lexical Environment is instantiated but may not be accessed in any way until the variable’s LexicalBinding is evaluated. A variable defined by a LexicalBinding with an Initializer is assigned the value of its Initializer’s AssignmentExpression when the LexicalBinding is evaluated, not when the variable is created. If a LexicalBinding in a let declaration does not have an Initializer the variable is assigned the value undefined when the LexicalBinding is evaluated.


위의 설명이 어려워서 정리된 내용을 찾아 요약해보자면, let과 const는 실제로 hoisting은 이뤄지지만, 변수의 생성이 호출보다 나중에 이뤄진 경우 이 변수는 hoising 이후 TDZ(Temporal Dead Zone)에 존재하게되고 변수의 오류를 발생시킨다고 한다. let과 const의 경우는 반드시 초기화가 호출보다 먼저 이뤄져야 오류를 발생시키게 되지 않으며, const의 경우는 상수의 값을 같는 특징으로 인해 반드시 초기화에 그 값을 할당해 주어야 한다.

```js
console.log(x) // x is not defined at ~
let x = "hello"
console.log(x) // hello
```

## 함수의 Hoisiting

함수를 선언하는 방식에는 총 3가지가 있다고 한다.
1. 함수 선언문
    ```js
    function add_statement(x,y) {
    return x+y
    }
    ```
2. 함수 표현식
   ```js
    var add_expression = function(x,y) {
    return x+y
    };
   ```
3. 함수 생성자
   ```js
    var add_construction = new Function(‘x’,’y’,’return x+y’)
   ```

사실 3번으로 선언한느 방식은 함수 Hoisting을 공부하기 위해 찾아보며 처음 알게 되었다. 거의 쓰지 않기 때문에 함수 Hoisiting에 관한 정리는 함수 선언문과 함수 표현식으로만 정리 하도록 하겠다.

함수 선언문은 Hoisting이 일어나 호출이 선언보다 먼저 작성되어도 정상적으로 출력 또는 실행된다.

```js
console.log(add_statement(1,2)) // 3

function add_statement(x,y) {
 return x+y
}
```

하지만 함수 표현식은 hoisting이 발생하지 않는다고 하지만, var let, const에 따라 아래와 같은 오류를 호출한다.

```js
console.log(c()); // c is not a function
var c = () => "go"; 
```

```js
console.log(a()); // a is not defined
let a = () => "go"; 
```

```js
console.log(dd()); // dd is not defined
const dd = () => "go"
```

var를 사용한 함수표현식의 경우는 정확히는 hoisiting이 발생하지만, 함수가 아니기 때문에 위처럼 ***is not a function***이 나타나게 되는 것 같다. let과 const도 위의 변수 설명과 마찬가지로 hoisting이 발생하지만 TDZ로 인해 위와 같은 오류를 출력한다.