
const tableUpcomingE = document.querySelector('table#upcoming')
let categoriesGlob
let events
upcomingEvents = []
pastEvents = []

function getData() {
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(d => {
            data = d
            events = d.events
            iterateElements()
        })
        .catch(error => {
            console.error(error);
        });
}


function pushArrays() {
    const date = data.currentDate
    data.events.forEach(e => {
        if (e.date > date) {
            upcomingEvents.push(e)
        }
        else if (e.date < date) {
            pastEvents.push(e)
        }
    })
}


function categories() {
    categories = []
    events.forEach(e => {
        categories.push(e.category)
    })
    categ = [...new Set(categories)];
    categoriesGlob = categ
    const container = document.querySelector('tbody#upcoming')
    const containerP = document.querySelector('tbody#past')

    createElemCateg(container)
    createElemCateg(containerP)

}

function createElemCateg(container) {
    categ.forEach(c => {
        const category = document.createElement('tr')
        category.id = c
        const td = document.createElement('td')
        td.innerHTML = c
        category.appendChild(td)
        container.appendChild(category)
    })
}

// itera sobre los elementos del array

function iterateElements() {
    categories()
    pushArrays()
    dataUpcomingEvents();
    dataPastEvents()
    eventsStats()
}

function eventsStats() {
    const container = document.querySelector('tr#data')
    let percentageLower = 1000
    let percentageHighest = 0
    let maxi
    let min
    let perc = 0

    var max = Math.max.apply(Math, events.map(function (o) { return o.capacity; }));
    const largeCapacity = {
        ...events.find((value) => Number(value.capacity) === max)
    };

    events.map(e => {
        if (data.currentDate > e.date) {
            perc = (e.assistance * 100) / e.capacity;
            if (percentageHighest < perc) {
                percentageHighest = perc
                maxi = e
            }
            else if (percentageLower > perc) {
                percentageLower = perc
                min = e
            }
        }
    })

    const tdH = document.createElement('td')
    const tdL = document.createElement('td')
    const tdC = document.createElement('td')
    tdH.innerHTML = maxi.name + ` (${percentageHighest.toFixed(2)}%)`
    tdL.innerHTML = min.name + ` (${percentageLower.toFixed(2)}%)`
    tdC.innerHTML = largeCapacity.name + ` (${max})`
    container.appendChild(tdH)
    container.appendChild(tdL)
    container.appendChild(tdC)
}

function dataUpcomingEvents() {
    const container = document.querySelector('tbody#upcoming');
    categoriesGlob.map(c => {
        let cont = 0;
        let percen = 0;
        cap = 0;
        esti = 0;
        const category = document.querySelector(`tbody#upcoming tr#${c}`);
        const td = document.createElement('td');
        const tdP = document.createElement('td');
        upcomingEvents.forEach(e => {
            if (c == e.category) {
                cont = +e.price * e.estimate;
                cap = +e.capacity;
                esti = +e.estimate;
            }
        });
        percen = (esti * 100) / cap;
        tdP.innerHTML = percen.toFixed(2) + " %";
        td.innerHTML = "$ " + cont;
        category.appendChild(td);
        category.appendChild(tdP);
        container.appendChild(category);
    });
}

function dataPastEvents() {
    const container = document.querySelector('tbody#past');
    categoriesGlob.map(c => {
        let cont = 0;
        let percen = 0;
        cap = 0;
        assis = 0;
        const category = document.querySelector(`tbody#past tr#${c}`);
        const td = document.createElement('td');
        const tdP = document.createElement('td');
        pastEvents.forEach(e => {
            if (c == e.category) {
                cont = +e.price * e.assistance;
                cap = +e.capacity;
                assis = +e.assistance;
            }
        });
        percen = (assis * 100) / cap;
        tdP.innerHTML = percen.toFixed(2) + " %";
        td.innerHTML = "$ " + cont;
        category.appendChild(td);
        category.appendChild(tdP);
        container.appendChild(category);
    });
}


getData()