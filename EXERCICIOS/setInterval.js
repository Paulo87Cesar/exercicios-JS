//setInterval e setTimeout

function relogio(){
let data = new Date()
    return  data.toLocaleString('pt-BR',{timeStyle:'long'});    
}

const timer = setInterval(function(){
    console.log(relogio())
}, 1000)

setTimeout(function(){
 clearInterval(timer)
}, 6000)

setTimeout(function(){
    console.log("Bora dormir zzZZZZzz")
   }, 6000)