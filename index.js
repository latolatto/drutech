window.onload = function() {
  window.scrollTo(0, 0);
};

$('.mainbutton').onclick = function () {
  location.href = "./catalogue.html";
};


document.getElementById("year").innerHTML = new Date().getFullYear();





$(".album-see-more").on("click",function(){
  location.href = "./catalogue.html";
})


$(function() {
  $('.pop').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#imagemodal').modal('show');   
  });		
});

$('.pop').on('click', function () {
  // Get the item name from the data attribute
  var itemName = $(this).data('item-name');
  
  // Update the modal title with the item name
  $('#itemName').text(itemName);

  // Update the modal image source
  $('.imagepreview').attr('src', $(this).find('img').attr('src'));

  // Show the modal
  $('#myModal').modal('show');
});




const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));



// Get all buttons with class 'myButton'
var buttons = document.querySelectorAll('.btn');

// Loop through each button and add a click event listener
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Add the 'clicked' class to the button
        this.classList.add('clicked');

        // Remove the 'clicked' class after 100 milliseconds (adjust as needed)
        var that = this;
        setTimeout(function() {
            that.classList.remove('clicked');
        }, 100);
    });
});





