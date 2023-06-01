/**
 *
 */

// 함수
//function name(){}
//function name(val,val2){}
// function name(){return value;}

const xy = 7;

function double() {
    console.log(xy * 2);
}

double();

console.log("───────────────────────────────────────────────────────────────");
(function square(x) {
    console.log(x * x);
})(5);

console.log("───────────────────────────────────────────────────────────────");

(function () {
    console.log(xy * 3);
})();

// var - 함수 레벨
// let,const - 블록레벨
function scope() { //함수 정의부
    let y;
    if (true) {
        y = 4789;
        console.log(y)
    }
    console.log(y)
}

//형변환
// 참:true,{},[],1,2,'false',-12,'3.45',12.34,.....
// 거짓:false,'',null,undefined,0,-0, NaN

if (!undefined) {
    console.log("거짓")
}


// scope();
const double2 = (x, y) => {
    return x * y;
}
console.log('double:', double2(6, 7));

/*const doubleArrow = (x) => {
    return x * 2;
}*/

const doubleArrow=(x)=>{x * 5}
console.log('doubleArrow:', doubleArrow(5));
