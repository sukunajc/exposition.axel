import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Globe, TrendingUp, AlertCircle } from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import InteractiveMap from "@/components/InteractiveMap";

export default function Cartographie() {
  // Données des 10 plus grands corridors
  const corridorsData = [
    { name: "Mexique → USA", migrants: 11, type: "Économique" },
    { name: "Syrie → Turquie", migrants: 4, type: "Réfugiés" },
    { name: "Inde → EAU", migrants: 3.5, type: "Travail" },
    { name: "Inde → USA", migrants: 2.7, type: "Qualifié" },
    { name: "Bangladesh → Inde", migrants: 2.5, type: "Économique" },
    { name: "Afghanistan → Pakistan", migrants: 2.3, type: "Réfugiés" },
    { name: "Pologne → Allemagne", migrants: 2, type: "UE" },
    { name: "Russie → Allemagne", migrants: 1.9, type: "Regroupement" },
    { name: "Égypte → Arabie Saoudite", migrants: 1.8, type: "Travail" },
    { name: "Royaume-Uni → Australie", migrants: 1.7, type: "Qualifié" },
  ];

  // Destinations principales
  const destinationsData = [
    { name: "États-Unis", migrants: 52.4, color: "#06b6d4" },
    { name: "Allemagne", migrants: 16.8, color: "#0ea5e9" },
    { name: "Arabie Saoudite", migrants: 13.7, color: "#06b6d4" },
    { name: "Royaume-Uni", migrants: 11.8, color: "#0ea5e9" },
    { name: "France", migrants: 9.2, color: "#06b6d4" },
    { name: "Canada", migrants: 8.8, color: "#0ea5e9" },
    { name: "Australie", migrants: 7.5, color: "#06b6d4" },
    { name: "Espagne", migrants: 6.9, color: "#0ea5e9" },
  ];

  // Pays d'origine
  const originsData = [
    { name: "Inde", migrants: 18, color: "#f97316" },
    { name: "Mexique", migrants: 11, color: "#fb923c" },
    { name: "Russie", migrants: 10.6, color: "#f97316" },
    { name: "Chine", migrants: 10.5, color: "#fb923c" },
    { name: "Syrie", migrants: 8.5, color: "#f97316" },
    { name: "Bangladesh", migrants: 7.8, color: "#fb923c" },
    { name: "Pakistan", migrants: 6.2, color: "#f97316" },
    { name: "Pologne", migrants: 5.9, color: "#fb923c" },
  ];

  // Évolution des migrants internationaux
  const evolutionData = [
    { year: 1990, migrants: 155 },
    { year: 2000, migrants: 175 },
    { year: 2010, migrants: 220 },
    { year: 2015, migrants: 244 },
    { year: 2020, migrants: 281 },
    { year: 2024, migrants: 304 },
  ];

  // Types de migration
  const typesData = [
    { name: "Migration économique", value: 45, fill: "#06b6d4" },
    { name: "Réfugiés", value: 12, fill: "#f97316" },
    { name: "Regroupement familial", value: 25, fill: "#8b5cf6" },
    { name: "Étudiants", value: 10, fill: "#ec4899" },
    { name: "Autres", value: 8, fill: "#64748b" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-cyan-500 text-black hover:bg-cyan-400">
              Cartographie Mondiale
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Routes de Migration Mondiales
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Explorez les principaux corridors de migration, les destinations et les origines des migrants à travers le monde
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">304M</div>
                  <p className="text-slate-300">Migrants internationaux (2024)</p>
                  <p className="text-sm text-slate-400 mt-2">+96% depuis 1990</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">11M</div>
                  <p className="text-slate-300">Plus grand corridor</p>
                  <p className="text-sm text-slate-400 mt-2">Mexique → États-Unis</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">195</div>
                  <p className="text-slate-300">Pays d'origine/destination</p>
                  <p className="text-sm text-slate-400 mt-2">Flux mondiaux</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="carte" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8 bg-slate-800 border border-slate-700">
              <TabsTrigger value="carte" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black text-xs md:text-sm">
                Carte
              </TabsTrigger>
              <TabsTrigger value="corridors" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black text-xs md:text-sm">
                Corridors
              </TabsTrigger>
              <TabsTrigger value="destinations" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black text-xs md:text-sm">
                Destinations
              </TabsTrigger>
              <TabsTrigger value="origins" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black text-xs md:text-sm">
                Origines
              </TabsTrigger>
              <TabsTrigger value="evolution" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black text-xs md:text-sm">
                Évolution
              </TabsTrigger>
              <TabsTrigger value="routes" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black text-xs md:text-sm">
                Routes
              </TabsTrigger>
            </TabsList>

            {/* Carte Interactive */}
            <TabsContent value="carte" className="space-y-6">
              <InteractiveMap />
            </TabsContent>

            {/* Corridors Tab */}
            <TabsContent value="corridors" className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-400">
                    <Globe className="w-5 h-5" />
                    Top 10 des Corridors de Migration
                  </CardTitle>
                  <CardDescription>Les 10 plus grands flux migratoires mondiaux (en millions)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={corridorsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="name" stroke="#94a3b8" angle={-45} textAnchor="end" height={100} />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }}
                          labelStyle={{ color: "#06b6d4" }}
                        />
                        <Bar dataKey="migrants" fill="#06b6d4" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {corridorsData.slice(0, 5).map((corridor, idx) => (
                      <div key={idx} className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-cyan-400">{idx + 1}. {corridor.name}</h4>
                          <Badge variant="outline" className="text-xs">{corridor.type}</Badge>
                        </div>
                        <p className="text-2xl font-bold text-white">{corridor.migrants}M</p>
                        <p className="text-sm text-slate-400 mt-1">migrants</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {corridorsData.slice(5, 10).map((corridor, idx) => (
                      <div key={idx + 5} className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-bold text-purple-400">{idx + 6}. {corridor.name}</h4>
                          <Badge variant="outline" className="text-xs">{corridor.type}</Badge>
                        </div>
                        <p className="text-2xl font-bold text-white">{corridor.migrants}M</p>
                        <p className="text-sm text-slate-400 mt-1">migrants</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/30">
                    <p className="text-slate-200">
                      <strong className="text-cyan-400">Note:</strong> Le corridor Mexique → États-Unis est le plus grand au monde avec 11 millions de migrants, résultat de migrations historiques sur plusieurs décennies. Le corridor Syrie → Turquie (4 millions) est principalement composé de réfugiés fuyant la guerre civile syrienne.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Destinations */}
            <TabsContent value="destinations" className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-400">
                    <TrendingUp className="w-5 h-5" />
                    Destinations Principales des Migrants
                  </CardTitle>
                  <CardDescription>Les 8 pays accueillant le plus de migrants (en millions)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={destinationsData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis type="number" stroke="#94a3b8" />
                        <YAxis dataKey="name" type="category" stroke="#94a3b8" width={120} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }}
                          labelStyle={{ color: "#06b6d4" }}
                        />
                        <Bar dataKey="migrants" fill="#06b6d4" radius={[0, 8, 8, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-cyan-400 mb-3">🥇 États-Unis</h4>
                      <p className="text-2xl font-bold text-white mb-2">52.4M</p>
                      <p className="text-slate-400 text-sm">17.2% de tous les migrants mondiaux</p>
                      <p className="text-slate-400 text-sm mt-2">Leader mondial en accueil de migrants</p>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-blue-400 mb-3">🥈 Allemagne</h4>
                      <p className="text-2xl font-bold text-white mb-2">16.8M</p>
                      <p className="text-slate-400 text-sm">5.5% de tous les migrants mondiaux</p>
                      <p className="text-slate-400 text-sm mt-2">Destination principale en Europe</p>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-orange-400 mb-3">🥉 Arabie Saoudite</h4>
                      <p className="text-2xl font-bold text-white mb-2">13.7M</p>
                      <p className="text-slate-400 text-sm">4.5% de tous les migrants mondiaux</p>
                      <p className="text-slate-400 text-sm mt-2">Migration de travail importante</p>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-purple-400 mb-3">🏅 Autres destinations</h4>
                      <p className="text-slate-400 text-sm">Royaume-Uni (11.8M), France (9.2M), Canada (8.8M), Australie (7.5M), Espagne (6.9M)</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/30">
                    <p className="text-slate-200">
                      <strong className="text-cyan-400">Observation:</strong> Les pays développés (États-Unis, Allemagne, Royaume-Uni, France, Canada, Australie) accueillent la majorité des migrants. Ces pays offrent des opportunités économiques, une stabilité politique et des services sociaux développés.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Origines */}
            <TabsContent value="origins" className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-400">
                    <Globe className="w-5 h-5" />
                    Pays d'Origine Principaux
                  </CardTitle>
                  <CardDescription>Les 8 pays d'où proviennent le plus de migrants (en millions)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={originsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="name" stroke="#94a3b8" angle={-45} textAnchor="end" height={100} />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }}
                          labelStyle={{ color: "#06b6d4" }}
                        />
                        <Bar dataKey="migrants" fill="#f97316" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-orange-400 mb-3">🇮🇳 Inde</h4>
                      <p className="text-2xl font-bold text-white mb-2">18M</p>
                      <p className="text-slate-400 text-sm">Plus grand pays d'émigration</p>
                      <p className="text-slate-400 text-sm mt-2">Destinations: USA, EAU, Royaume-Uni</p>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-orange-400 mb-3">🇲🇽 Mexique</h4>
                      <p className="text-2xl font-bold text-white mb-2">11M</p>
                      <p className="text-slate-400 text-sm">Deuxième pays d'émigration</p>
                      <p className="text-slate-400 text-sm mt-2">Destination: États-Unis (11M)</p>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-orange-400 mb-3">🇷🇺 Russie</h4>
                      <p className="text-2xl font-bold text-white mb-2">10.6M</p>
                      <p className="text-slate-400 text-sm">Migration historique post-URSS</p>
                      <p className="text-slate-400 text-sm mt-2">Destinations: Allemagne, Israël</p>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-orange-400 mb-3">🇨🇳 Chine</h4>
                      <p className="text-2xl font-bold text-white mb-2">10.5M</p>
                      <p className="text-slate-400 text-sm">Émigration économique importante</p>
                      <p className="text-slate-400 text-sm mt-2">Destinations: USA, Australie, Canada</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/30">
                    <p className="text-slate-200">
                      <strong className="text-cyan-400">Observation:</strong> L'Inde est le plus grand pays d'émigration avec 18 millions de migrants. Cela reflète la population importante de l'Inde et les opportunités limitées pour certains segments de la population. Les migrants indiens sont souvent hautement qualifiés (IT, ingénierie) ou travailleurs dans les secteurs de la construction et des services.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Évolution */}
            <TabsContent value="evolution" className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-400">
                    <TrendingUp className="w-5 h-5" />
                    Évolution de la Migration Mondiale
                  </CardTitle>
                  <CardDescription>Nombre de migrants internationaux (1990-2024)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={evolutionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="year" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }}
                          labelStyle={{ color: "#06b6d4" }}
                          formatter={(value) => `${value}M migrants`}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="migrants" 
                          stroke="#06b6d4" 
                          strokeWidth={3}
                          dot={{ fill: "#06b6d4", r: 6 }}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-cyan-400 mb-3">1990</h4>
                      <p className="text-2xl font-bold text-white mb-2">155M</p>
                      <p className="text-slate-400 text-sm">Migrants internationaux</p>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-cyan-400 mb-3">2024</h4>
                      <p className="text-2xl font-bold text-white mb-2">304M</p>
                      <p className="text-slate-400 text-sm">Migrants internationaux</p>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-cyan-400 mb-3">Augmentation</h4>
                      <p className="text-2xl font-bold text-white mb-2">+149M</p>
                      <p className="text-slate-400 text-sm">Augmentation absolue</p>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-cyan-400 mb-3">Croissance</h4>
                      <p className="text-2xl font-bold text-white mb-2">+96%</p>
                      <p className="text-slate-400 text-sm">Augmentation relative</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/30">
                    <p className="text-slate-200">
                      <strong className="text-cyan-400">Tendance:</strong> Le nombre de migrants internationaux a presque doublé depuis 1990, passant de 155 millions à 304 millions. Cette augmentation reflète la globalisation, les conflits, le changement climatique et les inégalités économiques croissantes entre les pays.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Routes Critiques */}
            <TabsContent value="routes" className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-400">
                    <AlertCircle className="w-5 h-5" />
                    Routes Migratoires Critiques
                  </CardTitle>
                  <CardDescription>Les routes les plus dangereuses et les plus importantes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Route Méditerranéenne */}
                    <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6 rounded-lg border border-red-500/30">
                      <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                        🌊 Route Centrale Méditerranéenne
                      </h4>
                      <div className="space-y-2 text-slate-300">
                        <p><strong>Origine:</strong> Afrique du Nord, Moyen-Orient</p>
                        <p><strong>Destination:</strong> Italie, Grèce, Espagne</p>
                        <p><strong>Migrants annuels:</strong> ~100,000-200,000</p>
                        <p><strong>Défis:</strong> Traversée dangereuse, décès en mer, conditions précaires</p>
                        <p className="text-red-300 mt-2">[Warning] L'une des routes les plus meurtrières au monde</p>
                      </div>
                    </div>

                    {/* Route Asie du Sud-Ouest */}
                    <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 p-6 rounded-lg border border-orange-500/30">
                      <h4 className="font-bold text-orange-400 mb-3 flex items-center gap-2">
                        🏜️ Route Asie du Sud-Ouest
                      </h4>
                      <div className="space-y-2 text-slate-300">
                        <p><strong>Origine:</strong> Afghanistan, Syrie, Irak</p>
                        <p><strong>Destination:</strong> Turquie, Jordanie, Liban</p>
                        <p><strong>Migrants:</strong> ~4-5 millions</p>
                        <p><strong>Défis:</strong> Conflits actifs, réfugiés de longue durée, conditions humanitaires</p>
                        <p className="text-orange-300 mt-2">[Warning] Crise humanitaire majeure</p>
                      </div>
                    </div>

                    {/* Route Afrique de l'Est */}
                    <div className="bg-gradient-to-br from-yellow-500/10 to-green-500/10 p-6 rounded-lg border border-yellow-500/30">
                      <h4 className="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                        [Globe] Route Afrique de l'Est
                      </h4>
                      <div className="space-y-2 text-slate-300">
                        <p><strong>Origine:</strong> Somalie, Éthiopie, Érythrée</p>
                        <p><strong>Destination:</strong> Kenya, Ouganda, Égypte</p>
                        <p><strong>Migrants:</strong> ~2-3 millions</p>
                        <p><strong>Défis:</strong> Sécheresse, conflits, pauvreté, camps de réfugiés</p>
                        <p className="text-yellow-300 mt-2">[Warning] Crise climatique et humanitaire</p>
                      </div>
                    </div>

                    {/* Route Asie du Sud */}
                    <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-6 rounded-lg border border-green-500/30">
                      <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                        🏭 Route Asie du Sud
                      </h4>
                      <div className="space-y-2 text-slate-300">
                        <p><strong>Origine:</strong> Bangladesh, Pakistan, Népal</p>
                        <p><strong>Destination:</strong> Inde, Arabie Saoudite, Émirats Arabes Unis</p>
                        <p><strong>Migrants:</strong> ~5-6 millions</p>
                        <p><strong>Défis:</strong> Exploitation des travailleurs, conditions de travail précaires</p>
                        <p className="text-green-300 mt-2">[Warning] Migration de travail, droits des travailleurs</p>
                      </div>
                    </div>

                    {/* Route Amérique Centrale */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-500/30">
                      <h4 className="font-bold text-blue-400 mb-3 flex items-center gap-2">
                        🌎 Route Amérique Centrale
                      </h4>
                      <div className="space-y-2 text-slate-300">
                        <p><strong>Origine:</strong> Honduras, El Salvador, Guatemala</p>
                        <p><strong>Destination:</strong> Mexique, États-Unis</p>
                        <p><strong>Migrants annuels:</strong> ~500,000-1,000,000</p>
                        <p><strong>Défis:</strong> Violence, cartels, conditions dangereuses, séparation familiale</p>
                        <p className="text-blue-300 mt-2">[Warning] Route très dangereuse et controversée</p>
                      </div>
                    </div>

                    {/* Route Europe de l'Est */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-lg border border-purple-500/30">
                      <h4 className="font-bold text-purple-400 mb-3 flex items-center gap-2">
                        🏛️ Route Europe de l'Est
                      </h4>
                      <div className="space-y-2 text-slate-300">
                        <p><strong>Origine:</strong> Pologne, Russie, Ukraine</p>
                        <p><strong>Destination:</strong> Allemagne, Royaume-Uni, France</p>
                        <p><strong>Migrants:</strong> ~2-3 millions</p>
                        <p><strong>Défis:</strong> Intégration, discrimination, barrières linguistiques</p>
                        <p className="text-purple-300 mt-2">[Check] Migration intra-européenne relativement stable</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/30">
                    <p className="text-slate-200">
                      <strong className="text-cyan-400">Contexte:</strong> Ces routes représentent les principaux flux migratoires mondiaux. Certaines routes sont caractérisées par des défis humanitaires majeurs (réfugiés, conflits), tandis que d'autres sont principalement des migrations économiques. Les gouvernements et les organisations internationales travaillent à améliorer les conditions et la sécurité des migrants.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Types de Migration */}
      <section className="py-12 px-4 md:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Composition de la Migration Mondiale
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={typesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {typesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }}
                    formatter={(value) => `${value}%`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              {typesData.map((type, idx) => (
                <div key={idx} className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white">{type.name}</h4>
                    <span className="text-2xl font-bold" style={{ color: type.fill }}>{type.value}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ width: `${type.value}%`, backgroundColor: type.fill }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">Facteurs "Push" (Répulsion)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-300">
                <p>• Pauvreté et chômage</p>
                <p>• Conflits armés et instabilité</p>
                <p>• Discrimination et persécution</p>
                <p>• Changement climatique</p>
                <p>• Manque d'accès à l'éducation</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">Facteurs "Pull" (Attraction)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-300">
                <p>• Opportunités économiques</p>
                <p>• Stabilité politique et sécurité</p>
                <p>• Accès à l'éducation et santé</p>
                <p>• Réseaux familiaux établis</p>
                <p>• Politiques d'immigration favorables</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
