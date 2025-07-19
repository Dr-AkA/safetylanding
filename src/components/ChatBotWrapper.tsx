
import { getTranslations } from "next-intl/server";
import { Chatbot } from "./chatbot";
import { faqData } from "./faqData";

export default async function ChatbotWrapper() {
  const t = await getTranslations("FAQ");
const greeting = await getTranslations().then(t => t("chatbot.greeting"));

  const translatedFaqData = faqData.map((item) => ({
    question: t(item.questionKey),
    answer: t(item.answerKey),
  }));

  return <Chatbot faqItems={translatedFaqData} initialMessage={greeting} />;
}
