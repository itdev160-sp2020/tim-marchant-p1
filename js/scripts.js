// welcome message

var user = 'Friend';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Select an option or scroll to continue.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// trezor
var trezor = 169.99,
    trezorDisplay = document.getElementById('trezor');

trezorDisplay.textContent = trezor.toFixed(2);

// ledger
var ledger = 119,
    ledgerDisplay = document.getElementById('ledger');

ledgerDisplay.textContent = ledger.toFixed(2);
