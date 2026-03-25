import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  example?: string;
  relatedTerms?: string[];
}

export default function Glossaire() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const glossaryTerms: GlossaryTerm[] = [
    // Concepts fondamentaux
    {
      term: "Migration",
      definition: "Déplacement de personnes d'un pays à un autre pour s'y établir de façon permanente ou temporaire.",
      category: "Concepts fondamentaux",
      example: "La migration du Mexique vers les États-Unis est l'un des plus grands corridors migratoires.",
      relatedTerms: ["Émigration", "Immigration", "Migrant"],
    },
    {
      term: "Émigration",
      definition: "Acte de quitter son pays d'origine pour s'établir dans un autre pays.",
      category: "Concepts fondamentaux",
      example: "L'émigration des Indiens vers les États-Unis pour des emplois technologiques.",
      relatedTerms: ["Migration", "Immigration"],
    },
    {
      term: "Immigration",
      definition: "Entrée et établissement dans un pays d'étrangers qui quittent leur pays d'origine.",
      category: "Concepts fondamentaux",
      example: "L'immigration en Allemagne a augmenté de 30% en 2015.",
      relatedTerms: ["Migration", "Émigration"],
    },
    {
      term: "Migrant",
      definition: "Personne qui se déplace d'un pays à un autre pour des raisons économiques, familiales, politiques ou autres.",
      category: "Concepts fondamentaux",
      example: "Les migrants économiques représentent 45% des migrations mondiales.",
      relatedTerms: ["Réfugié", "Demandeur d'asile"],
    },
    {
      term: "Diaspora",
      definition: "Communauté de personnes originaires d'un même pays dispersées dans d'autres pays.",
      category: "Concepts fondamentaux",
      example: "La diaspora indienne aux États-Unis compte plus de 4 millions de personnes.",
      relatedTerms: ["Communauté", "Réseau migratoire"],
    },

    // Types de migration
    {
      term: "Migration économique",
      definition: "Déplacement motivé par la recherche de meilleures opportunités économiques et d'emploi.",
      category: "Types de migration",
      example: "Les travailleurs bangladais qui se rendent en Inde pour des emplois mieux rémunérés.",
      relatedTerms: ["Migration de travail", "Travailleur migrant"],
    },
    {
      term: "Migration de travail",
      definition: "Déplacement de personnes pour exercer une activité professionnelle dans un autre pays.",
      category: "Types de migration",
      example: "Les travailleurs indiens en Arabie Saoudite dans le secteur pétrolier.",
      relatedTerms: ["Migration économique", "Travailleur qualifié"],
    },
    {
      term: "Migration forcée",
      definition: "Déplacement involontaire de personnes fuyant la persécution, les conflits ou les catastrophes.",
      category: "Types de migration",
      example: "Les réfugiés syriens fuyant la guerre civile.",
      relatedTerms: ["Réfugié", "Déplacé interne"],
    },
    {
      term: "Migration climatique",
      definition: "Déplacement causé par les changements climatiques et les catastrophes naturelles.",
      category: "Types de migration",
      example: "Les populations du Sahel fuyant la désertification.",
      relatedTerms: ["Réfugié climatique", "Changement climatique"],
    },
    {
      term: "Migration familiale",
      definition: "Regroupement de membres de la famille dans un même pays.",
      category: "Types de migration",
      example: "Les épouses qui rejoignent leurs maris déjà établis à l'étranger.",
      relatedTerms: ["Regroupement familial", "Chaîne migratoire"],
    },
    {
      term: "Migration circulaire",
      definition: "Mouvement répété entre deux ou plusieurs pays, sans installation permanente.",
      category: "Types de migration",
      example: "Les travailleurs saisonniers qui retournent chez eux chaque année.",
      relatedTerms: ["Migration temporaire", "Travailleur saisonnier"],
    },
    {
      term: "Migration éducative",
      definition: "Déplacement pour poursuivre des études supérieures dans un autre pays.",
      category: "Types de migration",
      example: "Les étudiants indiens qui étudient aux États-Unis.",
      relatedTerms: ["Étudiant international", "Mobilité académique"],
    },

    // Statuts et catégories
    {
      term: "Réfugié",
      definition: "Personne qui a fui son pays en raison de persécution, guerre ou violence et bénéficie d'une protection internationale.",
      category: "Statuts et catégories",
      example: "Les réfugiés syriens en Turquie sont au nombre de 4 millions.",
      relatedTerms: ["Demandeur d'asile", "Asile", "Protection"],
    },
    {
      term: "Demandeur d'asile",
      definition: "Personne qui demande une protection internationale mais dont le statut de réfugié n'a pas encore été reconnu.",
      category: "Statuts et catégories",
      example: "Les demandeurs d'asile afghans en Europe attendent leur décision.",
      relatedTerms: ["Réfugié", "Asile"],
    },
    {
      term: "Asile",
      definition: "Protection accordée par un État à une personne qui fuit la persécution dans son pays d'origine.",
      category: "Statuts et catégories",
      example: "La demande d'asile en Allemagne a augmenté en 2015.",
      relatedTerms: ["Réfugié", "Protection internationale"],
    },
    {
      term: "Travailleur migrant",
      definition: "Personne qui se déplace pour exercer un emploi dans un autre pays, généralement temporairement.",
      category: "Statuts et catégories",
      example: "Les travailleurs migrants représentent 5% de la population mondiale.",
      relatedTerms: ["Migration de travail", "Travailleur qualifié"],
    },
    {
      term: "Travailleur qualifié",
      definition: "Personne ayant des compétences professionnelles élevées qui se déplace pour des emplois spécialisés.",
      category: "Statuts et catégories",
      example: "Les ingénieurs indiens sont des travailleurs qualifiés très recherchés.",
      relatedTerms: ["Migration de travail", "Brain drain"],
    },
    {
      term: "Déplacé interne",
      definition: "Personne qui a quitté son lieu de résidence mais reste dans son pays.",
      category: "Statuts et catégories",
      example: "Les déplacés internes en Syrie suite à la guerre civile.",
      relatedTerms: ["Déplacement forcé", "Migration interne"],
    },
    {
      term: "Migrant sans papiers",
      definition: "Personne qui réside dans un pays sans autorisation légale ou documents requis.",
      category: "Statuts et catégories",
      example: "Les migrants sans papiers aux États-Unis.",
      relatedTerms: ["Immigration clandestine", "Statut légal"],
    },

    // Facteurs et causes
    {
      term: "Facteurs 'Push' (Répulsion)",
      definition: "Conditions qui poussent les gens à quitter leur pays (pauvreté, conflits, persécution).",
      category: "Facteurs et causes",
      example: "La pauvreté et le chômage sont les principaux facteurs push.",
      relatedTerms: ["Facteurs pull", "Causes de migration"],
    },
    {
      term: "Facteurs 'Pull' (Attraction)",
      definition: "Conditions qui attirent les migrants dans un pays (opportunités, stabilité, services).",
      category: "Facteurs et causes",
      example: "Les opportunités économiques et la stabilité politique sont des facteurs pull.",
      relatedTerms: ["Facteurs push", "Causes de migration"],
    },
    {
      term: "Brain drain (Fuite des cerveaux)",
      definition: "Émigration de personnes hautement qualifiées vers des pays plus développés.",
      category: "Facteurs et causes",
      example: "Le brain drain de l'Inde vers les États-Unis dans le secteur technologique.",
      relatedTerms: ["Travailleur qualifié", "Fuite des talents"],
    },
    {
      term: "Changement climatique",
      definition: "Modifications du climat global causant des catastrophes naturelles et des migrations.",
      category: "Facteurs et causes",
      example: "La sécheresse au Sahel force les populations à migrer.",
      relatedTerms: ["Migration climatique", "Réfugié climatique"],
    },
    {
      term: "Conflit armé",
      definition: "Guerre ou violence qui force les populations à fuir leur pays.",
      category: "Facteurs et causes",
      example: "La guerre en Syrie a créé 6 millions de réfugiés.",
      relatedTerms: ["Migration forcée", "Réfugié"],
    },
    {
      term: "Persécution",
      definition: "Traitement injuste et hostile envers une personne en raison de son identité ou ses croyances.",
      category: "Facteurs et causes",
      example: "La persécution religieuse force les minorités à migrer.",
      relatedTerms: ["Réfugié", "Asile"],
    },

    // Politiques et régulations
    {
      term: "Visa",
      definition: "Document autorisant une personne à entrer, séjourner ou travailler dans un pays.",
      category: "Politiques et régulations",
      example: "Le visa de travail H-1B aux États-Unis.",
      relatedTerms: ["Autorisation de séjour", "Statut légal"],
    },
    {
      term: "Autorisation de séjour",
      definition: "Permission officielle de rester dans un pays pour une période déterminée.",
      category: "Politiques et régulations",
      example: "L'autorisation de séjour temporaire en France.",
      relatedTerms: ["Visa", "Permis de résidence"],
    },
    {
      term: "Permis de résidence",
      definition: "Document permettant à une personne de vivre légalement dans un pays.",
      category: "Politiques et régulations",
      example: "Le permis de résidence permanent en Allemagne.",
      relatedTerms: ["Autorisation de séjour", "Citoyenneté"],
    },
    {
      term: "Citoyenneté",
      definition: "Statut juridique d'une personne appartenant à un État avec droits et devoirs.",
      category: "Politiques et régulations",
      example: "L'obtention de la citoyenneté américaine après 5 ans de résidence.",
      relatedTerms: ["Nationalité", "Naturalisatio"],
    },
    {
      term: "Naturalisation",
      definition: "Processus d'acquisition de la citoyenneté d'un pays par une personne née ailleurs.",
      category: "Politiques et régulations",
      example: "La naturalisation en France après 5 ans de résidence.",
      relatedTerms: ["Citoyenneté", "Nationalité"],
    },
    {
      term: "Quota migratoire",
      definition: "Limite du nombre de migrants autorisés à entrer dans un pays.",
      category: "Politiques et régulations",
      example: "Les quotas d'immigration aux États-Unis.",
      relatedTerms: ["Politique d'immigration", "Contrôle des frontières"],
    },
    {
      term: "Politique d'immigration",
      definition: "Ensemble de lois et règlements régissant l'entrée et le séjour des étrangers.",
      category: "Politiques et régulations",
      example: "La politique d'immigration restrictive de certains pays.",
      relatedTerms: ["Quota migratoire", "Régulation"],
    },
    {
      term: "Regroupement familial",
      definition: "Politique permettant aux migrants de faire venir leur famille.",
      category: "Politiques et régulations",
      example: "Le regroupement familial en France.",
      relatedTerms: ["Migration familiale", "Politique d'immigration"],
    },

    // Impacts et conséquences
    {
      term: "Remises",
      definition: "Argent envoyé par les migrants à leur famille dans le pays d'origine.",
      category: "Impacts et conséquences",
      example: "Les remises des migrants indiens représentent 100 milliards de dollars par an.",
      relatedTerms: ["Économie migratoire", "Transfert de fonds"],
    },
    {
      term: "Intégration",
      definition: "Processus d'adaptation des migrants à la société d'accueil.",
      category: "Impacts et conséquences",
      example: "L'intégration des migrants en Allemagne.",
      relatedTerms: ["Assimilation", "Cohésion sociale"],
    },
    {
      term: "Assimilation",
      definition: "Adoption complète de la culture et de l'identité du pays d'accueil.",
      category: "Impacts et conséquences",
      example: "L'assimilation des migrants aux États-Unis.",
      relatedTerms: ["Intégration", "Culture"],
    },
    {
      term: "Discrimination",
      definition: "Traitement injuste basé sur l'origine, la race, la religion ou d'autres caractéristiques.",
      category: "Impacts et conséquences",
      example: "La discrimination envers les migrants dans l'accès à l'emploi.",
      relatedTerms: ["Inégalité", "Droits humains"],
    },
    {
      term: "Xénophobie",
      definition: "Hostilité ou peur envers les étrangers et les migrants.",
      category: "Impacts et conséquences",
      example: "La montée de la xénophobie en Europe.",
      relatedTerms: ["Discrimination", "Préjugé"],
    },
    {
      term: "Transfert de compétences",
      definition: "Partage de connaissances et d'expertise entre migrants et sociétés d'accueil.",
      category: "Impacts et conséquences",
      example: "Le transfert de compétences technologiques par les migrants indiens.",
      relatedTerms: ["Innovation", "Développement"],
    },
    {
      term: "Diversité culturelle",
      definition: "Coexistence de différentes cultures dans une même société.",
      category: "Impacts et conséquences",
      example: "La diversité culturelle enrichit les sociétés d'accueil.",
      relatedTerms: ["Multiculturalisme", "Intégration"],
    },

    // Organisations et institutions
    {
      term: "OIM (Organisation Internationale pour les Migrations)",
      definition: "Agence des Nations Unies chargée de gérer les questions migratoires.",
      category: "Organisations et institutions",
      example: "L'OIM publie le Rapport Mondial sur les Migrations.",
      relatedTerms: ["HCR", "Nations Unies"],
    },
    {
      term: "HCR (Haut Commissariat des Nations Unies pour les Réfugiés)",
      definition: "Agence de l'ONU qui protège et assiste les réfugiés.",
      category: "Organisations et institutions",
      example: "Le HCR aide les réfugiés syriens.",
      relatedTerms: ["OIM", "Nations Unies"],
    },
    {
      term: "Convention de Genève",
      definition: "Traité international définissant les droits et protections des réfugiés.",
      category: "Organisations et institutions",
      example: "La Convention de Genève de 1951.",
      relatedTerms: ["Droit international", "Protection"],
    },
    {
      term: "Protocole de New York",
      definition: "Traité étendant la Convention de Genève à tous les réfugiés.",
      category: "Organisations et institutions",
      example: "Le Protocole de New York de 1967.",
      relatedTerms: ["Convention de Genève", "Droit international"],
    },

    // Termes spécifiques
    {
      term: "Corridor migratoire",
      definition: "Route principale de migration entre deux pays ou régions.",
      category: "Termes spécifiques",
      example: "Le corridor Mexique-États-Unis est le plus important.",
      relatedTerms: ["Route migratoire", "Flux migratoire"],
    },
    {
      term: "Flux migratoire",
      definition: "Mouvement de migrants d'un endroit à un autre.",
      category: "Termes spécifiques",
      example: "Le flux migratoire du Sud vers le Nord.",
      relatedTerms: ["Corridor migratoire", "Migration"],
    },
    {
      term: "Réseau migratoire",
      definition: "Connexions sociales et économiques facilitant la migration.",
      category: "Termes spécifiques",
      example: "Les réseaux migratoires indiens aux États-Unis.",
      relatedTerms: ["Chaîne migratoire", "Diaspora"],
    },
    {
      term: "Chaîne migratoire",
      definition: "Processus où les migrants facilitent l'arrivée d'autres migrants.",
      category: "Termes spécifiques",
      example: "La chaîne migratoire des Mexicains aux États-Unis.",
      relatedTerms: ["Réseau migratoire", "Effet de réseau"],
    },
    {
      term: "Traite des êtres humains",
      definition: "Exploitation de personnes par la force, la fraude ou la coercition.",
      category: "Termes spécifiques",
      example: "La traite des êtres humains est un crime grave.",
      relatedTerms: ["Exploitation", "Droits humains"],
    },
    {
      term: "Contrebande de migrants",
      definition: "Transport clandestin de migrants moyennant rémunération.",
      category: "Termes spécifiques",
      example: "La contrebande de migrants en Méditerranée.",
      relatedTerms: ["Traite", "Immigration clandestine"],
    },
  ];

  const categories = Array.from(new Set(glossaryTerms.map((t) => t.category)));

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-4">
            <span className="text-cyan-400 text-sm font-bold">[Books] GLOSSAIRE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Glossaire complet des migrations
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explorez plus de 50 termes essentiels pour comprendre les migrations mondiales
          </p>
        </div>

        {/* Recherche */}
        <div className="mb-8 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-slate-500" />
          <Input
            placeholder="Rechercher un terme..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-500"
          />
        </div>

        {/* Filtres par catégorie */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              selectedCategory === null
                ? "bg-cyan-500 text-black font-bold"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            Tous ({glossaryTerms.length})
          </button>
          {categories.map((category) => {
            const count = glossaryTerms.filter((t) => t.category === category).length;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-cyan-500 text-black font-bold"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>

        {/* Termes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTerms.map((term, idx) => (
            <Card key={idx} className="bg-slate-800 border-slate-700 hover:border-cyan-500/50 transition-all">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-cyan-400">{term.term}</CardTitle>
                  <Badge variant="outline" className="text-xs flex-shrink-0">
                    {term.category.split(" ")[0]}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-slate-300 text-sm">{term.definition}</p>

                {term.example && (
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                    <p className="text-xs text-slate-400 font-bold mb-1">Exemple :</p>
                    <p className="text-xs text-slate-300 italic">{term.example}</p>
                  </div>
                )}

                {term.relatedTerms && term.relatedTerms.length > 0 && (
                  <div>
                    <p className="text-xs text-slate-400 font-bold mb-2">Termes connexes :</p>
                    <div className="flex flex-wrap gap-1">
                      {term.relatedTerms.map((relatedTerm, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs bg-slate-700 text-slate-300 cursor-pointer hover:bg-slate-600"
                          onClick={() => setSearchTerm(relatedTerm)}
                        >
                          {relatedTerm}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400">Aucun terme ne correspond à votre recherche.</p>
          </div>
        )}

        {/* Statistiques */}
        <div className="mt-12 grid grid-cols-3 gap-4">
          <Card className="bg-slate-800 border-slate-700 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-cyan-400">{glossaryTerms.length}</div>
              <p className="text-slate-400 text-sm">Termes définis</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-400">{categories.length}</div>
              <p className="text-slate-400 text-sm">Catégories</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700 text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-400">{glossaryTerms.filter(t => t.example).length}</div>
              <p className="text-slate-400 text-sm">Avec exemples</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
