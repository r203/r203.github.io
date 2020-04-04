// let video;
// let durationControl;
// let soundControl;
// let intervalId;

// document.addEventListener('DOMContentLoaded', e=>{
//     video = document.getElementById('video');

//     // вешаем обработчик события на на тег video
//     video.addEventListener('click', playStop);

//     // находим все кнопки play и навешиваем через цикл на каждый обработчик
//     let playButtons = document.querySelectorAll('.play');
//     for (let i = 0; i < playButtons.length; i++) {
//         playButtons[i].addEventListener('click', playStop);
//     }

//     // обработчик событий на кнопку динамик
//     let micControl = document.getElementById('micLevel');
//     micControl.addEventListener('click' , soundOf);

//     // обработчики события для ползунка продолжительности видео
//     durationControl = document.getElementById('durationLevel');
//     durationControl.addEventListener('mousedown' , stopInterval);
//     durationControl.addEventListener('click', setVideoDuration);

//     durationControl.min = 0;
//     durationControl.value = 0;

//     // обработчики события для ползунка громоксти
//     soundControl = document.getElementById('volumeLevel');
//     soundControl.addEventListener('click' , changeSoundVolume);
//     soundControl.addEventListener('mouseup' , changeSoundVolume);

//     // задаем максимальное и минимальное значение volume
//     soundControl.min = 0;
//     soundControl.max = 10;

//     soundControl.value = soundControl.max;

// })

// function playStop(){
//     // нахожу мою кнопку с картинкой PLAY и показываю или скрываю ее
//     let playImg = document.querySelector('.video__play');
//     playImg.classList.toggle('video__play--active');

//     // присваиваем ползунку проолжительности видео максимальное значение 
//     // равное продолжительности нашего видео
//     durationControl.max = video.duration;

//     // проверяем стоит ли видео на паузе, если да то продолжаем воспроизведение
//     if(video.paused){
//         // запускаем видео
//         video.play();
//         // обновляем ползунок каждые 15 мили секунд функцией updateDuration
//         intervalId = setInterval(updateDuration , 1000 /66);
//     }else{ 
//         // понимаем что видео не стоит на паузе,и ставим его на паузу
//         video.pause();
//         clearInterval(intervalId);
//     }
// }

// // обновляет позицию ползунка продолжительности видео
// function updateDuration(){
//     durationControl.value = video.currentTime;
// }

// function stopInterval(){
//     video.pause();
//     clearInterval(intervalId);
// }

// // Реализует возможность перемотки видео
// function setVideoDuration(){
//     if(video.paused){
//         video.play();
//     }else{
//         video.pause();
//     }

//     video.currentTime = durationControl.value;
//     // обновляем ползунок каждые 15 мили секунд функцией updateDuration
//     intervalId = setInterval(updateDuration , 1000 /66);
// }

// // управление звуком видео
// function changeSoundVolume(){
//     // свойстов video.volume может иметь значени от 0 до 1 
//     // поэтому делим все на 10 , что бы более четко контролировать значение

//     video.volume = soundControl.value/10;
// }

// function soundOf(){
//     // делаем проверку уровня громкости 
//     // если у нашего видео есть звук , то мы его выключаем 
//     // предварительно запомнив текущую позицию громкости в переменную soundLevel

//     if(video.volume === 0){
//         video.volume = soundLevel;
//         soundControl.value = soundLevel * 10;
//     }else{
//         soundLevel = video.volume;
//         video.volume = 0;
//         soundControl.value = 0;
//     }
// }

function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoplayer', {
      height: '405',
      width: '660',
      videoId: 's0ZNnkuH1RQ',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      },
      playerVars: {
          controls: 0, 
          disablekb: 0,
          showinfo: 0,
          rel: 0,
          autoplay: 0,
          modestbranding: 0
      }
    });
  }


let player;
const playerContainer = $(".video");
const videoplay = $(".video__play");
let durationLevel = document.querySelector('#durationLevel');


let eventsInit = () => {
    $(".duration__icon").click (e=>{
        e.preventDefault();

        if (playerContainer.hasClass('video--play')){
            player.pauseVideo();    
        } else {
            player.playVideo();    
        }
    });
}



const onPlayerReady = () => {
    let interval;
    const durationSec = player.getDuration();
    durationLevel.max = durationSec;
    
    
    if (typeof interval !== "undefined") {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        $("#durationLevel").val(player.getCurrentTime()); //текущее положение ползунка
        
    })
    $("#durationLevel").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPercent;

        $("#durationLevel").val(newButtonPositionPercent);
        player.seekTo(newPlaybackPositionSec);//почему ползунок не там где тыкаешь мышью?
    })


    $("#volumeLevel").val(player.getVolume());
    const soundPic = document.querySelector('.sound__pic');
    let newSpan = document.createElement("span");
    soundPic.appendChild(newSpan);

    $("#volumeLevel").click(e => {
        const clickedPositionVol = $("#volumeLevel").val();
        player.setVolume(clickedPositionVol);
        
        if(clickedPositionVol==0){
            newSpan.classList.add('mute');
        } else {
            newSpan.classList.remove('mute');
        };
    });

    $("#micLevel").click(e => { //выключаем громкость
    let rememberPositionVol = $("#volumeLevel").val();
        if(!player.isMuted()){
            player.mute();
            $("#volumeLevel").val(0);
            newSpan.classList.add('mute');
            temporaryVol = rememberPositionVol; // не придумали ничего лучшего, что бы работал возврат громкости

        } else {
            player.unMute();
            $("#volumeLevel").val(temporaryVol);
            newSpan.classList.remove('mute');
        };

    });

};

$(".video__play").click(e => {
    player.playVideo();    
});


const onPlayerStateChange = event => {
    switch (event.data) {
        case 1:
            playerContainer.addClass("video--play");
            break;

        case 2:
            playerContainer.removeClass("video--play");
            break;
    }
}

eventsInit();