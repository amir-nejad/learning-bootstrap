document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Reset any previous validation classes
    nameInput.classList.remove('is-invalid', 'is-valid');
    emailInput.classList.remove('is-invalid', 'is-valid');

    let isValid = true;

    // Validate name (required)
    if (nameInput.value === '') {
        nameInput.classList.add('is-invalid');
        var nameValidationInput = document.querySelector('#name-validation');
        nameValidationInput.textContent = 'Name is Empty.';
        isValid = false;
    } else {
        nameInput.classList.add('is-valid');
    }

    // Validate email (required and format)
    const emailRegex = /^[\w.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value === '' || !emailRegex.test(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else {
        emailInput.classList.add('is-valid');
    }

    if (!isValid) {
        // Display an error message (optional)
        alert('Please check the highlighted fields and try again.');
        return; // Exit the function if validation fails
    }
});