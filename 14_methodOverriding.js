class Car{
    active(){
        console.log('Running...')
    }
}
class Mecedess extends Car{
    active(cb){
        console.log('sadsaf',cb);
        //Khi method con trùng method cha thì 
        //method cha không còn sử dụng được nữa...
    }
}
var mecedess_m5 = new Mecedess
mecedess_m5.active(Blala);