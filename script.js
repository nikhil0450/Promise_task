
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function fetchDataFromAPI(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            return data.map((item) => ({
                name: item.name,
                email: item.email,
                street: item.address.street,
                city: item.address.city,
            }));
        });
}

function displayData(data) {
    const dataContainer = document.querySelector('.data-container');

    data.forEach((item) => {
        const dataBlock = document.createElement('div');
        dataBlock.classList.add('data-block');

        const nameHeader = document.createElement('h2');
        nameHeader.textContent = item.name;

        const emailPara = document.createElement('p');
        emailPara.textContent = `Email: ${item.email}`;

        const streetPara = document.createElement('p');
        streetPara.textContent = `Street: ${item.street}`;

        const cityPara = document.createElement('p');
        cityPara.textContent = `City: ${item.city}`;

        dataBlock.appendChild(nameHeader);
        dataBlock.appendChild(emailPara);
        dataBlock.appendChild(streetPara);
        dataBlock.appendChild(cityPara);

        dataContainer.appendChild(dataBlock);
    });
}

fetchDataFromAPI(apiUrl)
    .then((result) => {
        displayData(result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
