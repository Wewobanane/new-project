

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector('.nav-menu');

hamburger .addEventListener('click',() => {
  hamburger.classList.toggle('active');  
  navMenu.classList.toggle('active');
});
document.querySelectorAll(".nav-links").forEach(n => n.addEventListener('click',() =>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
})) 





// Get elements
const openPopupBtn = document.getElementById("openPopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
const popupForm = document.getElementById("popupForm");

// Open popup form
openPopupBtn.onclick = function() {
    popupForm.style.display = "block";
}

// Close popup form
closePopupBtn.onclick = function() {
    popupForm.style.display = "none";
}

// Close popup if user clicks outside of the form
window.onclick = function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = "none";
    }
}

window.addEventListener('load', function() {
    document.querySelectorAll('.card').forEach(function(card) {
        card.style.animation = 'none';
        card.offsetHeight; // Trigger reflow
        card.style.animation = null; 
    });
});

