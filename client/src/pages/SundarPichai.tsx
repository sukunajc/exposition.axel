import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, BookOpen, Briefcase, Globe, Home, Zap } from "lucide-react";

export default function SundarPichai() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-cyan-500 text-black hover:bg-cyan-400">
                Cas d'étude: Migration de talent
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sundar Pichai
              </h1>
              <p className="text-xl text-slate-300 mb-4">
                Du petit garçon sans ordinateur en Inde au CEO d'Alphabet Inc.
              </p>
              <p className="text-lg text-slate-400">
                Un parcours remarquable de migration, d'éducation et de réussite dans la Silicon Valley
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
                <div className="text-center">
                  <div className="text-6xl font-bold text-cyan-400 mb-2">[Globe]</div>
                  <p className="text-sm text-slate-400">Né à Madurai, Inde</p>
                  <p className="text-sm text-slate-400">10 juin 1972</p>
                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                      CEO d'Alphabet Inc.
                    </p>
                    <p className="text-sm text-slate-400 mt-2">Depuis 10 août 2015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="enfance" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-slate-800 border border-slate-700">
              <TabsTrigger value="enfance" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black">
                Enfance
              </TabsTrigger>
              <TabsTrigger value="education" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black">
                Éducation
              </TabsTrigger>
              <TabsTrigger value="migration" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black">
                Migration
              </TabsTrigger>
              <TabsTrigger value="google" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black">
                Google
              </TabsTrigger>
            </TabsList>

            {/* Enfance */}
            <TabsContent value="enfance" className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-400">
                    <Home className="w-5 h-5" />
                    Les Débuts Humbles
                  </CardTitle>
                  <CardDescription>Un enfant sans technologie qui changerait le monde</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-cyan-400 mb-3">Famille et Contexte</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span><strong>Père:</strong> Regunatha Pichai, ingénieur électrique chez GEC (conglomérat britannique)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span><strong>Mère:</strong> Lakshmi, sténographe</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span><strong>Origine:</strong> Famille hindoue tamoule de Madurai, Tamil Nadu</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span><strong>Classe sociale:</strong> Classe moyenne indienne</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-bold text-cyan-400 mb-3">Accès à la Technologie</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span><strong>Téléphone:</strong> La famille a attendu 5 ans avant d'avoir une ligne téléphonique</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span><strong>Bien communal:</strong> Les voisins venaient utiliser le téléphone pour appeler leurs enfants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span><strong>Ordinateur:</strong> N'en avait pas en Inde pendant son enfance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span><strong>Internet:</strong> Aucun accès à Internet en grandissant</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/30 mt-4">
                    <p className="text-slate-200">
                      <strong className="text-cyan-400">Citation de Pichai:</strong> "Cela a montré le pouvoir de ce qui est possible avec la technologie. Les gens venaient faire des appels, et c'était devenu un bien communal. Cela m'a montré comment la technologie pouvait connecter les gens."
                    </p>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-bold text-cyan-400 mb-3">Scolarité</h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>[Books] <strong>École primaire/secondaire:</strong> Jawahar Vidyalaya Senior Secondary School, Ashok Nagar, Chennai</li>
                      <li>[Books] <strong>Classe XII:</strong> Vana Vani school, IIT Madras</li>
                      <li>[Sparkle] <strong>Intérêt:</strong> Passionné par les sciences et la résolution de problèmes</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Éducation */}
            <TabsContent value="education" className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-400">
                    <BookOpen className="w-5 h-5" />
                    Parcours Éducatif Exceptionnel
                  </CardTitle>
                  <CardDescription>De l'IIT Kharagpur à Stanford et Wharton</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* IIT Kharagpur */}
                  <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 p-6 rounded-lg border border-orange-500/30">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">[Trophy]</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-orange-400 mb-2">B.Tech en Génie Métallurgique</h4>
                        <p className="text-slate-300 mb-3">Indian Institute of Technology (IIT) Kharagpur</p>
                        <ul className="space-y-1 text-slate-300">
                          <li>[Check] <strong>Récompense:</strong> Institut Silver Medal</li>
                          <li>[Check] <strong>Classement:</strong> Parmi les meilleurs étudiants en ingénierie de l'Inde</li>
                          <li>[Check] <strong>Importance:</strong> IIT est l'une des institutions les plus prestigieuses d'Inde</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Stanford */}
                  <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 p-6 rounded-lg border border-red-500/30">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">[Diploma]</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-red-400 mb-2">Master of Science (MS)</h4>
                        <p className="text-slate-300 mb-3">Stanford University, Californie</p>
                        <ul className="space-y-1 text-slate-300">
                          <li>[Check] <strong>Domaine:</strong> Materials Science and Engineering</li>
                          <li>[Check] <strong>Année:</strong> 1995</li>
                          <li>[Check] <strong>Récompense:</strong> Siebel Scholar (honneur prestigieux)</li>
                          <li>[Check] <strong>Visa:</strong> F-1 Student Visa</li>
                          <li>[Check] <strong>Importance:</strong> Première étape de sa migration aux États-Unis</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Wharton */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg border border-blue-500/30">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">[Briefcase]</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-blue-400 mb-2">Master of Business Administration (MBA)</h4>
                        <p className="text-slate-300 mb-3">Wharton School, University of Pennsylvania</p>
                        <ul className="space-y-1 text-slate-300">
                          <li>[Check] <strong>Récompense:</strong> Palmer Scholar</li>
                          <li>[Check] <strong>Importance:</strong> Complète sa formation technique avec expertise en gestion</li>
                          <li>[Check] <strong>Statut:</strong> H-1B visa (travail temporaire aux États-Unis)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-bold text-cyan-400 mb-3">Parcours Académique Remarquable</h4>
                    <p className="text-slate-300 mb-3">
                      Sundar Pichai a suivi un parcours académique exceptionnel, passant de l'une des meilleures universités d'Inde (IIT Kharagpur) à deux des universités les plus prestigieuses des États-Unis (Stanford et Wharton). Cette progression démontre son excellence académique et son ambition d'apprendre auprès des meilleures institutions du monde.
                    </p>
                    <p className="text-slate-300">
                      Ses récompenses (Institut Silver Medal, Siebel Scholar, Palmer Scholar) le classent parmi les étudiants les plus brillants de sa génération, ouvrant les portes à une carrière exceptionnelle.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Migration */}
            <TabsContent value="migration" className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-400">
                    <Globe className="w-5 h-5" />
                    Le Parcours de Migration: 20 Ans d'Incertitude
                  </CardTitle>
                  <CardDescription>De l'Inde aux États-Unis: Un voyage de 15-20 ans</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                    <p className="text-slate-300 mb-4">
                      Le parcours de migration de Sundar Pichai suit le chemin classique des immigrants hautement qualifiés indiens: F-1 → H-1B → Green Card → Citoyenneté. Ce processus a duré environ 15-20 ans, période pendant laquelle il a maintenu un statut temporaire ou conditionnel.
                    </p>
                  </div>

                  {/* Phase 1 */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-lg border border-green-500/30">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">[Books]</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-green-400 mb-2">Phase 1: F-1 Student Visa (1993-1995)</h4>
                        <div className="space-y-2 text-slate-300">
                          <p><strong>Période:</strong> 1993-1995 (2 ans)</p>
                          <p><strong>Statut:</strong> Étudiant international à Stanford</p>
                          <p><strong>Autorisation de travail:</strong> Optional Practical Training (OPT) après graduation</p>
                          <p><strong>Objectif:</strong> Obtenir un Master's degree en Materials Science</p>
                          <p className="text-green-300 mt-2">[Check] Première étape légale pour rester aux États-Unis</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg border border-blue-500/30">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">[Briefcase]</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-blue-400 mb-2">Phase 2: H-1B Specialty Occupation Visa (1990s-2000s)</h4>
                        <div className="space-y-2 text-slate-300">
                          <p><strong>Période:</strong> Fin 1990s - début 2000s (jusqu'à 6 ans)</p>
                          <p><strong>Employeurs:</strong> Applied Materials, McKinsey & Co.</p>
                          <p><strong>Statut:</strong> Travailleur temporaire hautement qualifié</p>
                          <p><strong>Renouvellement:</strong> Possible en 3 ans, maximum 6 ans</p>
                          <p><strong>Défi:</strong> Statut temporaire, incertitude sur l'avenir</p>
                          <p className="text-blue-300 mt-2">[Warning] Période d'incertitude: Dépendance à l'employeur pour rester aux États-Unis</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-lg border border-purple-500/30">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">🏠</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-purple-400 mb-2">Phase 3: Employment-Based Green Card (2000s)</h4>
                        <div className="space-y-2 text-slate-300">
                          <p><strong>Employeur:</strong> Google (sponsorisé après 2004)</p>
                          <p><strong>Catégories possibles:</strong> EB-2 (Advanced Degree) ou EB-3 (Skilled Worker)</p>
                          <p><strong>Processus:</strong></p>
                          <ul className="ml-4 space-y-1 mt-2">
                            <li>1. PERM Labor Certification (démontrer aucun travailleur américain qualifié)</li>
                            <li>2. I-140 Immigrant Petition</li>
                            <li>3. Adjustment of Status ou Consular Processing</li>
                          </ul>
                          <p className="text-purple-300 mt-3">[Check] Résidence permanente garantie</p>
                          <p className="text-red-300">[Warning] Délai pour ressortissants indiens: 10-15 ans (backlogs)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phase 4 */}
                  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-lg border border-yellow-500/30">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">[US]</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-yellow-400 mb-2">Phase 4: Naturalization to U.S. Citizenship (2010s)</h4>
                        <div className="space-y-2 text-slate-300">
                          <p><strong>Prérequis:</strong> 5 ans comme résident permanent</p>
                          <p><strong>Processus:</strong></p>
                          <ul className="ml-4 space-y-1 mt-2">
                            <li>• Examen civique (histoire et gouvernement américain)</li>
                            <li>• Test de maîtrise de l'anglais</li>
                            <li>• Vérification des antécédents</li>
                            <li>• Serment d'allégeance</li>
                          </ul>
                          <p><strong>Coût:</strong> $760</p>
                          <p className="text-yellow-300 mt-3">[Check] Sécurité permanente et droits complets de citoyen américain</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                    <h4 className="font-bold text-cyan-400 mb-3">Chronologie Estimée</h4>
                    <div className="space-y-2 text-slate-300">
                      <p>📅 <strong>1993:</strong> Arrive aux États-Unis avec F-1 visa pour Stanford</p>
                      <p>📅 <strong>1995:</strong> Graduation de Stanford, OPT work authorization</p>
                      <p>📅 <strong>1995-2004:</strong> H-1B visa à Applied Materials et McKinsey</p>
                      <p>📅 <strong>2004:</strong> Rejoint Google, demande de Green Card</p>
                      <p>📅 <strong>2010s:</strong> Obtient Green Card (après 10-15 ans d'attente)</p>
                      <p>📅 <strong>2010s:</strong> Devient citoyen américain</p>
                      <p className="mt-4 text-yellow-300"><strong>Total: 15-20 ans d'attente avant la sécurité permanente</strong></p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/30">
                    <p className="text-slate-200">
                      <strong className="text-cyan-400">Impact Personnel:</strong> Pendant 15-20 ans, Sundar Pichai a vécu avec l'incertitude de son statut d'immigration. Cette période a affecté les grandes décisions de sa vie - mariage, achat de maison, investissements. Malgré cela, il a continué à exceller professionnellement et à contribuer à l'innovation technologique.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Google */}
            <TabsContent value="google" className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-400">
                    <Briefcase className="w-5 h-5" />
                    La Carrière Google: De Product Manager à CEO
                  </CardTitle>
                  <CardDescription>20 ans de croissance et d'innovation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Avant Google */}
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-bold text-cyan-400 mb-3">Avant Google (1995-2004)</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-slate-200">Applied Materials (Materials Engineer)</p>
                        <p className="text-slate-400 text-sm">Travail en ingénierie des matériaux</p>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-200">McKinsey & Co. (Management Consulting)</p>
                        <p className="text-slate-400 text-sm">Conseil en gestion pour grandes entreprises</p>
                      </div>
                    </div>
                  </div>

                  {/* Google Timeline */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-cyan-400 mb-4">Timeline Google</h4>

                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-lg border border-blue-500/30">
                      <p className="font-bold text-blue-400 mb-2">2004: Rejoint Google</p>
                      <p className="text-slate-300">Commence en tant que Product Manager dans une petite équipe</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-lg border border-purple-500/30">
                      <p className="font-bold text-purple-400 mb-2">2004-2008: Google Chrome</p>
                      <p className="text-slate-300">Dirige le développement de Google Chrome, révolutionnant les navigateurs web</p>
                      <p className="text-slate-400 text-sm mt-2">Impact: Chrome devient le navigateur le plus utilisé au monde</p>
                    </div>

                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-lg border border-green-500/30">
                      <p className="font-bold text-green-400 mb-2">2008-2012: ChromeOS et Google Drive</p>
                      <p className="text-slate-300">Supervise ChromeOS et est largement responsable de Google Drive</p>
                      <p className="text-slate-400 text-sm mt-2">Impact: Introduit le cloud computing grand public</p>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 p-4 rounded-lg border border-orange-500/30">
                      <p className="font-bold text-orange-400 mb-2">2012-2015: VP Product & Chief Product Officer</p>
                      <p className="text-slate-300">Supervise Gmail, Google Maps, Android, et autres produits clés</p>
                      <p className="text-slate-400 text-sm mt-2">Rôle: Chief Product Officer nommé par Larry Page</p>
                    </div>

                    <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 p-4 rounded-lg border border-red-500/30">
                      <p className="font-bold text-red-400 mb-2">10 août 2015: Nommé CEO de Google</p>
                      <p className="text-slate-300">Larry Page et Sergey Brin le choisissent pour diriger Google</p>
                      <p className="text-slate-400 text-sm mt-2">"J'étais occupé à construire des produits. Je n'anticipais pas où cela irait." - Pichai</p>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-lg border border-cyan-500/30">
                      <p className="font-bold text-cyan-400 mb-2">24 octobre 2015: CEO d'Alphabet Inc.</p>
                      <p className="text-slate-300">Devient CEO de la holding company créée pour restructurer Google</p>
                      <p className="text-slate-400 text-sm mt-2">Responsabilité: Diriger Google et toutes ses filiales</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 p-4 rounded-lg border border-purple-500/30">
                      <p className="font-bold text-purple-400 mb-2">2019-Présent: CEO d'Alphabet Inc.</p>
                      <p className="text-slate-300">Dirige Alphabet Inc., l'une des plus grandes entreprises technologiques du monde</p>
                      <p className="text-slate-400 text-sm mt-2">Valeur nette estimée: $1.1 milliard (2023)</p>
                    </div>
                  </div>

                  {/* Produits clés */}
                  <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-bold text-cyan-400 mb-3">Produits Clés Supervisés</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-800 p-3 rounded border border-slate-700">
                        <p className="font-semibold text-slate-200">[Web] Google Chrome</p>
                        <p className="text-sm text-slate-400">Navigateur révolutionnaire</p>
                      </div>
                      <div className="bg-slate-800 p-3 rounded border border-slate-700">
                        <p className="font-semibold text-slate-200">[Floppy] Google Drive</p>
                        <p className="text-sm text-slate-400">Cloud storage grand public</p>
                      </div>
                      <div className="bg-slate-800 p-3 rounded border border-slate-700">
                        <p className="font-semibold text-slate-200">[Email] Gmail</p>
                        <p className="text-sm text-slate-400">Email révolutionnaire</p>
                      </div>
                      <div className="bg-slate-800 p-3 rounded border border-slate-700">
                        <p className="font-semibold text-slate-200">[Map] Google Maps</p>
                        <p className="text-sm text-slate-400">Cartographie mondiale</p>
                      </div>
                      <div className="bg-slate-800 p-3 rounded border border-slate-700">
                        <p className="font-semibold text-slate-200">[Phone] ChromeOS</p>
                        <p className="text-sm text-slate-400">Système d'exploitation cloud</p>
                      </div>
                      <div className="bg-slate-800 p-3 rounded border border-slate-700">
                        <p className="font-semibold text-slate-200">[Robot] Android</p>
                        <p className="text-sm text-slate-400">Système mobile dominant</p>
                      </div>
                    </div>
                  </div>

                  {/* Récompenses */}
                  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-4 rounded-lg border border-yellow-500/30">
                    <h4 className="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Récompenses et Reconnaissance
                    </h4>
                    <ul className="space-y-2 text-slate-300">
                      <li>[Trophy] <strong>Padma Bhushan</strong> - Récompense civile indienne prestigieuse</li>
                      <li>[Diploma] <strong>Siebel Scholar</strong> - Stanford</li>
                      <li>[Diploma] <strong>Palmer Scholar</strong> - Wharton</li>
                      <li>[Medal] <strong>Institut Silver Medal</strong> - IIT Kharagpur</li>
                      <li>[Money] <strong>Valeur nette:</strong> $1.1 milliard (2023)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Impact et Philosophie */}
      <section className="py-12 px-4 md:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Impact et Philosophie
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Sur l'Immigration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-900 p-4 rounded border border-slate-700">
                  <p className="text-slate-300 italic">
                    "Si vous regardez l'industrie technologique... beaucoup des plus grandes entreprises ont été fondées par des immigrants. Notre leadership en technologie vient de notre capacité à attirer les meilleurs informaticiens, chercheurs en IA."
                  </p>
                </div>
                <p className="text-slate-300">
                  Sundar Pichai plaide activement pour une immigration hautement qualifiée et a appelé le Congrès à protéger les Dreamers (jeunes immigrants sans statut légal).
                </p>
                <p className="text-slate-400 text-sm">
                  Son parcours personnel d'immigrant démontre la valeur des talents internationaux pour l'innovation technologique américaine.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Sur le Rêve Américain
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-900 p-4 rounded border border-slate-700">
                  <p className="text-slate-300 italic">
                    "Je pense toujours que c'est vrai aujourd'hui. Mais je pense que nous devons travailler dur pour nous assurer que c'est vrai."
                  </p>
                </div>
                <p className="text-slate-300">
                  Sundar Pichai est un exemple vivant du "rêve américain" - d'un enfant sans ordinateur en Inde au CEO d'une des plus grandes entreprises technologiques du monde.
                </p>
                <p className="text-slate-400 text-sm">
                  Son succès montre que l'accès à l'éducation et les opportunités peuvent transformer une vie, peu importe les origines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leçons Clés */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Leçons Clés pour les Migrants
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">Excellence Académique</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                L'excellence académique ouvre les portes. Pichai a étudié dans les meilleures universités du monde, ce qui lui a donné les compétences et le réseau pour réussir.
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">Persévérance</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                Malgré 15-20 ans d'incertitude liée au statut d'immigration, Pichai a continué à exceller professionnellement et à contribuer à l'innovation.
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-cyan-400">Opportunités</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                Les États-Unis offrent des opportunités exceptionnelles pour les talents internationaux. Pichai en a profité pour transformer sa vie et celle de millions d'utilisateurs.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Visuelle */}
      <section className="py-12 px-4 md:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Chronologie Complète
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>

            <div className="space-y-8">
              {[
                { year: "1972", event: "Naissance à Madurai, Tamil Nadu, Inde", icon: "👶" },
                { year: "1990", event: "Graduation de classe XII, préparation pour IIT", icon: "[Diploma]" },
                { year: "1990-1994", event: "B.Tech en Génie Métallurgique, IIT Kharagpur", icon: "[Trophy]" },
                { year: "1993", event: "Arrive aux États-Unis avec F-1 visa", icon: "[Plane]" },
                { year: "1995", event: "MS Stanford, Siebel Scholar", icon: "[Diploma]" },
                { year: "1995-2004", event: "H-1B visa: Applied Materials, McKinsey", icon: "[Briefcase]" },
                { year: "2004", event: "Rejoint Google, demande Green Card", icon: "[Rocket]" },
                { year: "2004-2008", event: "Dirige Google Chrome", icon: "[Web]" },
                { year: "2008-2012", event: "ChromeOS, Google Drive", icon: "[Floppy]" },
                { year: "2012-2015", event: "VP Product, Chief Product Officer", icon: "[Suit]" },
                { year: "2010s", event: "Obtient Green Card et Citoyenneté US", icon: "[US]" },
                { year: "2015", event: "Nommé CEO de Google", icon: "[Building]" },
                { year: "2019", event: "CEO d'Alphabet Inc.", icon: "[Crown]" },
                { year: "2023", event: "Valeur nette: $1.1 milliard", icon: "[Money]" },
              ].map((item, idx) => (
                <div key={idx} className={`flex gap-6 ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="w-1/2"></div>
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20"></div>
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  <div className="w-1/2">
                    <Card className="bg-slate-800 border-slate-700">
                      <CardContent className="pt-4">
                        <p className="font-bold text-cyan-400">{item.year}</p>
                        <p className="text-slate-300">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400">Conclusion: Un Exemple Inspirant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>
                L'histoire de Sundar Pichai est un exemple remarquable de ce qu'un migrant peut accomplir avec de l'éducation, de la persévérance et des opportunités. Né dans une famille de classe moyenne indienne sans accès à la technologie, il est devenu l'un des leaders technologiques les plus influents du monde.
              </p>
              <p>
                Son parcours de migration - 15-20 ans d'attente pour la sécurité permanente - illustre les défis que les immigrants hautement qualifiés doivent surmonter. Malgré cette incertitude, il a continué à innover et à contribuer à la société américaine.
              </p>
              <p>
                Aujourd'hui, en tant que CEO d'Alphabet Inc., Sundar Pichai dirige une entreprise qui emploie 182 500 personnes et génère des milliards de dollars de revenus. Son succès démontre la valeur de l'immigration pour l'innovation technologique et l'économie américaine.
              </p>
              <p className="text-cyan-300 font-semibold">
                "Le rêve américain est toujours vivant, mais nous devons travailler dur pour nous assurer qu'il l'est." - Sundar Pichai
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
