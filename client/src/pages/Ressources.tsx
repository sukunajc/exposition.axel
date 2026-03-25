import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, Globe, Download, ExternalLink } from "lucide-react";

const resources = {
  rapports: [
    {
      title: "World Migration Report 2024",
      author: "Organisation Internationale pour les Migrations (OIM)",
      description: "Le rapport le plus complet sur les migrations mondiales avec statistiques détaillées et analyses par région.",
      url: "https://worldmigrationreport.iom.int/",
      icon: "[Chart]",
      year: 2024
    },
    {
      title: "Global Trends 2023 - Forced Displacement",
      author: "Haut Commissariat des Nations Unies pour les Réfugiés (UNHCR)",
      description: "Rapport annuel sur les déplacements forcés, réfugiés et demandeurs d'asile dans le monde.",
      url: "https://www.unhcr.org/global-trends",
      icon: "🚨",
      year: 2023
    },
    {
      title: "International Migration Outlook 2023",
      author: "Organisation de Coopération et de Développement Économiques (OCDE)",
      description: "Analyse des tendances migratoires dans les pays de l'OCDE avec focus sur l'emploi et l'intégration.",
      url: "https://www.oecd.org/migration/",
      icon: "[Graph]",
      year: 2023
    },
    {
      title: "Remittances Report 2023",
      author: "Banque Mondiale",
      description: "Étude complète sur les envois de fonds des migrants avec impact économique par pays.",
      url: "https://www.worldbank.org/en/topic/migration",
      icon: "💰",
      year: 2023
    },
    {
      title: "State of the World's Refugees 2023",
      author: "UNHCR",
      description: "Rapport complet sur la situation des réfugiés, demandeurs d'asile et personnes déplacées.",
      url: "https://www.unhcr.org/state-of-worlds-refugees",
      icon: "🏚️",
      year: 2023
    },
    {
      title: "Migration and Development Report",
      author: "Nations Unies",
      description: "Analyse du lien entre migration et développement économique dans les pays d'origine et d'accueil.",
      url: "https://www.un.org/en/development/",
      icon: "[Globe]",
      year: 2022
    }
  ],
  articles: [
    {
      title: "Les causes des migrations : une analyse approfondie",
      source: "Géo Magazine",
      description: "Article détaillé sur les facteurs économiques, sociaux et climatiques qui poussent les gens à migrer.",
      url: "https://www.geo.fr/",
      category: "Causes et facteurs"
    },
    {
      title: "L'impact économique des migrations",
      source: "Le Monde Diplomatique",
      description: "Analyse de l'impact des migrations sur l'économie des pays d'accueil et d'origine.",
      url: "https://www.monde-diplomatique.fr/",
      category: "Économie"
    },
    {
      title: "Les corridors migratoires majeurs du monde",
      source: "France 24",
      description: "Cartographie et analyse des 10 plus grands corridors migratoires mondiaux.",
      url: "https://www.france24.com/",
      category: "Cartographie"
    },
    {
      title: "Migrations climatiques : le défi du 21e siècle",
      source: "The Guardian",
      description: "Enquête sur les migrations forcées par le changement climatique et ses conséquences.",
      url: "https://www.theguardian.com/",
      category: "Climat"
    },
    {
      title: "Femmes migrantes : des histoires d'espoir et de défis",
      source: "BBC News",
      description: "Reportage sur les expériences spécifiques des femmes migrantes et leurs contributions.",
      url: "https://www.bbc.com/news/",
      category: "Genre"
    },
    {
      title: "Les politiques migratoires en Europe : comparaison",
      source: "Politique Étrangère",
      description: "Analyse comparative des politiques d'immigration dans les pays européens.",
      url: "https://www.politique-etrangere.fr/",
      category: "Politiques"
    },
    {
      title: "Intégration des migrants : succès et défis",
      source: "The Economist",
      description: "Étude sur les facteurs de succès et les obstacles à l'intégration des migrants.",
      url: "https://www.economist.com/",
      category: "Intégration"
    },
    {
      title: "Remittances : le lifeline des familles migrantes",
      source: "Al Jazeera",
      description: "Documentaire sur l'importance des envois de fonds pour les familles dans les pays d'origine.",
      url: "https://www.aljazeera.com/",
      category: "Économie"
    }
  ],
  videos: [
    {
      title: "Comprendre les migrations en 5 minutes",
      source: "TED-Ed",
      description: "Animation pédagogique expliquant les causes et conséquences des migrations.",
      duration: "5:32",
      url: "https://www.youtube.com/",
      category: "Éducation"
    },
    {
      title: "Les réfugiés syriens : 10 ans après",
      source: "BBC Documentary",
      description: "Documentaire sur la crise des réfugiés syriens et son impact global.",
      duration: "45:00",
      url: "https://www.youtube.com/",
      category: "Réfugiés"
    },
    {
      title: "Routes migratoires dangereuses : la Méditerranée",
      source: "France 24",
      description: "Investigation sur les routes migratoires les plus dangereuses et les trafiquants.",
      duration: "28:15",
      url: "https://www.youtube.com/",
      category: "Humanitaire"
    },
    {
      title: "Sundar Pichai : du rêve indien à la tête de Google",
      source: "CNBC",
      description: "Documentaire sur le parcours de migration et de réussite de Sundar Pichai.",
      duration: "22:45",
      url: "https://www.youtube.com/",
      category: "Histoires de réussite"
    },
    {
      title: "L'économie des migrations : remittances et développement",
      source: "World Bank",
      description: "Vidéo explicative sur l'impact économique des envois de fonds.",
      duration: "8:20",
      url: "https://www.youtube.com/",
      category: "Économie"
    },
    {
      title: "Changement climatique et migrations forcées",
      source: "National Geographic",
      description: "Documentaire sur les migrations causées par le changement climatique.",
      duration: "38:00",
      url: "https://www.youtube.com/",
      category: "Climat"
    }
  ],
  organisations: [
    {
      name: "Organisation Internationale pour les Migrations (OIM)",
      description: "Agence des Nations Unies spécialisée dans les migrations. Fournit données, recherche et assistance.",
      website: "https://www.iom.int/",
      focus: "Migrations globales"
    },
    {
      name: "Haut Commissariat des Nations Unies pour les Réfugiés (UNHCR)",
      description: "Organisme de l'ONU dédié à la protection des réfugiés et personnes déplacées.",
      website: "https://www.unhcr.org/",
      focus: "Réfugiés et déplacés"
    },
    {
      name: "Amnesty International",
      description: "Organisation de défense des droits humains qui travaille sur les droits des migrants.",
      website: "https://www.amnesty.org/",
      focus: "Droits humains"
    },
    {
      name: "Human Rights Watch",
      description: "Organisation internationale de défense des droits humains avec focus sur les migrants.",
      website: "https://www.hrw.org/",
      focus: "Droits et justice"
    },
    {
      name: "Médecins Sans Frontières (MSF)",
      description: "Organisation humanitaire fournissant aide médicale aux migrants en situation de crise.",
      website: "https://www.msf.org/",
      focus: "Aide humanitaire"
    },
    {
      name: "Banque Mondiale - Migration",
      description: "Ressources sur l'impact économique des migrations et les politiques de développement.",
      website: "https://www.worldbank.org/en/topic/migration",
      focus: "Économie et développement"
    },
    {
      name: "OCDE - Migration",
      description: "Analyses et données sur les migrations dans les pays développés.",
      website: "https://www.oecd.org/migration/",
      focus: "Pays développés"
    },
    {
      name: "Migration Policy Institute",
      description: "Think tank indépendant produisant recherche et analyse sur les politiques migratoires.",
      website: "https://www.migrationpolicy.org/",
      focus: "Politiques"
    }
  ],
  datasets: [
    {
      title: "World Bank Migration Data",
      description: "Base de données complète sur les migrations, remittances et diasporas.",
      url: "https://data.worldbank.org/",
      format: "CSV, Excel, API"
    },
    {
      title: "UN DESA Migration Statistics",
      description: "Statistiques officielles des Nations Unies sur les migrations internationales.",
      url: "https://www.un.org/development/desa/pd/",
      format: "CSV, Excel"
    },
    {
      title: "UNHCR Data Portal",
      description: "Données détaillées sur les réfugiés, demandeurs d'asile et personnes déplacées.",
      url: "https://data.unhcr.org/",
      format: "Dashboards, Excel"
    },
    {
      title: "IOM Global Migration Data",
      description: "Plateforme interactive avec données sur les migrations par corridor et région.",
      url: "https://www.iom.int/global-data-portal",
      format: "Cartes interactives, Excel"
    },
    {
      title: "Eurostat Migration Data",
      description: "Données sur les migrations en Europe avec détails par pays et type.",
      url: "https://ec.europa.eu/eurostat/",
      format: "CSV, Excel, API"
    }
  ]
};

