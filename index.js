$(document).ready(function(){
  $(this).scrollTop(0);
});

document.getElementById("myButton").onclick = function () {
  location.href = "./place-order.html";
};


$(window).on('scroll', function(e) {
  // if ($(window).scrollTop() >= ($(".counter").offset().top - ($(window).height()))) {
  if ($(window).scrollTop() >= ($(".counter").offset().top - ($(window).height()))) {
    if (!$(".counter").hasClass("animated")) {
      $('.counter-count').each(function () {
        var $this = $(this);
        $this.prop('Counter', 0).animate({
          Counter: $this.text()
        }, {
          duration: 3500,
          easing: 'swing',
          step: function (now) {
            $this.text(Math.ceil(now));
          },
          complete: function () {
            if ($this.hasClass('add-plus') && Math.ceil($this.prop('Counter')) >= parseInt($this.text())) {
              $this.text($this.text() + '+');
            }
          }
        });
      });
      $(".counter").addClass("animated");
    }
  }
  console.log("Window Scroll Top:", $(window).scrollTop());
console.log("Counter Offset Top:", $(".counter").offset().top);

});

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


$('#searchForm').submit(function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Get the search term from the input field
  var searchTerm = $('#exampleDataList').val().trim().toLowerCase();

  // Remove any existing search result classes
  $('.album-row-catalogue .card').removeClass('search-result');

  // Perform the search and mark matching cards
  if (searchTerm !== '') {
    $('.album-row-catalogue .card').each(function () {
      var productName = $(this).find('.card-body').text().toLowerCase();

      // Check if the product matches the search term
      if (productName.includes(searchTerm)) {
        $(this).addClass('search-result');
      }
    });
  }

  // Show all cards if search term is empty or whitespace
  if (!searchTerm) {
    $('.album-row-catalogue .card').addClass('search-result');
  }

  // Hide non-matching cards
  $('.album-row-catalogue .card').each(function () {
    if (!$(this).hasClass('search-result')) {
      $(this).hide();
    } else {
      $(this).show(); // Ensure matching cards are visible
    }
  });
});

