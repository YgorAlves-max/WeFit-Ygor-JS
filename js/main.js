function organizeMenuVertically() {
    const btnGroup = document.querySelector('.btn-group-vertical');
    btnGroup.classList.remove('btn-group-vertical');

    const buttons = document.querySelectorAll('.btn-group-vertical .btn');
    buttons.forEach(button => {
        button.classList.add('d-block');
    });
}

function onMouseHeaderEvent() {
    var div = document.querySelector('.jumbotron');
    var d = document.getElementById('btn-header');

    div.addEventListener('mouseover', () => {
        div.style.cursor = 'pointer';
        div.style.backgroundColor = '#6b757e';
        div.style.color = 'white';
        div.style.textAlign = 'right';
        d.style.backgroundColor = '#4EA93B';
        d.style.borderColor = '#4EA93B';
    })
    div.addEventListener('mouseout', () => {
        div.style.color = '';
        div.style.backgroundColor = ''
        div.style.textAlign = 'left';
        d.style.backgroundColor = '';
        d.style.borderColor = '';
    })
}
function onGoSomewere() {
    var buttons = document.querySelectorAll('.btn.btn-primary');
    buttons.forEach(function (button) {
        button.addEventListener('mouseover', function () {
            button.style.cursor = 'pointer';
            button.style.backgroundColor = '#4EA93B';
            button.style.borderColor = '#4EA93B';
        });
        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = '';
            button.style.borderColor = '';
        });
    });

}
function selectItemList() {
    var listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach(function (item) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function () {
            listItems.forEach(function (li) {
                li.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
}
function addItemsToList() {
    var list = document.querySelector('.list-group');
    var quartoItem = document.createElement('li');
    quartoItem.classList.add('list-group-item');
    quartoItem.textContent = 'Quarto item';

    var quintoItem = document.createElement('li');
    quintoItem.classList.add('list-group-item');
    quintoItem.textContent = 'Quinto item';

    list.appendChild(quartoItem);
    list.appendChild(quintoItem);
}
function organizeCards() {
    var container = document.getElementById('cardList');
    var cards = Array.from(container.querySelectorAll('.col-lg-3'));
    var orderedCategories = ['Natureza', 'Animais', 'Pessoas', 'Tecnologia'];

    cards.sort(function (a, b) {
        var categoryA = a.querySelector('.card-title').textContent.trim();
        var categoryB = b.querySelector('.card-title').textContent.trim();

        return orderedCategories.indexOf(categoryA) - orderedCategories.indexOf(categoryB);
    });
    cards.forEach(function (card) {
        container.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    addItemsToList();
    organizeCards();
    selectItemList();
    organizeMenuVertically();
    onGoSomewere();
    onMouseHeaderEvent();
});
