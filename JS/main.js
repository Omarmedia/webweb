
//Menu/toggle animasjon
const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})

 

// Logo slider
const scrollers = document.querySelectorAll('.scroller')

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation()
}

function addAnimation() {
  scrollers.forEach(scroller => {
    scroller.setAttribute('data-animated', true)
    
    const scrollerInner = scroller.querySelector('.scroller__inner')
    const scrollerContent = Array.from(scrollerInner.children)
    
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true)
      duplicatedItem.setAttribute('aria-hidden', true)
      scrollerInner.appendChild(duplicatedItem)
    })
  })
}

//CONTACT US
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


//TESTIMONIALS
document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelector('.testimonials');
  const totalTestimonials = testimonials.children.length;
  let index = 0;

  document.getElementById('next').addEventListener('click', function() {
      index = (index + 1) % totalTestimonials;
      updateCarousel();
  });

  document.getElementById('prev').addEventListener('click', function() {
      index = (index - 1 + totalTestimonials) % totalTestimonials;
      updateCarousel();
  });

  function updateCarousel() {
      testimonials.style.transform = `translateX(-${index * 100}%)`;
  }
});

/*Video autoplay mediaquary*/
document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById('showcase-video');

  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      video.play();
    } else {
      video.pause();
    }
  }

  // Sjekk skjermstørrelse ved innlasting av siden
  checkScreenSize();

  // Sjekk skjermstørrelse ved resizing av vinduet
  window.addEventListener('resize', checkScreenSize);
});



