import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MigrationRoute {
  from: { lat: number; lng: number; name: string };
  to: { lat: number; lng: number; name: string };
  migrants: number;
  type: string;
}

export default function InteractiveMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const [hoveredRoute, setHoveredRoute] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Coordonnées géographiques réelles des pays
  const countries = {
    mexico: { lat: 23.6345, lng: -102.5528, name: "Mexique" },
    usa: { lat: 37.0902, lng: -95.7129, name: "États-Unis" },
    syria: { lat: 34.8021, lng: 38.9968, name: "Syrie" },
    turkey: { lat: 38.9637, lng: 35.2433, name: "Turquie" },
    india: { lat: 20.5937, lng: 78.9629, name: "Inde" },
    uae: { lat: 23.4241, lng: 53.8478, name: "Émirats Arabes Unis" },
    bangladesh: { lat: 23.6850, lng: 90.3563, name: "Bangladesh" },
    afghanistan: { lat: 33.9391, lng: 67.3099, name: "Afghanistan" },
    pakistan: { lat: 30.3753, lng: 69.3451, name: "Pakistan" },
    poland: { lat: 51.9194, lng: 19.1451, name: "Pologne" },
    germany: { lat: 51.1657, lng: 10.4515, name: "Allemagne" },
    russia: { lat: 61.5240, lng: 105.3188, name: "Russie" },
    egypt: { lat: 26.8206, lng: 30.8025, name: "Égypte" },
    saudiarabia: { lat: 23.8859, lng: 45.0792, name: "Arabie Saoudite" },
    uk: { lat: 55.3781, lng: -3.4360, name: "Royaume-Uni" },
    australia: { lat: -25.2744, lng: 133.7751, name: "Australie" },
  };

  // Routes de migration avec coordonnées réelles
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

  // Initialiser la carte
  useEffect(() => {
    if (!mapContainer.current) return;

    // Créer la carte
    map.current = L.map(mapContainer.current).setView([20, 0], 2);

    // Ajouter le tileset OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Ajouter les marqueurs pour les pays
    Object.values(countries).forEach((country) => {
      const isOrigin = routes.some(r => r.from === country);
      const isDestination = routes.some(r => r.to === country);

      let color = '#94a3b8'; // Gris par défaut
      if (isOrigin && isDestination) {
        color = '#f59e0b'; // Orange si les deux
      } else if (isOrigin) {
        color = '#ef4444'; // Rouge pour origine
      } else if (isDestination) {
        color = '#10b981'; // Vert pour destination
      }

      const circleMarker = L.circleMarker([country.lat, country.lng], {
        radius: 8,
        fillColor: color,
        color: '#fff',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8,
      }).addTo(map.current!);

      circleMarker.bindPopup(`<strong>${country.name}</strong>`);
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Mettre à jour les routes affichées
  useEffect(() => {
    if (!map.current) return;

    // Supprimer les polylines existantes
    map.current.eachLayer((layer) => {
      if (layer instanceof L.Polyline && !(layer instanceof L.Polygon)) {
        map.current!.removeLayer(layer);
      }
    });

    // Ajouter les nouvelles routes
    filteredRoutes.forEach((route, idx) => {
      const weight = Math.max(1, route.migrants / 5);
      const polyline = L.polyline(
        [[route.from.lat, route.from.lng], [route.to.lat, route.to.lng]],
        {
          color: typeColors[route.type],
          weight: weight,
          opacity: hoveredRoute === idx ? 1 : 0.6,
          dashArray: route.type === "Réfugiés" ? "5, 5" : undefined,
        }
      ).addTo(map.current!);

      const popup = `
        <div style="font-size: 12px;">
          <strong>${route.from.name} → ${route.to.name}</strong><br/>
          <span style="color: ${typeColors[route.type]};">●</span> ${route.type}<br/>
          <strong>${route.migrants}M migrants</strong>
        </div>
      `;

      polyline.bindPopup(popup);

      // Ajouter des événements de survol
      polyline.on('mouseover', () => setHoveredRoute(idx));
      polyline.on('mouseout', () => setHoveredRoute(null));
    });
  }, [filteredRoutes, hoveredRoute]);

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

        {/* Carte Leaflet */}
        <div
          ref={mapContainer}
          className="w-full h-96 rounded-lg border border-slate-700 z-10"
          style={{ minHeight: "500px" }}
        />

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
              <div className="w-4 h-4 rounded-full bg-amber-500"></div>
              <span className="text-sm font-bold text-slate-300">Bi-directionnel</span>
            </div>
            <p className="text-xs text-slate-400">Pays d'origine ET destination</p>
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
            <strong className="text-cyan-400">[Info] Conseil :</strong> Cliquez sur les routes pour voir les détails. Utilisez les filtres pour voir uniquement certains types de migration. L'épaisseur des lignes représente le nombre de migrants.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
