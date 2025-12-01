import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import Image from "next/image";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "TrendingUp",
    title: "Event Detection",
    description:
      "Identify market-moving events as they happen. Get structured data with full source citations.",
  },
  {
    icon: "LineChart",
    title: "Historical Data",
    description:
      "Historical event data with price alignment. Perfect for research, backtesting, and analysis.",
  },
  {
    icon: "Bot",
    title: "LLM Agent Compatible",
    description:
      "Your AI agents can query: 'What happened to AAPL today?' and get structured, citable answers instantly.",
  },
  {
    icon: "Sparkle",
    title: "Noise Reduction",
    description:
      "Filter duplicate news, identify key information, and focus on events that actually matter.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="why-ai4alpha" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Why AI4ALPHA</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Edge in Market Data
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Stop manually parsing news and filings. Get structured event data 
            that explains market movements and powers your research.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <Image
          src="/appl_machine.jpeg"
          alt="Machine consumption structured financial data"
          width={1200}
          height={600}
          className="w-full rounded-lg border border-secondary"
        />
      </div>
    </section>
  );
};
