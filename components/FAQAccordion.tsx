"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 mb-4">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions (FAQs)
      </h3>
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-purple-200 bg-purple-50/50 shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer group"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className={`text-base font-semibold transition-colors duration-200 ${
                    isOpen ? "text-purple-700" : "text-gray-900 group-hover:text-purple-600"
                  }`}
                >
                  {index + 1}. {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                    isOpen
                      ? "bg-purple-600 text-white rotate-0"
                      : "bg-gray-100 text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-600"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="px-5 pb-4 pt-0">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
