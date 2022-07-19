window.onload = function () {
    document.getElementById('loader').style.display = "none";
    document.getElementById('data').style.display = "block";
};


var sidenav=document.getElementById("sidenav");

function openmenu(){
    sidenav.style.right="0";
}

function closemenu(){
    sidenav.style.right="-200px";
}