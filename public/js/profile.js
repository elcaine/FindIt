const newFormHandler = async (event) => {
  event.preventDefault();
  const cat = $('#inputGroupSelect01').val();
  const sta = $('#inputGroupSelectState').val();
  
  const noSelection = 'Choose...';
  if(cat === noSelection || sta === noSelection){
    console.log('Must select category and state');
  } else {
    const response = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({ cat, sta }),
          headers: { 'Content-Type': 'application/json'},
    });
    console.log('response..................... ', response);
    if(response.ok){
      document.location.replace('/search');
    } else {
      alert('Failed at sending state/category for fetch');
    }
  }



  // const name = document.querySelector('#project-name').value.trim();
  // const needed_funding = document.querySelector('#project-funding').value.trim();
  // const description = document.querySelector('#project-desc').value.trim();

  // if (name && needed_funding && description) {
  //   const response = await fetch(`/api/projects`, {
  //     method: 'POST',
  //     body: JSON.stringify({ name, needed_funding, description }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (response.ok) {
  //     document.location.replace('/');
  //   } else {
  //     alert('Failed to create project');
  //   }
  // }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // document.location.replace('/');
    } else {
      alert('Failed to delete project');
    }
  }
};

// document
//   .querySelector('.new-project-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);

  

  $('#new-search').on('submit', newFormHandler);