

function displayResult(data) {

    var name = data.name;
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Name: ${data.name}, Age: ${data.age}`;
//}

// Replace with the URL of the API endpoint
const apiUrl = 'https://restcountries.com/v3.1/all';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the JSON response
  })
  .then(data => {
    // `data` is a JavaScript object representing the parsed JSON
    // Update the content of the HTML element
    resultElement.textContent = `Name: ${data.name}, Age: ${data.age}`;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}