$(() => {
  function toggleSlide() {
    if ($('.slideshow-container').hasClass('family-photo')) {
      $('.slideshow-container').removeClass('family-photo');
      $('.slideshow-container').addClass('me-and-stacia');
      $('.first-dot').removeClass('active');
      $('.second-dot').addClass('active');
    } else {
      $('.slideshow-container').removeClass('me-and-stacia');
      $('.slideshow-container').addClass('family-photo');
      $('.second-dot').removeClass('active');
      $('.first-dot').addClass('active');
    }
  }
  $('.icon').on('click', () => {
    $('#myLinks').toggle(100);
  });

  $('#myLinks a').on('click', () => {
    $('#myLinks').hide();
  });

  $('.prev').on('click', toggleSlide);

  $('.next').on('click', toggleSlide);

  $('.first-dot').on('click', () => {
    $('.slideshow-container').removeClass('me-and-stacia');
    $('.slideshow-container').addClass('family-photo');
    $('.second-dot').removeClass('active');
    $('.first-dot').addClass('active');
  });

  $('.second-dot').on('click', () => {
    $('.slideshow-container').removeClass('family-photo');
    $('.slideshow-container').addClass('me-and-stacia');
    $('.first-dot').removeClass('active');
    $('.second-dot').addClass('active');
  });
});