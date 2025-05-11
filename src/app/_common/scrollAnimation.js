//import { ScrollSmoother, ScrollTrigger } from "@library/plugins";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

export const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  
  /*
  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  });*/

  /* -------------------------------------------

  scrollbar

  ------------------------------------------- */

  gsap.to('.mil-progress', {
    height: '100%',
    ease: 'sine',
    scrollTrigger: {
        scrub: 0.3
    }
  }); 

  /* -------------------------------------------

  scroll animations

  ------------------------------------------- */
  
  const appearance = document.querySelectorAll(".mil-up");
  appearance.forEach((section) => {
      gsap.fromTo(section, {
          opacity: 0,
          y: 60,
          scale: .96,
          ease: 'sine',
      }, {
          y: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
              trigger: section,
              toggleActions: 'play none none reverse',
          }
      });
  });

  /* -------------------------------------------

  scale animations

  ------------------------------------------- */

  const scaleImage = document.querySelectorAll(".mil-scale-img");

  scaleImage.forEach((section) => {
      var value1 = section.getAttribute("data-value-1");
      var value2 = section.getAttribute("data-value-2");

      if (window.innerWidth < 992) {
          value1 = Math.max(.95, value1);
      }

      gsap.fromTo(section, {
          ease: 'sine',
          scale: value1,
      }, {
          scale: value2,
          scrollTrigger: {
              trigger: section,
              scrub: true,
              toggleActions: 'play none none reverse',
          }
      });
  });
  

  /* -------------------------------------------

  counters

  ------------------------------------------- */

  const numbers = document.querySelectorAll(".mil-counter");

  numbers.forEach((element) => {
      var zero = {
          val: 0
      };
      var num = parseFloat(element.getAttribute("data-number"));
      var split = (num + "").split("."); // to cover for instances of decimals
      var decimals = split.length > 1 ? split[1].length : 0;

      gsap.to(zero, {
          val: num,
          duration: 2,
          scrollTrigger: {
              trigger: element,
              toggleActions: 'play none none reverse',
          },
          onUpdate: function () {
              element.textContent = zero.val.toFixed(decimals);
          }
      });
  });
  

  /* -------------------------------------------

  add class

  ------------------------------------------- */

  function addClassToElement(element) {
      if (element) {
          element.classList.add('mil-added');
      }
  }

  function removeClassFromElement(element) {
      if (element) {
          element.classList.remove('mil-added');
      }
  }

  document.querySelectorAll('.mil-add-class').forEach(element => {
      ScrollTrigger.create({
          trigger: element,
          toggleActions: 'play none none reverse',
          onEnter: () => addClassToElement(element),
          onLeaveBack: () => removeClassFromElement(element)
      });
  });

  /* -------------------------------------------

  progressbar

  ------------------------------------------- */

  const progressBars = document.querySelectorAll('.mil-prog');

  progressBars.forEach(progressBar => {
      const widthPercentage = progressBar.getAttribute('data-number');
      gsap.fromTo(progressBar, {
          ease: 'sine',
          width: '0%'
      }, {
          width: `${widthPercentage}%`,
          scrollTrigger: {
              trigger: progressBar,
              toggleActions: 'play none none reverse',
              once: true
          },
          duration: 2,
          ease: 'sine'
      });
  });
}