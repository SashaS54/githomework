
if(localStorage.getItem("dark_theme")==='true') {
    document.documentElement.classList.add('dark_theme');
}

switch_theme.addEventListener('click', function(e){
    e.preventDefault();
    document.documentElement.classList.toggle('dark_theme');
    document.documentElement.classList.contains('dark_theme')?localStorage.setItem("dark_theme", "true" ):localStorage.setItem("dark_theme", "false")
    
})



const setInnerHTML = function(elm, html) {
    elm.innerHTML = html;
    Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
      const newScript = document.createElement("script");
      Array.from(oldScript.attributes)
        .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
      newScript.appendChild(document.createTextNode(oldScript.innerHTML));
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }

function get_page(page) {
    axios
        .get(page)
        .then((resp)=>{
            //page_content.innerHTML = resp.data;
            setInnerHTML(page_content, resp.data)
        })
}

if(localStorage.getItem("user_data")!=null) {
    
    get_page('pages/main.html')
}else {
    get_page('pages/login.html')
}



document.addEventListener('click', function(e){ 
    if(e.target.id==='logout') {
        localStorage.removeItem("user_data");
        window.location.reload();

    }
})

