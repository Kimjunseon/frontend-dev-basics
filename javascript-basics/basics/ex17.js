/**
 * Function.prototype.apply
 * Function.prototype.call
 * Function.prototype.bind
 */
var myObject ={
    v: "t",
    f: function() {
        console.log(this.v);
    },

    f1: function(param1, param2) {
        console.log(param1 + " " + this.v + " " + (param2 ? param2 : ""));
    }
}
var yourObject ={
    v: "dr"
}

myObject.f.apply(yourObject); // this를 하고 호출까지 함, 파라미터가 없을 때
myObject.f1.call(yourObject, "hi", "again"); // this를 하고 호출까지 함, 파라미터가 있을 때

// 바인드
var f2 = function(){
    console.log(this.v);
}.bind(yourObject); // this를 하고 호출은 안함
f2(); // 호출
