(() => {
    const refs = {
      headerToMove: document.querySelector('.header'),
      showBackdrop: document.querySelector(".burger-menu"),
      closeDropBtn: document.querySelector(".close-drop-btn"),
      navMenu: document.querySelector(".nav-wrapper"),
      footerMove: document.querySelector('.c-footer'),
    };
  
    refs.showBackdrop.addEventListener("click", toggleMenu);
    refs.closeDropBtn.addEventListener("click", toggleMenu);

    const addHeaderMove = () => {
      refs.headerToMove.classList.add('header-move');
      refs.footerMove.classList.add('footer-move');
    };

    const removeChangePosition = () => {
      refs.headerToMove.classList.remove('header-move')
      refs.footerMove.classList.remove('footer-move');
    }
  
    function toggleMenu() {
      refs.navMenu.classList.toggle("is-hidden");
      if(!refs.navMenu.classList.contains('is-hidden')) {
       return addHeaderMove()
      }
     return removeChangePosition()
    }
  })();