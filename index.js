// DOCUMENTATIONN

// https://airlabs.co/docs/schedules

// tedejoelcorreoeh

// key de respaldo:

// key=bc856886-216b-4925-a321-ac996cff665c

const botonAep = document.getElementById('botonAep')

botonAep.addEventListener('click', () => {

    aep()

})

const botonEze = document.getElementById('botonEze')

botonEze.addEventListener('click', () => {

    eze()

})


const aep = () =>{
    fetch(`https://airlabs.co/api/v9/schedules?dep_iata=AEP&api_key=c5340141-e8ff-41d7-9587-7f896a127311`)
.then(response => response.json())
.then(flightsDep => {
    tableDep(flightsDep.response) //response es el array de los vuelos. Ya que la promesa flights devuelve  objetos en los cuales "response" es el que me interesa
})
.catch(err => console.error(err));

fetch(`https://airlabs.co/api/v9/schedules?arr_iata=AEP&api_key=c5340141-e8ff-41d7-9587-7f896a127311`)
.then(response => response.json())
.then(flightsArr => {
    tableArr(flightsArr.response) //response es el array de los vuelos. Ya que la promesa flights devuelve  objetos en los cuales "response" es el que me interesa
})
.catch(err => console.error(err));

}

const eze = () =>{
    fetch(`https://airlabs.co/api/v9/schedules?dep_iata=EZE&api_key=c5340141-e8ff-41d7-9587-7f896a127311`)
.then(response => response.json())
.then(flightsDep => {
    tableDep(flightsDep.response) //response es el array de los vuelos. Ya que la promesa flights devuelve  objetos en los cuales "response" es el que me interesa
})
.catch(err => console.error(err));

fetch(`https://airlabs.co/api/v9/schedules?arr_iata=EZE&api_key=c5340141-e8ff-41d7-9587-7f896a127311`)
.then(response => response.json())
.then(flightsArr => {
    tableArr(flightsArr.response) //response es el array de los vuelos. Ya que la promesa flights devuelve  objetos en los cuales "response" es el que me interesa
})
.catch(err => console.error(err));
}





const tableDep = (flightsDep =>{
    console.log ('adad',flightsDep)
    const contentDeparture = document.querySelector("#contentDeparture")
    contentDeparture.innerHTML=""
    for(let flight of flightsDep){

        if(flight.airline_iata === "FO"){

            contentDeparture.innerHTML += `
            <tr>
                <th scope="row">°</th>
                <td>${flight.airline_iata} ${flight.flight_number}</td>
                <td>${flight.dep_iata} - ${flight.arr_iata}</td>
                <td>${flight.dep_time.slice(11) || "No programada" }</td>
            </tr>
            `
        }

    }

})

const tableArr = (flightsArr =>{
    const contentArrival = document.querySelector("#contentArrival")
    contentArrival.innerHTML=""
    for(let flight of flightsArr){

        if(flight.airline_iata === "FO"){

            contentArrival.innerHTML += `
            <tr>
                <th scope="row">°</th>
                <td>${flight.airline_iata} ${flight.flight_number}</td>
                <td>${flight.dep_iata} - ${flight.arr_iata}</td>
                <td>${flight.arr_time.slice(11) || "No programada" }</td>
            </tr>
            `
        }

    }

})

