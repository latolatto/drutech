$(document).ready(function(){
  $(this).scrollTop(0);
});

document.getElementById("myButton").onclick = function () {
  location.href = "./place-order.html";
};

$(".album-see-more").on("click",function(){
  location.href = "./catalogue.html";
})

$(window).on('scroll', function(e) {
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
});
