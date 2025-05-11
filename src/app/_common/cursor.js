import { gsap } from "gsap";

export const cursorAnimation = () => {
    /* -------------------------------------------

    cursor

    ------------------------------------------- */

    var follower = document.querySelector(".mil-cursor-follower");
    var posX = 0,
        posY = 0;
    var mouseX = 0,
        mouseY = 0;

    document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    gsap.ticker.add(function () {
        posX += (mouseX - posX) / 29;
        posY += (mouseY - posY) / 29;
        gsap.set(follower, {
            css: {
                left: posX,
                top: posY
            }
        });
    });

    addHoverEffect(".mil-c-dark", "mil-dark-active");
    addHoverEffect(".mil-c-gone", "mil-gone-active");
    addHoverEffect(".mil-c-view", "mil-view-active");
    addHoverEffect(".mil-c-next", "mil-next-active");
    addHoverEffect(".mil-c-read", "mil-read-active");
    addHoverEffect(".mil-c-swipe", "mil-swipe-active");

    function addHoverEffect(selector, className) {
        if (  document.querySelectorAll(selector) !== undefined ) {
            document.querySelectorAll(selector).forEach(function (link) {
                link.addEventListener("mouseenter", function () {
                    follower.classList.add(className);
                });
                link.addEventListener("mouseleave", function () {
                    follower.classList.remove(className);
                });
            });
        }
    }
}