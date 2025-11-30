import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What data sources do you cover?",
    answer: "We aggregate news from major financial outlets, SEC filings (10-K, 10-Q, 8-K), SEDAR+ filings for Canadian equities, company press releases, and real-time market data (OHLCV, volume).",
    value: "item-1",
  },
  {
    question: "What is the time resolution?",
    answer: "Events are organized into hourly time buckets (e.g., 10:30-11:30). Each bucket contains all relevant events with price/volume alignment for that period.",
    value: "item-2",
  },
  {
    question: "How does the AI extraction work?",
    answer: "Our LLM pipeline processes raw text to extract event type, sentiment score, novelty score, and determines if the events explain observed price movements. Each extraction includes confidence scores and source citations.",
    value: "item-3",
  },
  {
    question: "What assets do you cover?",
    answer: "Currently we cover US equities, Canadian equities, and select cryptocurrencies. Coverage is expanding continuously.",
    value: "item-4",
  },
  {
    question: "How can I access the data?",
    answer: "Data is available via REST API and MCP (Model Context Protocol) for direct LLM agent integration. Contact us for API access and pricing.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
