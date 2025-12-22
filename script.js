// --- DATABASE SIMULATION (Content from Links) ---
const contentDB = {
    gaming: [
        { title: "Xbox Series X Update", type: "video", url: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-holographic-interface-99-large.mp4", desc: "Premium dashboard revealed." },
        { title: "Minecraft 1.21 Leaks", type: "image", url: "https://images.unsplash.com/photo-1599553735191-45f8a02a9947?w=500", desc: "New mobs discovered." }
    ],
    movies: [
        { title: "Netflix Top 10", type: "image", url: "https://images.unsplash.com/photo-1574375927938-d5a98e8efe85?w=500", desc: "Trending this week." },
        { title: "Casting Call", type: "video", url: "https://assets.mixkit.co/videos/preview/mixkit-large-crowd-of-people-walking-in-the-subway-4389-large.mp4", desc: "Auditions open now." }
    ],
    lifestyle: [
        { title: "Versace Collection", type: "image", url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500", desc: "Summer 2025 Lookbook." }
    ],
    tech: [
        { title: "Code Bootcamp", type: "image", url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500", desc: "Fullstack in 30 days." }
    ],
    ecommerce: [
        { title: "Shopify Tips", type: "image", url: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=500", desc: "Scale to $10k/mo." }
    ]
};

// --- RENDER FUNCTION (Handles Autoplay Videos & Images) ---
function loadFeeds() {
    for (const [genre, posts] of Object.entries(contentDB)) {
        const container = document.getElementById(genre + 'Feed');
        if (container) {
            container.innerHTML = posts.map(post => {
                let mediaHTML = "";
                if (post.type === 'video') {
                    // Autoplay video logic
                    mediaHTML = `<video class="feed-media" src="${post.url}" autoplay muted loop playsinline></video>`;
                } else {
                    mediaHTML = `<img class="feed-media" src="${post.url}">`;
                }
                
                return `
                <div class="feed-card">
                    ${mediaHTML}
                    <div>
                        <h4 style="color:var(--neon-blue); margin-bottom:5px;">${post.title}</h4>
                        <p style="color:#ccc; font-size:0.9rem;">${post.desc}</p>
                    </div>
                </div>`;
            }).join('');
        }
    }
}

// Initialize content on load
window.onload = loadFeeds;

// --- NAVIGATION LOGIC ---
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    
    const target = document.getElementById(pageId);
    target.classList.remove('hidden');
    target.classList.add('active');
}

// --- MODAL LOGIC ---
function openModal(id) { document.getElementById(id).style.display = 'block'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

// --- ADMIN & SECURITY (Passcodes from your notes) ---
function checkAdmin() {
    const pass = document.getElementById('adminPass').value;
    if (pass === "lemonadeflames") { //
        closeModal('adminModal');
        openModal('dashboardModal');
    } else {
        alert("ACCESS DENIED");
    }
}

function checkOwner() {
    const pass = document.getElementById('ownerPass').value;
    if (pass === "lemonadeflames099") { //
        document.getElementById('dashTitle').innerHTML = "OWNER DASHBOARD <span style='color:gold'>★</span>";
        alert("Welcome, Owner.");
    } else {
        alert("Wrong Code");
    }
}

function approveSponsor() {
    // Generate Random Code
    const code = Math.random().toString(36).slice(-8).toUpperCase();
    const resultBox = document.getElementById('sponsorCodeResult');
    
    resultBox.innerHTML = `
        <p><strong>STATUS: APPROVED</strong></p>
        <p>CODE: <span style="color:#fff; border:1px solid #fff; padding:2px 5px;">${code}</span></p>
        <small style="color:#888;">"Your sponsorship has been approved. Don't share this code. From: Lemonade"</small>
    `; //
            }
