const api = {
    key: "4f5837f4a14a0e5c6840df1a05fe1a9b",
    baseurl: "http://api.openweathermap.org/data/2.5/weather?q=",
    paramForKey: '&appid='
}
search = async() => {
    let input = document.getElementById('search')
    input.innerHTML = ' '
    let city = input.value
    city.innerHTML = ' '
    let url = api.baseurl + city + api.paramForKey + api.key
    console.log(url)
    url.innerHTML = ' '
    let resp = await fetch(url)
    let result = await resp.json()
    console.log(result)
    render(result)
}

render = (data) => {
    let out = document.getElementById('output')
    out.innerHTML = ' '
    let h1 = document.createElement('h1')
    h1.innerHTML = ' '
    let kelvin = document.createElement('h2')
    kelvin.innerHTML = ' '
    let deg = document.createElement('p')
    deg.innerHTML = ' '
    kelvin.innerHTML = data.main.temp + " °К"
    let d = data.main.temp - 273.15
    d.innerHTML = ''
    deg.innerHTML = d.toFixed(2) + " °C"
    h1.innerHTML = data.name
    out.appendChild(h1)
    out.appendChild(kelvin)
    out.appendChild(deg)

    getMap(data.coord)
}
getMap = (coord) => {

    let divMap = document.createElement('div')
    divMap.id = 'map'
    divMap.style.width = '500px'
    divMap.style.height = '400px'
    divMap.style.left = '600px'
    divMap.style.borderRadius = '6%'
    let output = document.getElementById('output')
    output.appendChild(divMap)
    let map
    DG.then(function() {
        map = DG.map('map', {
            center: [coord.lat, coord.lon], //lat,lon
            zoom: 13
        });

        // DG.marker(data.coord.lat, data.coord.lon).addTo(map).binPopup(name);
    });
}