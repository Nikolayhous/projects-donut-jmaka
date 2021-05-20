(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileMenulistRef = document.querySelector(".mobile__menu--list");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);

        
      mobileMenuRef.classList.toggle("is-open");
    });

    mobileMenulistRef.addEventListener("click", () => {
      mobileMenuRef.classList.remove("is-open");
      // const expanded1 =
      //   menuBtnRef.getAttribute("aria-expanded") === "true" || false;
      // menuBtnRef.setAttribute("aria-expanded", false);
      menuBtnRef.classList.remove("is-open");
      
    })
    
  })(); 