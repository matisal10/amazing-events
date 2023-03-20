
const container = document.querySelector('img.rounded')
const title = document.querySelector('div.description h3')
const description = document.querySelector('div.description span')
const category = document.querySelector('li#category span')
const place = document.querySelector('li#place span')
const capacity = document.querySelector('li#capacity span')
const price = document.querySelector('li#price span')


function getData() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(d => {
            data = d
            obtainId()
        })
        .catch(error => {
            console.error(error);
        });
}

function addData(id){
    id = parseInt(id)
    e = data.events.find(e=> e._id == id)
    container.src = e.image
    title.textContent = e.name
    description.innerHTML = e.description
    category.textContent = e.category
    price.textContent ="$ "+ e.price
    place.textContent = e.place
    capacity.textContent = e.capacity
}


function obtainId() {
    const variable = window.location.search
    const urlParams = new URLSearchParams(variable);
    var id = urlParams.get('id');
    addData(id)
}

getData()

