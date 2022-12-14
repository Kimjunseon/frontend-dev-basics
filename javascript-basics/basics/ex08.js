/*
자바스크립트 객체III: 확장
*/
var o = {
    name: '둘리',
    age: 10
}

var f = function() {
    console.log('Hello World');
}

console.log("\n===== 확장 =====")
o.anther = {
    name: '마이콜',
    age: 25,
    print: function() {
        console.log(this.name + ":" + this.age);
    }
}
console.log(o);
o.anther.print();

f.anther = {
    name: '또치',
    age: 10
}
console.log(f);

console.log("\n===== 기본 타입[primitive type]은 확장 되지 않는다. =====")
var i1 = 10;
var i2 = new Number(10);

console.log(i1);
console.log(i1 + ":" + i2 + ":" + (i1 + i2));

i2.anther = {
    name: '또치',
    age: 10
}
console.log(i2);

i1.anther = {} // 유사 객체로 실행: new Number(i1).anther <=> {} (같은 코드)
console.log(i1.anther); // 유사 객체로 실행이 돼서 -> undefined