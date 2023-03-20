const all = document.querySelectorAll('div')
const cardSection = document.querySelector('#cards')
const containerCategories = document.querySelector('#category')
let categ = []

var input, filter;
input = document.getElementById('search');
let data
let events

function getData() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(d => {
            data = d
            pastEvenstArray()
            search()
            categories()
        })
        .catch(error => {
            console.error(error);
        });
}


pastEvents = []
events = pastEvents


function pastEvenstArray() {
    const date = data.currentDate
    data.events.forEach(e => {
        if (e.date < date) {
            pastEvents.push(e)
            
        }
    })
}

const containerC = document.getElementById('category')

containerC.addEventListener('change', () => {
    filterCategory(pastEvents)
})


function createElement(e) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';
    card.id = 'card'

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.style.height = "180px";
    img.src = e.image;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.innerHTML = e.name;

    const texto = document.createElement('p');
    texto.classList.add('card-text');
    texto.innerHTML = e.description;

    const contPrice = document.createElement('div');
    contPrice.classList.add('container-price');

    const price = document.createElement('p');
    price.innerHTML = `Price: $ ${e.price}`;
    price.classList.add('price');

    const btn = document.createElement('a');
    btn.classList.add('btn');
    btn.classList.add('btn-primary');
    btn.href = `/details.html?id=${e._id}`
    btn.innerHTML = 'Ver mas...';

    contPrice.appendChild(price);
    contPrice.appendChild(btn);
    card.appendChild(img);
    card.appendChild(cardBody);

    cardBody.appendChild(title);
    cardBody.appendChild(texto);
    cardBody.appendChild(contPrice);
    cardSection.appendChild(card);
}

function iterateElements(array) {
    deleteElements()
    array.forEach(e => {
        createElement(e);
    })
}

function deleteElements() {
    const divs = document.querySelectorAll('#card');
    if (divs.length != 0) {
        for (i = 0; i < divs.length; i++) {
            cardSection.removeChild(divs[i]);
        }
    }
}


function categories() {
    category = []
    pastEvents.forEach(e => {
        category.push(e.category)
    })
    categ = [...new Set(category)];
    addCateg(categ)
}

function addCateg(categ) {
    categ.forEach((c, i) => {
        const div = document.createElement('div')
        div.classList.add('form-check')
        div.classList.add('form-check-inline')

        const input = document.createElement('input')
        input.classList.add('form-check-input')
        input.type = 'checkbox'
        input.value = c
        input.id = `inlineCheckbox${i}`

        const label = document.createElement('label')
        label.classList.add('form-check-label')
        label.textContent = c
        label.setAttribute('for', `inlineCheckbox${i}`)

        containerCategories.appendChild(div)
        div.appendChild(input)
        div.appendChild(label)
    })
}

function search() {
    filter = input.value.toLowerCase();

    let array = events.filter(e => {
        return e.name.toLowerCase().indexOf(filter) > -1;
    })
    iterateElements(array)
}

input.addEventListener('keyup', search);

function filterCategory(eventos) {
    let arrayC = []
    let checkboxs = document.querySelectorAll("input[type='checkbox']")
    let arraycheck = Array.from(checkboxs)
    let checkChecked = arraycheck.filter(check => check.checked)
    if (checkChecked.length == 0) {
        events = eventos
        search()

    }
    else {
        let arrayCheckeds = checkChecked.map(c => c.value)
        arrayC = eventos.filter(e => {
            return arrayCheckeds.includes(e.category)
        })
        events = arrayC
        search()
    }
}


getData()