// // Função para obter a data e a hora atuais
// function mostrarDataHora() {
//     // Cria um objeto de data
//     var data = new Date();

//     // Obtém o dia da semana
//     var diaSemana = data.toLocaleDateString('pt-BR', { weekday: 'long' });

//     // Obtém a hora, os minutos e os segundos
//     var hora = data.getHours();
//     var minutos = data.getMinutes();
//     var segundos = data.getSeconds();

//     // Formata a hora para ter sempre dois dígitos
//     hora = hora < 10 ? '0' + hora : hora;
//     minutos = minutos < 10 ? '0' + minutos : minutos;
//     segundos = segundos < 10 ? '0' + segundos : segundos;

//     // Monta a string com a data e hora
//     var dataHoraString = diaSemana + ', ' + hora + ':' + minutos + ':' + segundos;

//     // Obtém o elemento HTML onde queremos exibir a data e a hora
//     var elementoDataHora = document.getElementById('data-hora');

//     // Atualiza o conteúdo do elemento HTML com a data e a hora
//     elementoDataHora.textContent = dataHoraString;
// }

// // Chama a função para exibir a data e a hora atual assim que a página carregar
// mostrarDataHora();

// // Define um intervalo para atualizar a data e a hora a cada segundo
// setInterval(mostrarDataHora, 1000);


const h1 = document.querySelector('.container h1');
const data = new Date();


h1.innerHTML = data.toLocaleString('pt-BR',{dateStyle: 'full', timeStyle:'short'});