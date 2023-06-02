let arr = [
    ['김연아', '이순신'],
    ['광개토대왕', '세종대왕'],
    ['박태환', '강감찬'],
]

document.writeln(`arr[0]: ${arr[0]} <br>`);
document.writeln(`arr[1]: ${arr[1]} <br>`);
document.writeln(`arr[2]: ${arr[2]} <br>`);

document.writeln(`<br>`);
document.writeln(`arr.length: ${arr.length} <br>`);
document.writeln(`arr[0].length: ${arr[0].length} <br>`);
document.writeln(`arr[2].length: ${arr[2].length} <br>`);

document.writeln(`<br>`);
document.writeln(`세종대왕: ${arr[1][1]} <br>`);
document.writeln(`강감찬: ${arr[2][1].length} <br>`);
document.writeln(`박태환: ${arr[2][0].length} <br>`);

let arr1 = [];
document.writeln(`<br>`);
document.writeln(`arr1[0]: ${arr1[0]} <br>`);
document.writeln(`arr1[1]: ${arr1[1]} <br>`);
document.writeln(`arr1[2]: ${arr1[2]} <br>`);
document.writeln(`arr1.length: ${arr1.length} <br>`);


arr1[0] = 90;
arr1[2] = 100;
document.writeln(`<br>`);
document.writeln(`arr1[0]: ${arr1[0]} <br>`);
document.writeln(`arr1[1]: ${arr1[1]} <br>`);
document.writeln(`arr1[2]: ${arr1[2]} <br>`);
document.writeln(`arr1.length: ${arr1.length} <hr>`);

const num = 10;
const str = 'javascript';

const point = {x: 100, y: 500};//object
const arr2 = [1,2,3,4,5];

const plus = (su1,su2)=>{
    return su1+su2;
}
plus(2,3);

document.writeln(`num:${num}<br>`);
document.writeln(`str: ${str} <br>`);
document.writeln(`point.x:${point.x}<br>`);
document.writeln(`point[y]:${point["y"]}<br>`);

document.writeln(`<hr>`);
let arr3 = ['김연아', '이순신', '세종대왕'];
document.writeln(`arr3[0]: ${arr3[0]}<br>`);
document.writeln(`arr3[1]: ${arr3[1]}<br>`);
document.writeln(`arr3[2]: ${arr3[2]}<br>`);
document.writeln(`arr3[3]: ${arr3[3]}<br>`);
document.writeln(`arr3.length: ${arr3.length}<br>`);
document.writeln(`<br>`);


/* this */
const giseok ={
    name:'giseok',
    normal:function (){
        return this.name;
    }
}

document.writeln(`이름: ${giseok.name} <br>`);
document.writeln(`이름2: ${giseok.normal()}`)
