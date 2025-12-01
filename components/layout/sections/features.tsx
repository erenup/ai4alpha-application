import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Database",
    title: "Multi-Source Data Fusion",
    description:
      "Aggregate news, SEC/SEDAR filings, earnings reports, and real-time market data into a unified timeline.",
  },
  {
    icon: "Clock",
    title: "Hourly Event Buckets",
    description:
      "Events organized into hourly time buckets with price changes, volume spikes, and explanatory context.",
  },
  {
    icon: "Brain",
    title: "AI-Powered Extraction",
    description:
      "LLM pipeline extracts event type, sentiment, and explains price movements with source citations.",
  },
  {
    icon: "BarChart3",
    title: "1000+ Tickers Coverage",
    description:
      "Cross-market coverage of US equities, Canadian equities, and crypto with hourly structured data.",
  },
  {
    icon: "Zap",
    title: "Real-Time Processing",
    description:
      "Continuous processing of market events with full source citations for verification and validation.",
  },
  {
    icon: "Code",
    title: "API & MCP Ready",
    description:
      "Query event timelines via REST API or MCP. Your AI agents get structured, citable answers instantly.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Structured Market Event Data
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Aggregate scattered market information into structured hourly event timelines.
        Built for research, analysis, and AI agents.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
