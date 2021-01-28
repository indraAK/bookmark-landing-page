export const formValidation = () => {
   const contactForm = document.querySelector('#contact-form');

   function validateForm(event) {
      event.preventDefault();

      // get input email value
      const emailValue = this['email'].value.trim();

      // check email, email is empty?
      if (emailValue === '') {
         showErrorMessage({ field: this['email'], message: 'Email is required' });
         return;
      }

      // check email, email is valid?
      if (!isValidEmail(emailValue)) {
         // email is not valid
         showErrorMessage({ field: this['email'], message: "Whoops, make sure it's an email" });
      } else {
         // email is valid
         removeErrorMessage(this['email']);
      }
   }

   function isValidEmail(email) {
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      return regex.test(email);
   }

   function removeErrorMessage(fieldEmail) {
      const field = fieldEmail.parentElement;

      if (field.classList.contains('field-error')) {
         field.classList.remove('field-error');
         field.querySelector('.error').remove();
      }
   }

   function showErrorMessage({ field, message }) {
      const errorExistElement = document.querySelector('.error');
      const fieldContainer = field.parentElement;
      fieldContainer.classList.add('field-error');

      const errorElement = document.createElement('div');
      errorElement.classList.add('error');
      errorElement.innerHTML = `<p class="error-message color-white">${message}</p>`;

      // check previously there was an errror?
      if (errorExistElement) {
         // if previously there was an error, replace it with new error element
         fieldContainer.replaceChild(errorElement, errorExistElement);
      } else {
         // append error element to field container
         fieldContainer.appendChild(errorElement);
      }
   }

   contactForm.addEventListener('submit', validateForm);
}