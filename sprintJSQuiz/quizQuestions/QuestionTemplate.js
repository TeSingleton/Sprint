export * from "./QuestionTemplate.js";

// build questions with template literals.

export const questionTemplate = [
  {
    question: "Who has the most letters in their full name ?",
    answers: {
      a: "Misha",
      b: "Precia",
      c: "Bonte",
      d: "Bubbas",
    },
  },
];

console.log(questionTemplate[0].answers.a);

// Make sure to connect all js modules to the index.html file. As well work on a quick MVP and populate html with js data.
