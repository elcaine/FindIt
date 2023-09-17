const newContactFormHandler = async (event) => {
    event.preventDefault();
  
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();

    if (name && email && message) {
        console.log('New CONTACT INQUIRY being made\n', name, ', ', email, ', ', message);
         const response = await fetch(`/api/users/inq`, {
          method: 'POST',
          body: JSON.stringify({ name, email, message }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          document.location.replace('/inq');
        } else {
          alert('Failed to create inquiry');
        }
    }
  };

  $('#contact-form').on('submit', newContactFormHandler);