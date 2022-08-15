// Create function addUser()
function addUser(){
  // Get value of user by id player1_name_input and player2_name_input
    get.Value.getItem("player1_name_input");
    get.Value.getItem("player2_name_input");
  // Store these values locally
   localStorage.setItem("player1_name", player1_name);
   localStorage.setItem("player2_name", player2_name);
  //Assign "game_page.html" to window.location
  window.location ="game_page.html";
}
