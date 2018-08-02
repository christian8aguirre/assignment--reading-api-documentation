
// ##### National Highway Transit Safety Administration
// https://vpic.nhtsa.dot.gov/api/


// 1. How many types of Chevrolet models are registered with the NHTSA?

var answerNational1 = document.querySelector('#nhtsa-1');
request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/chevrolet?format=json')
  .then(function(response) {
    answerNational1.textContent = "'Criteria': " + response.body.SearchCriteria
    var chevroletModels = response.body.Results;
    var p = document.createElement('p');
    p.textContent = chevroletModels.length;
    answerNational1.appendChild(p);
  })

// 2. What are the vehicle types that Nissan has?
  var answerNational2 = document.querySelector('#nhtsa-2');
  request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json')
    .then(function(response) {
      var nissanTypes = response.body.Results;
      answerNational2.textContent = "'Criteria': " + response.body.SearchCriteria;
      nissanTypes.forEach(element => {
        var p = document.createElement('p');
        p.textContent = element.VehicleTypeName;
        answerNational2.appendChild(p);
      });
      
    })

// 3. What are the types of models that exist for Toyota trucks in 2017?

var answerNational3 = document.querySelector('#nhtsa-3');
request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017?format=json')
  .then(function(response) {
    answerNational3.textContent = "'Criteria': " + response.body.SearchCriteria
    var toyotaModels = response.body.Results;
      toyotaModels.forEach(element => {
        var p = document.createElement('p');
        p.textContent = element.Model_Name;
        answerNational3.appendChild(p);
      });
  })