import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { AI4AlphaSection } from "@/components/layout/sections/ai4alpha";

export const metadata = {
  title: "AI4ALPHA - Real-Time Financial Event Timeline Intelligence",
  description: "Transform news, SEC filings, and market data into structured hourly event summaries with source citations. Real-time and historical data for quantitative research and LLM agents.",
  openGraph: {
    type: "website",
    url: "https://ai4alpha.ca",
    title: "AI4ALPHA - Real-Time Financial Event Timeline Intelligence",
    description: "Transform news, SEC filings, and market data into structured hourly event summaries with source citations. Real-time and historical data for quantitative research and LLM agents.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI4ALPHA - Financial Event Timeline Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://ai4alpha.com",
    title: "AI4ALPHA - Real-Time Financial Event Timeline Intelligence",
    description: "Transform news, SEC filings, and market data into structured hourly event summaries with source citations. Real-time and historical data for quantitative research and LLM agents.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <AI4AlphaSection />
      <BenefitsSection />
      <FeaturesSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
