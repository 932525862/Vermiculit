import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Mountain, Factory, Globe } from "lucide-react";
import heroImage from "@/assets/hero-mining.jpg";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
            {t("home.hero.title")}
            <span className="block text-primary mt-2">{t("home.hero.subtitle")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up">
            {t("home.hero.lead")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              asChild
              size="lg"
              className="bg-gradient-gold hover:opacity-90 transition-opacity text-lg px-8"
            >
              <Link to="/about">
                {t("home.description")} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-[#524e4e] border-white hover:bg-white hover:text-secondary text-lg px-8"
            >
              <Link to="/products">{t("nav.products")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              {t("home.whyChooseUs")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.whyChooseUsDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors hover:shadow-gold">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">
                  {t("home.expertMining")}
                </h3>
                <p className="text-muted-foreground">
                  {t("home.expertMiningDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors hover:shadow-gold">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">
                  {t("home.advancedProcessing")}
                </h3>
                <p className="text-muted-foreground">
                  {t("home.advancedProcessingDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors hover:shadow-gold">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">
                  {t("home.globalDistribution")}
                </h3>
                <p className="text-muted-foreground">
                  {t("home.globalDistributionDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Products Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              {t("home.ourProducts")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("home.ourProductsDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-elegant transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-3xl font-serif font-bold mb-4 text-primary">
                  {t("home.concentrateVermiculite")}
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t("home.highPurity")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t("home.idealForProcessing")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t("home.variousGrades")}</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/products">
                     {t("home.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-3xl font-serif font-bold mb-4 text-primary">
                  {t("home.expandedVermiculite")}
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t("home.lightweight")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t("home.fireResistant")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{t("home.readyForUse")}</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/products">
                    {t("home.learnMore")}<ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {t("home.readyToPartner")}
          </h2>
          <p className="text-xl mb-8 text-secondary-foreground/80 max-w-2xl mx-auto">
            {t("home.readyToPartnerDesc")}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-gold hover:opacity-90 transition-opacity text-lg px-12"
          >
            <Link to="/contact">
              {t("home.getInTouch")} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
