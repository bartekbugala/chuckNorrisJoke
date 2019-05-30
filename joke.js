var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
button.addEventListener('click', function () {
    getJoke();
});
getJoke();
var paragraph = document.getElementById('joke');

function getJoke() {
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open('GET', url);
    xmlHttpReq.addEventListener('load', function() {
        var response = JSON.parse(xmlHttpReq.response);
        paragraph.innerHTML = response.value.joke;
    });
    xmlHttpReq.send();
}