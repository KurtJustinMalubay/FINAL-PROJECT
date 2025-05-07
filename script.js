let login = false;
let admin = "admin@gmail.com";
let adminPass= "admin123456";
function contact(){
    window.location.href =  "mailto:phclothingservices@gmail.com";
}

function buyOnline(){
    if(!login)
        window.location.href = "/login.html";
    else
        window.location.href = "/Products.html";
}

function loginPage(){
    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (username === admin && password === adminPass){
        alert("Successfully logged in");
        login = true;
        window.location.href = "/Products.html";
    }
    else{
        alert("Wrong username or password");
    }
}