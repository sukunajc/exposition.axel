import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/comprendre", label: "Comprendre" },
    { href: "/statistiques", label: "Statistiques" },
    { href: "/cartographie", label: "Cartographie" },
    { href: "/jeux", label: "Jeux & Quiz" },
    { href: "/glossaire", label: "Glossaire" },
    { href: "/ressources", label: "Ressources" },
    { href: "/sundar-pichai", label: "Sundar Pichai" },
    { href: "/a-propos", label: "À Propos" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-body selection:bg-primary selection:text-primary-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <a className="text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity whitespace-nowrap">
              MIGRATIONS<span className="text-white">.WORLD</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-1 bg-white/5 p-1 rounded-full border border-white/10 overflow-x-auto">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                    location === item.href
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_-5px_var(--color-primary)]"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-md">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 block",
                      location === item.href
                        ? "bg-primary text-primary-foreground shadow-[0_0_20px_-5px_var(--color-primary)]"
                        : "text-muted-foreground hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 pt-24 pb-12 container mx-auto px-4">
        {children}
      </main>

      <footer className="border-t border-white/10 bg-black/20 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-display text-sm md:text-base">
            Site réalisé pour l'exposé de 4e4 par Saifeddine, Jecim et Hugo.
          </p>
          <p className="text-xs text-muted-foreground/50 mt-2">
            © 2026 Collège - Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
