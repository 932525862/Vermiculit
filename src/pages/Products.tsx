import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Package } from "lucide-react";
import concentrateImage from "@/assets/maxsulot1.jpg";
import expandedImage from "@/assets/maxsulot2.jpg";

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
           Qurilish, qishloq xo‘jaligi va sanoat sohalari uchun premium darajadagi vermikulit yechimlari.
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
                 Mahsulot №1
                </span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                {t("home.concentrateVermiculite")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
               Bizning kontsentrat vermikulitimiz — konlarimizdan to‘g‘ridan-to‘g‘ri olinadigan, 
               minimal darajada qayta ishlangan premium sifatli mahsulotdir. Ushbu yuqori tozalikdagi 
               mineral kontsentrat kengaytirilgan vermikulit va turli sanoat sohalaridagi ilovalar uchun asos
                bo‘lib xizmat qiladi.
              </p>

              <Card className="mb-6 border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    Jismoniy va kimyoviy xususiyatlar
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Oltin-jigarrangdan to quyuq jigarranggacha bo‘lgan tabiiy rang</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Tabiiy sluda (mika)ga o‘xshash ko‘rinishga ega qatlamli tuzilma</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Yuqori tozalik darajasi (95% va undan ortiq vermikulit tarkibi)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Bir nechta sifat (gradus) spetsifikatsiyalarida mavjud</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Qizdirilganda ajoyib kengayish xususiyatlariga ega</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                   Qo‘llanish sohalari va maqsadlari
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Kengaytirilgan vermikulit ishlab chiqarish uchun xom ashyo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sanoat ishlov berish va ishlab chiqarish</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Maxsus kimyoviy ilovalar</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dunyo bo‘ylab qayta ishlash korxonalariga eksport qilish  </span>
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
                 Mahsulot №2
                </span>
              </div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                {t("home.expandedVermiculite")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Kengaytirilgan vermikulit kontsentrat vermikulitni yuqori haroratda qizdirish orqali ishlab chiqariladi, 
                bu esa uning hajmini dastlabki o‘lchamiga nisbatan 30 baravar kengayishiga olib keladi. 
                Natijada engil, yuqori izolyatsiyalovchi xususiyatlarga ega material hosil bo‘ladi.
              </p>

              <Card className="mb-6 border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    Asosiy afzalliklar
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Juda yengil (kam zichlikka ega)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ajoyib issiqlik izolyatsiyasi xususiyatlari</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Olovga chidamli va yonmaydigan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Kimyoviy jihatdan neytral va hidlanmaydigan</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Yuqori suv ushlab turish qobiliyati</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Atrof-muhit uchun xavfsiz va barqaror</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    Qo‘llanish sohalari
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Qurilishda izolyatsiya va yengil beton uchun</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Bog‘dorchilik va qishloq xo‘jaligida tuproqni yaxshilash uchun</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Olovdan himoya va yong‘inga qarshi tizimlar uchun</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Sanoat filtratsiyasi va singdiruvchi ilovalar uchun</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Qadoqlash va yetkazib berishda himoya qilish uchun</span>
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
             Qadoqlash va spetsifikatsiyalar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Sizning maxsus talablaringizga moslash uchun moslashuvchan qadoqlash variantlari
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-gold transition-shadow">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">Katta hajmdagi jo‘natmalar</h3>
                <p className="text-muted-foreground">
                  Sanoat mijozlari va qayta ishlash korxonalari uchun katta hajmdagi buyurtmalarni bulk konteynerlarda yetkazib berish
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gold transition-shadow">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">Katta sumkalar</h3>
                <p className="text-muted-foreground">
                  Qurilish maydonchalari va o‘rta hajmdagi ishlov berish uchun ideal bo‘lgan qulay 1 tonnalik super sumkalar
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gold transition-shadow">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">Maxsus qadoqlash</h3>
                <p className="text-muted-foreground">
                  Maxsus ilovalar uchun sumkalar, barabanlar va ixtisoslashtirilgan konteynerlarni o‘z ichiga olgan moslashtirilgan qadoqlash yechimlari
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
