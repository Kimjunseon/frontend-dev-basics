/* 
변수와 자료형(Data Type)

[기본타입(Primitive Type)]
- number(실수와 정수를 따로 구분하진 않음)
- undefined
- string
- boolean

[객체]
object
function

*/

var u = undefined; // var u; 동일, 선언 정의가 구분이 없다.

i = 10;
s = "Hello World";
b = true;

console.log(i + ": " + typeof(i));
console.log(s + ": " + typeof(s));
console.log(b + ": " + typeof(b));

console.log(s.toUpperCase()); // 유사 객체?
