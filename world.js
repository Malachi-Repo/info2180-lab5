document.addEventListener('DOMContentLoaded', () => {
  const countryButton = document.querySelector('#lookup');
  const citiesButton = document.querySelector('#lookup-cities');
  const input = document.querySelector('#country');
  const result = document.querySelector('#result');

  function lookup(lookupType) {
    const country = input.value.trim();
    const url = 'world.php?country=' + encodeURIComponent(country) +
                '&lookup=' + encodeURIComponent(lookupType);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Request failed: ' + response.status);
        }
        return response.text();
      })
      .then(html => {
        result.innerHTML = html;
      })
      .catch(error => {
        result.textContent = 'Something went wrong: ' + error.message;
      });
  }

  countryButton.addEventListener('click', () => lookup('country'));
  citiesButton.addEventListener('click', () => lookup('cities'));
});