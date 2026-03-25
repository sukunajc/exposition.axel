import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MigrationRoute {
  from: { x: number; y: number; name: string };
  to: { x: number; y: number; name: string };
  migrants: number;
  type: string;
}

export default function MigrationMap() {
  const [hoveredRoute, setHoveredRoute] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Coordonnées approximatives des pays (en pourcentage de la largeur/hauteur)
  const countries = {
    mexico: { x: 20, y: 35, name: "Mexique", label: "🇲🇽" },
    usa: { x: 25, y: 30, name: "États-Unis", label: "🇺🇸" },
    syria: { x: 55, y: 35, name: "Syrie", label: "🇸🇾" },
    turkey: { x: 57, y: 32, name: "Turquie", label: "🇹🇷" },
    india: { x: 70, y: 45, name: "Inde", label: "🇮🇳" },
    uae: { x: 62, y: 40, name: "Émirats Arabes Unis", label: "🇦🇪" },
    bangladesh: { x: 75, y: 42, name: "Bangladesh", label: "🇧🇩" },
    afghanistan: { x: 65, y: 38, name: "Afghanistan", label: "🇦🇫" },
    pakistan: { x: 68, y: 40, name: "Pakistan", label: "🇵🇰" },
    poland: { x: 50, y: 25, name: "Pologne", label: "🇵🇱" },
    germany: { x: 50, y: 23, name: "Allemagne", label: "🇩🇪" },
    russia: { x: 60, y: 20, name: "Russie", label: "🇷🇺" },
    egypt: { x: 52, y: 42, name: "Égypte", label: "🇪🇬" },
    saudiarabia: { x: 60, y: 42, name: "Arabie Saoudite", label: "🇸🇦" },
    uk: { x: 47, y: 22, name: "Royaume-Uni", label: "🇬🇧" },
    australia: { x: 85, y: 65, name: "Australie", label: "🇦🇺" },
  };

  // Routes de migration avec coordonnées
  const routes: MigrationRoute[] = [
    { from: countries.mexico, to: countries.usa, migrants: 11, type: "Économique" },
    { from: countries.syria, to: countries.turkey, migrants: 4, type: "Réfugiés" },
    { from: countries.india, to: countries.uae, migrants: 3.5, type: "Travail" },
    { from: countries.india, to: countries.usa, migrants: 2.7, type: "Qualifié" },
    { from: countries.bangladesh, to: countries.india, migrants: 2.5, type: "Économique" },
    { from: countries.afghanistan, to: countries.pakistan, migrants: 2.3, type: "Réfugiés" },
    { from: countries.poland, to: countries.germany, migrants: 2, type: "UE" },
    { from: countries.russia, to: countries.germany, migrants: 1.9, type: "Regroupement" },
    { from: countries.egypt, to: countries.saudiarabia, migrants: 1.8, type: "Travail" },
    { from: countries.uk, to: countries.australia, migrants: 1.7, type: "Qualifié" },
  ];

  const typeColors: { [key: string]: string } = {
    "Économique": "#06b6d4",
    "Réfugiés": "#ef4444",
    "Travail": "#f97316",
    "Qualifié": "#8b5cf6",
    "UE": "#10b981",
    "Regroupement": "#ec4899",
  };

  const filteredRoutes = selectedType 
    ? routes.filter(r => r.type === selectedType)
    : routes;

  const types = Array.from(new Set(routes.map(r => r.type)));

  return (
    <Card className="bg-slate-800 border-slate-700 w-full">
      <CardHeader>
        <CardTitle className="text-cyan-400">Carte Interactive des Routes de Migration</CardTitle>
        <CardDescription>Cliquez sur les types de migration pour filtrer</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Filtres */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedType(null)}
            className={`px-3 py-1 rounded-full text-sm transition-all ${
              selectedType === null
                ? "bg-cyan-500 text-black"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            Tous les types ({routes.length})
          </button>
          {types.map((type: string) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                selectedType === type
                  ? "text-black"
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
              style={{
                backgroundColor: selectedType === type ? typeColors[type] : undefined,
              }}
            >
              {type} ({routes.filter(r => r.type === type).length})
            </button>
          ))}
        </div>

        {/* Carte SVG */}
        <div className="bg-gradient-to-b from-blue-900/30 to-slate-900 rounded-lg p-4 overflow-auto">
          <svg
            viewBox="0 0 100 70"
            className="w-full h-auto min-h-96 bg-gradient-to-b from-blue-950 to-slate-950 rounded"
            style={{ aspectRatio: "100/70" }}
          >
            {/* Grille de fond */}
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#334155" strokeWidth="0.1" opacity="0.2" />
              </pattern>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#06b6d4" />
              </marker>
            </defs>

            {/* Fond avec grille */}
            <rect width="100" height="70" fill="url(#grid)" />

            {/* Routes de migration */}
            {filteredRoutes.map((route, idx) => (
              <g key={idx}>
                {/* Ligne de migration */}
                <line
                  x1={route.from.x}
                  y1={route.from.y}
                  x2={route.to.x}
                  y2={route.to.y}
                  stroke={typeColors[route.type]}
                  strokeWidth={Math.max(0.3, route.migrants / 10)}
                  opacity={hoveredRoute === idx ? 1 : 0.6}
                  className="transition-all cursor-pointer hover:opacity-100"
                  onMouseEnter={() => setHoveredRoute(idx)}
                  onMouseLeave={() => setHoveredRoute(null)}
                  markerEnd="url(#arrowhead)"
                />

                {/* Zone interactive */}
                <line
                  x1={route.from.x}
                  y1={route.from.y}
                  x2={route.to.x}
                  y2={route.to.y}
                  stroke="transparent"
                  strokeWidth="2"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredRoute(idx)}
                  onMouseLeave={() => setHoveredRoute(null)}
                />
              </g>
            ))}

            {/* Pays d'origine (cercles rouges) */}
            {Object.values(countries).map((country, idx) => {
              const isOrigin = filteredRoutes.some(r => r.from === country);
              if (!isOrigin) return null;
              return (
                <g key={`origin-${idx}`}>
                  <circle
                    cx={country.x}
                    cy={country.y}
                    r="1.2"
                    fill="#ef4444"
                    opacity="0.8"
                    className="transition-all"
                  />
                  <circle
                    cx={country.x}
                    cy={country.y}
                    r="1.2"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="0.3"
                    opacity="0.5"
                  />
                </g>
              );
            })}

            {/* Pays de destination (cercles verts) */}
            {Object.values(countries).map((country, idx) => {
              const isDestination = filteredRoutes.some(r => r.to === country);
              if (!isDestination) return null;
              return (
                <g key={`dest-${idx}`}>
                  <circle
                    cx={country.x}
                    cy={country.y}
                    r="1.2"
                    fill="#10b981"
                    opacity="0.8"
                    className="transition-all"
                  />
                  <circle
                    cx={country.x}
                    cy={country.y}
                    r="1.2"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="0.3"
                    opacity="0.5"
                  />
                </g>
              );
            })}

            {/* Étiquettes des pays */}
            {Object.values(countries).map((country, idx) => (
              <text
                key={`label-${idx}`}
                x={country.x}
                y={country.y - 2}
                textAnchor="middle"
                className="text-xs fill-slate-300 font-bold pointer-events-none"
                fontSize="0.8"
              >
                {country.label}
              </text>
            ))}
          </svg>
        </div>

        {/* Légende */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span className="text-sm font-bold text-slate-300">Pays d'origine</span>
            </div>
            <p className="text-xs text-slate-400">Pays d'où partent les migrants</p>
          </div>

          <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-sm font-bold text-slate-300">Destination</span>
            </div>
            <p className="text-xs text-slate-400">Pays d'accueil des migrants</p>
          </div>

          <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-0.5 w-4 bg-cyan-400"></div>
              <span className="text-sm font-bold text-slate-300">Flux</span>
            </div>
            <p className="text-xs text-slate-400">Épaisseur = nombre de migrants</p>
          </div>

          {Object.entries(typeColors).map(([type, color]: [string, string]) => (
            <div key={type} className="bg-slate-900 p-3 rounded-lg border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
                <span className="text-sm font-bold text-slate-300">{type}</span>
              </div>
              <p className="text-xs text-slate-400">
                {routes.filter(r => r.type === type).length} corridor(s)
              </p>
            </div>
          ))}
        </div>

        {/* Liste détaillée des routes */}
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
          <h4 className="font-bold text-cyan-400 mb-4">Routes affichées ({filteredRoutes.length})</h4>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {filteredRoutes.map((route, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2 bg-slate-800 rounded hover:bg-slate-700 transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredRoute(idx)}
                onMouseLeave={() => setHoveredRoute(null)}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: typeColors[route.type] }}
                  ></div>
                  <span className="text-sm text-slate-300">
                    {route.from.name} → {route.to.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-cyan-400">{route.migrants}M</span>
                  <Badge variant="outline" className="text-xs">{route.type}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Informations */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/30">
          <p className="text-slate-200 text-sm">
            <strong className="text-cyan-400">[Info] Conseil :</strong> Survolez les routes pour les mettre en évidence. Cliquez sur les filtres pour voir uniquement certains types de migration. L'épaisseur des lignes représente le nombre de migrants.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
