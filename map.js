// Initialize Leaflet Map
var map = L.map('map').setView([37.8, -96], 4); // Center of the United States with zoom level 4

// Add Tile Layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Google Sheets URL (Replace with your own sheet's URL)
var spreadsheetUrl = https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5CY9zFufAx-YLeNyY6TycJb6URdfaUmnV5-uq74K9BN3mUAv99sT20vvAlfOEHKbkNwLkwkymCCeM/pubhtml';

// Fetch Data from Google Sheets using Tabletop.js
Tabletop.init({
    key: spreadsheetUrl,
    callback: function(data, tabletop) {
        console.log(data); // Log the sheet data to console for inspection

        // Iterate over the rows of the data
        data.forEach(function(row) {
            console.log(row); // Check the data for each row
            var lat = row['Latitude'];
            var lng = row['Longitude'];
            var city = row['City'];  // Adjust to your sheet column name
            var info = row['Info'];  // Adjust to your sheet column name

            if (lat && lng) {
                // Create a marker for each data point
                var marker = L.marker([lat, lng]).addTo(map);

                // Add a popup with the correct data
                marker.bindPopup('<b>Location:</b> ' + city + '<br>' +
                                 '<b>Info:</b> ' + info);
            }
        });
    },
    simpleSheet: true // Use this if your sheet is simple and doesn't have extra settings
});
