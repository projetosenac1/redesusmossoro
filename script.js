
  // carrosel home //
let contador = 1;

setInterval ( function(){
    document.getElementById('slide' + contador).checked = true;
    contador ++;

    if( contador > 5) {
        contador = 1;
    }

}, 4500)

  //serviços//
  $(document).ready(function () {
    $("a").click(function () {
      if ($(this).hasClass("divserv")) {
        $(".toggle:visible").slideUp();
        $($(this).attr("href")).slideDown();
        return false;
      }
      var myelement = $(this).attr("href");
      $(myelement).slideToggle("fast");
      $(".toggle:visible").not(myelement).slideUp();
    });
  });

  //menu responsivo//
  
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const minhaDiv = document.getElementById("cabeca");  
function focarDiv() {
  minhaDiv.focus();
}
document.getElementById("image-container-togger").addEventListener("click", focarDiv);