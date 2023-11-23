(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        const cursor = document.querySelector('#cursor');
        cursor.classList.toggle("light-mode-cursor");
    })
})();

//Rick and Morty
document.addEventListener('mousemove', (e) =>{


    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById('anchor')
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height /2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);


    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    })
})

function angle (cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}

//Custom Cursor
var cursor = document.getElementById(
    'cursor');
document.addEventListener('mousemove'
     , function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});


//Card Slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



 (function () {
    
    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor');
    
    const animateit = function (e) {
          const span = this.querySelector('span');
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,
    
          move = 25,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;
    
          span.style.transform = `translate(${xMove}px, ${yMove}px)`;
    
          if (e.type === 'mouseleave') span.style.transform = '';
    };
    
    const editCursor = e => {
          const { clientX: x, clientY: y } = e;
          cursor.style.left = x + 'px';
          cursor.style.top = y + 'px';
    };
    
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);
    
    })();

    function scaleCursor(active) {
        document.getElementById("cursor").style.transform = active
          ? "translate(-50%, -50%) scale(8)"
          : "scale(1)";
      }
      



PageTransitions();