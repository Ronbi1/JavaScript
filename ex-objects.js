let p1 = {
    name: "Robert",
    age: 21,
    city: "Tel aviv"
}
let p2 = {
    name: "Jill",
    age: 21,
    city: "Beer Sheva"
}

if (p1.age !== p2.age && p1.city !== p2.city) {
    console.log(p2.name + " wanted to date " + p1.name + ", but couldn't");

} else {
    console.log(p2.name + " wanted to date " + p1.name)
}

let library = {
    books: [{ title: "Little Prince", author: "Antoine de Saint-Exupéry" },
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "The Hunger Games", author: "Suzanne Collins" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { title: "Alice's Adventures in Wonderland", author: "Lewis Carroll" },
    ]
}
// console.log(library.books[1].title);

const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
}
const fname = "teD"//'Bob' or 'Ted';
const lowerName = fname.toLowerCase();

if (!(lowerName in reservations)) {
    reservations[lowerName] = { claimed: true };
    console.log(reservations);
}
else if (reservations[lowerName].claimed) {
    console.log("Hmm, someone already claimed this reservation");
} else {
    console.log("Welcome, " + lowerName);
}


const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // false, // choose one
    fridge: {
        price: 500,
        works: false, // false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
const hasOven = kitchen.hasOven;
const radish = kitchen.fridge.items[1].name;
const expiryDifference = date - (kitchen.fridge.items[1].expiryDate);
const works = kitchen.fridge.works;
const owner = kitchen.owner;
let msg = owner + "'s" + radish + " expired " + expiryDifference + " day ago.";
// console.log(radish);

if (works) {
    msg += " Weird, considering her fridge works."
} else {
    msg += " Probably because her fridge doesn't work."
}
if (hasOven) {
    msg += " Luckily, she has an oven to cook the " + radish + " in."
} else {
    msg += " Too bad she doesn't have an oven to cook the " + radish + " in."
}
if (!works) {
    const price = kitchen.fridge.price / 2;
    msg += " And she'll have to pay " + price + " to fix the fridge."
}
console.log(msg);


