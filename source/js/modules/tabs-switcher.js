const initTabs = () => {
  const tabsButton = document.querySelectorAll('.tab-time-list__button');
  const tabsContent = document.querySelectorAll('.gym-membership__tab-content-list');

  tabsButton.forEach((item) => {
    item.addEventListener('click', () => {
      const currentButton = item;
      const tabId = currentButton.getAttribute('data-tab');
      const currentTab = document.querySelector(tabId);

      if (!currentButton.classList.contains('tab-time-list__button--active')) {
        tabsButton.forEach((button) => {
          button.classList.remove('tab-time-list__button--active');
        });
        tabsContent.forEach((content) => {
          content.classList.remove('gym-membership__tab-content-list--active');
        });
        currentButton.classList.add('tab-time-list__button--active');
        currentTab.classList.add('gym-membership__tab-content-list--active');
      }
    });
  });
};

export {initTabs};
