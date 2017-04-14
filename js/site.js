var user = {
  firstName: "Justin",
  lastName: "BIEBER",
  username: "JBIEBER",
  password: "hawk2017"
};
$(window).ready(function(e) {
  $("#submit").on("click", function (event) {
    login();
  });
});
function login(){
  var input_user = (document.getElementById("user").value).toUpperCase();
  var input_pw = document.getElementById("pass").value;
  if (input_user.length <= 0 || input_pw.length <= 0) {
    window.alert("Please enter a username and password.");
  } else if (input_user != user.username || input_pw != user.password) {
    window.alert("You've entered an incorrect login. Please check your credentials.");
  } else if (input_user == user.username && input_pw == user.password){
    window.location.replace('main.html');
  }
}
