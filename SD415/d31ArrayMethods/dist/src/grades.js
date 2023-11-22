/*
This file contains  code for a quiz object. The quiz object has a key property that contains Answer objects that
each have a property for the correct answer and another for an identifier of the question.  The way to calculate scores
for this data structure is to order the answers for a given student according to the qid property and do the same
for the key.  Then compare the two lists of answers (parallel arrays) and add up the number of matches.

You need to implement the three methods.

This is a good example of using a comparator function to sort an array of objects and working with a data structure of nesed
arrays and objects.

*/
export const quiz = {};
quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
    { sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
    { sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];
/**
 *
 * @param {Object} ans1 is an answer object
 * @param {Object} ans2 is an answer object
 * @returns {number} difference of the identifiers
 */
quiz.answerComparator = function (ans1, ans2) {
    return ans1.qid - ans2.qid;
};
/**
 *
 * @param {*} sid student id
 * @returns {number} score for student
 * find this student
 * sort the student answers
 * compare them against key and add up matches
 */
quiz.scoreStudent = function (sid) {
    const student = quiz.students.find((s) => s.sid === sid);
    if (!student) {
        return 0; // Student not found
    }
    const sortedStudentAnswers = [...student.answers].sort(quiz.answerComparator);
    const sortedKey = [...quiz.key].sort(quiz.answerComparator);
    let score = 0;
    for (let i = 0; i < sortedStudentAnswers.length; i++) {
        if (sortedStudentAnswers[i].ans === sortedKey[i].ans) {
            score++;
        }
    }
    return score;
};
/**
 * @returns {number} average score of all students
 * go through list of students and get score of each, then the average
 */
quiz.getAverage = function () {
    if (quiz.students.length === 0) {
        return 0; // No students in the quiz
    }
    const totalScores = quiz.students.reduce((total, student) => {
        const score = quiz.scoreStudent(student.sid);
        return total + score;
    }, 0);
    return totalScores / quiz.students.length;
};
// function answerComparator(ans1, ans2) {
// //IMPLEMENT THIS
// }
// /**
//  * 
//  * @param {*} sid student id
//  * @returns {number} score for student
//  * find this student
//  * sort the student answers
//  * compare them against key and add up matches
//  */
// quiz.scoreStudent = function (sid) {
// //IMPLEMENT THIS
// };
// /**
//  * @returns {number} average score of all students
//  * go through list of students and get score of each, then the average
//  */
// quiz.getAverage = function(){
// //IMPLEMENT THIS
// };
