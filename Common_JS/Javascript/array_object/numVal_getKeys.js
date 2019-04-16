const datas = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}

const getElementNumberValue = (object) => {
    let dataList = [];
    let keysOfNumberValue = [];
    for(key in object) {
        if(typeof object[key] === "object") {
            dataList.push(object[key]);
        }
    }
    dataList.forEach( dataObjects => {
        for(key in dataObjects) {
            if(typeof dataObjects[key] === "number") {
                keysOfNumberValue.push(key);
            }
        }
    });
    return keysOfNumberValue;
}

console.log(getElementNumberValue(datas));