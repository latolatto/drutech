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



// // Initialize cart array to store added items
// let cart = [];

// // Add event listener to the "Add to Cart" buttons
// const addToCartButtons = document.querySelectorAll('.order-request-btn');
// addToCartButtons.forEach(button => {
//     button.addEventListener('click', addToCartClicked);
// });

// // Load cart data from localStorage when the page loads
// document.addEventListener('DOMContentLoaded', () => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//         cart = JSON.parse(savedCart);
//         updateCartIcon(); // Update the cart icon when loading the saved cart data
//     }
// });

// // Add an event listener to the cart icon to toggle the dropdown menu on click
// const cartIcon = document.getElementById('cartIcon');
// const dropdownMenu = document.getElementById('cartDropdown');

// cartIcon.addEventListener('click', function() {
//     if (dropdownMenu.classList.contains('show')) {
//         dropdownMenu.classList.remove('show');
//     } else {
//         dropdownMenu.classList.add('show');
//     }
// }); 
// // Function to handle the "Add to Cart" button click
// function addToCartClicked(event) {
//     // Identify the product
//     const button = event.target;
//     const productContainer = button.closest('.modal'); // Assuming the modal is a parent element
//     const title = productContainer.querySelector('.modal-title').textContent;
//     const imageSrc = productContainer.querySelector('.imagepreview').getAttribute('src');

//     // Retrieve quantity
//     const quantityInput = productContainer.querySelector('#quantityInput');
//     const quantity = parseInt(quantityInput.value);

//     // Store product in cart
//     addToCart(title, imageSrc, quantity);

//     // Reset quantity input to 1
//     quantityInput.value = 1;

//     // Update cart icon
//     updateCartIcon();

//     // Save cart details to local storage
//     saveCartToLocalStorage();
// }

// // Function to add a product to the cart
// function addToCart(title, imageSrc, quantity) {
//     // Example: Store product in an object
//     const product = { title: title, image: imageSrc, quantity: quantity };
//     // Push the product into the cart array
//     cart.push(product);
// }

// // Function to update the cart icon
// function updateCartIcon() {
//     // Get the cart icon element
//     const cartIcon = document.getElementById('cartIcon');
//     // Update the cart item count
//     const cartItemCount = document.getElementById('cartItemCount');
//     cartItemCount.textContent = getTotalItemCount(); // You need to implement this function
// }

// // Function to calculate the total number of items in the cart
// function getTotalItemCount() {
//     let totalCount = 0;
//     // Iterate through the cart array and sum up the quantities
//     cart.forEach(product => {
//         totalCount += product.quantity;
//     });
//     return totalCount;
// }

// // Function to save cart details to local storage
// function saveCartToLocalStorage() {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// // Add an event listener for when the DOM content is loaded
// document.addEventListener('DOMContentLoaded', function() {
//     // Retrieve cart data from localStorage
//     const storedCart = JSON.parse(localStorage.getItem('cart'));
//     if (storedCart && storedCart.length > 0) {
//         // If there is stored cart data, update the cart count accordingly
//         cart = storedCart;
//         updateCartIcon();
//     }
//     // Show the cart count after updating it
//     document.getElementById('cartItemCount').style.display = 'inline';
// });

// // Call updateCartIcon when the page loads to initially set the cart count
// document.addEventListener('DOMContentLoaded', function() {
//   updateCartIcon();
// });





// // Initialize cart array to store added items
// let cart = [];

// // Add event listener to the "Add to Cart" buttons
// const addToCartButtons = document.querySelectorAll('.order-request-btn');
// addToCartButtons.forEach(button => {
//     button.addEventListener('click', addToCartClicked);
// });

// // Load cart data from localStorage when the page loads
// document.addEventListener('DOMContentLoaded', () => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) {
//         cart = JSON.parse(savedCart);
//         updateCartIcon(); // Update the cart icon when loading the saved cart data
//     }
// });

// // Add an event listener to the cart icon to toggle the dropdown menu on click
// const cartIcon = document.getElementById('cartIcon');
// const dropdownMenu = document.getElementById('cartDropdown');

// cartIcon.addEventListener('click', function() {
//     if (dropdownMenu.classList.contains('show')) {
//         dropdownMenu.classList.remove('show');
//     } else {
//         dropdownMenu.classList.add('show');
//     }
// }); 
// // Function to handle the "Add to Cart" button click
// function addToCartClicked(event) {
//     // Identify the product
//     const button = event.target;
//     const productContainer = button.closest('.modal'); // Assuming the modal is a parent element
//     const title = productContainer.querySelector('.modal-title').textContent;
//     const imageSrc = productContainer.querySelector('.imagepreview').getAttribute('src');

//     // Retrieve quantity
//     const quantityInput = productContainer.querySelector('#quantityInput');
//     const quantity = parseInt(quantityInput.value);

//     // Store product in cart
//     addToCart(title, imageSrc, quantity);

//     // Reset quantity input to 1
//     quantityInput.value = 1;

//     // Update cart icon
//     updateCartIcon();

//     // Save cart details to local storage
//     saveCartToLocalStorage();
// }

// // Function to add a product to the cart
// function addToCart(title, imageSrc, quantity) {
//     // Example: Store product in an object
//     const product = { title: title, image: imageSrc, quantity: quantity };
//     // Push the product into the cart array
//     cart.push(product);
// }

// // Function to update the cart icon
// function updateCartIcon() {
//     // Get the cart icon element
//     const cartIcon = document.getElementById('cartIcon');
//     // Update the cart item count
//     const cartItemCount = document.getElementById('cartItemCount');
//     cartItemCount.textContent = getTotalItemCount(); // You need to implement this function
// }

// // Function to calculate the total number of items in the cart
// function getTotalItemCount() {
//     let totalCount = 0;
//     // Iterate through the cart array and sum up the quantities
//     cart.forEach(product => {
//         totalCount += product.quantity;
//     });
//     return totalCount;
// }

// // Function to save cart details to local storage
// function saveCartToLocalStorage() {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// // Add an event listener for when the DOM content is loaded
// document.addEventListener('DOMContentLoaded', function() {
//     // Retrieve cart data from localStorage
//     const storedCart = JSON.parse(localStorage.getItem('cart'));
//     if (storedCart && storedCart.length > 0) {
//         // If there is stored cart data, update the cart count accordingly
//         cart = storedCart;
//         updateCartIcon();
//     }
//     // Show the cart count after updating it
//     document.getElementById('cartItemCount').style.display = 'inline';
// });

// // Call updateCartIcon when the page loads to initially set the cart count
// document.addEventListener('DOMContentLoaded', function() {
//   updateCartIcon();
// });
