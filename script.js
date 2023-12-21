function fetchAndDisplayData() {
    const covidDataElement = document.getElementById('covidData');

    fetch('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            // Process and display data
            covidDataElement.textContent = JSON.stringify(data, null, 2);
            covidDataElement.style.display = 'block'; // Show the data container
        })
        .catch(error => {
            console.error('Error fetching COVID-19 data:', error);
            covidDataElement.textContent = 'Error fetching data. Please try again later.';
            covidDataElement.style.display = 'block'; // Show the error message
        });
}