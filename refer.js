// Constants
const REFERRAL_POINTS = 30;

// Load referral page content
function loadReferral() {
    document.getElementById('content').innerHTML = `
        <section class="refer">
            <h2>Refer a Friend</h2>
            <p>Share your referral link with your friends!</p>
            <input type="text" id="referral-link" value="${window.location.href}" readonly>
            <button id="copy-link">Copy Link</button>
            <button id="refer-friend">Refer a Friend</button>
        </section>
    `;

    document.getElementById('copy-link').addEventListener('click', copyLink);
    document.getElementById('refer-friend').addEventListener('click', referFriend);
}

// Copy referral link to clipboard
function copyLink() {
    const referralLink = document.getElementById('referral-link');
    referralLink.select();
    document.execCommand('copy');
    alert('Referral link copied to clipboard!');
}

// Refer a friend and update points
function referFriend() {
    let points = parseInt(localStorage.getItem('points')) || 0;
    points += REFERRAL_POINTS;
    localStorage.setItem('points', points);
    alert('Referral successful! You have earned 30 points.');
    window.location.href = 'index.html'; // Redirect to home page after referral
}

document.addEventListener('DOMContentLoaded', loadReferral);
