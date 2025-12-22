// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal if clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// --- ADMIN PANEL LOGIC [Cite: Note 1, 4] ---

function checkAdmin() {
    const input = document.getElementById('adminPass').value;
    // Password from your notes
    const adminCode = "lemonadeflames";

    if(input === adminCode) {
        closeModal('adminModal');
        openModal('dashboardModal');
        alert("Welcome, Admin. Access Granted.");
    } else {
        alert("Access Denied: Incorrect Passcode.");
    }
}

// --- OWNER LOGIC [Cite: Note 1] ---

function checkOwner() {
    const input = document.getElementById('ownerPass').value;
    // Owner Code from your notes
    const ownerCode = "lemonadeflames099";

    if(input === ownerCode) {
        document.getElementById('dashTitle').innerText = "OWNER DASHBOARD (God Mode)";
        document.getElementById('dashTitle').style.color = "#ffd700"; // Gold color
        alert("Owner Identity Verified. You have full control.");
    } else {
        alert("You are not the Owner.");
    }
}

// --- SPONSORSHIP LOGIC [Cite: Note 4] ---

function generateSponsorCode() {
    // Generates a random one-time code
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    const display = document.getElementById('codeDisplay');
    display.style.display = "block";
    display.innerHTML = `
        <p>Sponsorship Approved!</p>
        <p>One-Time Code: <strong>${result}</strong></p>
        <small>Message: "Your sponsorship has been approved. Don't share this code with another person. From: Lemonade"</small>
    `;
}
