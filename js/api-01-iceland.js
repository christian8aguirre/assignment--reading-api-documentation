//========================================================================
// (1) How many births were there in Iceland's national hospital today?

const answerElement_iceland_1 = document.getElementById('iceland-1')

// request.get('https://apis.is/hospital')
//   .then(function(serverRes){
//     let apiJsonData = serverRes.body
//     console.log(apiJsonData)
    // answerElement_iceland_1.innerHTML = apiJsonData.results[0].birthNumbers
//   })
  answerElement_iceland_1.textContent = 'Sorry, we have troubles!!!'


//========================================================================
// (2) What is the next concert event in Iceland?
const answerElement_iceland_2 = document.getElementById('iceland-2')

request.get('https://apis.is/concerts')
  .then(function (response) {
     var concerts = response.body.results;
     answerElement_iceland_2.textContent = "Concert: " + concerts[0].eventDateName + " Date: " + concerts[0].dateOfShow;
  })


//========================================================================
// (3) How many **arrival** flights are scheduled for today?
const answerElement_iceland_3 = document.getElementById('iceland-3')

request.get('https://apis.is/flight?language=en&type=departures')
  .then(function (response) {
    var flights = response.body;
    answerElement_iceland_3.textContent = flights.results.length;
    
  })


//
