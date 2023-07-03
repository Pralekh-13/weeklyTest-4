
function searchHotels(event) {
    event.preventDefault();

    
    const destination = document.getElementById('destination').value;
    const checkInDate = document.getElementById('checkIn').value;
    const checkOutDate = document.getElementById('checkOut').value;
    const guestRating = document.getElementById('guestRating').value;
    const propertyClass = document.getElementById('propertyClass').value;


    displayResults([
        { name: 'Hotel A', rating: 4, price: '$150' },
        { name: 'Hotel B', rating: 5, price: '$200' },
        { name: 'Hotel C', rating: 3, price: '$100' }
    ]);
}


function displayResults(results) {
    const resultsContainer = document.getElementById('results');

  
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    const resultList = document.createElement('ul');

    results.forEach((result) => {
        const resultItem = document.createElement('li');
        resultItem.innerHTML = `
            <strong>${result.name}</strong>
            <br>
            Rating: ${result.rating}
            <br>
            Price: ${result.price}
            <br>
            <br>
        `;
        resultList.appendChild(resultItem);
    });

    resultsContainer.appendChild(resultList);
}


document.getElementById('searchForm').addEventListener('submit', searchHotels);
