// function debug(name){
//     return function(str){
//         console.log(`[${name}] ${str}`);
//     }
// }
// var x = debug("Tinh")('ád');
// x
// function waitAndRun(ms,func){
//     setTimeout(func, ms);
// }
// function run(){
//     console.log('Run...');
// }
// waitAndRun(1000,run)
// function debug(name){
//     return function(str){
//         console.log(`[${name}] ${str}`);
//     }
// }
// var x = debug("Tinh")('ád');
// x
const exchangeRate = {
    usd: {
      vnd: 23371,
      jpy: 107
    },
    vnd: {
      baht: 0.0014
    }
  };
  function exchange(amount) {
    // your code here
    return {
        from: function(name='usd'){
            if(name === 'vnd'){
                return {
                    to: function(change='baht'){
                        return amount*exchangeRate[name][change];
                    }
                }
            }
            return{
                to: function(change='jpy'){
                    if(change==='vnd'){
                        return amount*exchangeRate[name][change];
                    }
                    return amount*exchangeRate[name][change];
                }
            }
        }
    }
  }
const usdToVndAmount = exchange(100).from('usd').to('vnd');
const vndToBahtAmount = exchange(10000).from('vnd').to('baht');
console.log(vndToBahtAmount,usdToVndAmount)
  