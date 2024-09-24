// // history an donation tab functionality
// const historyTab = document.getElementById("history-tab");
// const donationTab = document.getElementById("donation-tab");

// historyTab.addEventListener('click', function () {
//     historyTab.classList.add("bg-[#B4F461]");
//     historyTab.classList.remove("text-[#111111B3]");
//     donationTab.classList.remove("bg-[#B4F461]");
//     donationTab.classList.add("text-[#111111B3]");

//     document.getElementById("donation-container").classList.add('hidden');

//     document.getElementById("history-section").classList.remove('hidden');
// })

// donationTab.addEventListener('click', function () {
//     historyTab.classList.remove("bg-[#B4F461]");
//     historyTab.classList.add("text-[#111111B3]");
//     donationTab.classList.add("bg-[#B4F461]");
//     donationTab.classList.remove("text-[#111111B3]");

//     document.getElementById("donation-container").classList.remove('hidden');
    
//     document.getElementById("history-section").classList.add('hidden')
// })

// // global variables
// const initialAmountElement = document.getElementById("initial-amount");

// // noakhali donate button event listener
// const noakhaliDonateButton = document.getElementById("noakhali-donate-button");
// noakhaliDonateButton.addEventListener("click", function () {
//     const noakhaliDonateInput = parseFloat(document.getElementById("noakhali-donate-input").value);
//     const initialAmount = parseFloat(document.getElementById("initial-amount").innerText);
//     const noakhaliModal = document.getElementById("noakhali-modal");

//     if (noakhaliDonateInput <= 0 || isNaN(noakhaliDonateInput) || noakhaliDonateInput === "" || noakhaliDonateInput > initialAmount) {
//         noakhaliModal.classList.add('hidden');
//         noakhaliDonateInputAmountElement.value = '';
//         alert('Please try again with correct donation amount');
//         return;
//     }
//     else{
//         noakhaliModal.classList.remove('hidden');
//     }

// });
// // noakhali modalconfirmation button event listener
// const noakhaliModalButton = document.getElementById("noakhali-modal-button");

// const noakhaliDonateInputAmountElement = document.getElementById("noakhali-donate-input");
// const noakhaliDonatedAmountElement = document.getElementById("noakhali-donated-amount");



// noakhaliModalButton.addEventListener('click', function () {

//     const noakhaliDonateInputAmount = parseFloat(noakhaliDonateInputAmountElement.value);
//     const noakhaliDonatedAmount = parseFloat(noakhaliDonatedAmountElement.innerText);

//     const noakhaliTotalDonationAmount = noakhaliDonateInputAmount + noakhaliDonatedAmount;
//     noakhaliDonatedAmountElement.innerText = noakhaliTotalDonationAmount.toFixed(2);

//     const initialAmount = parseFloat(initialAmountElement.innerText);
//     const newDonateAmount = initialAmount - noakhaliDonateInputAmount;
//     initialAmountElement.innerText = newDonateAmount.toFixed(2);

//     historyItem = document.createElement("div");
//     historyItem.className = "border-2 mb-2 p-5 rounded-lg";

//     historyItem.innerHTML = `
//         <h1 class="text-xl font-semibold">${noakhaliDonateInputAmountElement.value} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
//         <p class="font-light text-base text-[#111111B3] mt-2">${new Date().toString()}</p>
//     `;

//     const historySection = document.getElementById("history-section");
//     historySection.insertBefore(historyItem, historySection.firstChild);

//     noakhaliDonateInputAmountElement.value = '';

// })

// // global variables

// // feni donate button event listener
// const feniDonateButton = document.getElementById("feni-donate-button");
// feniDonateButton.addEventListener("click", function () {
//     const feniDonateInput = parseFloat(document.getElementById("feni-donate-input").value);
//     const initialAmount = parseFloat(document.getElementById("initial-amount").innerText);
//     const feniModal = document.getElementById("feni-modal");

