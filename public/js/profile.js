const newFormHandler = async (event) => {
  event.preventDefault();
  const cat = $('#inputGroupSelect01').val();
  const sta = $('#inputGroupSelectState').val();
  
  const noSelection = 'Choose...';
  if(cat === noSelection || sta === noSelection){
    console.log('Must select category and state');
  } else {
    const response = await fetch('/search', {
      method: 'POST',
      body: JSON.stringify({ cat, sta }),
          headers: { 'Content-Type': 'application/json'},
    });
    
    if(response.ok){
      // This is ugly, but couldn't get it to work a more gooder way in the time alloted
      document.location.replace(`/search2`);
    } else {
      alert('Failed at sending state/category for fetch');
    }
  }
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