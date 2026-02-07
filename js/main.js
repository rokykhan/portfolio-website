
$(document).ready(function () {

  // ISOTOPE INIT (FIXED)
  let $grid = $('.project-area .grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry',
    percentPosition: true,
    masonry: {
      columnWidth: '.element-item'
    }
  });

  // FILTER BUTTON
  $('.project-area .button-group').on('click', 'button', function () {

    $('.project-area .button-group button').removeClass('active');
    $(this).addClass('active');

    let filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });

  });

  // MAGNIFIC POPUP (ONCE)
  $('.project-area .test-popup-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

});


$(document).ready(function () {
  $('.review .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    margin: 20,
    responsive: {
      0: { items: 1 },
      560: { items: 2 }
    }
  });
});
