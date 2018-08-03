/*
##### TV Maze
https://www.tvmaze.com/ap

1. What is the average rating for the show Better Call Saul?

2. When was the premiere date for the 9th season of Friends?

3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?
*/

//========================================================================
// 1. What is the average rating for the show Better Call Saul?
var answerTVMaze1 = document.querySelector('#tvmaze-1');
var API_URL_1 = 'http://api.tvmaze.com/search/shows?q=Better%20Call%20Saul';
request
  .get(API_URL_1)
  .then(function(response) {
    var show = response.body[0];
    var p = document.createElement('p');
    p.innerHTML = 'Rating = <strong>' + show.show.rating.average + '</strong>';
    answerTVMaze1.appendChild(p);
  })
//========================================================================
// 2. When was the premiere date for the 9th season of Friends?
var answerTVMaze2 = document.querySelector('#tvmaze-2');
var API_URL_2 = 'http://api.tvmaze.com/shows/431/seasons';
request
  .get(API_URL_2)
  .then(function(response) {
    var friendsSeasons = response.body;
    var p = document.createElement('p');
    p.innerHTML = 'Premiere 9th Season: <strong>' + friendsSeasons[8].premiereDate + '</strong>';
    answerTVMaze2.appendChild(p); 
    
  })
//========================================================================
// 3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?
var answerTVMaze3 = document.querySelector('#tvmaze-3');
var API_URL_3 = 'http://api.tvmaze.com/people/10257/castcredits';
request
  .get(API_URL_3)
  .then(function(response) {
    var shows = response.body;
    var ul = document.createElement('ul');
    var p = document.createElement('p');
    p.innerHTML = 'Aparece en <strong>' + shows.length + '</strong>';
    answerTVMaze3.appendChild(p);
    answerTVMaze3.appendChild(ul);
    shows.forEach(function (show) {
      var numberShow = show._links.show.href.split('/').slice(-1).join('');
      var API_URL_SHOWS = 'http://api.tvmaze.com/shows/'
        request
        .get(API_URL_SHOWS + numberShow)
        .then(function (response) {
          var li = document.createElement('li');
          li.textContent = response.body.name;
          ul.appendChild(li);
        })
    });
  })
