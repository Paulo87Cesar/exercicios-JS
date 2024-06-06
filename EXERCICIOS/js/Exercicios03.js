// ESCREVA UMA FUNÇÃO QUE RECEBE UM NÚMERO E RETORNE O SEGUINTE:
// NÚMERO É DIVISÍVEL POR 3 = FIZZ
// NÚMERO É DIVISÍVEL POR 5 = BUZZ
// NÚMERO É DIVISIVEL POR 3 E 5 = FIZZBUZZ
// NÚMERO NÃO É DIVISIVEL POR 3 E 5 = RETORNA O PRÓPRIO NÚMERO
// CHECAR SE O NÚMERO É REALMENTE UM NÚMERO = RETORNA O PRÓPRIO NÚMERO
// USE A FUNÇÃO COM NUMEROS DE 0 A 100


// const fizzBuZZ = (n) => {
//     let result = ' '
//     if (n % 3 === 0) {result += 'Fizz'}
//     if (n % 5 === 0) {result += 'Buzz'}
//     return result ? result : n 
// }
 
// for (i=0;i<=100; i++){
//     console.log(i, fizzBuZZ(i))
// }

function fizzBuzz (x){
   if (typeof x !==  'number') return x
    if (x % 3  === 0 && x % 5 === 0) return 'fizzBuZZ'
    if (x % 3 === 0)  return 'Fizz'
    if (x % 5 === 0)  return 'Buzz'
    return x
}
console.log('a',fizzBuzz('a'))
for( let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}
