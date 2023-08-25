(() => {
    const refs = {
      showBackdrop: document.querySelector(".burger-menu"),
      closeDropBtn: document.querySelector(".close-drop-btn"),
      navMenu: document.querySelector(".nav-wrapper"),
    };
  
    refs.showBackdrop.addEventListener("click", toggleModal);
    refs.closeDropBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.navMenu.classList.toggle("is-hidden");
    }
  })();