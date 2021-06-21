
function isValidEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

document.addEventListener('submit', function(e){
    if(e.target.id==='login_form') {
        e.preventDefault();
        const email = floatingInput.value;
        if(email !== "") {
            if(isValidEmail(email)) {
                axios
                    .get('data/users.json')
                    .then((resp)=> {

                        const users_list = resp.data;
                        let user = {};
                        user = users_list.find((u)=>u.email===email);
                        if(user!==undefined) {
                            localStorage.setItem("user_data", JSON.stringify(user));
                            get_page('pages/main.html');
                        }else {
                            alert("no found user with current email");
                        }
                        
                    });
            }else {
                alert("Enter valid email address")
            }
        }else {
            alert("enter email address")
        }
        return false;
    }
})
