// Obtén una referencia al contenedor del mapa en tu HTML
const mapContainer = document.getElementById('map-container');

// Crea un mapa con Leaflet centrado en una ubicación y con un nivel de zoom
const map = L.map(mapContainer).setView([0, 0], 2);

// Agrega una capa de mapa base (puedes elegir diferentes proveedores, como 'OpenStreetMap' o 'Mapbox')
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Ejemplo de datos de países y capitales (puedes reemplazar esto con tus propios datos)
const countriesData = [
    { country: 'Argentina', capital: 'Buenos Aires', latlng: [-34.61, -58.38] },
    { country: 'Australia', capital: 'Canberra', latlng: [-35.31, 149.12] },
    { country: 'Brazil', capital: 'Brasilia', latlng: [-15.78, -47.93] },
    { country: 'Canada', capital: 'Ottawa', latlng: [45.42, -75.69] },
    { country: 'China', capital: 'Beijing', latlng: [39.90, 116.41] },
    { country: 'Egypt', capital: 'Cairo', latlng: [30.05, 31.24] },
    { country: 'France', capital: 'Paris', latlng: [48.86, 2.34] },
    { country: 'Germany', capital: 'Berlin', latlng: [52.52, 13.41] },
    { country: 'India', capital: 'New Delhi', latlng: [28.61, 77.23] },
    { country: 'Italy', capital: 'Rome', latlng: [41.89, 12.49] },
    { country: 'Japan', capital: 'Tokyo', latlng: [35.68, 139.76] },
    { country: 'Mexico', capital: 'Mexico City', latlng: [19.43, -99.13] },
    { country: 'Russia', capital: 'Moscow', latlng: [55.75, 37.62] },
    { country: 'South Africa', capital: 'Pretoria', latlng: [-25.74, 28.18] },
    { country: 'Spain', capital: 'Madrid', latlng: [40.41, -3.70] },
    { country: 'United Kingdom', capital: 'London', latlng: [51.51, -0.13] },
    { country: 'United States', capital: 'Washington, D.C.', latlng: [38.90, -77.03] },
    { country: 'United Kingdom', capital: 'London', latlng: [51.51, -0.13] },
    { country: 'Russia', capital: 'Moscow', latlng: [55.75, 37.62] }, // Repetición eliminada
    { country: 'Nigeria', capital: 'Abuja', latlng: [9.06, 7.49] },
    { country: 'Saudi Arabia', capital: 'Riyadh', latlng: [24.71, 46.67] },
    { country: 'South Korea', capital: 'Seoul', latlng: [37.56, 126.98] },
    { country: 'Turkey', capital: 'Ankara', latlng: [39.93, 32.86] },
    { country: 'Thailand', capital: 'Bangkok', latlng: [13.75, 100.50] },
    { country: 'Sweden', capital: 'Stockholm', latlng: [59.33, 18.07] },
    { country: 'Indonesia', capital: 'Jakarta', latlng: [-6.21, 106.85] },
    { country: 'Chile', capital: 'Santiago', latlng: [-33.46, -70.65] },
    { country: 'Peru', capital: 'Lima', latlng: [-12.04, -77.03] },
    { country: 'Greece', capital: 'Athens', latlng: [37.98, 23.72] },
    { country: 'Israel', capital: 'Jerusalem', latlng: [31.77, 35.21] },
    { country: 'Kenya', capital: 'Nairobi', latlng: [-1.29, 36.82] },
    { country: 'Norway', capital: 'Oslo', latlng: [59.91, 10.75] },
    { country: 'Pakistan', capital: 'Islamabad', latlng: [33.69, 73.05] },
    { country: 'Vietnam', capital: 'Hanoi', latlng: [21.03, 105.85] },
    { country: 'Algeria', capital: 'Algiers', latlng: [36.73, 3.09] },
    { country: 'Angola', capital: 'Luanda', latlng: [-8.81, 13.24] },
    { country: 'Benin', capital: 'Porto-Novo', latlng: [6.50, 2.62] },
    { country: 'Botswana', capital: 'Gaborone', latlng: [-24.65, 25.91] },
    { country: 'Burkina Faso', capital: 'Ouagadougou', latlng: [12.37, -1.53] },
    { country: 'Burundi', capital: 'Bujumbura', latlng: [-3.38, 29.36] },
    { country: 'Cameroon', capital: 'Yaoundé', latlng: [3.87, 11.52] },
    { country: 'Cape Verde', capital: 'Praia', latlng: [14.92, -23.51] },
    { country: 'Central African Republic', capital: 'Bangui', latlng: [4.39, 18.55] },
    { country: 'Chad', capital: 'N-Djamena', latlng: [12.11, 15.03] },
    { country: 'Comoros', capital: 'Moroni', latlng: [-11.70, 43.24] },
    { country: 'Congo', capital: 'Brazzaville', latlng: [-4.27, 15.28] },
    { country: 'Djibouti', capital: 'Djibouti', latlng: [11.59, 43.15] },
    { country: 'Egypt', capital: 'Cairo', latlng: [30.05, 31.24] },
    { country: 'Equatorial Guinea', capital: 'Malabo', latlng: [3.75, 8.78] },
    { country: 'Eritrea', capital: 'Asmara', latlng: [15.33, 38.94] },
    { country: 'Suazilandia', capital: 'Mbabane', latlng: [-26.31, 31.14] },
    { country: 'Ethiopia', capital: 'Addis Ababa', latlng: [9.04, 38.75] },
    { country: 'Gabon', capital: 'Libreville', latlng: [0.39, 9.46] },
    { country: 'Gambia', capital: 'Banjul', latlng: [13.45, -16.58] },
    { country: 'Ghana', capital: 'Accra', latlng: [5.56, -0.20] },
    { country: 'Guinea', capital: 'Conakry', latlng: [9.57, -13.68] },
    { country: 'Guinea-Bissau', capital: 'Bissau', latlng: [11.86, -15.59] },
    { country: 'Ivory Coast', capital: 'Yamoussoukro', latlng: [6.87, -5.28] },
    { country: 'Kenya', capital: 'Nairobi', latlng: [-1.29, 36.82] },
    { country: 'Lesotho', capital: 'Maseru', latlng: [-29.31, 27.48] },
    { country: 'Liberia', capital: 'Monrovia', latlng: [6.31, -10.80] },
    { country: 'Libya', capital: 'Tripoli', latlng: [32.89, 13.19] },
    { country: 'Madagascar', capital: 'Antananarivo', latlng: [-18.88, 47.52] },
    { country: 'Malawi', capital: 'Lilongwe', latlng: [-13.98, 33.77] },
    { country: 'Afghanistan', capital: 'Kabul', latlng: [34.52, 69.18] },
    { country: 'Armenia', capital: 'Yerevan', latlng: [40.18, 44.51] },
    { country: 'Azerbaijan', capital: 'Baku', latlng: [40.38, 49.89] },
    { country: 'Bahrain', capital: 'Manama', latlng: [26.22, 50.58] },
    { country: 'Bangladesh', capital: 'Dhaka', latlng: [23.81, 90.41] },
    { country: 'Bhutan', capital: 'Thimphu', latlng: [27.47, 89.64] },
    { country: 'Brunei', capital: 'Bandar Seri Begawan', latlng: [4.89, 114.94] },
    { country: 'Cambodia', capital: 'Phnom Penh', latlng: [11.56, 104.92] },
    { country: 'China', capital: 'Beijing', latlng: [39.90, 116.41] },
    { country: 'Cyprus', capital: 'Nicosia', latlng: [35.17, 33.37] },
    { country: 'Georgia', capital: 'Tbilisi', latlng: [41.71, 44.79] },
    { country: 'India', capital: 'New Delhi', latlng: [28.61, 77.23] },
    { country: 'Indonesia', capital: 'Jakarta', latlng: [-6.21, 106.85] },
    { country: 'Iran', capital: 'Tehran', latlng: [35.69, 51.39] },
    { country: 'Iraq', capital: 'Baghdad', latlng: [33.31, 44.36] },
    { country: 'Israel', capital: 'Jerusalem', latlng: [31.77, 35.21] },
    { country: 'Japan', capital: 'Tokyo', latlng: [35.68, 139.76] },
    { country: 'Jordan', capital: 'Amman', latlng: [31.95, 35.92] },
    { country: 'Kazakhstan', capital: 'Nur-Sultan', latlng: [51.17, 71.44] },
    { country: 'Kuwait', capital: 'Kuwait City', latlng: [29.38, 47.98] },
    { country: 'Kyrgyzstan', capital: 'Bishkek', latlng: [42.87, 74.59] },
    { country: 'Laos', capital: 'Vientiane', latlng: [17.97, 102.62] },
    { country: 'Lebanon', capital: 'Beirut', latlng: [33.89, 35.50] },
    { country: 'Malaysia', capital: 'Kuala Lumpur', latlng: [3.14, 101.69] },
    { country: 'Maldives', capital: 'Malé', latlng: [4.17, 73.51] },
    { country: 'Mongolia', capital: 'Ulaanbaatar', latlng: [47.91, 106.88] },
    { country: 'Myanmar', capital: 'Naypyidaw', latlng: [19.75, 96.09] },
    { country: 'Nepal', capital: 'Kathmandu', latlng: [27.70, 85.32] },
    { country: 'North Korea', capital: 'Pyongyang', latlng: [39.03, 125.75] },
    { country: 'Oman', capital: 'Muscat', latlng: [23.59, 58.38] },
  // ... Agrega más datos de países y capitales aquí ....
    { country: 'Bolivia', capital: 'Sucre', latlng: [-19.03, -65.26] },
    { country: 'Colombia', capital: 'Bogotá', latlng: [4.61, -74.08] },
    { country: 'Costa Rica', capital: 'San José', latlng: [9.93, -84.08] },
    { country: 'Cuba', capital: 'Havana', latlng: [23.13, -82.38] },
    { country: 'Dominican Republic', capital: 'Santo Domingo', latlng: [18.49, -69.89] },
    { country: 'Ecuador', capital: 'Quito', latlng: [-0.19, -78.47] },
    { country: 'El Salvador', capital: 'San Salvador', latlng: [13.69, -89.19] },
    { country: 'Guatemala', capital: 'Guatemala City', latlng: [14.63, -90.51] },
    { country: 'Haiti', capital: 'Port-au-Prince', latlng: [18.54, -72.34] },
    { country: 'Honduras', capital: 'Tegucigalpa', latlng: [14.08, -87.21] },
    { country: 'Jamaica', capital: 'Kingston', latlng: [17.98, -76.80] },
    { country: 'Mexico', capital: 'Mexico City', latlng: [19.43, -99.13] },
    { country: 'Nicaragua', capital: 'Managua', latlng: [12.13, -86.26] },
    { country: 'Panama', capital: 'Panama City', latlng: [8.98, -79.52] },
    { country: 'Paraguay', capital: 'Asunción', latlng: [-25.29, -57.65] },
    { country: 'Peru', capital: 'Lima', latlng: [-12.04, -77.03] },
    { country: 'Uruguay', capital: 'Montevideo', latlng: [-34.90, -56.19] },
    { country: 'Venezuela', capital: 'Caracas', latlng: [10.49, -66.88] },
    { country: 'Fiji', capital: 'Suva', latlng: [-18.13, 178.42] },
    { country: 'Kiribati', capital: 'South Tarawa', latlng: [1.33, 172.98] },
    { country: 'Marshall Islands', capital: 'Majuro', latlng: [7.11, 171.38] },
    { country: 'Micronesia', capital: 'Palikir', latlng: [6.92, 158.16] },
    { country: 'Nauru', capital: 'Yaren', latlng: [-0.54, 166.92] },
    { country: 'New Zealand', capital: 'Wellington', latlng: [-41.29, 174.78] },
    { country: 'Palau', capital: 'Ngerulmud', latlng: [7.50, 134.62] },
    { country: 'Papua New Guinea', capital: 'Port Moresby', latlng: [-9.47, 147.18] },
    { country: 'Samoa', capital: 'Apia', latlng: [-13.83, -171.77] },
    { country: 'Solomon Islands', capital: 'Honiara', latlng: [-9.43, 159.95] },
    { country: 'Tonga', capital: 'Nukuʻalofa', latlng: [-21.14, -175.20] },
    { country: 'Tuvalu', capital: 'Funafuti', latlng: [-7.11, 177.65] },
    { country: 'Vanuatu', capital: 'Port Vila', latlng: [-17.74, 168.32] },
    { country: 'Albania', capital: 'Tirana', latlng: [41.33, 19.82] },
    { country: 'Andorra', capital: 'Andorra la Vella', latlng: [42.51, 1.53] },
    { country: 'Austria', capital: 'Vienna', latlng: [48.21, 16.37] },
    { country: 'Belarus', capital: 'Minsk', latlng: [53.90, 27.56] },
    { country: 'Belgium', capital: 'Brussels', latlng: [50.85, 4.35] },
    { country: 'Bosnia and Herzegovina', capital: 'Sarajevo', latlng: [43.85, 18.38] },
    { country: 'Bulgaria', capital: 'Sofia', latlng: [42.70, 23.32] },
    { country: 'Croatia', capital: 'Zagreb', latlng: [45.81, 15.98] },
    { country: 'Czech Republic', capital: 'Prague', latlng: [50.09, 14.42] },
    { country: 'Denmark', capital: 'Copenhagen', latlng: [55.68, 12.57] },
    { country: 'Estonia', capital: 'Tallinn', latlng: [59.44, 24.75] },
    { country: 'Finland', capital: 'Helsinki', latlng: [60.17, 24.94] },
    { country: 'Greece', capital: 'Athens', latlng: [37.98, 23.72] },
    { country: 'Hungary', capital: 'Budapest', latlng: [47.50, 19.04] },
    { country: 'Iceland', capital: 'Reykjavik', latlng: [64.14, -21.94] },
    { country: 'Ireland', capital: 'Dublin', latlng: [53.35, -6.26] },
    { country: 'Kosovo', capital: 'Pristina', latlng: [42.66, 21.16] },
    { country: 'Latvia', capital: 'Riga', latlng: [56.95, 24.10] },
    { country: 'Liechtenstein', capital: 'Vaduz', latlng: [47.14, 9.52] },
    { country: 'Lithuania', capital: 'Vilnius', latlng: [54.69, 25.27] },
    { country: 'Luxembourg', capital: 'Luxembourg City', latlng: [49.61, 6.13] },
    { country: 'Malta', capital: 'Valletta', latlng: [35.90, 14.51] },
    { country: 'Moldova', capital: 'Chisinau', latlng: [47.03, 28.83] },
    { country: 'Monaco', capital: 'Monaco', latlng: [43.73, 7.42] },
    { country: 'Montenegro', capital: 'Podgorica', latlng: [42.44, 19.26] },
    { country: 'Netherlands', capital: 'Amsterdam', latlng: [52.37, 4.90] },
    { country: 'North Macedonia', capital: 'Skopje', latlng: [41.99, 21.43] },
    { country: 'Norway', capital: 'Oslo', latlng: [59.91, 10.75] },
    { country: 'Poland', capital: 'Warsaw', latlng: [52.23, 21.01] },
    { country: 'Portugal', capital: 'Lisbon', latlng: [38.71, -9.14] },
    { country: 'Romania', capital: 'Bucharest', latlng: [44.43, 26.10] },
    { country: 'San Marino', capital: 'San Marino', latlng: [43.94, 12.45] },
    { country: 'Serbia', capital: 'Belgrade', latlng: [44.80, 20.47] },
    { country: 'Slovakia', capital: 'Bratislava', latlng: [48.15, 17.11] },
    { country: 'Slovenia', capital: 'Ljubljana', latlng: [46.05, 14.51] },
    { country: 'Sweden', capital: 'Stockholm', latlng: [59.33, 18.07] },
    { country: 'Switzerland', capital: 'Bern', latlng: [46.95, 7.46] },
    { country: 'Ukraine', capital: 'Kyiv', latlng: [50.45, 30.52] },
    { country: 'Vatican City', capital: 'Vatican City', latlng: [41.90, 12.45] },
];


