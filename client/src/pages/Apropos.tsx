import { motion } from "framer-motion";
import { Users, GraduationCap, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useCheatCode } from "@/contexts/CheatCodeContext";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Apropos() {
  const { isFeatureUnlocked } = useCheatCode();
  const showYlane = isFeatureUnlocked("ylane-cobaye");

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto space-y-12"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          À Propos de Nous
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ce site a été réalisé dans le cadre d'un projet scolaire pour comprendre les enjeux des migrations dans le monde d'aujourd'hui.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Saifeddine", role: "Recherche & Contenu", color: "bg-primary" },
          { name: "Jecim", role: "Design & Graphisme", color: "bg-secondary" },
          { name: "Hugo", role: "Développement & Quiz", color: "bg-accent" }
        ].map((member, i) => (
          <motion.div key={i} variants={item} className="text-center group">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className={`absolute inset-0 rounded-full ${member.color} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
              <div className="relative w-full h-full rounded-full bg-card border border-white/10 flex items-center justify-center overflow-hidden">
                <Users className="w-12 h-12 text-muted-foreground group-hover:text-white transition-colors" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold mb-2">{member.name}</h3>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{member.role}</p>
          </motion.div>
        ))}
      </div>

      <motion.div variants={item} className="mt-16">
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="p-4 rounded-2xl bg-white/10">
              <School className="w-12 h-12 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold mb-2">Le Projet Scolaire</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce travail a été demandé par <strong className="text-white">Mr. Caterino</strong> pour la classe de <strong className="text-white">4e4</strong>. 
                L'objectif était de créer un support numérique interactif pour présenter notre exposé sur les migrations internationales, en utilisant des données récentes et fiables.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {showYlane && (
        <motion.div variants={item} className="mt-16">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0">
                <img src="/ylane.jpg" alt="Notre cobaye" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold mb-2">Notre Cobaye</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Un membre spécial de notre équipe qui a contribué à l'inspiration et au moral du projet !
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <div className="text-center pt-12 border-t border-white/10">
        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <GraduationCap className="w-4 h-4" />
          Fait avec passion par les élèves de 4e4 - 2026
        </p>
      </div>
    </motion.div>
  );
}
