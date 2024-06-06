function soma(x, y){
   if(
      typeof x !== 'number' || 
      typeof y !== 'number' 
   ) {
      throw new ReferenceError('x e y prencisam ser números')
   }
   return x + y
}

try{
   console.log(soma(1, 2))
   console.log(soma('1', 2))
}catch(error){
   console.log('Isso é mais amigável para o usuário.')
}