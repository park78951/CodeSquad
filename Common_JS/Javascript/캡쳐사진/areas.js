function typeNumber(a){
    if(typeof a !== "number"){
        throw reqNum;
    }
}

function checkParameter(a,b,c){

    if(arguments.length === 2){
        if(a!==b) {
            throw checkArg;
        }else{
            return ;
        }

    } else {
        if(a < b || a > c ) {
            throw checkArg;
        } else {
            return;
        }
    }

}

function getArea(name,...para){
    switch(name){

        case 'circle':
            para.forEach(function(item){
                typeNumber(item);
            });

            checkParameter(para.length,1,2);

            para.sort(function(a,b){
                return a-b;
            })

            return areaOfCircle(para[0],para[1]);

        case 'rect':
            para.forEach(function(item){
                typeNumber(item);
            });

            checkParameter(para.length,2);

            return areaOfRectangular(para[0],para[1])

        case 'trapezoid':
            para.forEach(function(item){
                typeNumber(item);
            });

            checkParameter(para.length,3);

            return areaOfTrapezoid(para[0],para[1],para[2]);

        case 'cylinder':
            para.forEach(function(item){
                typeNumber(item);
            });

            checkParameter(para.length,2);

            return areaOfCylinder(para[0],para[1]);

    }
};


function areaOfCircle(radius,n) {
    let area = 0;

    area = Math.PI*radius*radius;
    console.log(area.toFixed(2));

    if(n !== undefined){

        if(radius === n){
            return;
        }else{
            radius++;
            return areaOfCircle(radius, n);
        }
    }

    return area;

}

function areaOfRectangular(a,b){
    let area = 0;
    area = a*b;
    console.log(area);
    return area;
}

function areaOfTrapezoid(a,b,h){
    let area = 0;
    area = (a+b)*h/2;
    console.log(area);
    return area;
}

function areaOfCylinder(r,h){
    let area = 0;

    area = 2*Math.PI*r*(r+h);
        console.log(area.toFixed(2));
        return area.toFixed(2);
}


let checkArg = new Error('인자 갯수가 맞지 않습니다.');
let reqNum = new Error('숫자를 입력하세요.');


// getArea('circle');
// getArea('rect',2,3);
// getArea('trapezoid',2,3,3);
// getArea('cylinder',2,3);



