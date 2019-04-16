# 비동기 프로그래밍 기초 (Step 4-4)


```js
const baseData = [1,2,3,4,5,6,100];

function foo() {
    baseData.forEach((v,i) => {
        console.log("sync ", i);
        bar();
    });
}

function bar() {
    baseData.forEach((v,i) => {
        debugger;
        console.log("sync 2", i);
    });
}

foo();
```