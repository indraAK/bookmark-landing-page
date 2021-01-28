export const accordion = () => {
   const accordionTriggers = document.querySelectorAll('.accordion__trigger');

   function handleAccordion(event) {
      event.preventDefault();
      const currentAccordionTrigger = this;
      const currentAccordionBody = document.querySelector(`#${this.dataset.target}`);

      accordionTriggers.forEach(accordionTrigger => {

         if (isMatchAccTrigger(accordionTrigger, currentAccordionTrigger)) {
            showAccordion(currentAccordionTrigger);
         } else {
            hideAllAccordion(currentAccordionTrigger, currentAccordionBody);
         }
      });
   }


   function isMatchAccTrigger(accTrigger, accTriggerClicked) {
      if (accTrigger === accTriggerClicked) {
         return true;
      }
   }

   function showAccordion(currentAccTrigger) {
      currentAccTrigger.classList.toggle('accordion__trigger--active');
      const currentAccordionBody = document.querySelector(`#${currentAccTrigger.dataset.target}`);
      const heightElement = currentAccordionBody.scrollHeight;
      currentAccordionBody.classList.toggle('accordion__body--active');

      if (currentAccordionBody.classList.contains('accordion__body--active')) {
         currentAccordionBody.style.height = `${heightElement}px`;
      } else {
         currentAccordionBody.style.height = '0';
      }
   }

   function hideAllAccordion(currentAccTrigger, currentAccBody) {
      accordionTriggers.forEach(accordionTrigger => {
         if (accordionTrigger !== currentAccTrigger) {
            accordionTrigger.classList.remove('accordion__trigger--active');
         }
      });
      document.querySelectorAll('.accordion__body').forEach(accordionBody => {
         if (accordionBody !== currentAccBody) {
            accordionBody.style.height = '0';
            accordionBody.classList.remove('accordion__body--active');
         }
      });
   }

   accordionTriggers.forEach(accordionTrigger => accordionTrigger.addEventListener('click', handleAccordion));
}