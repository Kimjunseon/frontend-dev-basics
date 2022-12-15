/**
 * 함수: function 타입의 객체
 * 
 */

// 함수를 생성하는 방법1: 함수 리터럴
console.log("\n=== 함수를 생성하는 방법 1 ===")
function f1(a, b) {
    return a + b;
}

console.log(typeof(f1), f1 instanceof Function, f1(10, 20));

// 함수를 생성하는 방법2: 함수 리터럴 (추천)
console.log("\n=== 함수를 생성하는 방법 2 ===")
var f2 =  function(a, b) {
    return a + b;
}

console.log(typeof(f2), f2 instanceof Function, f2(10, 20));

// 함수를 생성하는 방법3: new 연산자와 함께 Function 내장객체(생성자 함수)를 사용하는 방법
console.log("\n=== 함수를 생성하는 방법 3 ===")
var f3 = new Function("a", "b", "return a + b;");
console.log(typeof(f3), f3 instanceof Function, f3(10, 20));

// 함수를 생성하는 방법4: 익명(anonymous) 함수: callback
setTimeout(function() {
    console.log('time out');
}, 1000);

// 익명(anonymous) 함수의 다른 하나 예: 한번만(즉시) 실행하는 함수,, 한번만 실행 되기에 메모리를 한번쓰고 소멸
var s = (function(a, b) { 
    var m = 10;
    return a/m + b/m;
})(10, 20);

// 아래 코드는 메모리를 계속 잡아먹고있음
var m = 10;
var s = 10 / m + 20 / m;
console.log(s);

///////////////////////////////////////
console.log("\n=== 가변파라미터 ===")
// 1.가변 파라미터: 자바스크립트의 함수는 기본적으로 가변 파라미터를 지원
//   파라미터는 고정되어 있지 않음
//   에러가 나지 않음
var f4 = function(a, b, c) {
    console.log(a, b, c);
}
f4(10, 20, 30, 40, 50, 60);

// 2. 예
console.log("\n=== 가변 파라미터 예  ===")
var sum = function() {
    var s = 0;

    console.log(arguments instanceof Array, arguments.length); // 여기서 arguments 배열이 아닌 유사 객체이다
    // for(let i = 0; i < arguments.length; i++){
    //     s += arguments[i];
    // }

    // Error
    // arguments의 __proto__는 object prototype에 chain이 되어 있기 때문에 오류!
    // 즉 for each 구문이 되지가 않는다.

    return s;
}

// console.log(sum(1));
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 5, 6));