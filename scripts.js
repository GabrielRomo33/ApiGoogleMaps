function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('Map'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

function acabanEnA(words) {
    const cumple = words.every(words => words.endsWith('a'));
    return cumple
  }
  console.log(acabanEnA(['casa', 'asa', 'taza', 'coca']));
  console.log(acabanEnA(['casa', 'asa', 'taza', 'coche']));
