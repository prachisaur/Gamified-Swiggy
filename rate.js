const dishes = [
    { id: 1, name: "Dish 1" },
    { id: 2, name: "Dish 2" },
    { id: 3, name: "Dish 3" },
    { id: 4, name: "Dish 4" },
    { id: 5, name: "Dish 5" }
];

let ratedCount = parseInt(localStorage.getItem('ratedDishesCount')) || 0;
const maxRatedDishes = 5;
let rateChallengeBlocked = localStorage.getItem('rateChallengeBlocked') === 'true';

// Function to load dishes and their rating options
function loadDishes() {
    const dishList = document.getElementById('dish-list');
    dishList.innerHTML = '';

    dishes.forEach(dish => {
        const li = document.createElement('li');
        li.classList.add('dish-item');
        li.innerHTML = `
            <span class="dish-name">${dish.name}</span>
            <div class="rating">
                <button onclick="rateDish(${dish.id}, 1)">1 Star</button>
                <button onclick="rateDish(${dish.id}, 2)">2 Stars</button>
                <button onclick="rateDish(${dish.id}, 3)">3 Stars</button>
                <button onclick="rateDish(${dish.id}, 4)">4 Stars</button>
                <button onclick="rateDish(${dish.id}, 5)">5 Stars</button>
            </div>
        `;
        dishList.appendChild(li);
    });
}

// Function to handle dish rating
function rateDish(dishId, stars) {
    if (ratedCount >= maxRatedDishes) {
        document.getElementById('status-message').innerText = 'You have already rated 5 dishes.';
        return;
    }

    ratedCount++;
    localStorage.setItem('ratedDishesCount', ratedCount);
    document.getElementById('rating-count').innerText = ratedCount;

    if (ratedCount >= maxRatedDishes) {
        document.getElementById('status-message').innerText = 'Congratulations! You have rated 5 dishes.';
        points += 20;
        localStorage.setItem('points', points);
        rateChallengeBlocked = true;
        localStorage.setItem('rateChallengeBlocked', 'true');
    }
}

// Load dishes on page load
document.addEventListener('DOMContentLoaded', loadDishes);
