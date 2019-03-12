// Init Github
const github = new Github;

// Init UI
const ui = new UI;


//Search
const searchUser = document.getElementById('searchUser');

//Search event listener
searchUser.addEventListener('keyup', (e) => {

  //Get text
  const userText = e.target.value;

  if(userText !== '') {
    
    //HTTP CALL
    github.getUser(userText)
    .then(data => { 
      if(data.profile.message === 'Not Found') {

        //Show alert
        ui.showAlert('Usuário não encontrado', 'alert alert-danger');

      } else {
        //show profike
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      } 
    })
    
  } else {
    //Clear profile
    ui.clearProfile();
  }

});
