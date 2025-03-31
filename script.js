function encrypt(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            let base = char >= 'a' ? 97 : 65;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}

function decrypt(text, shift) {
    return encrypt(text, 26 - shift);
}

function encryptText() {
    let message = document.getElementById("message").value;
    let shift = parseInt(document.getElementById("shift").value);

    if (!message || isNaN(shift) || shift < 1 || shift > 25) {
        alert("Enter a valid message and shift value (1-25)");
        return;
    }

    document.getElementById("output").textContent = "Encrypted: " + encrypt(message, shift);
}

function decryptText() {
    let message = document.getElementById("message").value;
    let shift = parseInt(document.getElementById("shift").value);

    if (!message || isNaN(shift) || shift < 1 || shift > 25) {
        alert("Enter a valid message and shift value (1-25)");
        return;
    }

    document.getElementById("output").textContent = "Decrypted: " + decrypt(message, shift);
}
