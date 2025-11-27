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

const Usage = () => {
  const { t } = useTranslation();
  const applications = [
    {
      icon: Home,
      title: "Construction",
      description:
        "Lightweight aggregate in concrete, plaster insulation, acoustic panels, and roofing materials. Provides excellent thermal insulation while reducing structural weight.",
      benefits: [
        "Thermal and acoustic insulation",
        "Lightweight concrete production",
        "Plaster and mortar additive",
        "Roof and floor screeds",
      ],
    },
    {
      icon: Sprout,
      title: "Agriculture & Horticulture",
      description:
        "Soil conditioner improving aeration, water retention, and nutrient availability. Used in potting mixes, hydroponics, and greenhouse cultivation for optimal plant growth.",
      benefits: [
        "Improves soil aeration and drainage",
        "Enhances water retention capacity",
        "pH neutral and sterile growing medium",
        "Ideal for seed germination",
      ],
    },
    {
      icon: Shield,
      title: "Insulation",
      description:
        "Superior thermal insulation for buildings, industrial equipment, and high-temperature applications. Non-combustible properties make it ideal for fire-safe construction.",
      benefits: [
        "Exceptional thermal resistance",
        "Loose-fill attic insulation",
        "Cavity wall insulation",
        "High-temperature equipment insulation",
      ],
    },
    {
      icon: Flame,
      title: "Fireproof Materials",
      description:
        "Critical component in fire protection systems, fire-resistant boards, fire doors, and fireproofing coatings. Maintains structural integrity at extreme temperatures.",
      benefits: [
        "Non-combustible and fire-resistant",
        "Fire door cores and panels",
        "Intumescent coatings additive",
        "Safe rooms and fire barriers",
      ],
    },
    {
      icon: Factory,
      title: "Metallurgy & Industry",
      description:
        "Used in foundry operations, metal casting, and as a high-temperature insulating medium. Protects equipment and provides safe handling of molten materials.",
      benefits: [
        "Foundry bed insulation",
        "Riser and feeder sleeve insulation",
        "Heat treatment furnace insulation",
        "Metal casting applications",
      ],
    },
    {
      icon: Droplet,
      title: "Filtration & Absorbents",
      description:
        "Effective filtration medium for liquids and gases. Excellent absorbent for industrial spills, chemical containment, and environmental remediation applications.",
      benefits: [
        "Swimming pool and water filtration",
        "Industrial liquid filtration",
        "Oil and chemical spill absorbent",
        "Animal bedding and litter",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-center animate-fade-in">
            Vermiculite Applications
          </h1>
          <p className="text-xl text-center text-secondary-foreground/80 max-w-3xl mx-auto animate-slide-up">
            Versatile mineral solution for diverse industries and applications
            worldwide
          </p>
        </div>
      </section>

      {/* What is Vermiculite */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">
              {t("nav.usage")}
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Vermiculite is a naturally occurring mineral that, when heated to
              high temperatures, expands into lightweight, accordion-like
              particles. This unique expansion process creates a material with
              exceptional insulating, absorbent, and lightweight properties.
            </p>
            <p className="text-lg text-muted-foreground">
              The expanded structure of vermiculite gives it an extremely high
              surface area, making it ideal for thermal insulation, water
              retention, and as a lightweight aggregate. Its inert, non-toxic
              nature and fire-resistant properties make it safe for use in
              construction, agriculture, and industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-primary mb-2">30x</div>
                <p className="text-muted-foreground">
                  Expansion ratio when heated
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-primary mb-2">1100°C</div>
                <p className="text-muted-foreground">
                  Temperature resistance rating
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Natural and sustainable</p>
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
              Industry Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how vermiculite enhances performance across multiple
              industries
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
                        Key Benefits:
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
              Why Choose Vermiculite?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Lightweight",
                  desc: "Extremely low density makes it easy to handle and reduces structural load in construction applications.",
                },
                {
                  title: "Fire Resistant",
                  desc: "Non-combustible with melting point above 1100°C, providing superior fire protection and safety.",
                },
                {
                  title: "Thermal Insulation",
                  desc: "Excellent insulating properties reduce heat transfer, improving energy efficiency in buildings.",
                },
                {
                  title: "Water Retention",
                  desc: "Can hold 3-4 times its weight in water, making it ideal for horticulture and agriculture.",
                },
                {
                  title: "Chemically Inert",
                  desc: "pH neutral and non-reactive, safe for use with plants, animals, and sensitive materials.",
                },
                {
                  title: "Environmentally Safe",
                  desc: "Natural, sustainable, and non-toxic mineral with no harmful environmental impact.",
                },
              ].map((prop, index) => (
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
