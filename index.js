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





  /* Swiper  */

    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      mousewheel: true,
      loop:true,
      centeredSlides: false,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 100,
        stretch: 10,
        depth: 20,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
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

});

