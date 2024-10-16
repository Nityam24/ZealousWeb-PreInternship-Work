document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
  
    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("genderError").textContent = "";
    document.getElementById("successMessage").textContent = "";
  
    let valid = true;
  
    // Name validation
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      valid = false;
    }
  
    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      valid = false;
    } else if (!email.match(emailPattern)) {
      document.getElementById("emailError").textContent = "Invalid email format.";
      valid = false;
    }
  
    // Age validation
    if (age === "") {
      document.getElementById("ageError").textContent = "Age is required.";
      valid = false;
    } else if (isNaN(age) || age <= 18) {
      document.getElementById("ageError").textContent = "Age must be greater than 18.";
      valid = false;
    }
  
    // Gender validation
    if (gender === "") {
      document.getElementById("genderError").textContent = "Please select a gender.";
      valid = false;
    }
  
    // If all fields are valid, save to localStorage
    if (valid) {
      let formData = {
        name: name,
        email: email,
        age: age,
        gender: gender
      };
  
      localStorage.setItem("formData", JSON.stringify(formData));
      document.getElementById("successMessage").textContent = "Form submitted successfully!";
      document.getElementById("myForm").reset(); // Clear the form
    }
  });
  