// scripts.js

//popup

document.getElementById('openPopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

// Optional: Close the modal if the user clicks outside of the modal content
window.addEventListener('click', function(event) {
  const popup = document.getElementById('popup');
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});

//Form Validation

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');
  const submitBtn = document.getElementById('submitBtn');

  const fields = ['email', 'firstname', 'lastname', 'terms'];
  const errors = {
    email: document.getElementById('emailError'),
    firstname: document.getElementById('firstnameError'),
    lastname: document.getElementById('lastnameError'),
    terms: document.getElementById('termsError'),
  };

  fields.forEach(field => {
    document.getElementById(field).addEventListener('input', validateForm);
    document.getElementById(field).addEventListener('change', validateForm);
  });

  function validateForm() {
    let isFormValid = true;

    fields.forEach(field => {
      const element = document.getElementById(field);
      const errorElement = errors[field];

      if ((element.type === 'checkbox' && !element.checked) || (element.type !== 'checkbox' && element.value.trim() === '')) {
        isFormValid = false;
        errorElement.style.display = 'block';
      } else {
        errorElement.style.display = 'none';
      }
    });

    submitBtn.disabled = !isFormValid;
    submitBtn.style.cursor = isFormValid ? 'pointer' : 'not-allowed';
  }

  validateForm();
});


//api
const form = document.getElementById("myForm");
    form.addEventListener("submit", formSubmit);

    function formSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        fetch("https://getform.io/f/pbnvgvvb", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
        console.log('hello')
    }

//Carousel
let currentSlide = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;
const visibleSlides = 3;

function updateCarousel() {
  const carousel = document.querySelector('.carousel');
  const offset = -currentSlide * (100 / visibleSlides); // Adjust offset calculation
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % (totalSlides - visibleSlides + 1); // Adjust wrap around logic
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + (totalSlides - visibleSlides + 1)) % (totalSlides - visibleSlides + 1); // Adjust wrap around logic
  updateCarousel();
}

// Initialize the carousel
updateCarousel();