//     if (feniDonateInput <= 0 || isNaN(feniDonateInput) || feniDonateInput === "" || feniDonateInput > initialAmount) {
//         feniModal.classList.add('hidden');
//         feniDonateInputAmountElement.value = '';
//         alert('Please try again with correct donation amount');
//         return;
//     }
//     else{
//         feniModal.classList.remove('hidden');
//     }

// });
// // feni modalconfirmation button event listener
// const feniModalButton = document.getElementById("feni-modal-button");

// const feniDonateInputAmountElement = document.getElementById("feni-donate-input");
// const feniDonatedAmountElement = document.getElementById("feni-donated-amount");



// feniModalButton.addEventListener('click', function () {

//     const feniDonateInputAmount = parseFloat(feniDonateInputAmountElement.value);
//     const feniDonatedAmount = parseFloat(feniDonatedAmountElement.innerText);

//     const feniTotalDonationAmount = feniDonateInputAmount + feniDonatedAmount;
//     feniDonatedAmountElement.innerText = feniTotalDonationAmount.toFixed(2);

//     const initialAmount = parseFloat(initialAmountElement.innerText);
//     const newDonateAmount = initialAmount - feniDonateInputAmount;
//     initialAmountElement.innerText = newDonateAmount.toFixed(2);

//     historyItem = document.createElement("div");
//     historyItem.className = "border-2 mb-2 p-5 rounded-lg";

//     historyItem.innerHTML = `
//         <h1 class="text-xl font-semibold">${feniDonateInputAmountElement.value} Taka is Donated for famine-2024 at feni, Bangladesh</h1>
//         <p class="font-light text-base text-[#111111B3] mt-2">${new Date().toString()}</p>
//     `;

//     const historySection = document.getElementById("history-section");
//     historySection.insertBefore(historyItem, historySection.firstChild);

//     feniDonateInputAmountElement.value = '';

// })

// // global variables
// // const initialAmountElement = document.getElementById("initial-amount");

// // quota donate button event listener
// const quotaDonateButton = document.getElementById("quota-donate-button");
// quotaDonateButton.addEventListener("click", function () {
//     const quotaDonateInput = parseFloat(document.getElementById("quota-donate-input").value);
//     const initialAmount = parseFloat(document.getElementById("initial-amount").innerText);
//     const quotaModal = document.getElementById("quota-modal");

//     if (quotaDonateInput <= 0 || isNaN(quotaDonateInput) || quotaDonateInput === "" || quotaDonateInput > initialAmount) {
//         quotaModal.classList.add('hidden');
//         quotaDonateInputAmountElement.value = '';
//         alert('Please try again with correct donation amount');
//         return;
//     }
//     else{
//         quotaModal.classList.remove('hidden');
//     }

// });
// // quota modalconfirmation button event listener
// const quotaModalButton = document.getElementById("quota-modal-button");

// const quotaDonateInputAmountElement = document.getElementById("quota-donate-input");
// const quotaDonatedAmountElement = document.getElementById("quota-donated-amount");



// quotaModalButton.addEventListener('click', function () {

//     const quotaDonateInputAmount = parseFloat(quotaDonateInputAmountElement.value);
//     const quotaDonatedAmount = parseFloat(quotaDonatedAmountElement.innerText);

//     const quotaTotalDonationAmount = quotaDonateInputAmount + quotaDonatedAmount;
//     quotaDonatedAmountElement.innerText = quotaTotalDonationAmount.toFixed(2);

//     const initialAmount = parseFloat(initialAmountElement.innerText);
//     const newDonateAmount = initialAmount - quotaDonateInputAmount;
//     initialAmountElement.innerText = newDonateAmount.toFixed(2);

//     historyItem = document.createElement("div");
//     historyItem.className = "border-2 mb-2 p-5 rounded-lg";

//     historyItem.innerHTML = `
//         <h1 class="text-xl font-semibold">${quotaDonateInputAmountElement.value} Taka is Donated for famine-2024 at quota, Bangladesh</h1>
//         <p class="font-light text-base text-[#111111B3] mt-2">${new Date().toString()}</p>
//     `;

//     const historySection = document.getElementById("history-section");
//     historySection.insertBefore(historyItem, historySection.firstChild);

