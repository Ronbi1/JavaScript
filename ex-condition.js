///question1
let age = 20;
if (age >= 18) {
    console.log("You can vote!");
}
else {
    console.log("You can't vote");
}
///question2
let score = 84;

if (score >= 90 && score <= 100) {
    console.log("Your grade is: A");
}
else if (score >= 80) {
    console.log("Your grade is: B");
}
else if (score >= 70) {
    console.log("Your grade is: C");
}
else if (score >= 60) {
    console.log("Your grade is: D");
}
else {
    console.log("Your grade is: F");
}

///question3
let temperature = 20;
let weather = "sunny";

if (weather == "sunny") {
    if (temperature > 24) {
        console.log("Go to the beach");
    }
    else if (temperature >= 15) {
        console.log("Go for a walk");
    }
    else if (temperature < 15) {
        console.log("Stay inside and read");
    }
}
else if (weather == "rainy") {
    console.log("Watch a movie indoors");
}
else if (weather == "cloudy") {
    if (temperature > 21) {
        console.log("Go hiking");
    }
    else {
        console.log("Visit a museum");
    }
}

///question4
let usernameLength = 5;
let passwordLength = 8;
let userAge = 15;

if (usernameLength >= 5 && passwordLength >= 8 && userAge >= 13) {
    console.log("You can create an account!");
}
else {
    if (usernameLength < 5) {
        console.log("Username must be at least 5 characters");
    }
    if (passwordLength < 8) {
        console.log("Password must be at least 8 characters");
    }
    if (userAge < 13) {
        console.log("User must be 13 or older");
    }
}

let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.

function Discount(customerType, purchaseAmount, dayOfWeek) {
    if (customerType === "vip") {
        return "Customer type: " + customerType + "\nDiscount applied: 20%";
    }
    if (customerType === "premium") {
        if (dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6) {
            return "Customer type: " + customerType + "\nDiscount applied: 15%";
        } else {
            return "Customer type: " + customerType + "\nDiscount applied: 10%";
        }
    }
    if (customerType === "regular") {
        if (purchaseAmount > 100) {
            return "Customer type: " + customerType + "\nDiscount applied: 10%";
        } else if (purchaseAmount > 50) {
            return "Customer type: " + customerType + "\nDiscount applied: 5%";
        } else {
            return "Customer type: " + customerType + "\nDiscount applied: 0%";
        }
    }
}
console.log(Discount(customerType, purchaseAmount, dayOfWeek));

let year = 1900;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log("leap");
}
else {
    console.log("not leap");
} 
