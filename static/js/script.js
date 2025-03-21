// script.js
// Function to handle the history button click
function navigateToHistory() {

	const button = document.getElementById("history-button");
    const spinner = document.getElementById("history-spinner");

    button.style.display = 'none';
    spinner.style.display = 'block';

    setTimeout(function() {
	    button.style.display = 'block';
	    spinner.style.display = 'none';
	    window.location.href = '/history.html';
    }, 500); 

}

// Function to handle the save button click
function saveData() {
	const button = document.getElementById("save-button");

    button.innerHTML = '<div class="spinner" id="save-spinner"></div>'; 

    const spinner = document.getElementById("save-spinner");
    spinner.style.display = 'block';

    setTimeout(function() {
    	spinner.style.display = 'none';
		button.innerHTML = 'SAVE DATA';
		
		setTimeout(function() {
			alert('Save button clicked');
	    }, 500); 

    }, 500); 

    
}


// Function to fetch data and update gauges
function fetchDataAndUpdateGauges() {
    fetch("https://parcelpoint.vercel.app/watersense")
        .then(response => response.json())
        .then(data => {
            const watersense = data.watersense[0]; // Get the first record from the response

            // Update the gauges with the fetched data
            document.querySelector('.card-gauge .number-gauge').textContent = watersense.phlevel;
            document.querySelectorAll('.card-gauge')[1].querySelector('.number-gauge').textContent = watersense.temperature;
            document.querySelectorAll('.card-gauge')[2].querySelector('.number-gauge').textContent = watersense.conductivity;
            document.querySelectorAll('.card-gauge')[3].querySelector('.number-gauge').textContent = watersense.turbidity;
            document.querySelectorAll('.card-gauge')[4].querySelector('.number-gauge').textContent = watersense.orp;
            document.querySelectorAll('.card-gauge')[5].querySelector('.number-gauge').textContent = watersense.tds;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Call the function to fetch data and update gauges when the page loads
document.addEventListener("DOMContentLoaded", function () {
    fetchDataAndUpdateGauges();
});

