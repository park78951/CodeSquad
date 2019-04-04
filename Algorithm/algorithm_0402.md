## Hello world 출력

```js
function helloworld(){
    console.log("hello world");
};
```

##  A + B 출력

```js
function addNumber(a, b){
    return a + b;
}
```

##  A - B 출력

```js
function minNumber(a, b){
    return a - b;
}
```

##  두정수 사이의 합 출력
```js
function solution(a, b) {
   var answer = 0;
	var begin;
	var end;

	if(a<b){
		begin = a;
		end = b;
	}else if(a>b){
		begin = b;
		end = a;
	}else if (a == b){
		answer = a;
	}

	var count = begin;
	for(var i=begin; i<=end; i++){
		answer += count;
		count++;
	}
    
    return answer;
}
```