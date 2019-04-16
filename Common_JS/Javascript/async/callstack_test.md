# 비동기 프로그래밍 기초 (Step 4-4)

## Javascript Runtime 기본 4요소
Javascript를 구성하는 기본 4요소는 아래와 같다고한다.
### 1. Javascript Engine (Call Stack, Heap Memory)
   - Code Interpreter
   - .js 파일을 읽으면서 Call Stack을 관리하고 수행하는 일을 하며, 외부 module을 읽어들이는 과정도 수행 (require, import 등)
   - Javascript Engine은 단일쓰레드이고 (Single Thread), 이 말은 call stack이 하나라는 말과 동일
### 2. Background
   - JS Engine에서 코드를 수행하다가 SetTimeout등의 Timer작업, eventListener 작업, Promise등의 API를 호출하면 Backgroud 작업 수행
   - background는 Multi Thread 
   - background 작업 완료시 callback 함수를 task queue에 전달하기 위해 Event Loop에 전달
### 3. Event Loop
   - call stack과 background 간의 업무 처리를 돕는 중개자 역할
   - callback을 background에서 task queue로, task queue에서 Engine의 call stack으로 전달하는 역할
### 4. Event Queues (Task Queue, Micro Task Queue, +Animation Frame등)
   - Event Loop로부터 받은 callback 함수 등을 call stack이 비는 시점에 call stack에서 실행할 수 있도록 Event Loop로 전달.
   - call stack이 빈 상태가 아니라면 event queue는 call back을 전달하지 않음.
   - promise의 경우 event queue에 전달되면 최 우선적으로 처리됨 


## Call stack과 event queue를 거쳐 출력이 되기 까지
![eventloop1](https://user-images.githubusercontent.com/37759759/56182804-c7f5c880-604e-11e9-8b1b-8c31f50b847d.png)
![eventloop2](https://user-images.githubusercontent.com/37759759/56182840-f1165900-604e-11e9-9207-be08f3bdf812.png)
![eventloop3](https://user-images.githubusercontent.com/37759759/56182880-1d31da00-604f-11e9-8108-f6f7264dc8ad.png)
(출처: [zeroCho님 블로그](https://www.zerocho.com/category/JavaScript/post/597f34bbb428530018e8e6e2))

위의 사진을 토대로 Javascript Runtime 기본 4요소라고 작성한 부분의 처리과정에 대해 간단히 정리하겠다.

1. 함수 호출시 Call Stack에 차례로 쌓인다. (Event에 해당하는 것도 차례로 )



