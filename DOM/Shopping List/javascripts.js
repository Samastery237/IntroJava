const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector ('form button');

function addItem () {
    const currentValue = input.value;

    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listItem.appendChild(listBtn);

    listText.appendChild = currentValue;
    listBtn.appendChild = 'Delete';

    list.appendChild(listItem);

    listBtn.addEventListener('click',() => {
        list.removeChild(listItem);
    });
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value !== ''){
        addItem();
    }
});