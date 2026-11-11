document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#lookup');
  const input = document.querySelector('#country') || document.querySelector('input[type="text"]');
  const result = document.querySelector('#result');

  // Step 3 (i): listen for clicks on the Lookup button
  button.addEventListener('click', () => {
    const country = input ? input.value.trim() : '';

    // Step 3 (ii): fetch the data from world.php
    fetch('world.php?country=' + encodeURIComponent(country))
      .then(response => {
        if (!response.ok) {
          throw new Error('Request failed: ' + response.status);
        }
        return response.text();
      })
      // Step 3 (iii): print the response into the div with id "result"
      .then(html => {
        result.innerHTML = html;
      })
      .catch(error => {
        result.textContent = 'Something went wrong: ' + error.message;
      });
  });
});