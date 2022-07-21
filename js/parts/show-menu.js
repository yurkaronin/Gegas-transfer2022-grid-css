if (menuButton) {
  menuButton.onclick = function () {
    if (document.body.classList.contains('menu-show')) {
      document.body.classList.remove('menu-show');
    } else {
      document.body.classList.add('menu-show');
    }
  }
}