//     quotaDonateInputAmountElement.value = '';

// })



// another-02

// Handle Tab Switching
// const historyTab = document.getElementById("history-tab");
// const donationTab = document.getElementById("donation-tab");

// historyTab.addEventListener('click', () => toggleTab('history'));
// donationTab.addEventListener('click', () => toggleTab('donation'));

// function toggleTab(activeTab) {
//     if (activeTab === 'history') {
//         historyTab.classList.add("bg-[#B4F461]");
//         historyTab.classList.remove("text-[#111111B3]");
//         donationTab.classList.remove("bg-[#B4F461]");
//         donationTab.classList.add("text-[#111111B3]");

//         document.getElementById("donation-container").classList.add('hidden');
//         document.getElementById("history-section").classList.remove('hidden');
//     } else {
//         historyTab.classList.remove("bg-[#B4F461]");
//         historyTab.classList.add("text-[#111111B3]");
//         donationTab.classList.add("bg-[#B4F461]");
//         donationTab.classList.remove("text-[#111111B3]");

//         document.getElementById("donation-container").classList.remove('hidden');
//         document.getElementById("history-section").classList.add('hidden');
//     }
// }



// // Global variables
// const initialAmountElement = document.getElementById("initial-amount");

// // Function to update the donation amount and balance
// function updateAmounts(donateInputElement, donatedAmountElement) {
//     const donateInputAmount = parseFloat(donateInputElement.value);
//     const currentDonatedAmount = parseFloat(donatedAmountElement.innerText);

//     const totalDonationAmount = donateInputAmount + currentDonatedAmount;
//     donatedAmountElement.innerText = totalDonationAmount.toFixed(2);

//     const initialAmount = parseFloat(initialAmountElement.innerText);
//     const newDonateAmount = initialAmount - donateInputAmount;
//     initialAmountElement.innerText = newDonateAmount.toFixed(2);
// }

// // Function to validate donation input
// function validateDonationInput(donateInput) {
//     const initialAmount = parseFloat(initialAmountElement.innerText);
//     return donateInput > 0 && !isNaN(donateInput) && donateInput <= initialAmount;
// }

// // Function to create a history entry
// function createHistoryEntry(donateInputAmount, location) {
//     const historyItem = document.createElement("div");
//     historyItem.className = "border-2 mb-2 p-5 rounded-lg";
//     historyItem.innerHTML = `
//         <h1 class="text-xl font-semibold">${donateInputAmount} Taka is Donated for ${location}</h1>
//         <p class="font-light text-base text-[#111111B3] mt-2">${new Date().toString()}</p>
//     `;
//     const historySection = document.getElementById("history-section");
//     historySection.insertBefore(historyItem, historySection.firstChild);
// }

// // Event listeners for donation buttons
// document.getElementById("noakhali-donate-button").addEventListener("click", function () {
//     const noakhaliDonateInput = parseFloat(document.getElementById("noakhali-donate-input").value);
//     const noakhaliModal = document.getElementById("noakhali-modal");

//     if (!validateDonationInput(noakhaliDonateInput)) {
//         alert('Please try again with a correct donation amount');
//         return;
//     }

//     updateAmounts(document.getElementById("noakhali-donate-input"), document.getElementById("noakhali-donated-amount"));
//     createHistoryEntry(noakhaliDonateInput, "famine-2024 at Noakhali, Bangladesh");
//     noakhaliModal.classList.remove('hidden');
// });

// document.getElementById("feni-donate-button").addEventListener("click", function () {
//     const feniDonateInput = parseFloat(document.getElementById("feni-donate-input").value);
//     const feniModal = document.getElementById("feni-modal");

//     if (!validateDonationInput(feniDonateInput)) {
//         alert('Please try again with a correct donation amount');
//         return;
//     }

//     updateAmounts(document.getElementById("feni-donate-input"), document.getElementById("feni-donated-amount"));
//     createHistoryEntry(feniDonateInput, "Flood Relief in Feni,Bangladesh");
//     feniModal.classList.remove('hidden');
// });

