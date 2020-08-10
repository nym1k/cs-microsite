$(window).on('load', function() {
  $('.wrp-Site').addClass('loaded');
  $('.wrp-Loader').hide();

  $('.lst-Flex_Items').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    cellSelector: '.lst-Flex_Item',
    wrapAround: true
  });
});
