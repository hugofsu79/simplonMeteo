const APIKEY = 'a2c4d8ee3059ad60f5f20782ba7cfd3f';


//appel à l'API OpenWeather avec ville en paramètre de fonction
let meteoApi = function (ville) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
        .then((response) =>
            response.json().then((data) => {
                console.log(data);
                document.querySelector('#ville').innerHTML = data.name;
                document.querySelector('#temperature').innerHTML = Math.round(data.main.temp) + '°C';
                document.querySelector('#humidite').innerHTML = data.main.humidity + '%';
                document.querySelector('#vent').innerHTML = data.wind.speed + 'km/h';
                document.querySelector('#temperatureMax').innerHTML = Math.round(data.main.temp_max) + '°C';
                document.querySelector('#temperatureMin').innerHTML = Math.round(data.main.temp_min) + '°C';

            })
        ).catch(err => console.log('Erreur : ' + err));

}

//Ecouteur d'événement sur la soumission du formulaire
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputVille').value;

    meteoApi(ville);
});

//Appel par défaut au chargement de la page
meteoApi('Niort');
