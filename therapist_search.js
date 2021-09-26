const http = require('http');
const axios = require('axios');
hostname = '127.0.0.1';    // can be changed
// var latitude = 28.600622019679893, longitude = -81.20113211534398;

const getProfessionals = async () => {
    const server = http.createServer((req, res) => {
        try{
            var latitude = req.get(latitude);
            var longitude = req.get(longitude);
            pro = axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=mental%20health%20professionals&location=latitude,longitude&key=AIzaSyAuvt6Y6R4hKCJLPXBAVmDf6r7f9KZ3KWM');
            res.end(pro.data);
        }catch(err){
            console.error(err);
            return response.status(400).send(err);
        }
    });

    server.listen(3000, hostname, () => {
        console.log('Server is running\n');
    });
}
