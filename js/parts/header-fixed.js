window.onscroll = function() {
  if(window.pageYOffset > 600) {
    document.body.classList.add('header-fixed');
  } else {
    document.body.classList.remove('header-fixed');
  }

  /* if (window.pageYOffset > 400 && window.screen.width >= 650) {
    document.body.classList.add('js-up-button-show');
  } else {
    document.body.classList.remove('js-up-button-show');
  } */

}