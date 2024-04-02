$(document).ready(function(){
  $(this).scrollTop(0);
});

$('.mainbutton').onclick = function () {
  location.href = "./catalogue.html";
};


document.getElementById("year").innerHTML = new Date().getFullYear();



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


const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
  // Handle scrollbar thumb drag
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      
      // Update thumb position on mouse move
      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          // Ensure the scrollbar thumb stays within bounds
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }
      // Remove event listeners on mouse up
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }
      // Add event listeners for drag interaction
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });
  // Slide images according to the slide button clicks
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });
   // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }
  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }
  // Call these two functions when image list scrolls
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);



const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));