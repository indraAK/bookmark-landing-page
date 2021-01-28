export const tabs = () => {
   const tabsTrigger = document.querySelectorAll('.tab__trigger');

   function showTab(e) {
      e.preventDefault();

      // first step, hide the tab that are not active
      tabsTrigger.forEach(tab => tab.classList.remove('tab__trigger--active'));

      // and then show current active tab
      this.classList.add('tab__trigger--active');

      // remove all the active class on tab__panel, so that all tab panels are hidden
      const tabPanels = document.querySelectorAll('.tab__panel');
      tabPanels.forEach(tabPanel => tabPanel.classList.remove('tab__panel--active'));

      // then, displaying the triggered tab panel
      const tabPanelTriggered = document.querySelector(`${this.hash}`);
      tabPanelTriggered.classList.add('tab__panel--active');
   }

   tabsTrigger.forEach(tab => tab.addEventListener('click', showTab));
}