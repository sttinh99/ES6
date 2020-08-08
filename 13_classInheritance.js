// class Animals{
//     constructor(name){
//         this.name = name
//     }
//     eat(){
//         console.log(`${this.name} eating...`);
//     }
// }
// class Bird extends Animals{
//     fly(){
//         console.log(`flying...`)
//     }
// }
// var En = new Bird('en');
// console.log(En.fly());
function Animal(name){
    this.name=name
}
Animal.prototype.eat = function(){
    console.log('eating');
}
Bird.prototype = new Animal //khai báo kế thừa
function Bird(name){
    Animal.apply(this,arguments);
}

var Easdsad = new Bird('en')
Easdsad.fly = function(){
    console.log('flying...');
}
console.log(Easdsad.fly());