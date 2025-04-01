// Function to switch between tabs
function openTab(evt, tabName) {
    // Hide all tab content elements
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Remove the active class from all tab links
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    // Display the current tab and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  
  // Encryption function
  function encrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        let code = text.charCodeAt(i);
        let shiftAmount = shift % 26;
        if (code >= 65 && code <= 90) { // Uppercase letters
          char = String.fromCharCode(((code - 65 + shiftAmount) % 26) + 65);
        } else if (code >= 97 && code <= 122) { // Lowercase letters
          char = String.fromCharCode(((code - 97 + shiftAmount) % 26) + 97);
        }
      }
      result += char;
    }
    return result;
  }
  
  // Decryption function
  function decrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        let code = text.charCodeAt(i);
        let shiftAmount = shift % 26;
        if (code >= 65 && code <= 90) { // Uppercase letters
          char = String.fromCharCode(((code - 65 - shiftAmount + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) { // Lowercase letters
          char = String.fromCharCode(((code - 97 - shiftAmount + 26) % 26) + 97);
        }
      }
      result += char;
    }
    return result;
  }
  
  // Handle Encrypt button click
  function encryptText() {
    let text = document.getElementById("inputText").value;
    let shift = parseInt(document.getElementById("shiftValue").value);
    if (!isNaN(shift)) {
      let encryptedText = encrypt(text, shift);
      document.getElementById("encryptedText").textContent = encryptedText;
    } else {
      alert("Invalid shift value. Please enter a number.");
    }
  }
  
  // Handle Decrypt button click
  function decryptText() {
    let text = document.getElementById("encryptedInput").value;
    let shift = parseInt(document.getElementById("shiftValueDecrypt").value);
    if (!isNaN(shift)) {
      let decryptedText = decrypt(text, shift);
      document.getElementById("decryptedText").textContent = decryptedText;
    } else {
      alert("Invalid shift value. Please enter a number.");
    }
  }
  