// NAV BAR
const navbar = document.querySelector('.navbar');
const MobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.barra');
const mobileLinks = document.querySelectorAll('.mobile__links a');
const imageContainers = document.querySelectorAll('.image-container');

button.addEventListener('click', function(){
    MobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function(){
    if (this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        MobileNavbar.classList.remove('active');
    });
});


imageContainers.forEach(container => {
  container.addEventListener('click', () => {
    container.classList.toggle('active');
  });
});






// TYPING EFFECT

const titulo = document.querySelector('h1');
typeWriter(titulo);

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}



// Animar o scroll até o alvo

const menuItems = document.querySelectorAll(' .navbar__links a, .btn, .mobile__links a[href^="#"]');

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 200;
	scrollToPosition(to);
}

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});


/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 100 / 60 fps
};





