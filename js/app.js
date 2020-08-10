$(window).on('load', function() {
  $('body').addClass('loaded');

  $('.lst-Flex_Items').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    cellSelector: '.lst-Flex_Item',
    wrapAround: true
  });
});
