// noakhali donate button event listener
const noakhaliDonateButton = document.getElementById("noakhali-donate-button");
noakhaliDonateButton.addEventListener("click", function () {
    const noakhaliDonateInput = document.getElementById("noakhali-donate-input").value;
    const noakhaliModal = document.getElementById("noakhali-modal");
    if (noakhaliDonateInput <= 0 || isNaN(noakhaliDonateInput)) {
        noakhaliModal.classList.add('hidden');
        return alert('Please try again with correct donation amount');
    }

})
// noakhali modalconfirmation button event listener
const noakhaliModalButton = document.getElementById("noakhali-modal-button");

const noakhaliDonateInputAmountElement = document.getElementById("noakhali-donate-input");
const noakhaliDonatedAmountElement = document.getElementById("noakhali-donated-amount");

const initialAmountElement = document.getElementById("initial-amount");

noakhaliModalButton.addEventListener('click', function () {

    const noakhaliDonateInputAmount = parseFloat(noakhaliDonateInputAmountElement.value);
    const noakhaliDonatedAmount = parseFloat(noakhaliDonatedAmountElement.innerText);

    const noakhaliTotalDonationAmount = noakhaliDonateInputAmount + noakhaliDonatedAmount;
    noakhaliDonatedAmountElement.innerText = noakhaliTotalDonationAmount.toFixed(2);

    const initialAmount = parseFloat(initialAmountElement.innerText);
    const newAmount = initialAmount - noakhaliDonateInputAmount;
    initialAmountElement.innerText = newAmount.toFixed(2);

    historyItem = document.createElement("div");
    historyItem.className = "border-2 mb-2 p-5 rounded-lg";

    historyItem.innerHTML = `
        <h1 class="text-xl font-semibold">${noakhaliDonateInputAmountElement.value} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
        <p class="font-light text-base text-[#111111B3] mt-2">${new Date().toString()}</p>
    `;

    const historySection = document.getElementById("history-section");
    historySection.insertBefore(historyItem, historySection.firstChild);

    noakhaliDonateInputAmountElement.value = '';

})

// history an donation tab functionality
const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");

historyTab.addEventListener('click', function () {
    historyTab.classList.add("bg-[#B4F461]");
    historyTab.classList.remove("text-[#111111B3]");
    donationTab.classList.remove("bg-[#B4F461]");
    donationTab.classList.add("text-[#111111B3]");

    document.getElementById("donation-container").classList.add('hidden');

    document.getElementById("history-section").classList.remove('hidden');
})

donationTab.addEventListener('click', function () {
    historyTab.classList.remove("bg-[#B4F461]");
    historyTab.classList.add("text-[#111111B3]");
    donationTab.classList.add("bg-[#B4F461]");
    donationTab.classList.remove("text-[#111111B3]");

    document.getElementById("donation-container").classList.remove('hidden');
    
    document.getElementById("history-section").classList.add('hidden')
})