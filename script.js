// Function to handle platform selection
function selectPlatform(platform) {
    // Show the login page
    document.getElementById("initialPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");

    // Update the title for the selected platform
    document.getElementById("platformTitle").textContent = `Log In with ${platform}`;
}

// Encryption function using Base64 (simplified)
function encryptCredentials(userId, password) {
    const credentials = `${userId}:${password}`;
    return btoa(credentials); // Encode to Base64
}

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get user inputs
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    // Encrypt the credentials
    const encryptedKey = encryptCredentials(userId, password);

    // Display the encrypted key
    document.getElementById("encryptedKey").textContent = encryptedKey;

    // Show the result page
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("resultPage").classList.remove("hidden");
});

// Reset the page to the initial state
function resetPage() {
    document.getElementById("resultPage").classList.add("hidden");
    document.getElementById("initialPage").classList.remove("hidden");

    // Clear inputs
    document.getElementById("userId").value = "";
    document.getElementById("password").value = "";
}
