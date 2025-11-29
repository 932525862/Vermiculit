import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Mining from "@/assets/qazilma (1).mp4";
import Sorting from "@/assets/saralash.jpg";
import Concentrate from "@/assets/bak (3).mp4";
import Heating from "@/assets/bak (5).mp4";
import Packaging from "@/assets/bak (4).mp4";
import Distribution from "@/assets/tahlam.jpg";

const Production = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      number: "01",
      title: t("production.step1.title") || "Mining Raw Vermiculite",
      description:
        t("production.step1.description") ||
        "Extraction of high-quality vermiculite ore from our carefully managed mining sites using modern equipment and sustainable practices.",
      media: {
        type: "video",
        src: Mining,
        alt: "Mining video",
        fallbackImg: Sorting,
      },
    },
    {
      number: "02",
      title: t("production.step2.title") || "Sorting & Cleaning",
      description:
        t("production.step2.description") ||
        "Raw ore undergoes initial screening to remove oversize rocks and debris...",
      media: { type: "image", src: Sorting, alt: "Sorting image" },
    },
    {
      number: "03",
      title: t("production.step3.title") || "Concentrate Production",
      description:
        t("production.step3.description") ||
        "Advanced separation techniques including gravity separation...",
      media: {
        type: "video",
        src: Concentrate,
        alt: "Concentrate video",
        fallbackImg: Sorting,
      },
    },
    {
      number: "04",
      title: t("production.step4.title") || "Heating & Expanding",
      description:
        t("production.step4.description") ||
        "Concentrate vermiculite enters high-temperature furnaces...",
      media: {
        type: "video",
        src: Heating,
        alt: "Heating video",
        fallbackImg: Sorting,
      },
    },
    {
      number: "05",
      title: t("production.step5.title") || "Packaging & Quality Control",
      description:
        t("production.step5.description") ||
        "Expanded vermiculite is cooled, screened to desired grade specifications...",
      media: {
        type: "video",
        src: Packaging,
        alt: "Packaging video",
        fallbackImg: Sorting,
      },
    },
    {
      number: "06",
      title: t("production.step6.title") || "Ready for Distribution",
      description:
        t("production.step6.description") ||
        "Finished products are stored in climate-controlled warehouses and prepared for distribution.",
      media: { type: "image", src: Distribution, alt: "Distribution image" },
    },
  ];

  const [videoFailed, setVideoFailed] = useState(() => processSteps.map(() => false));
  const handleVideoError = (i) => {
    setVideoFailed((p) => {
      const c = [...p];
      c[i] = true;
      return c;
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
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

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">{t("production.intro.heading")}</h2>
            <p className="text-lg text-muted-foreground mb-4">{t("production.intro.p1")}</p>
            <p className="text-lg text-muted-foreground">{t("production.intro.p2")}</p>
          </div>
        </div>
      </section>

      {/* Process Steps — Bitta border ichida media + text */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {processSteps.map((step, index) => {
              const isLeftMedia = index % 2 === 0;
              const media = step.media || {};
              return (
                <div
                  key={step.number}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                  // encase both media + text in single yellow border container
                >
                  <div
                    className={`col-span-1 md:col-span-2 rounded-xl shadow-xl`}
                    style={{ border: "2px solid #f9c31f", padding: 18 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                      {/* MEDIA */}
                      <div className={`${isLeftMedia ? "md:order-1" : "md:order-2"}`}>
                        {media.type === "video" ? (
                          !videoFailed[index] ? (
                            <div className="w-full h-[440px] rounded-lg overflow-hidden bg-gray-50">
                              <video
                                controls
                                playsInline
                                preload="metadata"
                                poster={media.fallbackImg || ""}
                                className="w-full h-full object-cover"
                                onError={() => handleVideoError(index)}
                              >
                                <source src={media.src} type="video/mp4" />
                                {t("production.videoNotSupported") || "Your browser does not support the video tag."}
                              </video>
                            </div>
                          ) : (
                            <img
                              src={media.fallbackImg || Sorting}
                              alt={media.alt || "fallback"}
                              className="w-full h-[440px] object-cover rounded-lg"
                            />
                          )
                        ) : (
                          <img
                            src={media.src}
                            alt={media.alt}
                            className="w-full h-[440px] object-cover rounded-lg"
                          />
                        )}
                      </div>

                      {/* TEXT */}
                      <div className={`${isLeftMedia ? "md:order-2" : "md:order-1"}`}>
                        <div className="max-w-xl">
                          <div className="flex items-start">
                            <div className="text-7xl font-bold text-primary/20 mr-6 leading-none">
                              {step.number}
                            </div>
                            <div>
                              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
                                {step.title}
                              </h3>
                              <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>
                          </div>

                          {index < processSteps.length - 1 && (
                            <div className="mt-6">
                              <ArrowRight className="h-6 w-6 text-primary animate-pulse" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality & Sustainability sections (unchanged) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-12 text-center">{t("production.quality.heading")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{t("production.quality.testing.title")}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>{t("production.quality.testing.items.item1")}</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>{t("production.quality.testing.items.item2")}</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>{t("production.quality.testing.items.item3")}</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>{t("production.quality.testing.items.item4")}</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>{t("production.quality.testing.items.item5")}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{t("production.quality.standards.title")}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>{t("production.quality.standards.items.item1")}</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>{t("production.quality.standards.items.item2")}</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>{t("production.quality.standards.items.item3")}</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>{t("production.quality.standards.items.item4")}</li>
                    <li className="flex items-start"><span className="text-primary mr-2">•</span>{t("production.quality.standards.items.item5")}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-secondary text-secondary-foreground border-2">
              <CardContent className="pt-8 text-center">
                <h3 className="text-2xl font-bold mb-4">{t("production.commitment.title")}</h3>
                <p className="text-secondary-foreground/80 max-w-2xl mx-auto">{t("production.commitment.text")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">{t("production.sustainability.heading")}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t("production.sustainability.p")}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{t("production.sustainability.stats.stat1.value")}</div>
                  <p className="text-sm text-muted-foreground">{t("production.sustainability.stats.stat1.label")}</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{t("production.sustainability.stats.stat2.value")}</div>
                  <p className="text-sm text-muted-foreground">{t("production.sustainability.stats.stat2.label")}</p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{t("production.sustainability.stats.stat3.value")}</div>
                  <p className="text-sm text-muted-foreground">{t("production.sustainability.stats.stat3.label")}</p>
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
