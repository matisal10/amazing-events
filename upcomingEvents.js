const all = document.querySelectorAll('div')
const cardSection = document.querySelector('#cards')
const containerCategories = document.querySelector('#category')
let categ = []

var input, filter;
input = document.getElementById('search');

var data = {
    "currentDate": "2022-01-01",
    "events": [
        {
            id: 1,
            "image": "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
            "name": "Collectivities Party",
            "date": "2021-12-12",
            "description": "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 5
        },
        {
            id: 2,
            "image": "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
            "name": "Korean style",
            "date": "2022-08-12",
            "description": "Enjoy the best Korean dishes, with international chefs and awesome events.",
            "category": "Food Fair",
            "place": "Room A",
            "capacity": 45000,
            "assistance": 42756,
            "price": 10
        },
        {
            id: 3,
            "image": "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
            "name": "Jurassic Park",
            "date": "2021-11-02",
            "description": "Let's go meet the biggest dinosaurs in the paleontology museum.",
            "category": "Museum",
            "place": "Field",
            "capacity": 82000,
            "assistance": 65892,
            "price": 15
        },
        {
            id: 4,
            "image": "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
            "name": "Parisian Museum",
            "date": "2022-11-02",
            "description": "A unique tour in the city of lights, get to know one of the most iconic places.",
            "category": "Museum",
            "place": "Paris",
            "capacity": 8200,
            "estimate": 8200,
            "price": 3500
        },
        {
            id: 5,
            "image": "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
            "name": "Comicon",
            "date": "2021-02-12",
            "description": "For comic lovers, all your favourite characters gathered in one place.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 120000,
            "assistance": 110000,
            "price": 54
        },
        {
            id: 6,
            "image": "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
            "name": "Halloween Night",
            "date": "2022-02-12",
            "description": "Come with your scariest costume and win incredible prizes.",
            "category": "Costume Party",
            "place": "Room C",
            "capacity": 12000,
            "estimate": 9000,
            "price": 12
        },
        {
            id: 7,
            "image": "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
            "name": "Metallica in concert",
            "date": "2022-01-22",
            "description": "The only concert of the most emblematic band in the world.",
            "category": "Music Concert",
            "place": "Room A"
            , "capacity": 138000,
            "estimate": 138000,
            "price": 150
        },
        {
            id: 8,
            "image": "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
            "name": "Electronic Fest",
            "date": "2021-01-22",
            "description": "The best national and international DJs gathered in one place.",
            "category": "Music Concert",
            "place": "Room A",
            "capacity": 138000,
            "assistance": 110300,
            "price": 250
        },
        {
            id: 9,
            "image": "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
            "name": "10K for life",
            "date": "2021-03-01",
            "description": "Come and exercise, improve your health and lifestyle.",
            "category": "Race",
            "place": "Soccer field",
            "capacity": 30000,
            "assistance": 25698,
            "price": 3
        },
        {
            id: 10,
            "image": "https://i.postimg.cc/zv67r65z/15kny.jpg",
            "name": "15K NY",
            "date": "2022-03-01",
            "description": "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            "category": "Race",
            "place": "New York",
            "capacity": 3000000,
            "assistance": 2569800,
            "price": 3
        },
        {
            id: 11,
            "image": "https://i.postimg.cc/Sst763n6/book1.jpg",
            "name": "School's book fair",
            "date": "2022-10-15",
            "description": "Bring your unused school book and take the one you need.",
            "category": "Book Exchange",
            "place": "Room D1",
            "capacity": 150000,
            "estimate": 123286,
            "price": 1
        },
        {
            id: 12,
            "image": "https://i.postimg.cc/05FhxHVK/book4.jpg",
            "name": "Just for your kitchen",
            "date": "2021-11-09",
            "description": "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            "category": "Book Exchange",
            "place": "Room D6",
            "capacity": 130000,
            "assistance": 90000,
            "price": 100
        },
        {
            id: 13,
            "image": "https://i.postimg.cc/vH52y81C/cinema4.jpg",
            "name": "Batman",
            "date": "2021-03-11",
            "description": "Come see Batman fight crime in Gotham City.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 11000,
            "assistance": 9300,
            "price": 225
        },
        {
            id: 14,
            "image": "https://i.postimg.cc/T3C92KTN/scale.jpg",
            "name": "Avengers",
            "date": "2022-10-15",
            "description": "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            "category": "Cinema",
            "place": "Room D1",
            "capacity": 9000,
            "estimate": 9000,
            "price": 250
        }
    ]
};

upcomingEvents = []
events = upcomingEvents

const containerC = document.getElementById('category')

containerC.addEventListener('change', () => {
    filterCategory(upcomingEvents)
})

function upcomingEvenstArray(){
    const date = data.currentDate
    data.events.forEach(e => {
        if(e.date > date  ){
            upcomingEvents.push(e)
        }
    })
}

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
    btn.href =`/details.html?id=${e.id}`
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
    upcomingEvents.forEach(e => {
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

upcomingEvenstArray()
search()
categories()

