import { v4 } from "uuid";

const qBank = [
  {
    question: "A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?",
    answers: ["45%", "45*(5/11)%", "54*(6/11)%", "55%"],
    correct: "45*(5/11)%",
    id: v4(),
  },
  {
    question: "Two students appeared at an examination. One of them secured 9 marks more than the other and his marks was 56% of the sum of their marks. The marks obtained by them are:",
    answers: ["39, 30", "41, 32", "42, 33", "43, 34"],
    correct: "42, 33",
    id: v4(),
  },
  {
    question: "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
    answers: ["588", "600", "672", "700"],
    correct: "700",
    id: v4(),
  },
  {
    question: "What percentage of numbers from 1 to 70 have 1 or 9 in the unit's digit?",
    answers: ["1", "14", "20", "21"],
    correct: "20",
    id: v4(),
  },
  {
    question: "If A = x% of y and B = y% of x, then which of the following is true?",
    answers: ["A is smaller than B", "A is greater than B", "If x is smaller than y, then A is greater than B.", "None of these"],
    correct: "None of these",
    id: v4(),
  },
  {
    question: "In a certain school, 20% of students are below 8 years of age. The number of students above 8 years of age is 2/3rd of the number of students of 8 years of age which is 48. What is the total number of students in the school?",
    answers: ["72", "120", "150", "100"],
    correct: "100",
    id: v4(),
  },
  {
    question: "A student multiplied a number by	3/5	instead of 5/3, What is the percentage error in the calculation?",
    answers: ["34%", "44%", "54%", "64%"],
    correct: "64",
    id: v4(),
  },
  {
    question: "In an election between two candidates, one got 55% of the total valid votes, 20% of the votes were invalid. If the total number of votes was 7500, the number of valid votes that the other candidate got, was:",
    answers: ["2700", "2900", "3000", "3100"],
    correct: "2700",
    id: v4(),
  },
  {
    question: "Three candidates contested an election and received 1136, 7636 and 11628 votes respectively. What percentage of the total votes did the winning candidate get?",
    answers: ["57", "60", "65", "90"],
    correct: "57",
    id: v4(),
  },
  {
    question: "Rajeev buys good worth Rs. 6650. He gets a rebate of 6% on it. After getting the rebate, he pays sales tax @ 10%. Find the amount he will have to pay for the goods.",
    answers: ["Rs. 6876.10", "Rs. 6999.20", "Rs. 6654", "Rs. 7000"],
    correct: "Rs. 6876.10",
    id: v4(),
  },
];

export default (n=5) => {
  return Promise.resolve(qBank.sort(()=> 0.5 - Math.random()).slice(0, n));
}