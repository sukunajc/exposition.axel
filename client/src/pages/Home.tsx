import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Globe, BarChart3, Gamepad2, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Home() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]"
    >
      {/* Hero Section - Large Bento Box */}
      <motion.div variants={item} className="col-span-1 md:col-span-4 row-span-2 relative group overflow-hidden rounded-[2rem] border border-white/10 bg-card">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 z-0" />
        <img 
          src="/images/hero-migration.jpg" 
          alt="Globe Migration - Source: Business Insider" 
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-60 mix-blend-screen mask-image-linear-gradient-to-l"
        />
        <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 w-fit mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary-foreground/80">Exposé 4e4</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Comprendre les <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-gradient-x">
              Migrations
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Pourquoi les gens se déplacent-ils ? Quels sont les chiffres réels ? 
            Découvrez tout sur les migrations à travers nos jeux et analyses.
          </p>
          <div className="flex gap-4">
            <Link href="/comprendre" className="inline-block">
              <Button size="lg" className="rounded-full text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 shadow-[0_0_30px_-10px_var(--color-primary)] transition-all hover:scale-105" asChild>
                <span>
                  Commencer l'exploration
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Stats Card */}
      <Link href="/statistiques">
        <motion.div variants={item} className="col-span-1 md:col-span-2 row-span-1 rounded-[2rem] border border-white/10 bg-card hover:bg-white/5 transition-colors group cursor-pointer relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/stats-bg.jpg')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">Les Chiffres Clés</h3>
              <p className="text-muted-foreground">Découvrez les vraies statistiques en 2024</p>
            </div>
            <ArrowRight className="absolute bottom-8 right-8 w-6 h-6 text-white/50 group-hover:text-white group-hover:translate-x-2 transition-all" />
          </div>
        </motion.div>
      </Link>

      {/* Quiz Card */}
      <Link href="/jeux">
        <motion.div variants={item} className="col-span-1 md:col-span-1 row-span-2 rounded-[2rem] border border-white/10 bg-gradient-to-b from-accent/20 to-card hover:from-accent/30 transition-colors group cursor-pointer relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 w-full h-1/2 flex justify-center">
             <img src="/images/quiz-icon.jpg" alt="Quiz - Source: Math Exercises For Kids" className="w-32 h-32 object-contain drop-shadow-[0_0_15px_rgba(255,0,255,0.5)] group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8">
            <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-4">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-2">Quiz & Jeux</h3>
            <p className="text-muted-foreground text-sm">Teste tes connaissances et défie tes amis !</p>
          </div>
        </motion.div>
      </Link>

      {/* Definitions Card */}
      <Link href="/comprendre">
        <motion.div variants={item} className="col-span-1 md:col-span-1 row-span-1 rounded-[2rem] border border-white/10 bg-card hover:bg-white/5 transition-colors group cursor-pointer">
          <div className="p-8 h-full flex flex-col justify-between">
            <Globe className="w-8 h-8 text-primary mb-4" />
            <div>
              <h3 className="text-xl font-display font-bold">C'est quoi ?</h3>
              <p className="text-sm text-muted-foreground mt-1">Définitions simples</p>
            </div>
          </div>
        </motion.div>
      </Link>

      {/* Team Card */}
      <Link href="/a-propos">
        <motion.div variants={item} className="col-span-1 md:col-span-1 row-span-1 rounded-[2rem] border border-white/10 bg-card hover:bg-white/5 transition-colors group cursor-pointer relative overflow-hidden">
          <img src="/images/about-team.jpg" alt="Team - Source: Evinex" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
          <div className="relative z-10 p-6 h-full flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
            <Users className="w-6 h-6 text-white mb-2" />
            <h3 className="text-lg font-display font-bold">L'Équipe</h3>
            <p className="text-xs text-gray-300">Saifeddine, Jecim, Hugo</p>
          </div>
        </motion.div>
      </Link>

      {/* Info Card - Did you know? */}
      <motion.div variants={item} className="col-span-1 md:col-span-2 row-span-1 rounded-[2rem] border border-primary/20 bg-primary/5 p-8 flex items-center gap-6">
        <div className="text-4xl font-bold text-primary">i</div>
        <div>
          <h4 className="text-primary font-bold font-display text-lg mb-1">Le saviez-vous ?</h4>
          <p className="text-sm text-muted-foreground">
            Seulement <span className="text-white font-bold">3.6%</span> de la population mondiale sont des migrants internationaux. C'est beaucoup moins que ce qu'on imagine souvent !
          </p>
        </div>
      </motion.div>

    </motion.div>
  );
}
