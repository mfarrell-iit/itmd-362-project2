function load_login() {
  $("#person_name").html(user.firstName);
  var menu_opts = $(".option");
  window.alert(menu_opts[0]);
  for (var x=0; x<menu_opts.length; x++) {
    menu_opts[x].addEventListener("click",
      function() {
        window.alert("Feature not implemented yet!");
      }
    );
  }
}
load_login();
