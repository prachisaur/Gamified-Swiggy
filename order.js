// Constants
const REWARD_POINTS = 50; // Points awarded for completing the order challenge
const MINIMUM_DISHES = 3; // Minimum number of dishes required to earn points

// Initialize cart and order count from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let orderCount = parseInt(localStorage.getItem('orderCount')) || 0;
let challengeCompleted = localStorage.getItem('challengeCompleted') === 'true';

// Function to add a dish to the cart
function addToCart(dishName) {
    if (!cart.includes(dishName)) {
        cart.push(dishName);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${dishName} added to cart!`);
    } else {
        alert(`${dishName} is already in the cart!`);
    }
}

// Function to place the order
// Function to place the order
function placeOrder() {
    if (cart.length < MINIMUM_DISHES) {
        alert(`You need to add at least ${MINIMUM_DISHES} different dishes to the cart before placing an order.`);
    } else {
        alert('Order placed successfully!');
        orderCount += 1; // Increase the order count
        localStorage.setItem('orderCount', orderCount);

        // Check if challenge is completed and update points
        if (orderCount >= 1 && !challengeCompleted) {
            let points = parseInt(localStorage.getItem('points')) || 0;
            points += REWARD_POINTS; // Add points for completing the challenge
            localStorage.setItem('points', points);
            localStorage.setItem('challengeCompleted', 'true'); // Mark challenge as completed
            alert('Congratulations! You have ordered enough dishes and earned 50 points.');
        }

        // Clear cart
        localStorage.removeItem('cart');
        
        // Redirect to home page to update the points display
        window.location.href = 'index.html';
    }
}

