import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/backround.jpg";
import processingPlant from "@/assets/qaytaishlash.jpg";
import concentrateImage from "@/assets/maxsulot1.jpg";
import expandedImage from "@/assets/maxsulot2.jpg";
import ishjarayon from "@/assets/ishjarayon.mp4";
import Mining from "@/assets/qazilma (1).mp4";
import Sorting from "@/assets/saralash.jpg";
import Concentrate from "@/assets/bak (3).mp4";
import Heating from "@/assets/bak (5).mp4";
import Packaging from "@/assets/bak (4).mp4";
import Distribution from "@/assets/tahlam.jpg";
import Distribution1 from "@/assets/rasss.jpg";

const Gallery = () => {
  const { t } = useTranslation();

  const galleryItems = [
    {
      image: heroImage,
      title: t("gallery.items.mining.title"),
      description: t("gallery.items.mining.description"),
      category: t("gallery.items.mining.category"),
    },
    {
      image: processingPlant,
      title: t("gallery.items.processing.title"),
      description: t("gallery.items.processing.description"),
      category: t("gallery.items.processing.category"),
    },
    {
      image: concentrateImage,
      title: t("gallery.items.concentrate.title"),
      description: t("gallery.items.concentrate.description"),
      category: t("gallery.items.concentrate.category"),
    },
    {
      image: expandedImage,
      title: t("gallery.items.expanded.title"),
      description: t("gallery.items.expanded.description"),
      category: t("gallery.items.expanded.category"),
    },
    {
      image: Sorting,
    },
    {
      image: Distribution,
      title: t("gallery.items.expanded.title"),
      description: t("gallery.items.expanded.description"),
      category: t("gallery.items.expanded.category"),
    },
    {
      image: Distribution1,
      title: t("gallery.items.expanded.title"),
      description: t("gallery.items.expanded.description"),
      category: t("gallery.items.expanded.category"),
    },
  ];

  // Bu erda barcha boshqa import qilingan videolarni ro'yxatlab qo'ydim.
  // Asosiy (katta) video: ishjarayon
  // Qo'shimcha videolar: Mining, Concentrate, Heating, Packaging (ularni 2 x 2 gridda ko'rsatamiz)
  const additionalVideos = [
    { src: Mining,},
    { src: Concentrate, },
    { src: Heating,  },
    { src: Packaging,},
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-center animate-fade-in">
            {t("nav.gallery")}
          </h1>
          <p className="tryext-xl text-center text-secondary-foreground/80 max-w-3xl mx-auto animate-slide-up">
            {t("gallery.description")}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-all"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title || `gallery-${index}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {item.category && (
                      <span className="text-sm font-semibold text-primary uppercase tracking-wide mb-2 block">
                        {item.category}
                      </span>
                    )}
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - katta video va qo'shimcha videolar */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-6">
              {t("gallery.video.heading")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("gallery.video.subtitle")}
            </p>

            {/* Asosiy katta video */}
            <div className="aspect-video bg-secondary rounded-lg overflow-hidden mb-10">
              <video
                src={ishjarayon}
                controls
                className="w-full h-full object-cover rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Qo'shimcha videolar - grid, har qatorda 2 ta */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-serif font-bold mb-6 text-center">
              {t("gallery.title") ?? t("gallery.video.more") ?? "Boshqa videolar"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalVideos.map((v, idx) => (
                <Card key={idx} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <video
                      src={v.src}
                      controls
                      className="w-full h-full object-cover"
                      title={v.title}
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                      <p className="text-sm font-semibold">{v.title}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              {t("gallery.equipment.heading")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("gallery.equipment.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-gold transition-shadow">
              <h3 className="text-xl font-bold mb-3">{t("gallery.equipment.fleet.title")}</h3>
              <p className="text-muted-foreground">
                {t("gallery.equipment.fleet.desc")}
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-gold transition-shadow">
              <h3 className="text-xl font-bold mb-3">{t("gallery.equipment.plant.title")}</h3>
              <p className="text-muted-foreground">
                {t("gallery.equipment.plant.desc")}
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-gold transition-shadow">
              <h3 className="text-xl font-bold mb-3">{t("gallery.equipment.furnaces.title")}</h3>
              <p className="text-muted-foreground">
                {t("gallery.equipment.furnaces.desc")}
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
