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
  //expanding tuition details tab
  $('#tuiton_exp').bind('click', function() {
    var change;
    if ($('#detailed-list').css('display') == 'none') {
       change = 'block';
    } else {
      change = 'none';
    }
    $('#detailed-list').css('display', change);
  });
  //calculating the outstanding balance and setting the details onto the page
  //also changes styling if money is owed to the university.
  var amt_due = user.t_cost - user.t_cred;
  $('#tut-amt').html('$'+ (user.t_cost - user.t_cred));
  if (amt_due > 0) {
    $('#tut-amt').css('color', 'red');
    $('#tut-amt').css('font-weight', 'bold');
  }
  //the official "payment" box. hidden at first, but once pay now is clicked it
  //will come to life. Also included is the error handling.
  $('#p_now').bind('click', function() {
      if ($('#pay_box').css('display') == 'block') {
        if($('#r_num').val().length == 9 && $('#acc_num').val().length == 9 && $('#amt').val().length > 0){
          var act = window.confirm('Proceed with payment?');
          if (act) {
            window.alert("Payment successeful!");
            window.location.replace('main.html');
          } else {
            window.alert("Payment cancelled.");
          }
        } else {
          window.alert("invalid payment options");
        }
      } else {
        $('#pay_box').css('display', 'block');
      }
  });
  //expand OTS printing account info box
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
  //set print amount
$('#p_credit_area').html('$'+user.printC);
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

}

load_login();
