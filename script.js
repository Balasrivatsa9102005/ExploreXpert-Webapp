// Function to generate a random price between ₹150 and ₹500
function generateRandomPrice() {
    return Math.floor(Math.random() * (500 - 150 + 1)) + 150;
}

// Function to generate a random delivery time between 20 and 40 minutes
function generateRandomTime() {
    return Math.floor(Math.random() * (40 - 20 + 1)) + 20;
}

// Function to generate and display random prices
function generateRandomPrices() {
    const foodItem = document.getElementById("food-search").value;

    if (!foodItem) {
        alert("Please enter a food item!");
        return;
    }

    const restaurants = [
        "Anjaneya Restaurant",
        "Sweet Magic",
        "Cross Roads"
    ];

    const results = restaurants.map(restaurant => {
        return [
            { platform: "Swiggy", price: `₹${generateRandomPrice()}`, restaurant, delivery: `${generateRandomTime()} min` },
            { platform: "Zomato", price: `₹${generateRandomPrice()}`, restaurant, delivery: `${generateRandomTime()} min` },
            { platform: "Uber Eats", price: `₹${generateRandomPrice()}`, restaurant, delivery: `${generateRandomTime()} min` }
        ];
    }).flat();

    displayResults(results);
}

// Function to display results in a table
function displayResults(results) {
    const resultContainer = document.getElementById("price-results");

    resultContainer.innerHTML = `
        <table class="table">
            <tr>
                <th>Platform</th>
                <th>Price</th>
                <th>Restaurant</th>
                <th>Delivery Time</th>
            </tr>
            ${results.map(result => `
                <tr>
                    <td>${result.platform}</td>
                    <td>${result.price}</td>
                    <td>${result.restaurant}</td>
                    <td>${result.delivery}</td>
                </tr>
            `).join('')}
        </table>
    `;
}

// Call the generateRandomPrices function when the search button is clicked
document.querySelector("button").addEventListener("click", generateRandomPrices);
