$(window).on("load", function(){
  console.log("This game is developed by Gioele Pannetto ( https://gioelepannetto.altervista.org ) and this game is open sorce, see it at https://github.com/GioPan04/Cookie-Clicker-Web !");
  $("#cookiebutton").click(function(){
    setTimeout(function(){
      $("#cookiebutton").removeClass("cookieclicked");
    }, 200);
    
    $("#cookiebutton").addClass("cookieclicked");
    $("#score").html(cookie());
  });
  
});

function convert(string){
  return parseFloat(string);
}
var score = 0;
function cookie() {
  var space = Math.random() * convert($(document).width());
  score++;
  $("body").append('<img src="src/cookie.png" class="cookie" style="margin-left: ' + space +'px;">');
  console.log("🍪 Cookies 🍪. Your score is " + score);
  return score;
}