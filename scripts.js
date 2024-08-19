// Initial balance (for demonstration)
let balance = 0.00;
let transactionHistory = [];

// Function to update the balance display
function updateBalanceDisplay() {
    document.getElementById('balance').innerText = balance.toFixed(2);
}

// Function to update the transaction history display
function updateTransactionHistory() {
    const historyList = document.getElementById('history');
    historyList.innerHTML = '';

    transactionHistory.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.innerText = `${transaction.amount} ETH sent to ${transaction.recipient}`;
        historyList.appendChild(listItem);
    });
}

// Handle form submission
document.getElementById('send-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const recipient = document.getElementById('recipient').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (amount > 0) {
        balance -= amount;

        // Add the transaction to the history
        transactionHistory.push({ recipient, amount });

        // Update the UI
        updateBalanceDisplay();
        updateTransactionHistory();

        // Clear form fields
        document.getElementById('recipient').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please enter a valid amount.');
    }
});

// Initial update
updateBalanceDisplay();
