// Escreva uma função que receba 2 numeros retorne o maior deles. 

// function maior (n1, n2){
//     if (n1 > n2) {
//       return (n1)
//     } else {
//       return(n2)
//     }
//   }
// console.log(maior(8, 5))

//Refotorando este código

// function maior (n1, n2){
//     if (n1 > n2) {
//       return (n1)
//     }  {
//       return(n2) // Aqui funciona sem o else por ser apenas uma condição.
//     }
//   }
// console.log(maior(8, 5))

// function maior (n1, n2){
//     let result;
//     if (n1 > n2) 
//       return (n1)
//       return(n2) // Por ser apenas uma condição pode-se retirar as chaves 

//   }
// console.log(maior(8, 5))

// function maior (n1, n2){
//    return n1 > n2 ? n1 : n2 // Condição ternária
//   }
// console.log(maior(8, 5))

const maior = (x, y) => x > y ? x : y ;
console.log(maior(20, 30))

