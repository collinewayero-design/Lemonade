// --- Navigation Logic ---

function showPage(pageId) {
    // 1. Hide all pages
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.remove('active');
        page.classList.add('hidden');
    });

    // 2. Show the selected page
    const selectedPage = document.getElementById(pageId);
    if(selectedPage) {
        selectedPage.classList.remove('hidden');
        selectedPage.classList.add('active');
    }
}

// --- Modal Logic (Popups) ---

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// --- ADMIN & SECURITY ---

function checkAdmin() {
    const input = document.getElementById('adminPass').value;
    if(input === "lemonadeflames") {
        closeModal('adminModal');
        openModal('dashboardModal');
    } else {
        alert("Access Denied");
    }
}

function checkOwner() {
    const input = document.getElementById('ownerPass').value;
    if(input === "lemonadeflames099") {
        document.getElementById('dashTitle').innerText = "OWNER DASHBOARD (God Mode)";
        document.getElementById('dashTitle').style.color = "#ffd700";
        alert("Owner Verified.");
    } else {
        alert("Incorrect Owner Code");
    }
}

function generateSponsorCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const display = document.getElementById('codeDisplay');
    display.style.display = "block";
    display.innerHTML = `Code: <strong>${result}</strong> <br> <small>Don't share this.</small>`;
}
