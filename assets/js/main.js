// Scroll Reveal
ScrollReveal({
  reset: false,
  distance: '200px',
  duration: 750,
  delay: 200
});
ScrollReveal().reveal('.hero .line1', { origin: 'bottom', distance: '25px', delay: 20 });
ScrollReveal().reveal('.hero .line2', { origin: 'bottom', distance: '25px', delay: 90 });
ScrollReveal().reveal('.hero .line3', { origin: 'bottom', distance: '25px', delay: 160 });
ScrollReveal().reveal('.hero .line4', { origin: 'bottom', distance: '25px', delay: 230 });
ScrollReveal().reveal('.hero .hero-content p', { origin: 'bottom', distance: '25px', delay: 300 });
ScrollReveal().reveal('.hero .hero-buttons', { origin: 'bottom', distance: '25px', delay: 320 });
ScrollReveal().reveal('.hero .hero-img', { origin: 'bottom', distance: '0px', delay: 300 });
ScrollReveal().reveal('.liquid h3', { origin: 'bottom', distance: '25px', delay: 20 });
ScrollReveal().reveal('.liquid .apr-content', { origin: 'bottom', distance: '25px', delay: 90 });
ScrollReveal().reveal('.liquid .right h4', { origin: 'bottom', distance: '25px', delay: 160 });
ScrollReveal().reveal('.node .right h3', { origin: 'bottom', distance: '25px', delay: 20 });
ScrollReveal().reveal('.node .left .img', { origin: 'bottom', distance: '25px', delay: 90 });
ScrollReveal().reveal('.node .apr-content', { origin: 'bottom', distance: '25px', delay: 160 });
ScrollReveal().reveal('.node .card-bottom .content', { origin: 'bottom', distance: '0px', delay: 230 });
ScrollReveal().reveal('.solomigration .top h3', { origin: 'bottom', distance: '25px', delay: 20 });
ScrollReveal().reveal('.solomigration .right h4', { origin: 'bottom', distance: '25px', delay: 90 });
ScrollReveal().reveal('.defi .defi-title h3', { origin: 'bottom', distance: '25px', delay: 20 });
ScrollReveal().reveal('.defi .defi-box', { origin: 'bottom', distance: '0px', delay: 90 });
ScrollReveal().reveal('.about .title h2', { origin: 'bottom', distance: '25px', delay: 20 });
ScrollReveal().reveal('.about .title p', { origin: 'bottom', distance: '25px', delay: 160 });
ScrollReveal().reveal('.lqstaking .title h2', { origin: 'bottom', distance: '25px', delay: 20 });
ScrollReveal().reveal('.lqstaking .title p', { origin: 'bottom', distance: '25px', delay: 160 });
ScrollReveal().reveal('.lqstaking .feature h3', { origin: 'bottom', distance: '25px', delay: 20 });
ScrollReveal().reveal('.lqstaking .feature h3', { origin: 'bottom', distance: '25px', delay: 20 });
ScrollReveal().reveal('.lqstaking .feature h3', { origin: 'bottom', distance: '25px', delay: 20 });
ScrollReveal().reveal('.earn .title h2', { origin: 'bottom', distance: '25px', delay: 20 });
ScrollReveal().reveal('.earn .title p', { origin: 'bottom', distance: '25px', delay: 160 });
ScrollReveal().reveal('.earn .card h3', { origin: 'bottom', distance: '25px', delay: 20 });
ScrollReveal().reveal('.earn .card .apr-content', { origin: 'bottom', distance: '25px', delay: 90 });
ScrollReveal().reveal('.earn .card .right h4', { origin: 'bottom', distance: '25px', delay: 160 });



// ETH Price Tracker
function updateEthPrice() {
  const binanceApiUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT';
  fetch(binanceApiUrl)
      .then(response => response.json())
      .then(data => {
          const ethPrice = parseFloat(data.price);
          document.getElementById('eth-price').textContent = `$${ethPrice.toFixed(2)}`;
      })
      .catch(error => {
          console.error('An error occurred while fetching the ETH price:', error);
      });
}
document.addEventListener('DOMContentLoaded', updateEthPrice);
setInterval(updateEthPrice, 6000);



// Navbar anchor + hiding # in URL
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top - 5 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    }, 300);
  }
});



// Black Bar toggle
$(document).ready(function () {
  var menuOpen = false;

  $("#btn-blackbar, .nav-blackbar-item").click(function () {
    if (!menuOpen) {
      $("body").css("overflow", "hidden");
      $("#black-bar").slideDown();
      $("#btn-blackbar").addClass("active");
      $("#blackbarbutton-icon").removeClass("fa-bars").addClass("fa-xmark");
      menuOpen = true;
    } else {
      $("body").css("overflow", "auto");
      $("#black-bar").slideUp();
      $("#btn-blackbar").removeClass("active");
      $("#blackbarbutton-icon").removeClass("fa-xmark").addClass("fa-bars");
      menuOpen = false;
    }
  });
});