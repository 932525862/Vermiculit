import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Package } from "lucide-react";
import concentrateImage from "@/assets/product-concentrate.jpg";
import expandedImage from "@/assets/product-expanded.jpg";

const Products = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-center animate-fade-in">
            {t("nav.products")}
          </h1>
          <p className="text-xl text-center text-secondary-foreground/80 max-w-3xl mx-auto animate-slide-up">
            Premium vermiculite solutions for construction, agriculture, and
            industrial applications
          </p>
        </div>
      </section>

      {/* Concentrate Vermiculite */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <Package className="h-8 w-8 text-primary mr-3" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Product #1
                </span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                {t("home.concentrateVermiculite")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our concentrate vermiculite is a premium-grade, minimally processed
                product extracted directly from our mines. This high-purity mineral
                concentrate serves as the foundation for expanded vermiculite and
                various industrial applications.
              </p>

              <Card className="mb-6 border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    Physical & Chemical Characteristics
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Golden-brown to dark brown natural color</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Layered structure with natural mica-like appearance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>High purity levels (95%+ vermiculite content)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Available in multiple grade specifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Excellent expansion properties when heated</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    Applications & Uses
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Raw material for expanded vermiculite production</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Industrial processing and manufacturing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Specialty chemical applications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Export to processing facilities worldwide</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={concentrateImage}
                  alt="Concentrate Vermiculite"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Vermiculite */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={expandedImage}
                  alt="Expanded Vermiculite"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Package className="h-8 w-8 text-primary mr-3" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Product #2
                </span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                {t("home.expandedVermiculite")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Expanded vermiculite is produced by heating concentrate vermiculite
                to high temperatures, causing it to expand up to 30 times its
                original size. This creates a lightweight, highly insulating
                material with exceptional properties.
              </p>

              <Card className="mb-6 border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    Key Advantages
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Extremely lightweight (low bulk density)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Excellent thermal insulation properties</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fire-resistant and non-combustible</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Chemically inert and odorless</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>High water retention capacity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Environmentally safe and sustainable</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    Areas of Use
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Construction insulation and lightweight concrete</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Horticulture and agriculture soil amendment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fireproofing and fire protection systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Industrial filtration and absorbent applications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Packaging and shipping protection</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging & Specifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Packaging & Specifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible packaging options to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-gold transition-shadow">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">Bulk Shipments</h3>
                <p className="text-muted-foreground">
                  Large-volume orders shipped in bulk containers for industrial
                  clients and processing facilities
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gold transition-shadow">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">Big Bags</h3>
                <p className="text-muted-foreground">
                  Convenient 1-ton super sacks ideal for construction sites and
                  medium-scale operations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gold transition-shadow">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">Custom Packaging</h3>
                <p className="text-muted-foreground">
                  Tailored packaging solutions including bags, drums, and specialty
                  containers for specific applications
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
