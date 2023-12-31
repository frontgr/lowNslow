document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion__item");

  accordions.forEach((el) => {
    el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const control = self.querySelector(".accordion__control");
      const content = self.querySelector(".accordion__content");
      const desc = self.querySelector(".accordion__desc");

      self.classList.toggle("open");

      //  Если открыт аккордион
      if (self.classList.contains("open")) {
        control.setAttribute("aria-expanded", "true");
        control.style.transition = "margin 0.3s ease";
        content.setAttribute("aria-hidden", "false");
        desc.style.opacity = 1;
        control.style.borderRadius = "10px 10px 0 0 ";
        content.style.borderRadius = "0 0 10px 10px";
        content.style.transition = "all 1s ease";
        control.style.transition = "margin 1s ease";
        content.style.border = "1px solid #e2e2e2";
        control.style.borderBottom = "none";
        content.style.borderTop = "0";
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        control.setAttribute("aria-expanded", "false");
        control.style.marginBottom = "0";
        control.style.borderRadius = "10px";
        control.style.transition = "margin 1s ease";
        control.style.borderBottom = "1px solid #e2e2e2";
        desc.style.opacity = 0;
        content.setAttribute("aria-hidden", "true");
        content.style.maxHeight = 0;
      }
    });
  });
});
