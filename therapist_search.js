const axios = require('axios');

var latitude = 28.600622019679893, longitude = -81.20113211534398;

axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=mental%20health%20professionals&location=latitude,longitude&key=AIzaSyAuvt6Y6R4hKCJLPXBAVmDf6r7f9KZ3KWM')
.then(response => {
    console.log(response.data);
}).catch(error => {
    console.log(error);
});
