// ##### Geocoding
// 1. What are latitude longitude coordinates of Montreal?
//   - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal
 
// 2. What time does the sunset in Montreal (based on the Google geocode coordinates)?
//   - https://sunrise-sunset.org/api


// 3. What is the weekly weather forecast in Montreal?
//   - https://darksky.net/dev
//   - Note: You will have to create an account.


//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//

var answerElement_apimashup_1 = document.getElementById('apimashup-1')
var API_GEO = 'https://maps.googleapis.com/maps/api/geocode/json?address=Montreal';
request.get(API_GEO)
  .then(function(response) {
    var montreal = response.body.results;
    var p = document.createElement('p');
    p.textContent = montreal[0].formatted_address;
    answerElement_apimashup_1.appendChild(p);
    
    lat = montreal[0].geometry.location.lat;
    lng = montreal[0].geometry.location.lng;
    var p = document.createElement('p');
    p.textContent = lat
    answerElement_apimashup_1.appendChild(p);
    var p = document.createElement('p');
    p.textContent = lng;
    answerElement_apimashup_1.appendChild(p);

  })

//========================================================================
//  (2) What time does the sunset in Montreal (based on the Google geocode coordinates)?

var answerElement_apimashup_2 = document.getElementById('apimashup-2')
request.get(API_GEO)
  .then(function(res1) {
    var montreal = res1.body.results;
    lat = montreal[0].geometry.location.lat;
    lng = montreal[0].geometry.location.lng;
    var API_SUN = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`
    request.get(API_SUN)
    .then(function (res2) {
      var sunset = res2.body.results;
      answerElement_apimashup_2.textContent = sunset.sunset;  
    })
  })

//========================================================================
//  (3) What is the weekly weather forecast in Montreal? (look for summary property in 'daily')

const answerElement_apimashup_3 = document.getElementById('apimashup-3')
request.get(API_GEO)
  .then(function(res1) {
    var montreal = res1.body.results;
    lat = montreal[0].geometry.location.lat;
    lng = montreal[0].geometry.location.lng;
    var API_DARKSKY = `https://api.darksky.net/forecast/b4821cd62a474edc91d688e05c15d8cc/${lat},${lng}`
    request.get(API_DARKSKY)
    .then(function (res2) {
      var weatherDaily = res2.body.daily.data;
      var ul = document.createElement('ul');
      answerElement_apimashup_3.appendChild(ul);
      weatherDaily.forEach(function(day) {
        var li = document.createElement('li');
        li.innerHTML = '<strong>' + timeConverter(day.time) + '</strong> ' + day.summary;
        ul.appendChild(li);
      });
    })
  })

  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
  }
