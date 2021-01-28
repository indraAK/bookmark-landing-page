export const toggleMobileNav = () => {
   const menuBtn = document.querySelector('#menu-btn');
   const closeBtn = document.querySelector('#close-btn');
   const mobileNav = document.querySelector('#mobile-nav');
   const header = document.querySelector('header');

   function showMobileNav() {
      header.classList.remove('visible');
      header.classList.add('hidden');
      mobileNav.classList.add('show');
   }

   function hideMobileNav() {
      mobileNav.classList.remove('show');
      header.classList.remove('hidden');
      header.classList.add('visible');
   }

   menuBtn.addEventListener('click', showMobileNav);
   closeBtn.addEventListener('click', hideMobileNav);
}