function accordionTeam(){

const item = document.querySelectorAll(".team .accordeon__item");
const accordeon = document.querySelector(".team .accordeon");


accordeon.addEventListener('click', function(e) {
    event.preventDefault(); 
    const target = event.target; // опредяем что нажали
    
    if(target.classList.contains("accordeon__title")){
        const parent = target.parentNode; //определяем родителя что нажали

        if(parent.classList.contains("accordeon__item--open")){ //удаляем класс при нажатии, если уже содержит
            parent.classList.remove("accordeon__item--open");
        }
        else{
            parent.classList.add("accordeon__item--open"); // добавляем класс
            }
        for (const iterator of item) { //перебираем и если не равен нажатию - удаляем класс
        if(iterator !== parent){
            iterator.classList.remove("accordeon__item--open");
            }
        }
    }
}) 
};

accordionTeam();
