const restaurants = ["J. Dawgs", "Chick-fil-A", "Bombay House", "Two Jacks Pizza", "Burger Supreme", "Sushi Burrito", "Simply Cheesecake"];

let randomButton = document.querySelector("Button");
randomButton.addEventListener("click", () => {
    const random = Math.floor(Math.random() * restaurants.length);
    alert(restaurants[random]);
});