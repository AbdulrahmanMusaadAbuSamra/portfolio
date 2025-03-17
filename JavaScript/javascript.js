const hamburgerIcon = document.querySelector('.fa-bars');
const navMenu = document.querySelector('nav ul');

hamburgerIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && navMenu.classList.contains('active') && event.target !== hamburgerIcon) {
    navMenu.classList.remove('active');
  }
});






let section = document.querySelector(".section-4")
let spans = document.querySelectorAll(".line-out  span")

window.onscroll = function (){
    if (window.scrollY >= section.offsetTop - 50 ) {
        spans.forEach((span) => {{
            span.style.width = span.dataset.width
        }})
    }
}

function moveToNextInput(event) {
    if (event.keyCode === 18){
        let nextInput = event.target.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    }
}







function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error("Error saving to localStorage:", error);
    // Handle error gracefully, e.g., display a user-friendly message
  }
}

function loadFromLocalStorage() {
  const form = document.getElementById('myForm');

  // Check if form exists before iterating
  if (form) {
    for (const input of form.elements) {
      if (input.name) {
        input.value = localStorage.getItem(input.name) || '';
      }
    }
  }if (form && form.elements.length > 0) {
    // ... existing code to save data
} else {
    console.log("Form 'myForm' is empty, nothing to save."); // Informative message
}
}

function clearForm() {
  const form = document.getElementById('myForm');
  if (form) {
    form.reset();
  } else {
    console.warn("Form element with ID 'myForm' not found.");
  }
}

window.onload = () => {
  loadFromLocalStorage();
};

window.onbeforeunload = () => {
  // Check if form exists and has elements before saving
  const form = document.getElementById('myForm');
  if (form && form.elements.length > 0) {
    saveToLocalStorage('formData', JSON.stringify(new FormData(form))); // Consider more specific keys
  }
};








function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const subject = `Message from ${name})`;

  const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  const mailtoLink = `mailto:abdulrahmanabusamra0@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}