// Agrega marcadores al mapa basados en los datos
countriesData.forEach(country => {
    const marker = L.marker(country.latlng).addTo(map);
  
    // Agrega una clase al marcador para estilos
    marker.getElement().classList.add('custom-marker');
  
    // Configura una acción al hacer clic en un marcador
    marker.on('click', () => {
      document.getElementById('country-name').textContent = country.country;
      document.getElementById('capital-name').textContent = country.capital;
    });
  
    // Configura una acción al pasar el cursor sobre un marcador
    marker.on('mouseover', () => {
      marker.getElement().classList.add('hovered'); // Agrega clase para mostrar el marcador
    });
  
    // Configura una acción al salir del cursor del marcador
    marker.on('mouseout', () => {
      marker.getElement().classList.remove('hovered'); // Remueve la clase para ocultar el marcador
    });
  });



  
// Agrega el evento de búsqueda al campo de entrada
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function () {
  const searchText = searchInput.value.toLowerCase();
  
  // Filtrar los países según el texto de búsqueda
  const filteredCountries = countriesData.filter(country => {
    return country.country.toLowerCase().includes(searchText);
  });
  
  // Remueve los marcadores actuales del mapa
  map.eachLayer(function (layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });
  
  // Agrega marcadores filtrados al mapa
  filteredCountries.forEach(country => {
    const marker = L.marker(country.latlng).addTo(map);
    
    marker.on('click', () => {
      document.getElementById('country-name').textContent = country.country;
      document.getElementById('capital-name').textContent = country.capital;
    });
  });
});

  