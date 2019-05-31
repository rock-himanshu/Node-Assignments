const express= require('express');
const request= require('request');
const bodyParser = require('body-parser');
var app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended : true}));

global.city ='Dehradun,IN';
global.url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=11cadc552f13749a509f51e57da1ce27`;

app.get('/',function(req,res){

  request(url,function(error, response, body){
    weather_json=JSON.parse(body);
    console.log(weather_json);

    var weather ={
      city :weather_json.name,
      country :weather_json.sys.country,
      temperature:Math.round(weather_json.main.temp -273.15),
      decsription: weather_json.weather[0].description,
      icon :weather_json.weather[0].icon
    };

    var weather_data ={weather : weather};
    res.render('weather',weather_data);
  });
});

app.post('/', function(req, res) {
console.log("request City:"+req.body.city_name);
    city =req.body.city_name;
    url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=11cadc552f13749a509f51e57da1ce27`;
    res.redirect('/');

});

app.listen(3000,()=>{
    console.log("Server is RUNNING ON working on url:http://localhost:3000 , port:3000");
});
