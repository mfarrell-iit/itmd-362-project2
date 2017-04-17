function load_login() {
  $("#person_name").html(user.firstName);
  var menu_opts = $(".option");
  var invis = $(".inact");
  for (var x=0; x<invis.length; x++) {
    invis[x].addEventListener("click",
      function() {
        window.alert("Feature not implemented yet!");
      }
    );
  }
  $("#finances").bind('click', function() {
    window.location.replace('payment.html');
  });

  $('#exp').bind('click',  function() {
    var change;
    if (menu_opts[0].style.display == 'none') {
      change = 'block';
    } else {
      change = 'none';
    }
    for (var x=0; x<menu_opts.length; x++) {
      menu_opts[x].style.display = change;
    }
  });

}

load_login();
