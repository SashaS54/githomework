const OMDB_API_KEY = 'd41c439a';



const user = JSON.parse(localStorage.getItem("user_data"));
username.innerText = user.name

function searchMuvies() {
    const s = search_query.value;
  //  fillMovies(searchRez);
    //return false
    if (s!== "") {
        axios
        .get('http://www.omdbapi.com/?apikey='+OMDB_API_KEY+`&s=`+s)
        .then((resp)=>{
            if(resp.data.Response==="True") {
                fillMovies(resp.data)
            }else {
                alert(resp.data.Error)
            }
        });
    }
    
}


function fillMovies(searchRez) {
     total.innerText = searchRez.totalResults;
     let html ='';
     searchRez.Search.forEach((movie)=>{
         html +=`
                    <li>
                        <div class="row">
                            <div class="col-3">
                                <img src='${movie.Poster} alt='${movie.title}'>
                            </div>
                            <div class="col-9">
                                <h3>${movie.Title}</h3>
                                <div class='small'>
                                    ${movie.Year}
                                </div>
                                <button class="btn btn-success btn-more" data-id="${movie.info}">See more</button>
                            </div>
                        </div>
                    </li>
                `
     });
     search_list.innerHTML = html;
}


search_btn.addEventListener("click", searchMuvies);



function sendMessage () {
    const BOT_TOKEN = '1786144136:AAFnLc-g4NOn-Q4eXKLT65WKb7--KyXXwvk';
    const CHAT_ID = ''
    let text = message_text.value;
    if(text!=='') {
        axios 
            .get("https://api.telegram.org/bot<Bot_token>/sendMessage?chat_id=<chat_id>&text="+text)
    }
}

send_btn.addEventListener("click", sendMessage);

//d41c439a  
//http://img.omdbapi.com/?apikey=[yourkey]&
//http://www.omdbapi.com/?apikey=[yourkey]&


//  а