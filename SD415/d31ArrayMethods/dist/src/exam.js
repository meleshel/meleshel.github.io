export function firstLast(arr) {
    const result = arr.map(name => {
        let nameObj = { firstName: name.split(' ')[0], lastName: name.split(' ')[1] };
        return nameObj;
    });
    return result;
}
const names = ['Fred', 'Smith', 'Carl', 'Lindstrom'];
console.log(firstLast(names));
//replace ends function
export function replaceEnds(arr, first, first2, last, last2) {
    const newArr = arr.slice();
    newArr.splice(0, 1, first, first2);
    newArr.splice(newArr.length - 1, 1, last, last2);
    return newArr;
}
const arr = [1, 2, 3, 4, 5];
console.log(replaceEnds(arr, 6, 1, 2, 4));
//higher order function
export function higho(func, arr) {
    return arr.map(func);
}
export function square(num) {
    return (num * num);
}
export function absVal(num) {
    return num < 0 ? -num : num;
}
console.log(higho(square, [1, 2, 3, 4]));
console.log(higho(absVal, [1, -2, 3, -4]));
//7b
export function calculateDailyTotalDuration(sessions) {
    let sum = 0;
    for (const session of sessions) {
        sum += session.duration;
    }
    return sum;
}
//7c
export function calculateTotalDuration(dailyRecord) {
    let total = 0;
    for (const day of dailyRecord) {
        total += calculateDailyTotalDuration(day.sessions);
    }
    return total;
}
//7d
export function getAllSessions(dailyRecord) {
    let allSessions = [];
    for (const days of dailyRecord) {
        allSessions = allSessions.concat(days.sessions);
    }
    return allSessions;
}
//7e
export function getAllSessionsForUser(dailyRecord, userId) {
    const allSessions = getAllSessions(dailyRecord);
    const filtered = allSessions.filter(session => session.userId === userId);
    return filtered;
}
//7f
export function getAllDurations(dailyRecord) {
    const allSessions = getAllSessions(dailyRecord);
    const allDuration = allSessions.map(session => session.duration);
    return allDuration;
}
