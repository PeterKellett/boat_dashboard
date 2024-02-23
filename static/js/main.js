console.log("main.js")
console.log("window height = ", window.innerHeight)
var tank_1;
var tank_2;
var tank_height = $(".tank").height();
console.log("tank_height = ", tank_height)
// fetch('static/json/data.json')
// .then(response => response.json())
// .then(data => {
//     console.log(data)
//     tank_1 = data[0]
//     console.log("tank_1 = ", tank_1)
//     // MEDICINES = data.medicines;
// });

fetch('https://8080-peterkellet-boatdashboa-puxxjpeteu3.ws-eu108.gitpod.io/get_data')
.then(response => response.json())
.then(data => {
    console.log(data)
    tank_1 = data[0];
    tank_2 = data[1];
    })
.then(apply_levels);

function apply_levels() {
    console.log("apply_levels");
    // Calculate guage levels values
    // Tank 1
    tank_1_level = Number(tank_height - (tank_height * (tank_1['fuel_rem'] / 20)));
    console.log("tank_1_level = ", tank_1_level)
    $('#tank-1').height(tank_1_level);
    // Tank 2

    // total

    // Calculate table values
    // Fuel remaining Tank 1
    console.log("tank_1.fuel_rem = ", tank_1.fuel_rem)
    $("#fuel-rem-tank-1").text(tank_1.fuel_rem)
    $("#fuel-rem-tank-2").text(tank_2.fuel_rem)
    $("#fuel-rem-total").text(tank_1.fuel_rem + tank_2.fuel_rem)
    $("#speed").text(10)
}
// $(document).ready(function(){
//     $('#tank-1').height(50);
//     console.log(tank_1['name'])
//     // jQuery methods go here...
  
//   });

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const home = { lat: 54.128897039587514, lng: -7.43845995900129 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: home,
    });
    const marker = new google.maps.Marker({
        position: home,
        map: map,
      });
    poly = new google.maps.Polyline({
      strokeColor: "#000000",
      strokeOpacity: 1.0,
      strokeWeight: 3,
    });
    poly.setMap(map);
    // Add a listener for the click event
    map.addListener("click", addLatLng);
    // The marker, positioned at Uluru
    //const iconBase = 'http://maps.google.com/mapfiles/kml/pal3/'
  const icons = {
    lock: {
      icon: 'http://maps.google.com/mapfiles/kml/paddle/grn-blank-lv.png'
    },
    fuel: {
      icon: 'http://http://maps.google.com/mapfiles/kml/shapes/gas_stations.png'
    },
  }
  const features = [
    {
      position: new google.maps.LatLng(53.732655, -7.904649),
      type: "lock",
    }, 
    {
      position: new google.maps.LatLng(53.724534, -7.905810),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.686965, -7.876356),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.683896, -7.868685),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.651205, -7.847877),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.631413, -7.835907),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.577605, -7.808811),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.581852, -7.676935),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.580104, -7.584278),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.580693, -7.578618),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.580383, -7.561170),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.581682, -7.538080),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.570141, -7.517184),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.562450, -7.504516),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.558451, -7.500372),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.560714, -7.492080),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.559338, -7.488533),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.557904, -7.484824),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.540828, -7.474632),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.537308, -7.472928),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.534702, -7.468046),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.495391, -7.172192),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.495286, -7.167612),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.494350, -7.161583),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.494577, -7.156235),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.495407, -7.150121),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.495041, -7.142572),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.494486, -7.135356),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.495858, -7.127830),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.420270, -6.712443),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.399665, -6.669510),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.391583, -6.647773),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.381133, -6.621494),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.373971, -6.529499),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.382360, -6.366710),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.380699, -6.352137),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.375464, -6.333665),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.375537, -6.316264),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.374775, -6.308784),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.371380, -6.291539),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.365587, -6.276426),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.364573, -6.272586),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.363392, -6.267708),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.362611, -6.264398),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.361622, -6.260115),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.356702, -6.244555),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.347982, -6.240508),
      type: "lock",
    }
  ]
  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      label: "" + (46 - i),
      map: map,
    });
  }

    // const marker = new google.maps.Marker({
    //   position: home,
    //   map: map,
    // });
  }
  // Handles click events on a map, and adds a new point to the Polyline.
function addLatLng(event) {
  const path = poly.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  path.push(event.latLng);
  console.log("path.latlng = " + path.latlng)
  // Add a new marker at the new plotted point on the polyline.
  new google.maps.Marker({
    position: event.latLng,
    title: "#" + path.getLength(),
    map: map,
  });
  console.log("Path = " + path);
  for (let i = 0; i < path.length; i++) {
    console.log("i = " + i)
    console.log("path[i] = " + path[i])
  }
}
  window.initMap = initMap;
