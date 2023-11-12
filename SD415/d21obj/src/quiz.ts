

// export interface StudentQuiz {
//     id: number;
//     quizAnswers: number[];
//   }
   
//   export interface StudentResult {
//     id: number;
//     score: number;
//   }
   
//   export const studentQuizzes: StudentQuiz[] = [];
//   export const CORRECT_ANSWERS: number[] = [1, 2, 3];
//   export function gradeStudent(
//     studentAnswers: number[],
//     correct: number[]
//   ): number {
//     let answers: number = 0;
//     for (let i = 0; i < studentAnswers.length; i++) {
//       if (studentAnswers[i] == correct[i]) {
//         answers++;
//       }
//     }
//     return answers;
//   }
   
//   export function gradeQuiz(
//     studentsAnswers: StudentQuiz[],
//     correct: number[]
//   ): number[] {
//     let result: number[] = [];
   
//     for (let i = 0; i < studentsAnswers.length; i++) {
//       const correctCount = gradeStudent(studentsAnswers[i].quizAnswers, correct);
//       result.push(correctCount);
//     }
   
//     return result;
//   }
//   //IMPLEMENT THIS
   
//   export function gradeQuizLabeled(
//     students: StudentQuiz[],
//     correct: number[]
//   ): StudentResult[] {
//     const result: StudentResult[] = [];
//     for (let i = 0; i < students.length; i++) {
//       const correctCount = gradeStudent(students[i].quizAnswers, correct);
//       const stuResult = {
//         id: students[i].id,
//         score: correctCount,
//       };
//       result.push(stuResult);
//     }
   
//     return result;
//   }
//   //IMPLEMENT THIS
   


export interface StudentQuiz {
  studentId: number;
  quizAnswers: number[];
}

export function gradeStudent(studentAnswers: number[],correct: number[]): number {
  let correctAnswer = 0;
  for (let i = 0; i < correct.length; i++) {
    if (correct[i] === studentAnswers[i]) {
      correctAnswer++;
    }
  }
  return correctAnswer;
}

export function gradeQuiz(student: StudentQuiz[], score: number[]): number[] {
  let correctAnswers: number[] = [];
  let count = 0;

  for (let i = 0; i < student.length; i++) {
    count = 0;
    for (let j = 0; j < score.length; j++) {
      if (student[i].quizAnswers[j] === score[j]) {
        count++;
      }
    }
    correctAnswers.push(count);
  }
  return correctAnswers;
}
//IMPLEMENT THIS
export interface ScoresId{
    id?:number,
    score?:number
}
export function gradeQuizLabeled(student: StudentQuiz[],score: number[]
): ScoresId[] {
  let correctAnswers: ScoresId[] = [];
  let count = 0;
 

  for (let i = 0; i < student.length; i++) {
    count = 0;
    for (let j = 0; j < score.length; j++) {
      if (student[i].quizAnswers[j] === score[j]) {
        count++;
      }
    } 
    let studentScores: ScoresId = {id:student[i].studentId, score:count};
    correctAnswers.push(studentScores);
  }
  return correctAnswers;
}

