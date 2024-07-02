function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");
  
    // Display user's message
    chatBox.innerHTML += '<div class="user-message">' + userInput + '</div>';
  
    // Make API call with userInput
    fetch('https://restcountries.com/v3.1/name/' + userInput)
      .then(response => response.json())
      .then(data => {
        // Display country information
        if (data.status === 404) {
          chatBox.innerHTML += '<div class="bot-message">Country not found</div>';
        } else {
          const country = data[0];
          chatBox.innerHTML += '<div class="bot-message">Country: ' + country.name.common + '</div>';
          chatBox.innerHTML += '<div class="bot-message">Capital: ' + country.capital[0] + '</div>';
          chatBox.innerHTML += '<div class="bot-message">Population: ' + country.population + '</div>';
          chatBox.innerHTML += '<div class="bot-message">Region: ' + country.region + '</div>';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Display error message
        chatBox.innerHTML += '<div class="error-message">An error occurred. Please try again.</div>';
      });
  
    // Clear user input
    document.getElementById("user-input").value = '';
  }
  