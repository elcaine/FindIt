const newFormHandler = async (event) => {
  event.preventDefault();
  const cat = $('#inputGroupSelect01').val();
  const sta = $('#inputGroupSelectState').val();
  
  const noSelection = 'Choose...';
  if(cat === noSelection || sta === noSelection){
    console.log('Must select category and state');
  } else {

    const search = {
      cat: cat,
      sta: sta,
      city: city
    };

    const searchJSON = JSON.stringify(search);

    localStorage.setItem('search', searchJSON);

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

document.addEventListener('DOMContentLoaded', () => {
  fetch('/seeds/userData.json')
    .then((response) => response.json())
    .then((userData) => {
     
      const userNameElement = document.getElementById('user-name');
      userNameElement.textContent = userData.name;

      const previousSearch = localStorage.getItem('search');
      if (previousSearch) {
        const searched = JSON.parse(previousSearch);
        const searchList = document.getElementById('previous-searches');
        searchList.innerHTML = `
          <div>
            <p>${searched.cat} ${searched.sta} ${searched.city}</p>
          </div>
        `;
      }
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
    });
});


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