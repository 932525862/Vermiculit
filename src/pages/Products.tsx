import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Package } from "lucide-react";
import concentrateImage from "@/assets/maxsulot1.jpg";
import expandedImage from "@/assets/maxsulot2.jpg";
import Qadoq1 from "@/assets/fura.jpg";
import Qadoq2 from "@/assets/tahlam.jpg";
import Qadoq3 from "@/assets/kataqop.jpg";

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
           {t("product.description")}
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
                 {t("product.Mahsulot1")}
                </span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                {t("home.concentrateVermiculite")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
               {t("product.malumot")}
              </p>

              <Card className="mb-6 border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {t("product.infotitel1")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info1")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info2")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info3")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info4")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info5")}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                   {t("product.infotitel2")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info6")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info7")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info8")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info9")}</span>
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
                 {t("product.Mahsulot2")}
                </span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                {t("home.expandedVermiculite")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                   {t("product.malumot2")}
              </p>

              <Card className="mb-6 border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {t("product.infotitel21")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info21")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info22")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info23")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info24")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info25")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info26")}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {t("product.infotitel22")}
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                       <span>{t("product.info221")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{t("product.info223")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                     <span>{t("product.info224")}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                     <span>{t("product.info225")}</span>
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
             {t("product.qadoqlash")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("product.qadoqlashDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-gold transition-shadow">
              {/* Image on top */}
              <div className="h-40 overflow-hidden rounded-t-lg">
                <img src={Qadoq1} alt="Katta hajmdagi jo' natmalar" className="w-full h-full object-cover" />
              </div>
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">{t("product.post1")}</h3>
                <p className="text-muted-foreground">
                 {t("product.posttitel1")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gold transition-shadow">
              {/* Image on top */}
              <div className="h-40 overflow-hidden rounded-t-lg">
                <img src={Qadoq3} alt="Katta sumkalar" className="w-full h-full object-cover" />
              </div>
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">{t("product.post2")}</h3>
                <p className="text-muted-foreground">
                  {t("product.posttitel2")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gold transition-shadow">
              {/* Image on top */}
              <div className="h-40 overflow-hidden rounded-t-lg">
                <img src={Qadoq2} alt="Maxsus qadoqlash" className="w-full h-full object-cover" />
              </div>
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">{t("product.post3")}</h3>
                <p className="text-muted-foreground">
                 {t("product.posttitel3")}
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
