export const AnchorScroll = () => {
    // anchor scroll
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        event.preventDefault();

        var target = document.querySelector(link.getAttribute('href'));
        var offset = 0;

        if ( window.innerWidth < 1200 ) {
          offset = 90;
        }
  
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: "smooth"
        });
      });
    });
};

export const BackToTop = () => {
  /* -------------------------------------------

  back to top

  ------------------------------------------- */
  const btn = document.getElementById('mil-btt');

  if ( btn !== undefined ) {
      btn.addEventListener('click', function (e) {
          e.preventDefault();
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
  }
}

export const Accordion = () => {
  var acc = document.getElementsByClassName("mil-accordion-menu");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle("mil-active");
      var panel = this.nextElementSibling;
      if (panel.style.height) {
        panel.style.height = null;
      } else {
        panel.style.height = panel.scrollHeight + "px";
      }
    };
  }
};

export const PricingPlans = () => {
  /* -------------------------------------------

  price

  ------------------------------------------- */
  var price = document.querySelectorAll('.mil-pricing-table-price');
  var year = document.getElementById('year');
  var month = document.getElementById('month');

  if (price.length > 0 && year && month) {
      year.addEventListener('click', function () {
          this.classList.add('mil-active');
          month.classList.remove('mil-active');
          price.forEach(function (element) {
              element.textContent = element.getAttribute('data-year-price');
          });
      });

      month.addEventListener('click', function () {
          this.classList.add('mil-active');
          year.classList.remove('mil-active');
          price.forEach(function (element) {
              element.textContent = element.getAttribute('data-month-price');
          });
      });
  }
}