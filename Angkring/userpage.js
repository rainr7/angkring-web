  /* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "25rem";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

$(document).ready(function(){

  var quantitiy=0;
     $('.quantity-right-plus2').click(function(e){
          
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          var quantity = parseInt($('#quantity2').val());
          
          // If is not undefined
              
              $('#quantity2').val(quantity + 1);
  
            
              // Increment
          
      });
  
       $('.quantity-left-minus2').click(function(e){
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          var quantity = parseInt($('#quantity2').val());
          
          // If is not undefined
        
              // Increment
              if(quantity>0){
              $('#quantity2').val(quantity - 1);
              }
      });

      $('.quantity-right-plus').click(function(e){
          
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
            
            $('#quantity').val(quantity + 1);

          
            // Increment
        
    });

     $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
      
            // Increment
            if(quantity>0){
            $('#quantity').val(quantity - 1);
            }
    });

    $('.quantity-right-plus3').click(function(e){
          
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt($('#quantity3').val());
      
      // If is not undefined
          
          $('#quantity3').val(quantity + 1);

        
          // Increment
      
  });

   $('.quantity-left-minus3').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var quantity = parseInt($('#quantity3').val());
      
      // If is not undefined
    
          // Increment
          if(quantity>0){
          $('#quantity3').val(quantity - 1);
          }
  });
      
  });

  $(function(){

    $('body').on('click', '#chckbtn', function(e)
    {
        e.preventDefault();

        var link = $(this).attr('href');
        
        $('body').append(
            '<div id="overlay">' +
            '<img id="loading" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif">' +
            '</div>'
        );
        
        setTimeout(function(){
          $('#overlay').remove();
         
        }, 2000); //2 seconds
    });

})