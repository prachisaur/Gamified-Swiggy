// Constants
const CHALLENGE_RESET_TIME = 2 * 60 * 1000; // 5 minutes in milliseconds

// Load stored data or initialize default values
let points = parseInt(localStorage.getItem('points')) || 0;
let orderCount = parseInt(localStorage.getItem('orderCount')) || 0;
let referralStatus = localStorage.getItem('referralStatus') === 'true';
let ratedDishesCount = parseInt(localStorage.getItem('ratedDishesCount')) || 0;
let rateChallengeBlocked = localStorage.getItem('rateChallengeBlocked') === 'true';
let lastOrderTime = parseInt(localStorage.getItem('lastOrderTime')) || 0;
let lastReferralTime = parseInt(localStorage.getItem('lastReferralTime')) || 0;
let lastRateTime = parseInt(localStorage.getItem('lastRateTime')) || 0;

// Function to load the home screen content
function loadHome() {
    document.getElementById('content').innerHTML = `
        <section class="daily-challenges">
            <h2>Challenges</h2>
            <ul>
                <li onclick="${orderCount >= 3 ? '' : 'redirectOrder()'}" style="color: ${orderCount >= 3 ? 'grey' : 'inherit'};">
                    Order minimum 3 dishes at once
                    <span class="points">+50 points</span> 
                </li>
                <li onclick="${referralStatus ? '' : 'redirectRefer()'}" style="color: ${referralStatus ? 'grey' : 'inherit'};">
                    Refer a friend <span class="points">+30 points</span> 
                </li>
                <li onclick="${rateChallengeBlocked ? '' : 'redirectRate()'}" style="color: ${rateChallengeBlocked ? 'grey' : 'inherit'};">
                    Rate atleast 5 dishes <span class="points">+20 points</span> 
                </li>
            </ul>
        </section>
        <section class="leaderboard">
            <h2>Leaderboard</h2>
            <ol>
                <li>User1 <span class="score">1500</span></li>
                <li>User2 <span class="score">1200</span></li>
                <li>User3 <span class="score">1100</span></li>
            </ol>
        </section>
        <section class="rewards">
            <h2>Available Rewards</h2>
            <ul>
                <li>Free Delivery Coupon <span class="cost">100 points</span></li>
                <li>10% Off Next Order <span class="cost">200 points</span></li>
                <li>Exclusive Badge <span class="cost">300 points</span></li>
            </ul>
        </section>
    `;
    updateProgress();
}

// Function to redirect to the order page
function redirectOrder() {
    window.location.href = 'order.html';
}

// Function to redirect to the refer page
function redirectRefer() {
    window.location.href = 'refer.html';
}

// Function to redirect to the rate dishes page
function redirectRate() {
    window.location.href = 'rate.html';
}

// Function to update progress
function updateProgress() {
    document.getElementById('progress').textContent = `${orderCount}/1`;
    document.getElementById('refer-progress').textContent = referralStatus ? '1/1' : '0/1';
    document.getElementById('rate-progress').textContent = `${ratedDishesCount}/5`;
    updateRewards(); // Update rewards based on current points
}

// Function to update rewards based on points
function updateRewards() {
    const rewardsSection = document.querySelector('.rewards');
    if (rewardsSection) {
        rewardsSection.innerHTML = `
            <h2>Available Rewards</h2>
            <ul>
                <li>Free Delivery Coupon <span class="status">${points >= 100 ? 'Unlocked' : 'Locked'}</span></li>
                <li>10% Off Next Order <span class="status">${points >= 200 ? 'Unlocked' : 'Locked'}</span></li>
                <li>Exclusive Badge <span class="status">${points >= 300 ? 'Unlocked' : 'Locked'}</span></li>
            </ul>
            <h2>Your Points</h2>
            <p>You have <span class="points-total">${points}</span> points</p>
        `;
    }
}

// Function to handle rating dishes
function rateDishes() {
    if (rateChallengeBlocked) {
        alert('You have already completed the rating challenge!');
        return;
    }

    // Simulate rating a dish
    ratedDishesCount++;
    localStorage.setItem('ratedDishesCount', ratedDishesCount);

    if (ratedDishesCount >= 5) {
        rateChallengeBlocked = true;
        localStorage.setItem('rateChallengeBlocked', 'true');
        points += 20; // Add points for completing the challenge
        localStorage.setItem('points', points);
        alert('Congratulations! You have completed the rating challenge.');
    }
    
    updateProgress();
}

// Function to load the rewards screen content
function loadRewards() {
    document.getElementById('content').innerHTML = `
        <section class="rewards-dashboard">
            <h2>Your Rewards</h2>
            <ul>
                <li>Free Delivery Coupon <span class="status">${points >= 100 ? 'Unlocked' : 'Locked'}</span></li>
                <li>10% Off Next Order <span class="status">${points >= 200 ? 'Unlocked' : 'Locked'}</span></li>
                <li>Exclusive Badge <span class="status">${points >= 300 ? 'Unlocked' : 'Locked'}</span></li>
            </ul>
            <h2>Your Points</h2>
            <p>You have <span class="points-total">${points}</span> points</p>
        </section>
    `;
}

// Function to load the profile screen content
// Function to load the profile screen content
function loadProfile() {
    document.getElementById('content').innerHTML = `
        <section class="profile">
            <img src="pic.jpg" alt="Profile Picture">
            <h2>User Profile</h2>
            <p><strong>Name:</strong> Prachi Saurabh</p>
            <p><strong>Email:</strong> prachisaur@gmail.com</p>
            <p><strong>Joined:</strong> January 2021</p>
            <p><strong>Total Points:</strong> ${points}</p>
            <p><strong>Badges:</strong> 3</p>
        </section>
    `;
}


// Function to load the challenges screen content
function loadChallenges() {
    document.getElementById('content').innerHTML = `
        <section class="daily-challenges">
            <h2>Daily Challenges</h2>
            <ul>
                <li onclick="${orderCount >= 3 ? '' : 'redirectOrder()'}" style="color: ${orderCount >= 3 ? 'grey' : 'inherit'};">
                    Order 3 different cuisines 
                    <span class="points">+50 points</span> 
                </li>
                <li onclick="${referralStatus ? '' : 'redirectRefer()'}" style="color: ${referralStatus ? 'grey' : 'inherit'};">
                    Refer a friend <span class="points">+30 points</span> 
                </li>
                <li onclick="${rateChallengeBlocked ? '' : 'redirectRate()'}" style="color: ${rateChallengeBlocked ? 'grey' : 'inherit'};">
                    Rate 5 dishes 
                </li>
            </ul>
        </section>
    `;
    updateProgress();
}

// Function to load the leaderboard screen content
function loadLeaderboard() {
    document.getElementById('content').innerHTML = `
        <section class="leaderboard">
            <h2>Leaderboard</h2>
            <ol>
                <li>User1 <span class="score">1500</span></li>
                <li>User2 <span class="score">1200</span></li>
                <li>User3 <span class="score">1100</span></li>
            </ol>
        </section>
    `;
}

// Initialize page content
document.addEventListener('DOMContentLoaded', function() {
    loadHome();
});
