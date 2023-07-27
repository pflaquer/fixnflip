/* ==============================================================================
                              *Loan Calculator UI App*
============================================================================== */




// Listen for Submit Button

document.getElementById(`loan-form`).addEventListener(`submit`, calculateResults);

// Calculate Results Function

function calculateResults(e) {
        console.log(`calculating...`);

        // UI Variables - Inputs
        const loanAmount = document.querySelector(`#loan-amount`);
        const interestAmount = document.querySelector(`#interest-amount`);
        const yearsAmount = document.querySelector(`#years-amount`);

        // UI Variables - Results
        const monthlyPayment = document.querySelector(`#monthly-payment`);
        const totalPayment = document.querySelector(`#total-payment`);
  const dealResult = document.querySelector(`#deal-result`);
        const totalInterest = document.querySelector(`#total-interest`);

        // Calculation Variables
        const principle = parseFloat(loanAmount.value);
        const calculatedInterest = parseFloat(interestAmount.value) / 100 / 12;
        const calculatedPayments = parseFloat(yearsAmount.value) * 12;

        // Calculate Montly Payments
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principle * x * calculatedInterest) / (x - 1);

  //Calculate DealScore
 
        // Output Result
let numb = Math.random()*Math.PI
        if (isFinite(monthly)) {
                monthlyPayment.value = monthly.toFixed(2);
                totalPayment.value = (monthly * calculatedPayments).toFixed(2);
                totalInterest.value = (monthly * calculatedPayments - principle).toFixed(2);
const dscore = monthly;
dealResult.value = numb;


                // Display spinner for 3 seconds
                loadSpinner();
                setTimeout(removeSpinner, 2000);

                // Display Results Div after calculation is complete
                setTimeout(showResults, 3000);
        } else {
                showError(`Please check your numbers`);
        }

        e.preventDefault();
}


// Spinner Loading Function

function loadSpinner() {
        document.querySelector(`#results`).style.display = `none`;
        document.querySelector(`#loading`).style.display = `block`;
}

// Remove Spinner

function removeSpinner() {
        document.querySelector(`#loading`).style.display = `none`;
}

// Show Results

function showResults() {
        document.querySelector(`#results`).style.display = `block`;
}

// Show Error Function

function showError(error) {
        // Create a div element
        const errorDiv = document.createElement(`div`);
        const messageDiv = document.createElement(`div`);
        const message = document.createElement(`p`);

        // Page elements for insertion
        const card = document.querySelector(`.card`);
        const heading = document.querySelector(`.heading`);

        // Add a class to elements
        errorDiv.className = `alert alert-danger`;

        // Add text message to element
        message.textContent = error;

        // Add text message element to div
        errorDiv.appendChild(messageDiv);
        messageDiv.appendChild(message);

        // Display error div on page before heading
        card.insertBefore(errorDiv, heading);

        // Clear error after 3s
        setTimeout(clearError, 3000);
}

// Clear error function

function clearError() {
        document.querySelector(`.alert`).remove();
}



// Results display after calculation

let numb = 5;
if(numb>1){
document.getElementById('results_text').innerHTML = `<i class="
fas fa-check"></i> Good!`
}

