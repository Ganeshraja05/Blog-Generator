document.getElementById('contact-btn').addEventListener('click', function () {
    
    const email = "kgxkgxg47@gmail.com";
    window.location.href = `mailto:${email}`;
  });
  
  document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;
    const rating = document.getElementById('rating').value;
  
    alert(`Thank you for your feedback, ${name}!\n\nDetails:\nEmail: ${email}\nFeedback: ${feedback}\nRating: ${rating}`);
  });
  