let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

function addTouchClass() {
  if (isMobile.any()) document.documentElement.classList.add("touch");
}
function addLoadedClass() {
  window.addEventListener("load", function () {
    setTimeout(function () {
      document.documentElement.classList.add("loaded");
    }, 0);
  });
}

function menuOpen() {
  let iconMenu = document.querySelector(".icon-menu");
  if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
      document.documentElement.classList.toggle("lock");
      document.documentElement.classList.toggle("menu-open");
      const menuBody = document.querySelector(".header__nav");
      menuBody.classList.toggle("open");
    });
  }
}
function menuClose() {
  document.documentElement.classList.remove("menu-open");
}
function stickyHeader(el, scrollValue = 0) {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(el);
    header.classList.toggle("sticky", window.scrollY > scrollValue);
  });
}
addTouchClass();
addLoadedClass();
menuOpen();