window.addEventListener('load',()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const temp = Math.round(data.main.temp);
                    const city = data.name;
                    const description = data.weather[0].description;

                    if(description.includes('cloud')){
                        document.querySelector('.background').style.backgroundImage = "url('https://i.pinimg.com/originals/5e/6a/9d/5e6a9d63809d1f2282cbe3df7aabad4e.jpg')";
                    } else if(document.includes('rain')) {
                        document.querySelector('.background').style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/3/37/Rain_IV_Field.png')";
                    } else if(description.includes('thunderstorm')){
                        document.querySelector('.background').style.backgroundImage = "url('https://vignette.wikia.nocookie.net/pokemon/images/0/0d/Spearow_anime.png/revision/latest?cb=20170530183524')";
                    } else if(description.includes('snow')){
                        document.querySelector('.background').style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/2/2c/Hail_IV_Field_Light.png')";
                    }  else if(description.includes('mist')) {
                        document.querySelector('.background').style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/thumb/f/f1/Mist_VI.png/250px-Mist_VI.png')";
                    } else {
                        document.querySelector('.background').style.backgroundImage = "url('https://cdn.bulbagarden.net/upload/3/37/Rain_IV_Field.png')";
                    }

                    document.querySelector('.location h2').textContent = city.toUpperCase();
                    document.querySelector('.degrees p span').textContent = temp;
                    document.querySelector('.type p').textContent = description.toUpperCase();

                })
        });
    } else {
        document.querySelector('.location h2').textContent = "PLEASE ENABLE LOCATION";
    }
});