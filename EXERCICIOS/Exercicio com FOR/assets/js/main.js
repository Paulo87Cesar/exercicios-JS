
// Criar objetos

const elementos = [
    {tag: 'P', texto: 'Aprendendo JS'},
    {tag: 'div', texto: 'Frase 2'}, 
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
let {tag, texto} = elementos [i]; // associação via desestruturação
let tagCriada = document.createElement(tag);
tagCriada.innerHTML = texto;
div.appendChild(tagCriada); // metodo que adiciona o elemento no HTML

}

container.appendChild(div)