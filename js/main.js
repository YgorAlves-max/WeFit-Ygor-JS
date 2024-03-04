function organizeMenuVertically() {
    const btnGroup = document.querySelector('.btn-group-vertical');
    btnGroup.classList.remove('btn-group-vertical');

    const buttons = document.querySelectorAll('.btn-group-vertical .btn');
    buttons.forEach(button => {
        button.classList.add('d-block');
    });
}

function onHeaderEvent() {
    var div = document.querySelector('.jumbotron');
    var d = document.getElementById('btn-header');

    div.style.cursor = 'pointer';
    div.style.backgroundColor = '#6b757e';
    div.style.color = 'white';
    div.style.textAlign = 'right';
    d.style.backgroundColor = '#4EA93B';
    d.style.borderColor = '#4EA93B';
}
function selectItemList() {
    var listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach(function (item, index) {
        item.style.cursor = 'pointer';
        if (index === 3) { // Verifica se o índice é o quarto item (índice 3)
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
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

        var category = card.querySelector('.card-title').textContent.trim();
        if (category === 'Animais') {
            var button = card.querySelector('.btn-primary');
            button.style.backgroundColor = '#4EA93B';
            button.style.borderColor = '#4EA93B';
        }
    });
}

// Chamando as funções diretamente para aplicar as alterações quando a página carregar
document.addEventListener('DOMContentLoaded', function () {
    onHeaderEvent();
    addItemsToList();
    organizeCards();
    selectItemList();
    organizeMenuVertically();
});
