const right = document.querySelector("#right");
const left = document.querySelector("#left");
const sliderList = document.querySelector("#sliderList");

right.addEventListener("click", function(e) {
    loop("right", e);
  });
   
  left.addEventListener("click", function(e) {
    loop("left", e);
  });

  function loop(direction, e) {
    e.preventDefault();
    if (direction === "right") {
        sliderList.appendChild(sliderList.firstElementChild);
    } else {
        sliderList.insertBefore(sliderList.lastElementChild, sliderList.firstElementChild);
    }
  }