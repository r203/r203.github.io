function accordionTeam(){

    const item = document.querySelectorAll(".accordeon-h .accordeon__item");
    const accordeon = document.querySelector(".accordeon.accordeon-h");
    
    
    accordeon.addEventListener('click', function(e) {
        event.preventDefault(); 
        const target = event.target; // опредяем что нажали
        
        if(target.classList.contains("accordeon__title")){
            const parent = target.parentNode; //определяем родителя что нажали
            const parent2 = parent.parentNode; //на скорую руку

            if(parent2.classList.contains("accordeon__item--open")){ //удаляем класс при нажатии, если уже содержит
                parent2.classList.remove("accordeon__item--open");
            }
            else{
                parent2.classList.add("accordeon__item--open"); // добавляем класс
                }
            for (const iterator of item) { //перебираем и если не равен нажатию - удаляем класс
            if(iterator !== parent2){
                iterator.classList.remove("accordeon__item--open");
                }
            }
        }
    }) 
    };
    
    accordionTeam();
    