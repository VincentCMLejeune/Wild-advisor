
// JS SPECIFIQUE AU HEADER
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

// JS A PROPOS
profileP[0].addEventListener('click', () => {
    if(textO[0].style.display !== "inline") {
        textO[0].style.display = "inline"
    } else {
    textO[0].style.display = "none"
    }
  });

  profilePcuatro[0].addEventListener('click', () => {
    if(textOcuatro[0].style.display !== "inline") {
        textOcuatro[0].style.display = "inline"
    } else {
    textOcuatro[0].style.display = "none"
    }
  });