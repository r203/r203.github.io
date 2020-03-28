function accordionTeam(){

    const item = document.querySelectorAll(".accordeon-h .accordeon__item");
    const accordeon = document.querySelector(".accordeon.accordeon-h");
    
    accordeon.addEventListener('click', function(e) {
        event.preventDefault(); 
        const target = event.target; // опредяем что нажали
        const windowWidth = document.documentElement.clientWidth; // ширина окна браузера
        const layoutContentWidth = 520; // ширина контента
        const breakpointPhone = 480; // точка меньше которой меняется поведение слайдера
        const tarWidth = target.clientWidth; // ширина одной лишки (ссылки)
        const closeMenuWidth = tarWidth * item.length; // ширина закрытого слайдера (3 лишки)
        const openMenuWidth = closeMenuWidth + layoutContentWidth; // ширина открытого слайдера (3 лишки и контент)
        const parent = target.parentNode; //определяем родителя что нажали
        const parent2 = parent.parentNode; //на скорую руку
        let content = parent.nextElementSibling; 

        for (const iterator of item) { //перебираем и если не равен нажатию - удаляем класс
            if(iterator !== parent2){
                iterator.classList.remove("accordeon__item--open");
                iterator.lastElementChild.style.width = 0;
                accordeon.style.transform = `translateX(0)`;
                }
            }
        
        if(target.classList.contains("accordeon__title")){

            if(parent2.classList.contains("accordeon__item--open")){ //удаляем класс при нажатии, если уже содержит
                parent2.classList.remove("accordeon__item--open");
                content.style.width = 0;
            }
            else{
                parent2.classList.add("accordeon__item--open"); // добавляем класс

                if (windowWidth > breakpointPhone && windowWidth < openMenuWidth) {
                    content.style.width = windowWidth - closeMenuWidth + 'px';
                  } else if (windowWidth <= breakpointPhone) {
                    let num;
                    // получаем число лишек на которое нужно сдвинуть список
                    for (let i = 0; i < item.length; i++) {
                      if (item[i] === parent2) {
                        num = item.length - (i + 1);
                      }
                    }
                    accordeon.style.transform = `translateX(${tarWidth * num}px)`;
                    content.style.width = windowWidth - tarWidth + 'px';
                  } else {
                    content.style.width = 520 + 'px';
                  }


                }


        }
    }) 
    };
    
    accordionTeam();
    