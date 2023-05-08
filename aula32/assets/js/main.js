const elementos = [
    { tag: 'p', texto: 'Frase 1' }, // 0
    { tag: 'div', texto: 'Frase 2' }, // 1
    { tag: 'footer', texto: 'Frase 3' }, // 2
    { tag: 'section', texto: 'Frase 4' }, // 3   
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag , texto } = elementos[i];
    let createdTag = document.createElement(tag);
    createdTag.innerText = texto;
    div.appendChild(createdTag);
}

container.appendChild(div);