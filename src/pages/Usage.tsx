import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  Sprout,
  Shield,
  Flame,
  Factory,
  Droplet,
} from "lucide-react";
import Mining from "@/assets/qurilish.jpeg";
import Sorting from "@/assets/qishloq.jpeg";
import Concentrate from "@/assets/izalatsiya.jpeg";
import Heating from "@/assets/olovda.png";
import Packaging from "@/assets/metal.png";
import Distribution from "@/assets/S-15280.webp";

const Usage = () => {
  const { t } = useTranslation();
  const applications = [
    {
      icon: Home,
      image: Mining,
      title: t("usagePage.applications.items.0.title"),
      description: t("usagePage.applications.items.0.description"),
      benefits: t("usagePage.applications.items.0.benefits", { returnObjects: true }),
    },
    {
      icon: Sprout,
      image: Sorting,
      title: t("usagePage.applications.items.1.title"),
      description: t("usagePage.applications.items.1.description"),
      benefits: t("usagePage.applications.items.1.benefits", { returnObjects: true }),
    },
    {
      icon: Shield,
      image: Concentrate,
      title: t("usagePage.applications.items.2.title"),
      description: t("usagePage.applications.items.2.description"),
      benefits: t("usagePage.applications.items.2.benefits", { returnObjects: true }),
    },
    {
      icon: Flame,
      image: Heating,
      title: t("usagePage.applications.items.3.title"),
      description: t("usagePage.applications.items.3.description"),
      benefits: t("usagePage.applications.items.3.benefits", { returnObjects: true }),
    },
    {
      icon: Factory,
      image: Packaging,
      title: t("usagePage.applications.items.4.title"),
      description: t("usagePage.applications.items.4.description"),
      benefits: t("usagePage.applications.items.4.benefits", { returnObjects: true }),
    },
    {
      icon: Droplet,
      image: Distribution,
      title: t("usagePage.applications.items.5.title"),
      description: t("usagePage.applications.items.5.description"),
      benefits: t("usagePage.applications.items.5.benefits", { returnObjects: true }),
    },
  ];

  const technicalProperties = [
    {
      title: t("usagePage.technicalProperties.items.0.title"),
      desc: t("usagePage.technicalProperties.items.0.desc"),
    },
    {
      title: t("usagePage.technicalProperties.items.1.title"),
      desc: t("usagePage.technicalProperties.items.1.desc"),
    },
    {
      title: t("usagePage.technicalProperties.items.2.title"),
      desc: t("usagePage.technicalProperties.items.2.desc"),
    },
    {
      title: t("usagePage.technicalProperties.items.3.title"),
      desc: t("usagePage.technicalProperties.items.3.desc"),
    },
    {
      title: t("usagePage.technicalProperties.items.4.title"),
      desc: t("usagePage.technicalProperties.items.4.desc"),
    },
    {
      title: t("usagePage.technicalProperties.items.5.title"),
      desc: t("usagePage.technicalProperties.items.5.desc"),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-center animate-fade-in">
            {t("usagePage.hero.title")}
          </h1>
          <p className="text-xl text-center text-secondary-foreground/80 max-w-3xl mx-auto animate-slide-up">
            {t("usagePage.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* What is Vermiculite */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">
              {t("nav1.usage")}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t("usagePage.whatIsVermiculite.description1")}
            </p>
            <p className="text-lg text-muted-foreground">
              {t("usagePage.whatIsVermiculite.description2")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-primary mb-2">30x</div>
                <p className="text-muted-foreground">
                  {t("usagePage.cards.expansion")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-primary mb-2">1100°C</div>
                <p className="text-muted-foreground">
                  {t("usagePage.cards.temperature")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">
                  {t("usagePage.cards.natural")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              {t("usagePage.applications.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("usagePage.applications.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-elegant transition-shadow"
                >
                  <CardContent className="pt-8">
                    {/* Image for the application */}
                    <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
                      <img src={app.image} alt={`${app.title} image`} className="w-full h-full object-cover" />
                    </div>

                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3 text-primary">
                      {app.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {app.description}
                    </p>
                    <div className="pt-4 border-t border-border">
                      <h4 className="font-semibold mb-2 text-sm">
                        {t("usagePage.applications.keyBenefits", "Asosiy foydalar:")}
                      </h4>
                      <ul className="space-y-1">
                        {app.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="text-primary mr-2">•</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Properties */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">
              {t("usagePage.technicalProperties.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalProperties.map((prop, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {prop.title}
                    </h3>
                    <p className="text-muted-foreground">{prop.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Usage;
