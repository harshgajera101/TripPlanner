const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});


// Price value script
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

priceRange.addEventListener('input', function() {
    priceValue.textContent = this.value;
})


// Create Trip

// Get the button and popup elements
// const openPopupBtn = document.getElementById('openPopupBtn');
// const popup = document.getElementById('popup');
// const closeBtn = document.querySelector('.close');

// // Function to show the popup
// openPopupBtn.addEventListener('click', function() {
//     popup.style.display = 'flex';
// });

// // Function to hide the popup when clicking the close button
// closeBtn.addEventListener('click', function() {
//     popup.style.display = 'none';
// });

// // Hide the popup when clicking outside the popup content
// window.addEventListener('click', function(event) {
//     if (event.target === popup) {
//         popup.style.display = 'none';
//     }
// });


// Event listener for opening the popup when the button is clicked
document.getElementById('openPopupBtn').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.classList.add('active'); // Add the 'active' class to show the popup
});

// Event listener for closing the popup when the close button is clicked
document.querySelector('.close').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active'); // Remove the 'active' class to hide the popup
});
