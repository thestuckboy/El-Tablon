function initMap(){
    var coord = {
        lat: -41.257452,
        lng: 174.865639
    };
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}