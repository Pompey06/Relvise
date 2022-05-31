const iconMenu = document.querySelector(".header-menu__icon");
const menuBody = document.querySelector(".header__menu");
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      iconMenu.classList.toggle("active");
      menuBody.classList.toggle("active");
      document.body.classList.toggle("lock");
   });
}

function ibg() {
   let ibg = document.querySelectorAll(".ibg");
   for (let i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector("img")) {
         ibg[i].style.backgroundImage =
            "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      }
   }
}
ibg();

function createHoverImage() {
   document.querySelectorAll("[data-hover-src]").forEach((img) => {
      console.log(img);
      const src = img.getAttribute("src");
      const srcH = img.getAttribute("data-hover-src");

      img.parentElement.parentElement.addEventListener("mouseover", () => {
         img.src = srcH;
      });
      img.parentElement.parentElement.addEventListener("mouseout", () => {
         img.src = src;
      });
   });
}

createHoverImage();
