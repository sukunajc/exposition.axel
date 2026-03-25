import React, { createContext, useContext, useState, useEffect } from "react";

interface CheatCodeContextType {
  unlockedFeatures: Set<string>;
  isFeatureUnlocked: (feature: string) => boolean;
  unlockFeature: (feature: string) => void;
  lockFeature: (feature: string) => void;
  enterCheatCode: (code: string) => boolean;
}

const CheatCodeContext = createContext<CheatCodeContextType | undefined>(undefined);

const VALID_CHEAT_CODES: Record<string, string[] | null> = {
  "MIGRATIONS2024": ["migration-tycoon", "expert-corridors"],
  "CATERINO": ["migration-tycoon", "expert-corridors"],
  "4E4EXPOSED": ["migration-tycoon", "expert-corridors"],
  "YLANE5": ["ylane-cobaye"],
  "VIERGE": null, // Rebloque tout
};

export function CheatCodeProvider({ children }: { children: React.ReactNode }) {
  const [unlockedFeatures, setUnlockedFeatures] = useState<Set<string>>(new Set());

  // Charger les features déverrouillées depuis localStorage au montage
  useEffect(() => {
    const stored = localStorage.getItem("unlockedFeatures");
    if (stored) {
      try {
        const features = JSON.parse(stored);
        setUnlockedFeatures(new Set(features));
      } catch (e) {
        console.error("Erreur lors du chargement des features déverrouillées", e);
      }
    }
  }, []);

  // Sauvegarder les features déverrouillées dans localStorage
  useEffect(() => {
    localStorage.setItem("unlockedFeatures", JSON.stringify(Array.from(unlockedFeatures)));
  }, [unlockedFeatures]);

  const isFeatureUnlocked = (feature: string) => {
    return unlockedFeatures.has(feature);
  };

  const unlockFeature = (feature: string) => {
    setUnlockedFeatures(prev => new Set([...Array.from(prev), feature]));
  };

  const lockFeature = (feature: string) => {
    setUnlockedFeatures(prev => {
      const newSet = new Set(prev);
      newSet.delete(feature);
      return newSet;
    });
  };

  const enterCheatCode = (code: string): boolean => {
    const upperCode = code.toUpperCase().trim();
    
    if (upperCode in VALID_CHEAT_CODES) {
      const features = VALID_CHEAT_CODES[upperCode];
      
      // Si le code est "VIERGE", rebloque tout
      if (features === null) {
        setUnlockedFeatures(new Set());
        return true;
      }
      
      // Sinon, déverrouille les features
      features.forEach(feature => unlockFeature(feature));
      return true;
    }
    
    return false;
  };

  const value: CheatCodeContextType = {
    unlockedFeatures,
    isFeatureUnlocked,
    unlockFeature,
    lockFeature,
    enterCheatCode
  };

  return (
    <CheatCodeContext.Provider value={value}>
      {children}
    </CheatCodeContext.Provider>
  );
}

export function useCheatCode() {
  const context = useContext(CheatCodeContext);
  if (!context) {
    throw new Error("useCheatCode must be used within CheatCodeProvider");
  }
  return context;
}
