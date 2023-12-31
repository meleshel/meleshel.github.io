/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr, a, b) {
    return arr.filter(num => num >= a && num <= b);
}
/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
export function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
export const calculator = {
    methods: {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    },
    calculate: function (str) {
        const tokens = str.split(' ');
        const operator = tokens[1];
        const a = parseFloat(tokens[0]);
        const b = parseFloat(tokens[2]);
        if (isNaN(a) || isNaN(b) || !this.methods[operator]) {
            return NaN; // Invalid input
        }
        return this.methods[operator](a, b);
    },
    addMethod: function (name, func) {
        this.methods[name] = func;
    },
};
export function unique(arr) {
    return Array.from(new Set(arr));
}
export function groupById(users) {
    // declare usersById to be an object with string keys and User values
    const usersById = {};
    // FURTHER IMPLEMENTATION REQUIRED HERE 
    for (const user of users) {
        usersById[user.id] = user;
    }
    return usersById;
}
export function map2fullName(users) {
    return users.map(user => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }));
}
export function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}
export function findOldest(users) {
    return users.reduce((oldest, user) => (user.age > oldest.age ? user : oldest), users[0]);
}
/* getAverageAge using reduce */
export function getAverageAge(users) {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}
