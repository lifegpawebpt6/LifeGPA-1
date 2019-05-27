
function openApple() {
  window.open("https://www.apple.com/ios/app-store/");
}

function openGoogle() {
  window.open("https://play.google.com/store");
}

// NavBar Javascript
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}