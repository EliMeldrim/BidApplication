function calculateTotal() {
    const days = Number(document.getElementById('numberOfDays').value);
    const workers = Number(document.getElementById('numberOfWorkers').value);
    const perWorker = Number(document.getElementById('amountPerWorker').value);
    const materials = Number(document.getElementById('Materials').value);

    let total = (days * workers * perWorker) + materials;

    // Optional extras
    const travelCost = Number(document.getElementById('travelCost').value);
     total += travelCost;

    
    const hardwoodCost = Number(document.getElementById('hardwoodCost').value);
    total += hardwoodCost;

    document.getElementById('Total').value = total.toFixed(2);
  }

function GetExtraOptions() {

    fetch(document.getElementById('GetExtras').value, { method: 'POST' })
   
        .then(response => response.json())
        .then(data => {

            console.log(data)
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An issue occured while attempting to load the Extras');
        });


}

window.addEventListener('DOMContentLoaded', () => {
    GetExtraOptions();

})


  // Add event listeners to all relevant inputs
  window.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('input', calculateTotal);
    });
  });
