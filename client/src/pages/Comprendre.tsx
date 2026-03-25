import { motion } from "framer-motion";
import { BookOpen, Globe2, ArrowRightLeft, AlertTriangle, TrendingUp, Users, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

export default function Comprendre() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Comprendre les Migrations
        </h1>
        <p className="text-xl text-muted-foreground">
          Les mots pour le dire : définitions simples et concepts clés pour tout comprendre.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Definition Card */}
        <motion.div variants={item} className="col-span-1">
          <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-display">C'est quoi un migrant ?</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed text-muted-foreground">
              <p>
                Un <strong className="text-white">migrant international</strong> est une personne qui change de pays de résidence habituelle.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 text-sm">
                <p className="mb-2"><strong>Les critères officiels :</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Franchir une frontière internationale</li>
                  <li>Rester au moins <strong>12 mois</strong></li>
                  <li>Avoir l'intention de s'installer</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Types Card */}
        <motion.div variants={item} className="col-span-1">
          <Card className="h-full border-secondary/20 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                <ArrowRightLeft className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-display">Types de migration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Internationale</h4>
                  <p className="text-sm text-muted-foreground">Entre pays (ex: France vers Espagne)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-orange-400 mt-1" />
                <div>
                  <h4 className="font-bold text-white">Interne</h4>
                  <p className="text-sm text-muted-foreground">À l'intérieur du pays (ex: Lyon vers Paris)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Refugee vs Migrant */}
        <motion.div variants={item} className="col-span-1">
          <Card className="h-full border-accent/20 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-display">Migrant vs Réfugié</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <h4 className="font-bold text-white mb-1">Migrant</h4>
                <p className="text-muted-foreground">Choisit de se déplacer pour améliorer sa vie : travail, études, famille.</p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <h4 className="font-bold text-white mb-1">Réfugié</h4>
                <p className="text-muted-foreground">Forcé de fuir à cause de guerre, persécutions, catastrophes.</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Displaced Persons */}
        <motion.div variants={item} className="col-span-1">
          <Card className="h-full border-chart-4/20 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 rounded-2xl bg-chart-4/20 flex items-center justify-center text-chart-4 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <CardTitle className="text-2xl font-display">Déplacés Internes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <h4 className="font-bold text-white mb-1">IDPs</h4>
                <p className="text-muted-foreground">Forcés de quitter leur domicile mais restent dans leur pays.</p>
              </div>
              <div className="pt-3 border-t border-white/10">
                <p className="text-xs text-primary font-bold">En 2024: ~71 millions</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Push & Pull Factors */}
      <motion.div variants={item} className="mt-12">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">Pourquoi les gens partent-ils ?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Push Factors */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-red-500/20 text-red-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-red-400">Facteurs "PUSH"</h3>
            </div>
            <div className="grid gap-3">
              {[
                "Guerre et insécurité",
                "Pauvreté et chômage",
                "Persécutions politiques/religieuses",
                "Catastrophes naturelles",
                "Instabilité politique",
                "Manque d'opportunités",
                "Changement climatique",
                "Corruption"
              ].map((factor, i) => (
                <div key={i} className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 hover:border-red-500/30 transition-colors">
                  {factor}
                </div>
              ))}
            </div>
          </div>

          {/* Pull Factors */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-green-400">Facteurs "PULL"</h3>
            </div>
            <div className="grid gap-3">
              {[
                "Opportunités de travail",
                "Sécurité et paix",
                "Meilleure éducation",
                "Réunification familiale",
                "Qualité de vie",
                "Système de santé",
                "Stabilité économique",
                "Liberté et droits"
              ].map((factor, i) => (
                <div key={i} className="p-4 rounded-xl bg-green-500/5 border border-green-500/10 hover:border-green-500/30 transition-colors">
                  {factor}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Types of Migration */}
      <motion.div variants={item} className="mt-12">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">Formes de migration</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Économique", icon: "", desc: "Pour trouver du travail et meilleures conditions." },
            { title: "Familiale", icon: "", desc: "Réunification avec la famille." },
            { title: "Éducative", icon: "", desc: "Pour poursuivre des études." },
            { title: "Forcée", icon: "", desc: "Fuite de guerre ou catastrophes." },
            { title: "Circulaire", icon: "", desc: "Allers-retours réguliers." },
            { title: "Climatique", icon: "", desc: "Fuite des zones affectées par le climat." }
          ].map((type, i) => (
            <Card key={i} className="border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-2">{type.icon}</div>
                <CardTitle className="text-lg">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{type.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Accordion FAQ */}
      <motion.div variants={item} className="max-w-3xl mx-auto mt-16 p-6 rounded-3xl bg-white/5 border border-white/10">
        <h3 className="text-2xl font-display font-bold mb-6 text-center">Questions Fréquentes</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Est-ce qu'il y a beaucoup de migrants ?</AccordionTrigger>
            <AccordionContent>
              Seulement <strong>3,6%</strong> de la population mondiale vit dans un autre pays. En 2024: <strong>304 millions</strong> de migrants sur 8,2 milliards d'habitants.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>C'est quoi les "Remittances" ?</AccordionTrigger>
            <AccordionContent>
              L'argent que les migrants envoient à leur famille au pays. En 2022: <strong>831 milliards de dollars</strong> mondialement. L'Inde en reçoit le plus (111 Mds $).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Qui accueille le plus de migrants ?</AccordionTrigger>
            <AccordionContent>
              L'Europe (94 millions), suivie par l'Asie (88 millions). En France: 7,7 millions d'immigrés (11,3% de la population).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Quel est le plus grand corridor migratoire ?</AccordionTrigger>
            <AccordionContent>
              Mexique → États-Unis. Autres importants: Syrie → Turquie, Afrique → Europe, Bangladesh → Inde.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Combien de réfugiés y a-t-il ?</AccordionTrigger>
            <AccordionContent>
              <strong>120 millions de personnes déplacées</strong> de force en 2024 (record historique). Turquie accueille le plus (3,8 millions).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Quel est l'impact des migrations ?</AccordionTrigger>
            <AccordionContent>
              <strong>Positif:</strong> Compétences, entreprises, impôts, culture. <strong>Défis:</strong> Intégration, logement. Les remittances aident énormément les pays d'origine.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Quelle est la différence entre migrant et demandeur d'asile ?</AccordionTrigger>
            <AccordionContent>
              <strong>Migrant:</strong> Statut légal obtenu. <strong>Demandeur d'asile:</strong> Demande protection, statut en attente. S'il est accepté, il devient réfugié.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>

      {/* Key Statistics Box */}
      <motion.div variants={item} className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10">
        <h3 className="text-2xl font-display font-bold mb-6 text-center">Chiffres Clés</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "304M", label: "Migrants mondiaux" },
            { num: "3.6%", label: "Part population" },
            { num: "831Mds$", label: "Remittances" },
            { num: "120M", label: "Déplacés" },
            { num: "94M", label: "En Europe" },
            { num: "7.7M", label: "En France" },
            { num: "48%", label: "Femmes" },
            { num: "52%", label: "Hommes" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-3xl font-display font-bold text-primary mb-1">{stat.num}</div>
              <div className="text-xs font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
