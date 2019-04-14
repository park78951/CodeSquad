# Javascript Scope

기존에 공부하다가 이해하기 힘들었던 부분이자 추가 학습이 필요했던 Javascript의 **Scope**에 대해서 다시 정리해야겠다.

## Javascript에서의 Scope란?

먼저 Scope란 변수에 접근할 수 있는 유효범위라고 생각할 수 있다.
Scope의 종류엔 Global Scope(전역 스코프), Local Scope(지역 스코프)가 있다.
각각의 특징은 아래와 같다.

1. Global Scope(전역 스코프)
    - 함수 바깥이나 소위 말하는 `{}` 바깥에 선언된 변수는 모두 전역스코프를 가지고 있다고 한다. (가장 상위에 선언된 변수)
    - 전역 스코프의 변수는 함수를 포함한 어디에서든 사용할 수 있다는 특징이 있다. 
    - 전역 스코프의 사용은 메모리 관리의 문제 및 같은 이름을 가진 변수간에 충돌, 변수의 재선언 문제가 발생할 수 있기 때문에 사용을 최소화 해야한다.
    - 전역 변수 또한 Window객체 안에 선언된 변수이기 때문에 아래 Local Scope의 속성도 갖게 된다.(function scope, block scope)

2. Local Scope(지역 스코프)
   - 변수를 함수나 객체 등의 특정 부분에서만 사용할 수 있는 것.
   - Functional Scope와 Block Scope(Lexical Scope) 두 가지로 나뉨. (굉장히 비슷하지만 기준이 함수에 있냐, block({})에 있냐의 차이가 있는 것 같다.)
      1. Functional Scope (함수 스코프)
           - 함수 내부에서 변수를 사용하면 함수 내부에서만 사용할 수 있는 것.
           - 기존에 사용하는 var가 함수 스코프의 특징을 갖고 있음.

            ```js
            var hello = 'hello'
            function sayHello () {
                var hello = 'Hello there!'
                console.log(hello);
            }
            sayHello(); // 'Hello there!'
            console.log(hello) // 'hello'
            ```

        2. Block Scope (블록 스코프) / Lexical Scope
            - 중괄호({}) 내부에서 const 또는 let으로 변수를 선언하면, 중괄호 내부에서만 접근 가능.
            - block scope는 const와 let의 특징이며, 아래와 같은 예제에서 var와 차이를 갖게 된다.
            
            ```js
            let s_account="dog";
            {
                let s_account="blog";
                console.log(s_account); //blog
            }

            console.log(s_account); //dog
            ```
            ```js
            var s_account="dog";
            {
                var s_account="blog";
                console.log(s_account); //blog
            }

            console.log(s_account); //blog
            // var는 함수스코프인데, 함수가 없기 때문에 변수 s_account가 재 정의 되어 {} 바깥에서도 변수 값이 변경됨.
            ```



## **var** vs [**let** vs **const**]

let과 const에 대괄호를 친 이유는 먼저 var와 let, const의 차이를 확인하고, 이후 let과 const의 차이를 확인하려 한다.

1. **var** vs **let/cosnt**
    - 앞서 정리한 것과 같이 var는 function scope, let/const는 block scope의 특성을 갖는 점.
    - var는 재 선언 가능, let/const는 재 정의 불가
    ```js
    var hello = "hello";
    var hello = "hello there";
    console.log(hello) // hello there
    ```
    ```js
    let hello = "hello";
    let hello = "hello there"; //Identifier 'hello' has already been declared
    ```
    - var와 let, cosnt는 hoisting이 모두 일어 나지만, const는 선언시 값을 정의해줘야 함. (hositing에 대해서는 추후 정리 예정)
2. **let** vs **const**
   - let은 변수에 재 할당 가능, const는 변수 재할당 불가.
   - const는 데이터의 주소값만 고정(변수의 값을 데이터의 주소에 저장해 가져오는 프로세스이기 때문.) 하기 때문에 객체나 배열의 요소를 바꿀 수 있음.