// document.getElementById("quota-donate-button").addEventListener("click", function () {
//     const quotaDonateInput = parseFloat(document.getElementById("quota-donate-input").value);
//     const quotaModal = document.getElementById("quota-modal");

//     if (!validateDonationInput(quotaDonateInput)) {
//         alert('Please try again with a correct donation amount');
//         document.getElementById(modalId).classList.add('hidden');
//         document.getElementById("quota-donate-input").value = '';
        
//         return;
//     }

//     updateAmounts(document.getElementById("quota-donate-input"), document.getElementById("quota-donated-amount"));
//     createHistoryEntry(quotaDonateInput, "Aid for Injured in the Quota Movement, Bangladesh");
//     quotaModal.classList.remove('hidden');
// });

// // Modal confirmation button functionality
// function setupModalConfirmation(modalId, inputElementId) {
//     document.getElementById(modalId).querySelector('button').addEventListener('click', function () {
//         document.getElementById(modalId).classList.add('hidden');
//         document.getElementById(inputElementId).value = ''; // Clear input field
//     });
// }

// // Set up modals
// setupModalConfirmation("noakhali-modal", "noakhali-donate-input");
// setupModalConfirmation("feni-modal", "feni-donate-input");
// setupModalConfirmation("quota-modal", "quota-donate-input");


// another-02

// Tab toggling functionality
const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");

historyTab.addEventListener('click', () => toggleTab('history'));
donationTab.addEventListener('click', () => toggleTab('donation'));

function toggleTab(activeTab) {
    if (activeTab === 'history') {
        historyTab.classList.add("bg-[#B4F461]");
        historyTab.classList.remove("text-[#111111B3]");
        donationTab.classList.remove("bg-[#B4F461]");
        donationTab.classList.add("text-[#111111B3]");

        document.getElementById("donation-container").classList.add('hidden');
        document.getElementById("history-section").classList.remove('hidden');
    } else {
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

// Function to validate donation input
function validateDonationInput(donateInput) {
    const initialAmount = parseFloat(initialAmountElement.innerText);
    return donateInput > 0 && !isNaN(donateInput) && donateInput <= initialAmount;
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
    historySection.insertBefore(historyItem, historySection.firstChild);
}

// Function to handle donation button click
function handleDonation(buttonId, inputId, donatedAmountId, modalId, location) {
    document.getElementById(buttonId).addEventListener("click", function () {
        const donateInput = parseFloat(document.getElementById(inputId).value);
        const modal = document.getElementById(modalId);

        if (!validateDonationInput(donateInput)) {
            alert('Please try again with a correct donation amount');
            document.getElementById(inputId).value = ""; // Clear input field for new amount
            return; // Stop further execution
        }

        updateAmounts(document.getElementById(inputId), document.getElementById(donatedAmountId));
        createHistoryEntry(donateInput, location);
        modal.classList.remove('hidden'); // Show modal directly
        document.getElementById(inputId).value = "";
    });
}

// Set up donation button click handlers
handleDonation("noakhali-donate-button", "noakhali-donate-input", "noakhali-donated-amount", "noakhali-modal", "famine-2024 at Noakhali, Bangladesh");
handleDonation("feni-donate-button", "feni-donate-input", "feni-donated-amount", "feni-modal", "Flood Relief in Feni, Bangladesh");
handleDonation("quota-donate-button", "quota-donate-input", "quota-donated-amount", "quota-modal", "Aid for Injured in the Quota Movement, Bangladesh");

// Modal confirmation button functionality
function setupModalConfirmation(modalId, inputId) {
    document.getElementById(modalId).querySelector('button').addEventListener('click', function () {
        document.getElementById(modalId).classList.add('hidden');
        document.getElementById(inputId).value = ""; // Clear input field
    });
}

// Set up modals
setupModalConfirmation("noakhali-modal", "noakhali-donate-input");
setupModalConfirmation("feni-modal", "feni-donate-input");
setupModalConfirmation("quota-modal", "quota-donate-input");
