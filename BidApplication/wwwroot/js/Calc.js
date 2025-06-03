function calculateTotal() {
    const days = Number(document.getElementById('numberOfDays').value);
    const workers = Number(document.getElementById('numberOfWorkers').value);
    const perWorker = Number(document.getElementById('amountPerWorker').value);
    const materials = Number(document.getElementById('Materials').value);

    let total = (days * workers * perWorker) + materials;

    // Optional extras
    const travelEnabled = document.getElementById('enableTravelCost').checked;
    const travelCost = Number(document.getElementById('travelCost').value);
    if (travelEnabled) total += travelCost;

    const hardwoodEnabled = document.getElementById('enableHardwood').checked;
    const hardwoodCost = Number(document.getElementById('hardwoodCost').value);
    if (hardwoodEnabled) total += hardwoodCost;

    document.getElementById('Total').value = total.toFixed(2);
  }

  function fetchJSONData() {
    fetch('./sample.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();  
        })
        .then(data => console.log(data))  
        .catch(error => console.error('Failed to fetch data:', error)); 
}
fetchJSONData();  

  // Add event listeners to all relevant inputs
  window.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('input', calculateTotal);
    });
  });
