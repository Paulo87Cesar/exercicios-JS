function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando uma instância Date')
    }
    if(!data){
        data = new Date()
    }

  return   Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: 'medium'}).format(new Date())    
}

try{
    const data = new Date('01-01-1970 22:24:00')
    const hora = retornaHora()
    console.log(hora)
}catch(e){
    //tratar erro 
}finally{
    console.log('Tenha uma boa noite')
}