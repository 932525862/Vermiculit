import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Production = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      number: "01",
      title: t("production.step1.title") || "Mining Raw Vermiculite",
      description: t("production.step1.description") || "Extraction of high-quality vermiculite ore from our carefully managed mining sites using modern equipment and sustainable practices. Selective mining ensures optimal ore grade and minimal environmental impact.",
    },
    {
      number: "02",
      title: t("production.step2.title") || "Sorting & Cleaning",
      description: t("production.step2.description") || "Raw ore undergoes initial screening to remove oversize rocks and debris. Multiple stages of washing and cleaning eliminate impurities, clay, and unwanted materials, preparing the ore for concentration.",
    },
    {
      number: "03",
      title: t("production.step3.title") || "Concentrate Production",
      description: t("production.step3.description") || "Advanced separation techniques including gravity separation, magnetic separation, and screening isolate pure vermiculite concentrate. Material is graded into various size classifications meeting industry specifications.",
    },
    {
      number: "04",
      title: t("production.step4.title") || "Heating & Expanding",
      description: t("production.step4.description") || "Concentrate vermiculite enters high-temperature furnaces (800-1100°C) where rapid heating causes water between mineral layers to vaporize, expanding the material up to 30 times its original volume into lightweight, accordion-like particles.",
    },
    {
      number: "05",
      title: t("production.step5.title") || "Packaging & Quality Control",
      description: t("production.step5.description") || "Expanded vermiculite is cooled, screened to desired grade specifications, and subjected to rigorous quality testing. Final product is packaged according to customer requirements in bags, big bags, or bulk containers for shipment.",
    },
    {
      number: "06",
      title: t("production.step6.title") || "Ready for Distribution",
      description: t("production.step6.description") || "Finished products are stored in climate-controlled warehouses and prepared for distribution. Our logistics network ensures timely delivery to customers worldwide, maintaining product quality throughout the supply chain.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-center animate-fade-in">
            {t("production.title")}
          </h1>
          <p className="text-xl text-center text-secondary-foreground/80 max-w-3xl mx-auto animate-slide-up">
            {t("production.description")}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              {t("production.intro.heading")}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t("production.intro.p1")}
            </p>
            <p className="text-lg text-muted-foreground">
              {t("production.intro.p2")}
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-primary transition-all hover:shadow-elegant"
                >
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                      <div className="md:col-span-2">
                        <div className="text-6xl font-bold text-primary/20">
                          {step.number}
                        </div>
                      </div>
                      <div className="md:col-span-10">
                        <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="flex justify-center mt-6">
                        <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">
              {t("production.quality.heading")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {t("production.quality.testing.title")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("production.quality.testing.items.item1")}
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("production.quality.testing.items.item2")}
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("production.quality.testing.items.item3")}
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("production.quality.testing.items.item4")}
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("production.quality.testing.items.item5")}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {t("production.quality.standards.title")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("production.quality.standards.items.item1")}
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("production.quality.standards.items.item2")}
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("production.quality.standards.items.item3")}
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("production.quality.standards.items.item4")}
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("production.quality.standards.items.item5")}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-secondary text-secondary-foreground border-2">
              <CardContent className="pt-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {t("production.commitment.title")}
                </h3>
                <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
                  {t("production.commitment.text")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              {t("production.sustainability.heading")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("production.sustainability.p")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{t("production.sustainability.stats.stat1.value")}</div>
                  <p className="text-sm text-muted-foreground">
                    {t("production.sustainability.stats.stat1.label")}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{t("production.sustainability.stats.stat2.value")}</div>
                  <p className="text-sm text-muted-foreground">
                    {t("production.sustainability.stats.stat2.label")}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{t("production.sustainability.stats.stat3.value")}</div>
                  <p className="text-sm text-muted-foreground">
                    {t("production.sustainability.stats.stat3.label")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Production;
