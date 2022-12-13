/* null과 undifined */

var myVar1 = undefined;  // 명시적 undefined 대입
var myVar2;              // 암시적 undefined 대입
var myVar3 = null;

console.log(myVar1 + ":" + myVar2 + ":" + myVar3) ;
// console.log(myVar4); not defined error

// undefined와 null 등치(Equal) 비교
console.log(myVar1 == myVar3); // 값 비교
console.log(myVar1 === myVar3); // 타입 비교 + 값 비교
console.log("=====  equality  =====");

/*

== : equality, 값의 동치성, 형 변환


===: identity
    1. 타입의 동일성
    2. 타입이 같은 경우
        2.1 (primitive type): 값의 동일성
        2.2 (object): 객체의 동일성

*/

// == : equality, 값의 동치성, 형 변환
console.log('4' == 4);
console.log(false == 0);
console.log('abc'== new String('abc'));
console.log(true + 10); // 11
console.log('abc' + new String('abc')); // abcabc
console.log(1 + '11'); // 111? 12? -> 111 : 좋지 않은 코드.. 코드 작성은 명시적으로
console.log('11' + 1); // 111? 12? -> 111 : 좋지 않은 코드.. 코드 작성은 명시적으로


console.log("=====  identity  =====");

// ===: identity
console.log('4' === 4);
console.log(true === 1);
console.log('abc'=== new String('abc'));
console.log(4 === 2);
console.log(new Number(10) === new Number(10));