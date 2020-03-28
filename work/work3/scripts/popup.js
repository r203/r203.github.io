const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const reviewOpen = document.querySelectorAll(".review__btn");
const reviewList = document.querySelector('.review__list');

reviewList.addEventListener('click' , function(e){
    if(e.target.classList.contains('review__btn')){
      const reviewTitle = e.target.parentNode.querySelector('.review__title').textContent;
      const reviewText = e.target.parentNode.querySelector('.review__text').textContent;

      togglePopup(reviewTitle, reviewText);
    }
  });

  function togglePopup(reviewTitle, reviewText) {
    event.preventDefault();
    popup.querySelector('.popup__title').textContent = reviewTitle;
    popup.querySelector('.popup__text').textContent = reviewText;
    popup.classList.toggle('popup--opened'); 
    document.querySelector('body').classList.toggle('overflow--hidden');

};

popupClose.addEventListener("click", togglePopup);

popup.addEventListener('click' , function(e){
  if(e.target.classList.contains('popup')){
    togglePopup();
  }
});