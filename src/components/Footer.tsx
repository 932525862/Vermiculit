import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mountain, Mail, Phone, MapPin } from "lucide-react";
import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa"; // Telegram uchun haqiqiy ikon
import logo from "@/assets/logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="" className="h-8 w-8 text-primary" />
              <span className="text-lg font-serif font-bold">
                Vermiculit
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              {t("footer.description")}
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.instagram.com/vermiculit.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-400 transition-colors text-3xl"
              >
                <FiInstagram />
              </a>
              <a
                href="https://t.me/boburfayziev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-400 transition-colors text-3xl"
              >
                <FaTelegramPlane />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">{t("nav.about")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link
                  to="/production"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {t("nav.production")}
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {t("nav.gallery")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">{t("nav.products")}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-secondary-foreground/80">
                {t("home.concentrateVermiculite")}
              </li>
              <li className="text-sm text-secondary-foreground/80">
                {t("home.expandedVermiculite")}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">{t("nav.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  Mining Site, Industrial Zone
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  +998 (94) 617-16-46
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">
                  bobur.uz@mail.ru
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/10 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} OOO "SVERXBELPROEKT" {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
