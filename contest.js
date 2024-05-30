function replaceProfilePictures() {
const newProfilePicURL = chrome.runtime.getURL('Red_Kitten_01.jpg');
const profilePicSelectors = [
      'img.EntityPhoto-circle-0', 
      'img.EntityPhoto-circle-3', 
      'img.global-nav__me-photo', 
      'img.EntityPhoto-square-3', 
      'img.EntityPhoto-circle-', 
      'img.profile-photo-edit__preview', 
      'img.EntityPhoto-circle-5', 
      'img.EntityPhoto-circle-2', 
      'img.ivm-image-view-model__square-img', 
      'img.EntityPhoto-square-1', 
      'img.EntityPhoto-square-2', 
      'img.EntityPhoto-square-0',
      'img.pv-top-card-profile-picture__image--show',
      'img.profile-photo-edit__edit-btn',
      'img.EntityPhoto-circle-1',
      'img.EntityPhoto-circle-1-stackedFacepile',
      'img.EntityPhoto-circle-1-stackedFacepile'
    ];
  
profilePicSelectors.forEach(selector => {
    const profilePics = document.querySelectorAll(selector);
    profilePics.forEach(img => {
    img.src = newProfilePicURL;
    });
});
}
  
replaceProfilePictures();
  
const observer = new MutationObserver(() => {
replaceProfilePictures();
});
  
observer.observe(document.body, { childList: true, subtree: true });
