// NAVBAR
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (scrolled > 20) {
    document.getElementById("navbar").classList.add("hello");
  } else {
    document.getElementById("navbar").classList.remove("hello");
  }
});

// AUTOMATED TYPING JAVASCRIPT
const typeWriter = function (txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

typeWriter.prototype.type = function () {
  const current = this.wordIndex % this.words.length;
  const fullTxt = this.words[current];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  let typeSpeed = 300;
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.wordIndex++;
    typeSpeed = 500;
  }
  setTimeout(() => this.type(), typeSpeed);
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  new typeWriter(txtElement, words, wait);
}

/* SPECIAL OFFER*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("navbar").style.zindex = "1";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("navbar").style.zindex = "999";
}

// PAYMENT
function openNav1() {
  document.getElementById("mySidenav1").style.width = "350px";
  document.getElementById("navbar").style.zindex = "1";
}

function closeNav1() {
  document.getElementById("mySidenav1").style.width = "0";
  document.getElementById("navbar").style.zindex = "999";
}



function openNav2() {
  document.getElementById("mySidenav2").style.width = "350px";
  document.getElementById("navbar").style.zindex = "1";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
  document.getElementById("navbar").style.zindex = "999";
}

// CART
var removeButton = document.getElementsByClassName("item-delete");
console.log(removeButton);

for (var i = 0; i < removeButton.length; i++) {
  var button = removeButton[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
  });
}

function updateTotal() {
  var cartContainer = document.getElementsByClassName("sidenav1");
  var cartRow = cartContainer.getElementsByClassName("cart-row");
  var price = cartRow;
}
