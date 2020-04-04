ymaps.ready(init);


var placemarks = [
    {
        latitude: 59.96288961,
        longitude: 30.30987090,
        hintContent: '<div class="map__hint">ул. Большая Пушкарская, д. 64</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="./images/map/logo.svg" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: ул. Большая Пушкарская, д. 64',
            '</div>'
        ]
    },
    {
        latitude: 59.87717032,
        longitude: 30.31908059,
        hintContent: '<div class="map__hint">Московский проспект, д.145</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="./images/map/logo.svg" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: Московский проспект, д.145',
            '</div>'
        ]
    },
    {
        latitude: 59.94757057,
        longitude: 30.39358682,
        hintContent: '<div class="map__hint">пер. Кваренги 4</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="./images/map/logo.svg" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: пер. Кваренги 4',
            '</div>'
        ]
    },
    {
        latitude: 59.92166762,
        longitude: 30.47316259,
        hintContent: '<div class="map__hint">Российский проспетк 1</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="./images/map/logo.svg" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: Российский проспетк 1',
            '</div>'
        ]
    }
];
geoObjects= [];
function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: './images/map/map-marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: './images/map/map-marker.svg',
                size: [46, 57],
                offset: [-23, -57]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}