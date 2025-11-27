import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mountain } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "@/assets/logo.png";


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.products"), path: "/products" },
    { name: t("nav.usage"), path: "/usage" },
    { name: t("nav.production"), path: "/production" },
    { name: t("nav.gallery"), path: "/gallery" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
           <img src={Logo} alt="Vermiculit Logo" className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            {/* <Mountain className="h-8 w-8 text-primary transition-transform group-hover:scale-110" /> */}
            <span className="text-xl font-serif font-bold text-foreground">
              Vermiculit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-4">
                  {i18n.language === "en" && "Eng"}
                  {i18n.language === "uz" && "Uzb"}
                  {i18n.language === "ru" && "Rus"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("uz")}>
                  O'zbekcha
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("ru")}>
                  Русский
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs font-medium text-foreground/60 mb-2">
                  {t("nav.language")}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant={i18n.language === "en" ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      changeLanguage("en");
                      setIsOpen(false);
                    }}
                  >
                    Eng
                  </Button>
                  <Button
                    variant={i18n.language === "uz" ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      changeLanguage("uz");
                      setIsOpen(false);
                    }}
                  >
                    Uzb
                  </Button>
                  <Button
                    variant={i18n.language === "ru" ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      changeLanguage("ru");
                      setIsOpen(false);
                    }}
                  >
                    Rus
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
