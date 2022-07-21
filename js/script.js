// Глобальные переменные Global Variables
const menuButton = document.querySelector('.button-menu');

// Функция подключения скриптов Function for connecting scripts
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

include("./js/parts/show-menu.js");
include("./js/parts/header-fixed.js");