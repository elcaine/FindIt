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

  
$('#new-search').on('submit', newFormHandler);