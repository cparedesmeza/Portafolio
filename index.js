window.addEventListener('load', function () {
  /* Funcion para escritura*/

  var typed = new Typed('#typed-output', {
    strings: ['Web Developer', 'Web Developer Back End', 'Web Developer Front End', 'Web Developer UX/UI'],
    smartBackspace: true, // Default value
    typeSpeed: 130,    // Velocidad de escritura
    backSpeed: 30,    // Velocidad de borrado
    loop: true,       // Hace que el texto se repita en bucle
    showCursor: false, // Muestra el cursor intermitente
  });
  /* Codigo para página horizontal */
  // Registro de ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Asegúrate de que el contenedor comience en la posición correcta
  gsap.set(".container-horizontal", { x: 0 });

  // Configura la animación para el desplazamiento horizontal
  gsap.to(".container-horizontal", {
    xPercent: -100 * (document.querySelectorAll(".panel").length - 1), // Mueve las secciones al 100% por cada una
    ease: "none",
    scrollTrigger: {
      trigger: ".container-horizontal",
      pin: true, // Fija el contenedor mientras se hace scroll
      scrub: 0.7, // Hace el desplazamiento suave
      start: "top top", // Inicia la animación cuando la parte superior del contenedor está en la parte superior de la ventana
      end: () => "+=" + window.innerWidth * document.querySelectorAll(".panel").length // Extiende la animación
    }
  });


  /* Swiper  */
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    autoplay:{ delay: 2000},
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
      400:{
        slidesPerView: 2,
      },
      200:{
        slidesPerView: 1,
      },
    }
  });

  //DROPDOWN SECTION: FAQS
  let btns = {
    faq1Btn: document.getElementById('dropdownBtn1'),
    faq2Btn: document.getElementById('dropdownBtn2'),
    faq3Btn: document.getElementById('dropdownBtn3'),
    faq4Btn: document.getElementById('dropdownBtn4'),
    faq5Btn: document.getElementById('dropdownBtn5'),
  }
  let contents = {
    contentFaq1: document.getElementById('dropdown-content1'),
    contentFaq2: document.getElementById('dropdown-content2'),
    contentFaq3: document.getElementById('dropdown-content3'),
    contentFaq4: document.getElementById('dropdown-content4'),
    contentFaq5: document.getElementById('dropdown-content5'),
  }
  function dropdown(content) {
    if (contents[content].style.display == 'flex') {
      contents[content].style.display = 'none';
    } else {
      contents[content].style.display = 'flex';
    }
  }

  btns.faq1Btn.addEventListener('click', function () {
    dropdown('contentFaq1');
  });
  btns.faq2Btn.addEventListener('click', function () {
    dropdown('contentFaq2');
  });
  btns.faq3Btn.addEventListener('click', function () {
    dropdown('contentFaq3');
  });
  btns.faq4Btn.addEventListener('click', function () {
    dropdown('contentFaq4');
  });
  btns.faq5Btn.addEventListener('click', function () {
    dropdown('contentFaq5');
  });


  function showModal(){
    const overlay = document.querySelector("#overlay");
    if (overlay.classList.contains("overlay-active")) {
      overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
      overlay.classList.remove("overlay-active")
      menu.classList.remove("active");
    }
  }
});

