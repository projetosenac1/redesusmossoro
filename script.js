let contador = 1;

setInterval ( function(){
    document.getElementById('slide' + contador).checked = true;
    contador ++;

    if( contador > 5) {
        contador = 1;
    }

}, 4500)


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  $(document).ready(function () {
    $("a").click(function () {
      if ($(this).hasClass("image-servicos")) {
        $(".toggle:visible").slideUp();
        $($(this).attr("href")).slideDown();
        return false;
      }
      var myelement = $(this).attr("href");
      $(myelement).slideToggle("fast");
      $(".toggle:visible").not(myelement).slideUp();
    });
  });
