// 1. Create an array of user objects
const users = [
    {
        name: "Alice",
        age: 25,
        hobbies: ["Reading", "Cooking", "Cycling"]
    },
    {
        name: "Bob",
        age: 30,
        hobbies: ["Hiking", "Painting", "Gaming"]
    },
    {
        name: "Charlie",
        age: 35,
        hobbies: ["Photography", "Running", "Gaming"]
    }
];

// 2. Destructure the user properties and display them in the console
users.forEach(user => {
    // Using destructuring to extract name and age
    const { name, age } = user;
    console.log(`Name: ${name}, Age: ${age}`);
});

// 3. Use the spread operator to combine the hobbies arrays of all users
const allHobbies = [...users[0].hobbies, ...users[1].hobbies, ...users[2].hobbies];

// Display the combined hobbies array in the console
console.log("All Hobbies:", allHobbies);
