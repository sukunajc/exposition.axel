import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, TrendingUp, Users, DollarSign, AlertTriangle } from "lucide-react";

interface GameState {
  year: number;
  budget: number;
  migrants: number;
  publicSatisfaction: number;
  economicGrowth: number;
  securityLevel: number;
  events: string[];
}

export default function MigrationTycoon() {
  const [gameState, setGameState] = useState<GameState>({
    year: 2024,
    budget: 100,
    migrants: 50,
    publicSatisfaction: 60,
    economicGrowth: 50,
    securityLevel: 70,
    events: ["Jeu commencé ! Gérez les flux migratoires."],
  });

  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const policies = [
    {
      name: "Augmenter l'accueil",
      cost: 20,
      effects: {
        migrants: 30,
        publicSatisfaction: -15,
        economicGrowth: 10,
        securityLevel: -10,
      },
      description: "Ouvrir les frontières pour plus de migrants",
    },
    {
      name: "Renforcer la sécurité",
      cost: 30,
      effects: {
        migrants: -20,
        publicSatisfaction: 20,
        economicGrowth: -5,
        securityLevel: 25,
      },
      description: "Augmenter les contrôles aux frontières",
    },
    {
      name: "Programmes d'intégration",
      cost: 25,
      effects: {
        migrants: 5,
        publicSatisfaction: 15,
        economicGrowth: 20,
        securityLevel: 10,
      },
      description: "Investir dans l'intégration des migrants",
    },
    {
      name: "Opportunités économiques",
      cost: 35,
      effects: {
        migrants: 15,
        publicSatisfaction: 10,
        economicGrowth: 30,
        securityLevel: 5,
      },
      description: "Créer des emplois pour attirer les talents",
    },
    {
      name: "Aide humanitaire",
      cost: 20,
      effects: {
        migrants: 25,
        publicSatisfaction: -5,
        economicGrowth: 0,
        securityLevel: -5,
      },
      description: "Accueillir les réfugiés",
    },
    {
      name: "Restrictions strictes",
      cost: 15,
      effects: {
        migrants: -40,
        publicSatisfaction: 25,
        economicGrowth: -15,
        securityLevel: 30,
      },
      description: "Politique très restrictive",
    },
  ];

  const randomEvents = [
    { text: "Crise économique dans un pays voisin !", effect: { migrants: 40, publicSatisfaction: -20 } },
    { text: "Conflit armé - afflux de réfugiés", effect: { migrants: 50, securityLevel: -15 } },
    { text: "Boom économique - plus d'opportunités", effect: { economicGrowth: 20, migrants: 20 } },
    { text: "Élections - débat sur l'immigration", effect: { publicSatisfaction: -30 } },
    { text: "Découverte de talents migrants - innovation", effect: { economicGrowth: 15 } },
    { text: "Incident de sécurité - tension sociale", effect: { publicSatisfaction: -25, securityLevel: -20 } },
  ];

  const applyPolicy = (policy: typeof policies[0]) => {
    if (gameState.budget < policy.cost) {
      addEvent("Budget insuffisant !");
      return;
    }

    const newState = { ...gameState };
    newState.budget -= policy.cost;

    Object.entries(policy.effects).forEach(([key, value]) => {
      if (key !== 'events' && key in newState) {
        const numValue = value as number;
        const currentValue = newState[key as keyof Omit<GameState, 'events'>] as number;
        newState[key as keyof Omit<GameState, 'events'>] = Math.max(0, Math.min(100, currentValue + numValue));
      }
    });

    addEvent(`Politique appliquée: ${policy.name}`);
    setGameState(newState);
    checkGameStatus(newState);
  };

  const addEvent = (event: string) => {
    setGameState((prev) => ({
      ...prev,
      events: [event, ...prev.events.slice(0, 4)],
    }));
  };

  const nextYear = () => {
    const newState = { ...gameState };
    newState.year += 1;

    // Événement aléatoire
    if (Math.random() > 0.6) {
      const randomEvent = randomEvents[Math.floor(Math.random() * randomEvents.length)];
      addEvent(`[News] ${randomEvent.text}`);

      Object.entries(randomEvent.effect).forEach(([key, value]) => {
        if (key !== 'events' && key in newState) {
          const numValue = value as number;
          const currentValue = newState[key as keyof Omit<GameState, 'events'>] as number;
          newState[key as keyof Omit<GameState, 'events'>] = Math.max(0, Math.min(100, currentValue + numValue));
        }
      });
    }

    // Récupération du budget
    newState.budget = Math.min(100, newState.budget + 15);

    // Calcul du score
    const newScore = Math.round(
      (newState.publicSatisfaction * 0.3 +
        newState.economicGrowth * 0.3 +
        newState.securityLevel * 0.2 +
        (newState.migrants > 0 ? 20 : 0)) *
        (newState.year - 2023)
    );
    setScore(newScore);

    setGameState(newState);
    checkGameStatus(newState);
  };

  const checkGameStatus = (state: GameState) => {
    if (state.publicSatisfaction <= 0 || state.securityLevel <= 0 || state.year >= 2034) {
      setGameOver(true);
      setGameActive(false);
    }
  };

  const startGame = () => {
    setGameActive(true);
    setGameOver(false);
    setScore(0);
    setGameState({
      year: 2024,
      budget: 100,
      migrants: 50,
      publicSatisfaction: 60,
      economicGrowth: 50,
      securityLevel: 70,
      events: ["Jeu commencé ! Gérez les flux migratoires."],
    });
  };

  const resetGame = () => {
    setGameActive(false);
    setGameOver(false);
    setScore(0);
    setGameState({
      year: 2024,
      budget: 100,
      migrants: 50,
      publicSatisfaction: 60,
      economicGrowth: 50,
      securityLevel: 70,
      events: ["Jeu réinitialisé."],
    });
  };

  const getStatusColor = (value: number) => {
    if (value >= 70) return "text-green-400";
    if (value >= 40) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <Card className="bg-slate-800 border-slate-700 w-full">
      <CardHeader>
        <CardTitle className="text-cyan-400">[Game] Migration Tycoon</CardTitle>
        <CardDescription>Gérez les flux migratoires et trouvez l'équilibre parfait</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!gameActive && !gameOver && (
          <div className="text-center space-y-4">
            <p className="text-slate-300">
              Devenez ministre de l'immigration ! Prenez des décisions politiques et gérez les conséquences.
            </p>
            <Button
              onClick={startGame}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold"
              size="lg"
            >
              Commencer le jeu
            </Button>
          </div>
        )}

        {gameActive && (
          <div className="space-y-6">
            {/* Barre de statut */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                <div className="text-sm text-slate-400">Année</div>
                <div className="text-2xl font-bold text-cyan-400">{gameState.year}</div>
              </div>

              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                <div className="text-sm text-slate-400">Budget</div>
                <div className="text-2xl font-bold text-green-400">{gameState.budget}M€</div>
              </div>

              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                <div className="text-sm text-slate-400">Score</div>
                <div className="text-2xl font-bold text-purple-400">{score}</div>
              </div>

              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                <div className="text-sm text-slate-400">Migrants</div>
                <div className={`text-2xl font-bold ${getStatusColor(gameState.migrants)}`}>
                  {gameState.migrants}M
                </div>
              </div>

              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                <div className="text-sm text-slate-400">Satisfaction</div>
                <div className={`text-2xl font-bold ${getStatusColor(gameState.publicSatisfaction)}`}>
                  {gameState.publicSatisfaction}%
                </div>
              </div>

              <div className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                <div className="text-sm text-slate-400">Sécurité</div>
                <div className={`text-2xl font-bold ${getStatusColor(gameState.securityLevel)}`}>
                  {gameState.securityLevel}%
                </div>
              </div>
            </div>

            {/* Indicateurs de progression */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">Croissance économique</span>
                  <span className="text-slate-400">{gameState.economicGrowth}%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2 border border-slate-700">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${gameState.economicGrowth}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Événements */}
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
              <h4 className="font-bold text-cyan-400 mb-3">[News] Événements récents</h4>
              <div className="space-y-2">
                {gameState.events.map((event, idx) => (
                  <div key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>{event}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Politiques disponibles */}
            <div className="space-y-3">
              <h4 className="font-bold text-cyan-400">Politiques disponibles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {policies.map((policy, idx) => (
                  <button
                    key={idx}
                    onClick={() => applyPolicy(policy)}
                    disabled={gameState.budget < policy.cost}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      gameState.budget < policy.cost
                        ? "bg-slate-900 border-slate-700 opacity-50 cursor-not-allowed"
                        : "bg-slate-900 border-slate-600 hover:border-cyan-500 hover:bg-slate-800"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-slate-200">{policy.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {policy.cost}M€
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-400">{policy.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex gap-3">
              <Button
                onClick={nextYear}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold"
              >
                Année suivante →
              </Button>
              <Button
                onClick={resetGame}
                variant="outline"
                className="border-slate-600 text-slate-300"
              >
                Réinitialiser
              </Button>
            </div>
          </div>
        )}

        {gameOver && (
          <div className="text-center space-y-4 bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6 rounded-lg border border-red-500/30">
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto" />
            <h3 className="text-xl font-bold text-red-400">Jeu terminé !</h3>
            <p className="text-slate-300">
              {gameState.publicSatisfaction <= 0
                ? "La satisfaction publique a chuté - vous avez perdu les élections !"
                : gameState.securityLevel <= 0
                ? "La sécurité s'est effondrée - crise politique !"
                : "Vous avez atteint la fin du mandat (2034)"}
            </p>
            <div className="text-3xl font-bold text-purple-400">Score final: {score}</div>
            <Button
              onClick={startGame}
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold"
            >
              Rejouer
            </Button>
          </div>
        )}

        {/* Conseils */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/30">
          <p className="text-slate-200 text-sm">
            <strong className="text-cyan-400">[Info] Conseil :</strong> Équilibrez l'accueil des migrants, la satisfaction publique et la sécurité. Chaque politique a des conséquences !
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
