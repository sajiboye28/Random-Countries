const refreshBtn = document.getElementById('refresh-btn');
const countryInfo = document.getElementById('country-info');

function getRandomCountry() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const country = data[randomIndex];
            displayCountry(country);
        })
        .catch(error => console.error(error));
}

function displayCountry(country) {
    countryInfo.innerHTML = `
		<h2>${country.name.common}</h2>
		<img src="${country.flags.svg}" alt="${country.name.common} flag">
		<p><strong>Capital:</strong> ${country.capital?.[0]}</p>
		<p><strong>Population:</strong> ${country.population}</p>
		<p><strong>Region:</strong> ${country.region}</p>
	`;
}

refreshBtn.addEventListener('click', getRandomCountry);

getRandomCountry();
