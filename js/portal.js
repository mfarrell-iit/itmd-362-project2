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
  var amt_due = user.t_cost - user.t_cred;
  $('#tut-amt').html('$'+ (user.t_cost - user.t_cred));
  if (amt_due > 0) {
    $('#tut-amt').css('color', 'red');
    $('#tut-amt').css('font-weight', 'bold');
  }

  $('#p_now').bind('click', function() {
      if ($('#pay_box').css('display') == 'block') {
        var act = window.confirm('Proceed with payment?');
        if (act) {
          window.location.replace('another.html');
        } else {
          window.alert("Payment cancelled.");
        }
      } else {
        $('#pay_box').css('display', 'block');
      }
  });
  $('#print_acc').bind('click', function() {
    var change;
    if ($('#print_det').css('display') == 'none') {
      change = 'block';
    } else {
      change = 'none';
    }
    $('#print_det').css('display', change);
    });
  $("#finances").bind('click', function() {
    window.location.replace('payment.html');
  });
  $("#home").bind('click', function() {
    window.location.replace('main.html');
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

  //finance expanding menus
  $('#c_info').bind('click',  function() {
    var change;
    var con_men = $("#fin_aid_info").children();
    if (con_men[0].style.display == 'none') {
      change = 'block';
    } else {
      change = 'none';
    }
    for (var x=0; x<con_men.length; x++) {
      con_men[x].style.display = change;
    }
  });
  $('#c_info').bind('click',  function() {
    var change;
    var con_men = $("#fin_aid_info").children();
    if (con_men[0].style.display == 'none') {
      change = 'block';
    } else {
      change = 'none';
    }
    for (var x=0; x<con_men.length; x++) {
      con_men[x].style.display = change;
    }
  });

  $('#c_info').bind('click',  function() {
    var change;
    var con_men = $("#fin_aid_info").children();
    if (con_men[0].style.display == 'none') {
      change = 'block';
    } else {
      change = 'none';
    }
    for (var x=0; x<con_men.length; x++) {
      con_men[x].style.display = change;
    }
  });


}

load_login();
