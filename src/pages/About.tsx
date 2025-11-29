import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import processingPlant from "@/assets/backround.jpg";
import processingPlant1 from "@/assets/20250403_112339.jpg";
import processingPlant2 from "@/assets/20250403_113849.jpg";
import processingPlant3 from "@/assets/saralash.jpg";
import processingPlant4 from "@/assets/fura.jpg";

const About = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [processingPlant , processingPlant1, processingPlant2, processingPlant3,processingPlant4];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Avtomatik slayder
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // har 3 soniyada rasm almashtiriladi

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-center animate-fade-in">
            {t("about.title")}
          </h1>
          <p className="text-xl text-center text-secondary-foreground/80 max-w-3xl mx-auto animate-slide-up">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      {/* Company Story with Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">{t("about.story.heading")}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>{t("about.story.paragraph1")}</p>
                <p>{t("about.story.paragraph2")}</p>
                <p>{t("about.story.paragraph3")}</p>
              </div>
            </div>

            {/* Carousel */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-elegant">
              <img
                src={images[currentIndex]}
                alt={`Processing plant ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Prev/Next Buttons */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white text-black rounded-full p-2"
              >
                &#10094;
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white text-black rounded-full p-2"
              >
                &#10095;
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      idx === currentIndex ? "bg-primary" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              {t("about.mission.heading")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.mission.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-3">{t("about.mission.missionTitle")}</h3>
                <p className="text-muted-foreground">
                  {t("about.mission.missionDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-3">{t("about.mission.valuesTitle")}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t("about.mission.value1")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t("about.mission.value2")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t("about.mission.value3")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {t("about.mission.value4")}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              {t("about.export.heading")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.export.subtitle")}
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <Card className="border-2">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-primary-foreground">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">
                          {t("about.export.table.number")}
                        </th>
                        <th className="px-6 py-4 text-left font-bold">
                          {t("about.export.table.country")}
                        </th>
                        <th className="px-6 py-4 text-left font-bold">
                          {t("about.export.table.demand")}
                        </th>
                        <th className="px-6 py-4 text-left font-bold">
                          {t("about.export.table.exported")}
                        </th>
                        <th className="px-6 py-4 text-left font-bold">
                          {t("about.export.table.unmet")}
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {[
                        ["russia", 4000, 2000, 2000],
                        ["ukraine", 2000, 1000, 1000],
                        ["belarus", 500, 100, 400],
                        ["turkey", 2000, 500, 1500],
                        ["kazakhstan", 500, 100, 400],
                        ["japan", "10 000", "-", "10 000"],
                        ["europe", "10 000", "-", "10 000"],
                        ["tajikistan", 500, 250, 250],
                      ].map((row, index) => (
                        <tr
                          key={index}
                          className="border-b hover:bg-muted/50 transition-colors"
                        >
                          <td className="px-6 py-4">{index + 1}</td>
                          <td className="px-6 py-4 font-semibold">
                            {t(`about.export.countries.${row[0]}`)}
                          </td>
                          <td className="px-6 py-4">{row[1]}</td>
                          <td className="px-6 py-4 text-primary font-semibold">
                            {row[2]}
                          </td>
                          <td className="px-6 py-4">{row[3]}</td>
                        </tr>
                      ))}

                      <tr className="bg-primary/10 font-bold">
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">
                          {t("about.export.table.total")}
                        </td>
                        <td className="px-6 py-4">29 500</td>
                        <td className="px-6 py-4 text-primary">3950</td>
                        <td className="px-6 py-4">25 550</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              {t("about.whatWeDo.heading")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.whatWeDo.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-gold transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t("about.whatWeDo.mining.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("about.whatWeDo.mining.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gold transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t("about.whatWeDo.processing.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("about.whatWeDo.processing.desc")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gold transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {t("about.whatWeDo.distribution.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("about.whatWeDo.distribution.desc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Advantages */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              {t("about.advantages.heading")}
            </h2>
            <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              {t("about.advantages.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: t("about.advantages.premium.title"),
                desc: t("about.advantages.premium.desc"),
              },
              {
                title: t("about.advantages.equipment.title"),
                desc: t("about.advantages.equipment.desc"),
              },
              {
                title: t("about.advantages.team.title"),
                desc: t("about.advantages.team.desc"),
              },
              {
                title: t("about.advantages.sustainable.title"),
                desc: t("about.advantages.sustainable.desc"),
              },
              {
                title: t("about.advantages.flexible.title"),
                desc: t("about.advantages.flexible.desc"),
              },
              {
                title: t("about.advantages.global.title"),
                desc: t("about.advantages.global.desc"),
              },
              {
                title: t("about.advantages.pricing.title"),
                desc: t("about.advantages.pricing.desc"),
              },
              {
                title: t("about.advantages.support.title"),
                desc: t("about.advantages.support.desc"),
              },
            ].map((advantage, index) => (
              <Card
                key={index}
                className="bg-background/50 hover:bg-background transition-colors"
              >
                <CardContent className="pt-6">
                  <h3 className="font-bold mb-2 text-primary">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {advantage.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Shu tarzda boshqa bo‘limlar ham qoladi */}
    </div>
  );
};

export default About;
