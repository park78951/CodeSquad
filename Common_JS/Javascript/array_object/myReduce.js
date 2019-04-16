const myReducer = (array, callback, initialValue) => {    
    // 초기값 설정 되었을 때
    if(initialValue !== undefined) {
        let value = initialValue;
        array.forEach( element => {
            value = callback(value, element, array);
        });
        return value;
    }
    
    // 초기값이 설정되지 않았을 때
    if(initialValue === undefined) {
        let value = array[0];
        for(let i = 1; i < array.length; i++) {
            value = callback(value, array[i], array); 
        }
        return value;
    }

}


// test case below
const testArray= [1, 3, 5, 7, 9];


const result = myReducer(testArray, (acc, cur) => {
    return acc + cur;
}, 100)

console.log(result);