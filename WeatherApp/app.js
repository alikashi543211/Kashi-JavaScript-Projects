// Youtube Video Help Link

//https://www.youtube.com/watch?v=_CYdBOopoMs&list=PLjVLYmrlmjGcZJ0oMwKkgwJ8XkCDAb9aG&index=9&ab_channel=WsCubeTech

const API_KEY = `c9a9a614a87e009402bcbac56444e83c`;

const form = document.querySelector("form");

const search = document.querySelector("#search");

const weather = document.querySelector("#weather");



//const API = `https://api.openweathermap.org/data/2.5/weather?
//q=${city}&appid=${API_KEY}&units=metric`;

//const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

const getWeather = async (city) => {

    console.log(city)

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(weatherUrl);

    const data = await response.json();

    console.log(data)

    showWeather(data);

}

const showWeather = (data) => {

    if(data.cod == '404')
    {

        weather.innerHTML = 
        `
            <h2>City Not Found</h2>
        `;

        return;

    }

    weather.innerHTML = 
        `
            <div>

                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">

            </div>

            <div>

                <h2>${data.main.temp} °C</h2>

                <h4>${data.weather[0].main}</h4>

            </div>
        `;

}

form.addEventListener(

    'submit', 

    function(event) {

        getWeather(search.value)

        event.preventDefault();

    }

)