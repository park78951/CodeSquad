const myReducer = (array, callback, initialValue) => {    
    if(initialValue !== undefined) {
        let value = initialValue;
        array.forEach( element => {
            value = callback(value, element, array);
        });
        return value;
    }
    
    if(initialValue === undefined) {
        let value = array[0];
        for(let i = 1; i < array.length; i++) {
            value = callback(value, array[i], array); 
        }
        return value;
    }

}

const testArray= [1, 3, 5, 7, 9];


const result = myReducer(testArray, (acc, cur) => {
    return acc + cur;
})

console.log(result);