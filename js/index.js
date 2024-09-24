// Tab toggling functionality
const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");

historyTab.addEventListener('click', function () { toggleTab('history') });
donationTab.addEventListener('click', function () { toggleTab('donation') });

function toggleTab(activeTab) {
    if (activeTab === 'history') {
        historyTab.classList.add("bg-[#B4F461]");
        historyTab.classList.remove("text-[#111111B3]");
        donationTab.classList.remove("bg-[#B4F461]");
        donationTab.classList.add("text-[#111111B3]");

        document.getElementById("donation-container").classList.add('hidden');
        document.getElementById("history-section").classList.remove('hidden');
    }
    else {
        historyTab.classList.remove("bg-[#B4F461]");
        historyTab.classList.add("text-[#111111B3]");
        donationTab.classList.add("bg-[#B4F461]");
        donationTab.classList.remove("text-[#111111B3]");

        document.getElementById("donation-container").classList.remove('hidden');
        document.getElementById("history-section").classList.add('hidden');
    }
}

// Global variables
const initialAmountElement = document.getElementById("initial-amount");

// Function to update the donation amount and balance
function updateAmounts(donateInputElement, donatedAmountElement) {
    const donateInputAmount = parseFloat(donateInputElement.value);
    const currentDonatedAmount = parseFloat(donatedAmountElement.innerText);

    const totalDonationAmount = donateInputAmount + currentDonatedAmount;
    donatedAmountElement.innerText = totalDonationAmount.toFixed(2);

    const initialAmount = parseFloat(initialAmountElement.innerText);
    const newDonateAmount = initialAmount - donateInputAmount;
    initialAmountElement.innerText = newDonateAmount.toFixed(2);
}

// Function to create a history entry
function createHistoryEntry(donateInputAmount, location) {
    const historyItem = document.createElement("div");
    historyItem.className = "border-2 mb-2 p-5 rounded-lg";
    historyItem.innerHTML = `
        <h1 class="text-xl font-semibold">${donateInputAmount} Taka is Donated for ${location}</h1>
        <p class="font-light text-base text-[#111111B3] mt-2">${new Date().toString()}</p>
    `;
    const historySection = document.getElementById("history-section");
    historySection.prepend(historyItem, historySection.firstChild);
}

// Function to validate donation input
function validateDonationInput(donateInput) {
    const initialAmount = parseFloat(initialAmountElement.innerText);
    if (donateInput > 0 && !isNaN(donateInput) && donateInput <= initialAmount) {
        return true;
    }
}

// Function to handle donation button click
function handleDonation(buttonId, inputId, donatedAmountId, modalId, location) {
    const button = document.getElementById(buttonId);
    const input = document.getElementById(inputId);
    const donatedAmountElement = document.getElementById(donatedAmountId);
    const modal = document.getElementById(modalId);
    button.addEventListener("click", function () {
        // event.preventDefault();
        const donateInput = parseFloat(input.value);

        // Validate the donation input
        if (!validateDonationInput(donateInput)) {
            alert('Please try again with a correct donation amount');
            input.value = "";
            return;
        }
        else {
            modal.showModal();
        }

        // Update the donation amount and balance
        updateAmounts(input, donatedAmountElement);

        // Create a history entry for the donation
        createHistoryEntry(donateInput, location);

        // Clear the donation input field for the next entry
        input.value = "";
    });
}


// Set up donation button click handlers
handleDonation("noakhali-donate-button", "noakhali-donate-input", "noakhali-donated-amount", "noakhali-modal", "famine-2024 at Noakhali, Bangladesh");
handleDonation("feni-donate-button", "feni-donate-input", "feni-donated-amount", "feni-modal", "Flood Relief in Feni, Bangladesh");
handleDonation("quota-donate-button", "quota-donate-input", "quota-donated-amount", "quota-modal", "Aid for Injured in the Quota Movement, Bangladesh");
