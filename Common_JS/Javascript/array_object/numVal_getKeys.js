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
    let dataArray = [];
    let resultArray = [];
    for(key in object) {
        if(typeof object[key] === "object") {
            dataArray.push(object[key]);
        }
    }
    dataArray.forEach( dataObjects => {
        for(key in dataObjects) {
            if(typeof dataObjects[key] === "number") {
                resultArray.push(key);
            }
        }
    });
    console.log(resultArray);
    return resultArray;
}

getElementNumberValue(datas);