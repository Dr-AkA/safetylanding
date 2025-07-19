export interface FAQItemKey {
  questionKey: string;
  answerKey: string;
}

export const faqData: FAQItemKey[] = [
  { questionKey: "location.question", answerKey: "location.answer" },
  { questionKey: "contact.question", answerKey: "contact.answer" },
  { questionKey: "support.question", answerKey: "support.answer" },
  { questionKey: "data.question", answerKey: "data.answer" },
  { questionKey: "customize.question", answerKey: "customize.answer" },
  { questionKey: "price.question", answerKey: "price.answer" },
];
