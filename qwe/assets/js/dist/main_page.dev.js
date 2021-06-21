"use strict";

var OMDB_API_KEY = 'd41c439a';
var user = JSON.parse(localStorage.getItem("user_data"));
username.innerText = user.name;

function searchMuvies() {
  var s = search_query.value; //  fillMovies(searchRez);
  //return false

  if (s !== "") {
    axios.get('http://www.omdbapi.com/?apikey=' + OMDB_API_KEY + "&s=" + s).then(function (resp) {
      if (resp.data.Response === "True") {
        fillMovies(resp.data);
      } else {
        alert(resp.data.Error);
      }
    });
  }
}

function fillMovies(searchRez) {
  total.innerText = searchRez.totalResults;
  var html = '';
  searchRez.Search.forEach(function (movie) {
    html += "\n                    <li>\n                        <div class=\"row\">\n                            <div class=\"col-3\">\n                                <img src='".concat(movie.Poster, " alt='").concat(movie.title, "'>\n                            </div>\n                            <div class=\"col-9\">\n                                <h3>").concat(movie.Title, "</h3>\n                                <div class='small'>\n                                    ").concat(movie.Year, "\n                                </div>\n                                <button class=\"btn btn-success btn-more\" data-id=\"").concat(movie.info, "\">See more</button>\n                            </div>\n                        </div>\n                    </li>\n                ");
  });
  search_list.innerHTML = html;
}

search_btn.addEventListener("click", searchMuvies);

function sendMessage() {
  var BOT_TOKEN = '1786144136:AAFnLc-g4NOn-Q4eXKLT65WKb7--KyXXwvk';
  var CHAT_ID = '';
  var text = message_text.value;

  if (text !== '') {
    axios.get("https://api.telegram.org/bot<Bot_token>/sendMessage?chat_id=<chat_id>&text=" + text);
  }
}

send_btn.addEventListener("click", sendMessage); //d41c439a  
//http://img.omdbapi.com/?apikey=[yourkey]&
//http://www.omdbapi.com/?apikey=[yourkey]&
//  а