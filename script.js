//LOGIN PAGE LOGIC
let login = false;
let admin = "admin@gmail.com";
let adminPass= "admin123456";
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

function contact(){
    window.location.href =  "mailto:phclothingservices@gmail.com";
}

//NAV BUTTON LOGIC
function buyOnline(){
    if(!login)
        window.location.href = "/login.html";
    else
        window.location.href = "/Products.html";
}

//MOBILE MENU LOGIC
let show = false;
function showMenu(){
    let menu = document.getElementById("menuDrop");
    let body = document.body;
    if (!show){
        menu.style.margin = "0 0 0 0";
        show = true;
        body.style.overflow = "hidden";
    }
    else{
        menu.style.margin = "-100vh 0 0 0";
        show = false;
        body.style.overflow = "auto";
    }
}

//PRODUCTS PART
document.querySelectorAll('.small-image').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('mainImage').src = img.src;
    });
  });
  document.querySelectorAll('.color-button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('mainImage').src = `./Images/${btn.dataset.color}.png`;
    });
  });
  let quantity = 1;
  document.getElementById('incQty').onclick = () => {
    quantity++;
    document.getElementById('qty').textContent = quantity;
  };
  document.getElementById('decQty').onclick = () => {
    if (quantity > 1) {
      quantity--;
      document.getElementById('qty').textContent = quantity;
    }
  };
  document.getElementById('addToCart').onclick = () => {
    const size = document.getElementById('sizeSelect').value;
    alert(`Added to cart:\nSize: ${size}\nQuantity: ${quantity}`);
  };
  document.getElementById('buyNow').onclick = () => {
    alert('Proceeding to buy now...');
  };
  function buyOnline() {
    alert('Redirecting to online order (not functional).');
  }