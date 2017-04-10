$.noConflict();
(function($){
  $(document).ready(
    function(){
      $("#myiitlogin").on('submit', function (e){e.preventDefault();})
    })
})

function login(){
      window.location.href = "main/main.html";
    }