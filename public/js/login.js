const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = $('#username').val();
  const password = $('#password').val();
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = $('#name2').val();
  const email = $('#email').val();
  const password = $('#password2').val();
  const phone = $('#phone-number').val();
  
  if (email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('response:\n=========================\n', response);
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

$('#login').on('submit', loginFormHandler);
$('#register').on('submit', signupFormHandler);