export default function Ressources() {
  const [activeTab, setActiveTab] = useState("rapports");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategories = (items: any[]) => {
    const categories = new Set(items.map(item => item.category || item.focus || item.source));
    return Array.from(categories).sort();
  };

  const filteredArticles = selectedCategory
    ? resources.articles.filter(a => a.category === selectedCategory)
    : resources.articles;

  const filteredVideos = selectedCategory
    ? resources.videos.filter(v => v.category === selectedCategory)
    : resources.videos;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Ressources Documentaires
        </h1>
        <p className="text-xl text-muted-foreground">
          Accédez à des rapports, articles, vidéos et données fiables sur les migrations mondiales.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-slate-800 border border-slate-700">
          <TabsTrigger value="rapports" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black">
            Rapports
          </TabsTrigger>
          <TabsTrigger value="articles" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black">
            Articles
          </TabsTrigger>
          <TabsTrigger value="videos" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black">
            Vidéos
          </TabsTrigger>
          <TabsTrigger value="organisations" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black">
            Organisations
          </TabsTrigger>
          <TabsTrigger value="datasets" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black">
            Données
          </TabsTrigger>
        </TabsList>

        <TabsContent value="rapports" className="mt-8 space-y-4">
          <div className="grid gap-4">
            {resources.rapports.map((rapport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">{rapport.icon}</span>
                          <div>
                            <CardTitle className="text-xl">{rapport.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{rapport.author} • {rapport.year}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mt-2">{rapport.description}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-4 gap-2"
                        onClick={() => window.open(rapport.url, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Accéder
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="articles" className="mt-8 space-y-4">
          <div className="mb-4 flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              Tous
            </Button>
            {getCategories(resources.articles).map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid gap-4">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{article.title}</CardTitle>
                        <p className="text-sm text-accent mb-2">{article.source}</p>
                        <p className="text-muted-foreground text-sm">{article.description}</p>
                        <div className="mt-3 inline-block px-2 py-1 rounded bg-primary/10 text-xs text-primary">
                          {article.category}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-4 gap-2"
                        onClick={() => window.open(article.url, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Lire
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-8 space-y-4">
          <div className="mb-4 flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              Tous
            </Button>
            {getCategories(resources.videos).map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid gap-4">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Video className="w-5 h-5 text-accent" />
                          <CardTitle className="text-lg">{video.title}</CardTitle>
                        </div>
                        <p className="text-sm text-accent mb-2">{video.source} • {video.duration}</p>
                        <p className="text-muted-foreground text-sm">{video.description}</p>
                        <div className="mt-3 inline-block px-2 py-1 rounded bg-primary/10 text-xs text-primary">
                          {video.category}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-4 gap-2"
                        onClick={() => window.open(video.url, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Regarder
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="organisations" className="mt-8">
          <div className="grid md:grid-cols-2 gap-4">
            {resources.organisations.map((org, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all h-full">
                  <CardHeader>
                    <CardTitle className="text-lg mb-2">{org.name}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-4">{org.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="inline-block px-2 py-1 rounded bg-accent/10 text-xs text-accent">
                        {org.focus}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        onClick={() => window.open(org.website, "_blank")}
                      >
                        <Globe className="w-4 h-4" />
                        Visiter
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="datasets" className="mt-8 space-y-4">
          <div className="grid gap-4">
            {resources.datasets.map((dataset, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Download className="w-5 h-5 text-accent" />
                          <CardTitle className="text-lg">{dataset.title}</CardTitle>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{dataset.description}</p>
                        <div className="inline-block px-2 py-1 rounded bg-primary/10 text-xs text-primary">
                          Formats: {dataset.format}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-4 gap-2"
                        onClick={() => window.open(dataset.url, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Accéder
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="border-accent/20 bg-accent/5 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-accent" />
            Comment utiliser ces ressources ?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-muted-foreground">
          <p>
            <strong>Pour les rapports :</strong> Consultez les rapports officiels des organisations internationales pour des données fiables et à jour.
          </p>
          <p>
            <strong>Pour les articles :</strong> Lisez des analyses approfondies et des perspectives variées sur les migrations.
          </p>
          <p>
            <strong>Pour les vidéos :</strong> Regardez des documentaires et explications visuelles pour mieux comprendre les enjeux.
          </p>
          <p>
            <strong>Pour les organisations :</strong> Découvrez les acteurs majeurs travaillant sur les migrations et les réfugiés.
          </p>
          <p>
            <strong>Pour les données :</strong> Téléchargez des datasets pour vos propres analyses et projets de recherche.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
